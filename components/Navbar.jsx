import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="fixed w-full py-6 px-6 md:px-12 backdrop-blur-md bg-white/5 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-white text-xl font-bold">AD</span>
        
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/akash-devmare-498b101b5" target="_blank">
            <FiLinkedin className="text-white text-xl hover:text-purple-300 transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  )
}