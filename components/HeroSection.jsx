import { motion } from 'framer-motion'
import { FiLinkedin, FiDownload } from 'react-icons/fi'

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
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-effect rounded-3xl p-8 md:p-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex flex-wrap">
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

        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Business Operations & Supply Chain Specialist
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full"
            href="#contact"
          >
            <span>Get in touch</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full"
            href="https://linkedin.com/in/akash-devmare-498b101b5"
            target="_blank"
          >
            <FiLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}