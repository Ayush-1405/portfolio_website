import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiBriefcase, FiExternalLink } from 'react-icons/fi';
import { SiFlutter, SiMongodb, SiDart, SiSpringboot } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const experiences = [
  {
    company: 'Tech Elecon Pvt. Ltd.',
    role: 'Flutter Application Developer Intern',
    duration: 'Dec 2025 – Present',
    location: 'Anand, Gujarat',
    type: 'Internship',
    color: 'from-indigo-500 to-purple-600',
    icon: SiFlutter,
    tech: [
      { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8' },
      { name: 'Dart', Icon: SiDart, color: '#0175c2' },
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#4db33d' },
      { name: 'Java', Icon: FaJava, color: '#f89820' },
    ],
    responsibilities: [
      'Architecting and developing high-performance cross-platform mobile applications using Flutter.',
      'Building robust backend integrations with Java Spring Boot and RESTful API architectures.',
      'Implementing scalable data solutions with MongoDB for efficient real-time synchronization.',
      'Optimizing UI performance and ensuring seamless responsiveness across diverse device ecosystems.',
      'Collaborating in an agile environment through rigorous code reviews and innovative problem-solving.',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="glass-card p-1 md:p-1.5 border border-white/5 group-hover:border-indigo-500/20 transition-all duration-700">
        <div className="bg-[var(--bg-primary)]/40 p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-12 relative overflow-hidden backdrop-blur-3xl">
          {/* Card Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 " />
          
          {/* Left Side - Meta & Brand */}
          <div className="md:w-1/3 shrink-0 flex flex-col gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${exp.color} text-white shadow-xl shadow-indigo-500/20`}>
                  {exp.type}
                </span>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/5 border border-green-500/10">
                  <span className="w-1.5 h-1.5 bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Active</span>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-space font-extrabold text-[var(--text-primary)] leading-tight mb-3 group-hover:text-indigo-400 transition-colors">
                {exp.role}
              </h3>
              <p className="text-indigo-400 font-bold text-xl flex items-center gap-2">
                {exp.company}
                <FiExternalLink className="text-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-[var(--text-secondary)] font-bold text-[10px] uppercase tracking-[0.3em]">
                <FiCalendar className="text-indigo-500 text-sm" />
                <span className="font-code">{exp.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-[var(--text-secondary)] font-bold text-[10px] uppercase tracking-[0.3em]">
                <FiMapPin className="text-indigo-500 text-sm" />
                <span>{exp.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tech.map((t, j) => (
                <div
                  key={j}
                  className="w-10 h-10 glass-card flex items-center justify-center border border-white/5 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group/tech"
                  title={t.name}
                >
                  <t.Icon style={{ color: t.color }} size={18} className="group-hover/tech:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="flex-grow space-y-8 relative z-10">
            <div className="space-y-6">
              {exp.responsibilities.map((r, j) => (
                <div key={j} className="flex items-start gap-5 text-[var(--text-secondary)] leading-relaxed group/item">
                  <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500/30 group-hover/item:bg-indigo-500 group-hover/item:scale-125 group-hover/item:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all shrink-0" />
                  <p className="text-base md:text-lg group-hover/item:text-[var(--text-primary)] transition-colors duration-300">
                    {r}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500/5 flex items-center justify-center text-indigo-400 group-hover:rotate-12 transition-transform border border-white/5">
                <FiBriefcase size={20} />
              </div>
              <p className="text-[var(--text-secondary)] text-sm font-code italic">
                Driving innovation through clean code and modern architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="section-tag justify-center mb-4">
            <FiBriefcase className="text-indigo-400" />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed mt-6 opacity-50 ">
            Building scalable digital solutions and mastering modern tech stacks through 
            industry-leading professional experiences.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
        <br></br>
        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="glass-card px-8 py-4 border border-dashed border-indigo-500/20 flex items-center gap-4 group cursor-default hover:border-indigo-500/40 transition-colors">
              <div className="w-10 h-10 bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <FiBriefcase />
              </div>
            <div>
              <p className="text-[var(--text-primary)] font-bold text-sm">More coming soon</p>
              <p className="text-[var(--text-secondary)] text-xs font-code italic">Continuously building the future...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
