"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, Code, Coffee, Star } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Mail, href: "mailto:hello.trungvinh@gmail.com", label: "Email", color: "hover:text-red-500" },
  ]

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Tran Trung Vinh
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating exceptional digital experiences with modern web technologies
              and clean, efficient code that makes a real impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 ${color} shadow-lg hover:shadow-xl`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="block text-slate-400 hover:text-white transition-colors text-sm hover:text-blue-400"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello.trungvinh@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <span>📱</span>
                <span>(+84) 33 793 4563</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <span>📍</span>
                <span>Ho Chi Minh City, Vietnam</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-2 text-green-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <span>🟢</span>
                <span>Available for freelance work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <span>© {currentYear} Tran Trung Vinh. Made with</span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Coffee className="w-4 h-4 text-yellow-600 mx-1" />
            </motion.div>
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-1">
              <Code className="w-4 h-4" />
              <span>Designed & Built by Tran Trung Vinh</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
