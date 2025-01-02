"use client"

import { motion } from 'framer-motion'

const categories = [
  'About',
  'Experience',
  'Projects',
  'Publications',
  'Skills',
  'Achievements',
  'Contact'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

interface CategoryButtonsProps {
  onCategoryClick: (category: string) => void
}

export default function CategoryButtons({ onCategoryClick }: CategoryButtonsProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 my-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}

