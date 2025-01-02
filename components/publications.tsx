"use client"

import { motion } from 'framer-motion'

const publications = [
  {
    title: "PERFORMANCE MEASURES OF THE DIFFERENT ALGORITHMS IN GYM MANAGEMENT SYSTEM",
    conference: "IC-ICN MULTICON 2024",
    date: "Feb 2024"
  }
]

export default function Publications() {
  return (
    <section className="py-24 bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-300">Publications</h2>
        {publications.map((publication, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-gray-700 p-6 rounded-lg shadow-md max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{publication.title}</h3>
            <p className="text-gray-300 mb-2">{publication.conference}</p>
            <p className="text-sm text-green-300">{publication.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

