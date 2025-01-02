"use client"

import { motion } from 'framer-motion'

const certifications = [
  { title: "Decisions, Decisions: Dashboards and Reports", issuer: "Microsoft", date: "Aug 2024 - Sep 2024" },
  { title: "Data Analysis and Visualization with Power BI", issuer: "Microsoft", date: "Aug 2024 - Sep 2024" },
  { title: "AI for Medical Prognosis", issuer: "Coursera", date: "Aug 2024 - Aug 2024" },
  { title: "Google AI Essentials", issuer: "Microsoft", date: "Aug 2024 - Aug 2024" },
  { title: "Career Essentials in Data Analysis", issuer: "Microsoft and LinkedIn", date: "Aug 2024 - Aug 2024" },
  { title: "Python For Data Science", issuer: "Cognitive Class AI by IBM", date: "Aug 2024 - Aug 2024" },
  { title: "AI for Medical Diagnosis", issuer: "Coursera", date: "Jul 2024 - Aug 2024" },
  { title: "Introduction To Cloud", issuer: "Cognitive Class AI by IBM", date: "Dec 2023 - Dec 2023" },
  { title: "Business Analysis & Process management", issuer: "Coursera", date: "Nov 2023 - Dec 2023" },
  { title: "Stock Market Advance Trading", issuer: "Research In And Out", date: "May 2023 - May 2023" }
]

export default function Certifications() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

