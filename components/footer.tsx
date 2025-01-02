import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="http://www.linkedin.com/in/parth-save" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/parthsave" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          <FaGithub size={24} />
        </a>
        <a href="mailto:parthsave24242@gmail.com" className="text-red-500 hover:text-red-600">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Parth Save. All rights reserved.
      </p>
    </footer>
  )
}

