"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-24 bg-gray-800 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center text-blue-300">About Me</motion.h2>
        <div className="max-w-4xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <motion.div variants={itemVariants} className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-blue-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parth%20Save-8Ih04Rt37hGKyOiFzkfGJqeJt6fU3j.jpeg"
                alt="Parth Save"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <div>
            <motion.p variants={itemVariants} className="text-lg mb-6 text-gray-300">
              I'm a multi-faceted professional with expertise in Business Analysis, Data Science, Data Analysis, and Machine Learning Engineering. Currently pursuing my Bachelor of Technology in AI and ML at St. John College of Engineering and Management, I'm passionate about leveraging technology to drive business value.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-8 text-gray-300">
              My goal is to use my diverse skill set to derive actionable insights that enhance decision-making processes and create measurable impact for businesses across various domains.
            </motion.p>
          </div>
        </div>
        <motion.h3 variants={itemVariants} className="text-2xl font-bold mt-12 mb-6 text-center text-green-300">Education</motion.h3>
        <motion.ul variants={containerVariants} className="space-y-8">
          <motion.li variants={itemVariants} className="bg-gray-600 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-500">
            <span className="font-semibold text-lg text-blue-300">St. John College of Engineering and Management (SJCEM)</span>
            <br />
            <span className="text-gray-300">Bachelor of Technology in Artificial Intelligence and Machine Learning</span>
            <br />
            <span className="text-sm text-gray-400">Dec 2021 – Jul 2025 | CGPA: 7.00</span>
          </motion.li>
          <motion.li variants={itemVariants} className="bg-gray-600 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-500">
            <span className="font-semibold text-lg text-blue-300">M. K. Junior College Chinchani</span>
            <br />
            <span className="text-gray-300">Higher Secondary Certificate</span>
            <br />
            <span className="text-sm text-gray-400">Aug 2019 – Feb 2021 | Percentage: 77.50%</span>
          </motion.li>
          <motion.li variants={itemVariants} className="bg-gray-600 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-gray-500">
            <span className="font-semibold text-lg text-blue-300">R. H. Save Vidyalaya Tarapur</span>
            <br />
            <span className="text-gray-300">Secondary School Certificate</span>
            <br />
            <span className="text-sm text-gray-400">Jun 2013 – Mar 2019 | Percentage: 82.50%</span>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  )
}

