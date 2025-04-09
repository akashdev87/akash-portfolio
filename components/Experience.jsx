import { motion } from 'framer-motion'

const experiences = [
  {
    company: "Vesatogo Innovations",
    role: "Business & Operations Associate",
    duration: "2022 - Present",
    points: [
      "Managed operations for product delivery coordination",
      "Conducted market research for customer identification",
      "Developed business relationships with stakeholders"
    ]
  },
  // Add other experiences
]

export default function Experience() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-white mb-12"
      >
        Professional Journey
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-white/80">{exp.company}</p>
              </div>
              <span className="text-white/60">{exp.duration}</span>
            </div>
            
            <ul className="space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="text-white/80 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}