"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Database, Smartphone, GitBranch, Users, Zap, Star, LucideIcon } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
  interface Skill {
    name: string;
    level: string;
    experience: string;
    projects?: number;
  }
  


  const skillCategories: {
    title: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    skills: Skill[];
  }[] = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      skills: [
        { name: "React.js", level: "Expert", experience: "4+ years", projects: 15 },
        { name: "Next.js", level: "Advanced", experience: "3+ years", projects: 8 },
        { name: "TypeScript", level: "Advanced", experience: "3+ years", projects: 12 },
        { name: "JavaScript", level: "Expert", experience: "4+ years", projects: 20 },
        { name: "HTML/CSS", level: "Expert", experience: "4+ years", projects: 25 },
        { name: "Tailwind CSS", level: "Advanced", experience: "3+ years", projects: 10 },
      ],
    },
    {
      title: "UI/UX Libraries",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      skills: [
        { name: "Shadcn UI", level: "Advanced", experience: "2+ years", projects: 6 },
        { name: "Radix UI", level: "Advanced", experience: "2+ years", projects: 5 },
        { name: "Material UI", level: "Intermediate", experience: "2+ years", projects: 4 },
        { name: "Bootstrap", level: "Advanced", experience: "3+ years", projects: 8 },
        { name: "Framer Motion", level: "Intermediate", experience: "2+ years", projects: 6 },
      ],
    },
    {
      title: "State Management",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      skills: [
        { name: "Redux", level: "Advanced", experience: "3+ years", projects: 7 },
        { name: "Zustand", level: "Advanced", experience: "2+ years", projects: 5 },
        { name: "Context API", level: "Expert", experience: "4+ years", projects: 12 },
        { name: "React Query", level: "Intermediate", experience: "1+ years", projects: 3 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      skills: [
        { name: "React Native", level: "Advanced", experience: "2+ years", projects: 4 },
        { name: "EAS", level: "Intermediate", experience: "1+ years", projects: 2 },
        { name: "Flutter", level: "Intermediate", experience: "1+ years", projects: 2 },
      ],
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      skills: [
        { name: "Git", level: "Expert", experience: "4+ years", projects: 30 },
        { name: "GitHub", level: "Advanced", experience: "4+ years", projects: 25 },
        { name: "GitLab", level: "Advanced", experience: "3+ years", projects: 15 },
        { name: "Jira", level: "Advanced", experience: "3+ years", projects: 10 },
        { name: "CI/CD", level: "Intermediate", experience: "2+ years", projects: 8 },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      skills: [
        { name: "Team Leadership", level: "Advanced", experience: "3+ years" },
        { name: "Communication", level: "Expert", experience: "4+ years" },
        { name: "Problem Solving", level: "Expert", experience: "4+ years" },
        { name: "Code Review", level: "Advanced", experience: "3+ years" },
        { name: "Mentoring", level: "Intermediate", experience: "2+ years" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300"
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  const getLevelStars = (level: string) => {
    switch (level) {
      case "Expert":
        return 5
      case "Advanced":
        return 4
      case "Intermediate":
        return 3
      default:
        return 2
    }
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-900"
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
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              A comprehensive overview of my technical skills and professional competencies developed through years of
              hands-on experience and continuous learning.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setActiveCategory(null)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all font-medium ${
                activeCategory === null
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              All Skills
            </motion.button>
            {skillCategories.map((category) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(activeCategory === category.title ? null : category.title)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all font-medium ${
                  activeCategory === category.title
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories
              .filter((category) => activeCategory === null || category.title === activeCategory)
              .map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card
                    className={`h-full bg-gradient-to-br ${category.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <category.icon className="w-6 h-6" />
                        </motion.div>
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-lg">{category.title}</h3>
                      </div>

                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="group/skill p-3 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                              <Badge className={`${getLevelColor(skill.level)} border text-xs`}>{skill.level}</Badge>
                            </div>

                            <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                              <span>{skill.experience}</span>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, starIndex) => (
                                  <motion.div
                                    key={starIndex}
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Star
                                      className={`w-3 h-3 ${
                                        starIndex < getLevelStars(skill.level)
                                          ? "text-yellow-400 fill-current"
                                          : "text-slate-300 dark:text-slate-600"
                                      }`}
                                    />
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {skill?.projects && (
  <div className="mt-2">
    <Badge variant="outline" className="text-xs bg-white/50 dark:bg-slate-700/50">
      🛠️ {skill?.projects} {skill?.projects === 1 ? "Project" : "Projects"}
    </Badge>
  </div>
)}

                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Tech Stack Highlights */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Primary Tech Stack</h3>

            <div className="flex flex-wrap justify-center gap-4">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Zustand", "React Native", "Git"].map(
                (tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden"
                  >
                    <Badge className="px-6 py-3 text-sm bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-0 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                      {tech}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </Badge>
                  </motion.div>
                ),
              )}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Badge className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base">
                <Zap className="w-4 h-4 mr-2" />
                Always Learning & Growing
              </Badge>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
