import { motion } from 'framer-motion'

const experiences = [
  {
    company: "Vesatogo Innovations",
    role: "Business & Operations Associate",
    duration: "Aug 2022 - Mar 2025",
    points: [
      "Led end-to-end software operations ensuring on-time delivery and performance optimization",
      "Managed cross-functional teams to streamline workflows and improve system efficiency",
      "Drove adoption of supply chain management (SCM) software",
      "Oversaw QA/testing processes to reduce defects and ensure compliance",
      "Implemented Agile/Scrum methodologies for project execution"
    ]
  },
  {
    company: "Sahyadri Farmers Producer Company Limited",
    role: "Product Operations Lead",
    duration: "Jan 2022 - Aug 2022",
    points: [
      "Implemented supply chain management software solutions (Vesatogo & SAP)",
      "Conducted market analysis to identify software requirements and improvement opportunities",
      "Trained employees on digital tools and operational processes",
      "Collaborated with technical teams to resolve system bottlenecks",
      "Developed operational documentation and standard procedures"
    ]
  },
  {
    company: "Sahyadri Farmers Producer Company Limited",
    role: "Business Development Officer",
    duration: "Jun 2021 - Mar 2022",
    points: [
      "Established strategic partnerships to expand farmer networks",
      "Supported market expansion initiatives and growth strategies",
      "Facilitated new supply chain partnerships"
    ]
  },
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
            transition={{ duration: 0.5 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-white/80 mt-1">{exp.company}</p>
              </div>
              <span className="text-white/60 text-sm md:text-base">{exp.duration}</span>
            </div>
            
            <ul className="space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="text-white/80 flex items-start gap-2">
                  <div className="w-2 h-2 bg-white/50 rounded-full mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}