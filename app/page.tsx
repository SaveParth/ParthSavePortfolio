"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/hero'
import CategoryButtons from '@/components/category-buttons'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Publications from '@/components/publications'
import Skills from '@/components/skills'
import Achievements from '@/components/achievements'
import GetInTouch from '@/components/get-in-touch'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const publicationsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="flex flex-col items-center"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Hero />
      <CategoryButtons
        onCategoryClick={(category) => {
          switch (category) {
            case 'About':
              scrollToSection(aboutRef)
              break
            case 'Experience':
              scrollToSection(experienceRef)
              break
            case 'Projects':
              scrollToSection(projectsRef)
              break
            case 'Publications':
              scrollToSection(publicationsRef)
              break
            case 'Skills':
              scrollToSection(skillsRef)
              break
            case 'Achievements':
              scrollToSection(achievementsRef)
              break
            case 'Contact':
              scrollToSection(contactRef)
              break
          }
        }}
      />
      <div className="w-full">
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={publicationsRef}>
          <Publications />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={achievementsRef}>
          <Achievements />
        </div>
        <div ref={contactRef}>
          <GetInTouch />
        </div>
      </div>
    </motion.div>
  )
}

