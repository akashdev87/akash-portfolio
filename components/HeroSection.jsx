import { motion } from 'framer-motion'
import { FiLinkedin } from 'react-icons/fi'

const name = "Akash Devmare";

const letterDrop = {
  hidden: { opacity: 0, y: -40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-24 bg-black py-24">
      {/* Left: Animated text content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group perspective-1000 w-full lg:w-1/2"
      >
        <div className="transform transition-all duration-500 group-hover:rotate-x-3 group-hover:rotate-y-3 group-hover:translate-z-10 preserve-3d">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterDrop}
                  initial="hidden"
                  animate="visible"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Agri-Tech Operations Specialist
            </motion.p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg"
                href="#contact"
              >
                <span>Get in touch</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-full transition-all"
                href="https://linkedin.com/in/akash-devmare-498b101b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="text-xl text-blue-400" />
                <span>LinkedIn</span>
              </motion.a>
            </div>

            {/* Commented out Growth Included Badge */}
            {/* <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 inline-block transform rotate-1"
            >
              <div className="bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                <span className="text-gray-300">GROWTH </span>
                <span className="text-green-400 font-semibold">INCLUDED</span>
              </div>
            </motion.div> */}
          </div>
          
          {/* 3D Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-blue-500/10 blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
        </div>
      </motion.div>

      {/* Right: Image with 3D effect */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group w-full lg:w-1/2 flex justify-center"
      >
        <div className="transform transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
          <img 
            src="/akash.png" 
            alt="Akash Devmare"
            className="w-80 md:w-96 object-contain rounded-2xl shadow-2xl border border-gray-700/50"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
        </div>
      </motion.div>
    </section>
  )
}