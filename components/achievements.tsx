"use client"

import { motion } from 'framer-motion'

const achievements = [
  {
    title: "Selected for the podium round at the 19th Aavishkar Research Convention (Zonal Round)",
    description: "Organized by the University of Mumbai (2024-25) for presenting the research project 'Robut 2.0 for Security and Surveillance' in the Pure Sciences category at the UG level.",
    date: "Aug 2016"
  },
  {
    title: "Academic Achievement Award",
    description: "Awarded With The 1st Price for Best Speaker in The District in The Category of Under 19 Boys Speech Competition",
    date: "July 2016"
  }
]

export default function Achievements() {
  return (
    <section className="py-24 bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-300">Achievements</h2>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 bg-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{achievement.title}</h3>
            <p className="text-gray-300 mb-2">{achievement.description}</p>
            <p className="text-sm text-green-300">{achievement.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

