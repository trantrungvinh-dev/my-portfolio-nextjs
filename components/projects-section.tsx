"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Smartphone, Globe, Database, Code } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [, setHoveredProject] = useState<string | null>(null)

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

  const projects = [
    {
      id: "blockchain-docs",
      title: "Blockchain Document Management",
      description:
        "Electronic opinion-collection system using Blockchain technology for Hau Giang & Ho Chi Minh City. Features PDF manipulation, QR codes, annotations, and secure authentication.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Blockchain", "JWT"],
      type: "Web Application",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      achievements: ["1,000+ daily users", "40% faster processing", "Province-wide deployment"],
      stats: { users: "1,000+", performance: "40% faster", impact: "2 provinces" },
      links: { demo: "#", github: "#" },
    },
    {
      id: "hospital-system",
      title: "Hospital Management System",
      description:
        "Comprehensive healthcare platform including EMR, ERP, HRM, and HIS modules. Built with Angular and .NET Core for Gia An Digital Healthcare.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "TypeScript", "C#", "ASP.NET Core", "MS SQL", "DevExpress"],
      type: "Enterprise System",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      achievements: ["9-member team", "Production deployment", "Multi-module system"],
      stats: { users: "500+", performance: "99.9% uptime", impact: "Healthcare" },
      links: { demo: "#", github: "#" },
    },
    {
      id: "mobile-app",
      title: "Cross-Platform Mobile App",
      description:
        "React Native application with EAS deployment, optimized for Android. Features secure authentication and real-time data synchronization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "EAS", "Firebase", "TypeScript", "Redux"],
      type: "Mobile Application",
      icon: Smartphone,
      color: "from-green-500 to-blue-500",
      achievements: ["Cross-platform", "EAS deployment", "Real-time sync"],
      stats: { users: "300+", performance: "4.8★ rating", impact: "iOS & Android" },
      links: { demo: "#", github: "#" },
    },
    {
      id: "component-library",
      title: "Component Library",
      description:
        "Modular component library with performance optimizations including lazy loading and memoization. Built for scalability and reusability.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "TypeScript", "Storybook", "Rollup", "Jest"],
      type: "Library",
      icon: Code,
      color: "from-orange-500 to-red-500",
      achievements: ["Modular design", "Performance optimized", "Comprehensive docs"],
      stats: { users: "50+ devs", performance: "25% faster", impact: "10+ projects" },
      links: { demo: "#", github: "#" },
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Web Application":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300"
      case "Mobile Application":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300"
      case "Library":
        return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300"
      case "Enterprise System":
        return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
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
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              A showcase of my recent work, demonstrating expertise in modern web technologies and problem-solving
              skills that deliver real business value.
            </motion.p>
          </motion.div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute bottom-4 left-4 right-4 space-y-3">
                        <div className="flex space-x-2">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Button>
                          </motion.div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-white text-xs">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center bg-white/10 rounded p-2 backdrop-blur-sm">
                              <div className="font-bold">{value}</div>
                              <div className="opacity-80 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Project Type Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getTypeColor(project.type)} border`}>
                        <project.icon className="w-3 h-3 mr-1" />
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <motion.h3
                        className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Key Achievements:</h4>
                        <div className="space-y-1">
                          {project.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              whileHover={{ x: 5, scale: 1.02 }}
                              className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`}></div>
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Project
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                          <Github className="w-3 h-3 mr-2" />
                          Source
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden inline-block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
