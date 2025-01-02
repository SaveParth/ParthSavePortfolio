"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const domains = ["Business Analyst", "Data Scientist", "Data Analyst", "ML Engineer"]

export default function Hero() {
  const [currentDomain, setCurrentDomain] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDomain((prev) => (prev + 1) % domains.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-blue-300"
        >
          Parth Save
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl mb-4 text-blue-200 h-8"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentDomain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {domains[currentDomain]}
            </motion.span>
          </AnimatePresence>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg mb-8 max-w-2xl mx-auto text-gray-300"
        >
          Leveraging AI and ML skills to derive actionable insights for enhancing decision-making processes and driving business value.
        </motion.p>
        <div className="flex flex-col items-center space-y-4">
          <motion.a
            href="/Parth_Save_Resume.pdf"
            download="Parth_Save_Resume.pdf"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-colors duration-300 hover:bg-red-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={scrollToContact}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold inline-block transition-colors duration-300 hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </div>
    </section>
  )
}

