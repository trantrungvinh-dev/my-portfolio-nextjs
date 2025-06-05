"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import { Calendar, MapPin, Users, Trophy, Code, Zap, Target, Award, Star, Briefcase } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const experiences = [
    {
      company: "Vietnam Blockchain Corporation",
      role: "Frontend Developer",
      period: "May 2024 – Present",
      team: "10 members",
      color: "from-blue-500 to-cyan-500",
      icon: "🚀",
      achievements: [
        "Led frontend development from scratch for electronic opinion-collection system",
        "Built responsive UIs with ReactJS/Next.js and TypeScript",
        "Integrated PDF manipulation features with react-pdf-highlighter-extended",
        "Developed drag-and-drop capabilities using react-draggable",
        "Managed secure authentication using JWT, VNPT SSO, and Firebase OTP",
        "Released cross-platform mobile app using React Native and EAS",
      ],
    },
    {
      company: "Gia An Digital Healthcare",
      role: "Full-Stack Developer",
      period: "Jul 2023 - May 2024",
      team: "9 members",
      color: "from-purple-500 to-pink-500",
      icon: "🏥",
      achievements: [
        "Contributed to Gia An and CIH international Hospital production system",
        "Reduced document processing time by 40% through UX optimization",
        "Platform serves over 1,000 daily users province-wide",
        "Utilized Angular v16, Tailwind CSS, and TypeScript",
        "Developed APIs with C#, ASP.Net Core, Entity Framework Core",
      ],
    },
    {
      company: "Alpaca Vietnam",
      role: "Frontend Developer",
      period: "Jan 2022 - Jun 2023",
      team: "10 members",
      color: "from-green-500 to-blue-500",
      icon: "💻",
      achievements: [
        "Developed frontend features using ReactJS and Next.js",
        "Integrated RESTful APIs following Swagger documentation",
        "Reduced data entry time by ~30% through custom form components",
        "Reduced frontend bug reports by 30% through proactive testing",
        "Improved initial load time by 25% using dynamic import",
      ],
    },
  ]

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: "25+",
      color: "text-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      icon: Users,
      label: "Team Members Led",
      value: "5+",
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      icon: Zap,
      label: "Performance Boost",
      value: "40%",
      color: "text-green-500",
      bg: "bg-green-100 dark:bg-green-900/20",
    },
    {
      icon: Target,
      label: "Client Satisfaction",
      value: "100%",
      color: "text-orange-500",
      bg: "bg-orange-100 dark:bg-orange-900/20",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.h2
              className="text-4xl lg:text-6xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent"
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
                About Me
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              A passionate developer with a strong foundation in modern web technologies and a proven track record of
              delivering high-quality solutions that make a real impact on businesses and users worldwide.
            </motion.p>
          </motion.div>

          {/* Enhanced Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Enhanced Personal Info Card */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div variants={cardHoverVariants} whileHover="hover">
                <Card className="h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative overflow-hidden"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        TV
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Tran Trung Vinh</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">Senior Frontend Developer</p>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { icon: MapPin, text: "Ho Chi Minh City, Vietnam", color: "text-blue-600" },
                        { icon: Calendar, text: "4+ Years Experience", color: "text-purple-600" },
                        { icon: Users, text: "Team Leadership", color: "text-green-600" },
                        { icon: Briefcase, text: "Available for Hire", color: "text-orange-600" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </motion.div>
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">Education</h4>
                      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <p className="font-medium">Bachelor of Software Engineering</p>
                        <p>Industrial University of Ho Chi Minh City</p>
                        <p className="text-blue-600 dark:text-blue-400">2018 - 2022</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Enhanced Key Achievements */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div variants={cardHoverVariants} whileHover="hover">
                <Card className="h-full bg-gradient-to-br from-purple-50 via-pink-50 to-red-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-red-900/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg"
                      >
                        <Trophy className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Key Achievements</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5, rotateY: 10 }}
                          className={`text-center p-4 rounded-xl ${stat.bg} border border-white/20 backdrop-blur-sm`}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className={`${stat.color} mb-3`}
                          >
                            <stat.icon className="w-8 h-8 mx-auto" />
                          </motion.div>
                          <motion.div
                            className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-1"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span>Recent Highlights</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          "Reduced document processing time by 40%",
                          "Platform serves 1,000+ daily users",
                          "Led frontend architecture for blockchain system",
                          "Mentored junior developers and conducted code reviews",
                        ].map((highlight, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300"
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                            />
                            <span className="text-sm text-slate-600 dark:text-slate-400">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Enhanced Skills Preview */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div variants={cardHoverVariants} whileHover="hover">
                <Card className="h-full bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100 dark:from-green-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg"
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Top Skills</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { name: "React.js", level: "Expert", color: "bg-blue-500", percentage: 95 },
                        { name: "Next.js", level: "Advanced", color: "bg-purple-500", percentage: 90 },
                        { name: "TypeScript", level: "Advanced", color: "bg-green-500", percentage: 85 },
                        { name: "Tailwind CSS", level: "Expert", color: "bg-pink-500", percentage: 92 },
                      ].map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="space-y-2 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}
                            </Badge>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`h-2 rounded-full ${skill.color} relative overflow-hidden`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                              transition={{ duration: 1.5, delay: index * 0.2 }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/30"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.05, y: -2 }} className="text-center pt-4">
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 cursor-pointer">
                        View All Skills →
                      </Badge>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-center">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5, rotateY: 2 }}
                  className="relative"
                >
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <motion.div
                      className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color}`}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: "100%" } : { height: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                    <CardContent className="p-6 ml-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="text-2xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                          >
                            {exp.icon}
                          </motion.div>
                          <div>
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{exp.role}</h4>
                            <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-1 mt-2 lg:mt-0">
                          <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 px-4 py-1`}>
                            {exp.period}
                          </Badge>
                          <span className="text-sm text-slate-500 flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{exp.team}</span>
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300"
                          >
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: achIndex * 0.2 }}
                            />
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
