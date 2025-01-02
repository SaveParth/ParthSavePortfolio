"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: isOpen ? 250 : 60 }}
      className="bg-gray-800 text-white h-screen sticky top-0"
    >
      <motion.div
        className="p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '☰'}
      </motion.div>
      <ul className="mt-8">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            className={`py-2 px-4 ${pathname === item.path ? 'bg-blue-600' : ''}`}
            whileHover={{ scale: 1.05, originX: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.path} className="block">
              {isOpen ? item.name : item.name[0]}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

