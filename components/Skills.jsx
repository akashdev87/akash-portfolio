import { motion } from 'framer-motion';
import { 
  FiTrendingUp, 
  FiPackage, 
  FiUsers, 
  FiBarChart, 
  FiCloud,
  FiLayout,
  FiClipboard,
  FiRefreshCw,
  FiTarget,
  FiDatabase
} from 'react-icons/fi';

const skills = [
  { 
    name: "Product Management", 
    icon: <FiLayout />, 
    category: "Management",
    description: "End-to-end product lifecycle management from ideation to launch"
  },
  { 
    name: "Project Management", 
    icon: <FiClipboard />, 
    category: "Execution",
    description: "Waterfall & hybrid methodologies, resource allocation & risk mitigation"
  },
  { 
    name: "Scrum Master", 
    icon: <FiRefreshCw />, 
    category: "Methodology",
    description: "Agile framework implementation & team productivity optimization"
  },
  { 
    name: "Supply Chain Management", 
    icon: <FiPackage />, 
    category: "Operations",
    description: "Logistics optimization & vendor network coordination"
  },
  { 
    name: "Stakeholder Engagement", 
    icon: <FiUsers />, 
    category: "Collaboration",
    description: "Cross-functional alignment & executive communication"
  },
  { 
    name: "Data-Driven Decision Making", 
    icon: <FiBarChart />, 
    category: "Analytics",
    description: "KPI analysis & business intelligence implementation"
  },
  { 
    name: "Agile Methodology", 
    icon: <FiTarget />, 
    category: "Process",
    description: "Sprint planning & continuous improvement cycles"
  },
  { 
    name: "ERP Systems", 
    icon: <FiDatabase />, 
    category: "Technology",
    description: "SAP implementation & operational workflow integration"
  },
  { 
    name: "Market Strategy", 
    icon: <FiTrendingUp />, 
    category: "Planning",
    description: "Competitive analysis & go-to-market planning"
  }
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    transition={{ delay: index * 0.1, type: 'spring' }}
    className="group relative glass-effect p-6 rounded-2xl border border-white/10 hover:border-white/20"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white/5 rounded-lg text-2xl text-white/80 group-hover:text-white">
        {skill.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
        <span className="inline-block px-3 py-1 text-sm bg-white/10 rounded-full text-white/80 mb-3">
          {skill.category}
        </span>
        <p className="text-white/70 text-sm leading-relaxed">
          {skill.description}
        </p>
      </div>
    </div>
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
  </motion.div>
);

export default function Skills() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24" id="skills">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16">
          <motion.h2 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Technical Competencies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-white/80 max-w-3xl"
          >
            Operational expertise refined through successful implementations across agricultural tech and enterprise software domains.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}