"use client"

import { motion } from 'framer-motion'

const projects = [
  {
    title: "Predictive Analytics and Insights Generation on Multi-Domain Datasets",
    date: "Dec 2024 – Dec 2024",
    description: "Analyzed Constructional, Solar Power Generation, Diabetical, Real Estate and Retail Price datasets using ML algorithms to derive actionable insights.",
    technologies: "Machine Learning, Data Analysis"
  },
  {
    title: "Environmental Sound Classification for Wildlife Monitoring",
    date: "May 2024 - Jun 2024",
    description: "Successfully completed a machine learning project for identifying and classifying different wildlife species through their audios.",
    technologies: "Python, Machine Learning, Audio Processing"
  },
  {
    title: "Gym Management System",
    date: "Jul 2023 – Apr 2024",
    description: "Successfully completed an Outhouse project called Gym Management System, improving record-keeping and enhancing user experience.",
    technologies: "Web Development"
  },
  {
    title: "Ambulance Locator",
    date: "Jan 2023 – Apr 2023",
    description: "Successfully completed an IoT-based Ambulance Locator project to save victims' lives by quickly reaching them using IoT sensors.",
    technologies: "Web Development, IoT"
  }
]

export default function Projects() {
  return (
    <section className="py-24 bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{project.date}</p>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <p className="text-sm font-semibold text-green-300">Technologies: {project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

