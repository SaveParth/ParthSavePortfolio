"use client"

import { motion } from 'framer-motion'

const skills = [
  { name: "Data Analysis", level: 90 },
  { name: "Data Visualization", level: 85 },
  { name: "Business Analytics", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "Problem-solving", level: 95 },
  { name: "Multitasking", level: 85 },
  { name: "Time Management", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Leadership", level: 85 }
]

const toolsAndTechnologies = [
  "Microsoft Excel",
  "Power BI",
  "Google Colab",
  "Amazon Web Services",
  "Python",
  "SQL",
  "Tableau",
  "TensorFlow",
  "Scikit-learn"
]

export default function Skills() {
  return (
    <section className="py-24 bg-gray-800 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-pink-300">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-24 h-24 mb-2">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-700 stroke-current"
                    strokeWidth="10"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <motion.circle
                    className="text-blue-600 stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: skill.level / 100 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-blue-300">
                  {skill.level}%
                </div>
              </div>
              <span className="text-center font-semibold text-sm text-blue-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-8 text-center text-orange-300">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {toolsAndTechnologies.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-700 px-4 py-2 rounded-full text-sm text-blue-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

