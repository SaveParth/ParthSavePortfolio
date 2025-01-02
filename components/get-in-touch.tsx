"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function GetInTouch() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'An unexpected error occurred')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setErrorMessage('Network error. Please try again later.')
    }
  }

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-24 bg-gray-900 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center text-blue-300">Get in Touch</motion.h2>
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <Phone className="w-6 h-6 mr-4 text-green-400" />
              <p className="text-lg text-gray-300">8767648117</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <Mail className="w-6 h-6 mr-4 text-blue-400" />
              <a href="mailto:parthsave24242@gmail.com" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
                parthsave24242@gmail.com
              </a>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-red-400" />
              <p className="text-lg text-gray-300">Mumbai</p>
            </motion.div>
          </div>
          <motion.form 
            variants={itemVariants} 
            className="md:w-1/2 space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Send className="w-5 h-5 mr-2" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">{errorMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

