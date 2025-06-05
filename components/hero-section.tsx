"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Download, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Dynamic Background with Mouse Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 25%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)`,
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-yellow-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-sm"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Status Badge */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative px-6 py-3 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <div className="relative flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    <span>Available for hire</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Tran Trung
                </motion.span>
                <br />
                <motion.span
                  className="text-slate-800 dark:text-slate-200"
                  whileHover={{
                    textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                    scale: 1.05,
                  }}
                >
                  Vinh
                </motion.span>
              </motion.h1>

              {/* Animated Subtitle */}
              <div className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 h-8 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    2000,
                    "React.js Specialist",
                    2000,
                    "Next.js Expert",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                    "Problem Solver",
                    2000,
                    "Innovation Creator",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="font-medium relative z-10"
                />
              </div>

              {/* Quick Info Cards */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg border border-blue-200/50 dark:border-blue-700/50"
                >
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">4+ Years</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg border border-purple-200/50 dark:border-purple-700/50"
                >
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Ho Chi Minh City</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Passionate Frontend Developer with 4+ years of experience creating exceptional digital experiences.
              Specialized in React.js, Next.js, and modern web technologies with a focus on performance and user
              experience that drives business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 relative px-8 py-6 text-base font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-300 hover:bg-blue-50 dark:border-blue-600 dark:hover:bg-blue-900/20 transition-all duration-300 px-8 py-6 text-base font-semibold backdrop-blur-sm bg-white/50 dark:bg-slate-800/50"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-6">
              {[
                {
                  icon: Github,
                  href: "#",
                  label: "GitHub",
                  color: "hover:text-gray-600",
                  bg: "hover:bg-gray-100 dark:hover:bg-gray-800",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:text-blue-600",
                  bg: "hover:bg-blue-100 dark:hover:bg-blue-900",
                },
                {
                  icon: Mail,
                  href: "mailto:hello.trungvinh@gmail.com",
                  label: "Email",
                  color: "hover:text-red-500",
                  bg: "hover:bg-red-100 dark:hover:bg-red-900",
                },
              ].map(({ icon: Icon, href, label, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 text-slate-600 dark:text-slate-400 ${color} ${bg} border border-slate-200/50 dark:border-slate-700/50`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background Rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-blue-400/30"></div>
              </motion.div>
              <motion.div
                className="absolute inset-4 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-purple-400/40"></div>
              </motion.div>

              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Tran Trung Vinh"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>

                {/* Overlay Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>

              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold">4+</div>
                  <div className="text-xs">Years</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-lg">⚡</div>
                  <div className="text-xs">Fast</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  x: [0, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2 }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center space-y-3 text-slate-500 dark:text-slate-400"
          >
            <span className="text-sm font-medium">Scroll to explore my journey</span>
            <motion.div
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-200/50 dark:border-slate-700/50"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
