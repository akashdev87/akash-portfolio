import { motion } from 'framer-motion'

const skills = [
  "Supply Chain Management (SAP/TOGO)",
  "Agri-Business Strategy",
  "Market Research & Analysis",
  "Cross-functional Team Leadership",
  "Process Optimization"
]

export default function Skills() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-12"
      >
        Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-lg font-medium text-white">{skill}</h3>
            <div className="mt-4 h-1 bg-white/20 rounded-full">
              <div 
                className="h-full bg-white rounded-full"
                style={{ width: `${Math.random() * 40 + 60}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}