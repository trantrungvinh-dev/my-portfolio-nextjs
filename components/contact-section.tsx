"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Clock, CheckCircle, Heart } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello.trungvinh@gmail.com",
      href: "mailto:hello.trungvinh@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+84) 33 793 4563",
      href: "tel:+84337934563",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello.trungvinh@gmail.com",
      color: "hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-pink-50 to-red-50 dark:from-slate-900 dark:to-slate-800"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-gradient-to-r from-pink-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Ready to bring your ideas to life? I&apos;m always excited to discuss new opportunities and collaborate on
              innovative projects that make a difference.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <MessageCircle className="w-6 h-6 text-pink-600" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Get In Touch</h3>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.href}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-r ${info.color} text-white`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="w-5 h-5" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{info.label}</p>
                          <p className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Clock className="w-5 h-5 text-slate-500" />
                      </motion.div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Available for freelance work</span>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <Heart className="w-3 h-3 mr-1 fill-current" />
                          Open
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Name *
                        </label>
                        <Input
                          required
                          placeholder="Your full name"
                          className="border-slate-300 dark:border-slate-600 focus:border-pink-500 dark:focus:border-pink-400 transition-colors hover:border-pink-300 dark:hover:border-pink-500"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="border-slate-300 dark:border-slate-600 focus:border-pink-500 dark:focus:border-pink-400 transition-colors hover:border-pink-300 dark:hover:border-pink-500"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        placeholder="Project discussion, job opportunity, etc."
                        className="border-slate-300 dark:border-slate-600 focus:border-pink-500 dark:focus:border-pink-400 transition-colors hover:border-pink-300 dark:hover:border-pink-500"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={6}
                        placeholder="Tell me about your project, requirements, timeline, and any other details..."
                        className="border-slate-300 dark:border-slate-600 focus:border-pink-500 dark:focus:border-pink-400 transition-colors resize-none hover:border-pink-300 dark:hover:border-pink-500"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative overflow-hidden"
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </Button>
                    </motion.div>

                    <motion.p
                      className="text-sm text-slate-500 dark:text-slate-400 text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      I&apos;ll get back to you within 24 hours. Looking forward to hearing from you! 🚀
                    </motion.p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
