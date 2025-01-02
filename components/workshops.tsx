"use client"

import { motion } from 'framer-motion'

const workshops = [
  {
    title: "Data Analysis and Visualization Using Artificial Intelligence",
    organizer: "CodeClause PVT LTD",
    date: "Sept 2023"
  },
  {
    title: "Amazon Web Service India Summit",
    organizer: "Amazon Web Service",
    date: "Jul 2023"
  }
]

export default function Workshops() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Workshops</h2>
      <div className="space-y-6">
        {workshops.map((workshop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{workshop.organizer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{workshop.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

