"use client"

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Data Analysis and Machine Learning",
    company: "Testriq QA Lab",
    date: "Dec 2024 – Dec 2024",
    description: "Analyzed various datasets using ML algorithms to derive actionable insights."
  },
  {
    title: "Prompt Engineering",
    company: "Excelr",
    date: "Dec 2024 – Dec 2024",
    description: "Developed and optimized prompts for various AI applications."
  },
  {
    title: "Business Analyst Virtual Internship",
    company: "Celonis",
    date: "Jul 2024 – Sept 2024",
    description: "Participated in a virtual internship program focused on business analysis and process management."
  },
  {
    title: "AI-ML Virtual Internship",
    company: "India Edu Program and Google for Developers",
    date: "Feb 2023 – Apr 2023",
    description: "Participated in a virtual internship program focused on AI and ML technologies."
  }
]

export default function Experience() {
  return (
    <section className="py-24 bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-purple-300">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-green-300">{exp.title}</h4>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
              <p className="text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

