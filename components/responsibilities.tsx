"use client"

import { motion } from 'framer-motion'

const responsibilities = [
  {
    title: "Documentation Team Lead",
    organization: "ASCAI",
    date: "Jul 2024 - Mar 2025",
    description: "Currently leading the Documentation team in ASCAI."
  },
  {
    title: "E-Club Member",
    organization: "E-Club",
    date: "Jul 2024 - Mar 2025",
    description: "Active member of the E-Club."
  },
  {
    title: "Outhouse Project Team Lead",
    organization: "Gym Management System Project",
    date: "Jul 2023 - Mar 2024",
    description: "Led a team of 5 members as Head for Outhouse Project."
  }
]

export default function Responsibilities() {
  return (
    <section className="py-24 bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-purple-300">Responsibilities</h2>
        <div className="space-y-8">
          {responsibilities.map((resp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-green-300">{resp.title}</h4>
              <p className="text-gray-300">{resp.organization}</p>
              <p className="text-sm text-gray-400 mb-2">{resp.date}</p>
              <p className="text-gray-200">{resp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

