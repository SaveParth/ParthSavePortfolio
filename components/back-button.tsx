"use client"

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function BackButton() {
  const router = useRouter()

  return (
    <motion.button
      onClick={() => router.push('/')}
      className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      ← Back to Home
    </motion.button>
  )
}

