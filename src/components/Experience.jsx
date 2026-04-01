import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiCode } from 'react-icons/fi';
import { SiFlutter, SiMongodb, SiDart } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const experiences = [
  {
    company: 'Tech Elecon Pvt. Ltd.',
    role: 'Flutter Application Developer Intern',
    duration: 'Dec 2025 – Present',
    location: 'Anand, Gujarat',
    type: 'Internship',
    color: 'from-cyan-500 to-blue-600',
    icons: [SiFlutter, SiDart, SiMongodb, FaJava],
    iconLabels: ['Flutter', 'Dart', 'MongoDB', 'Java'],
    iconColors: ['#54c5f8', '#0175c2', '#4db33d', '#f89820'],
    responsibilities: [
      'Developed and maintained responsive Flutter applications with clean, modern UI designs',
      'Integrated REST APIs with Java Spring Boot backend services for seamless data flow',
      'Worked with MongoDB for backend data storage and retrieval features',
      'Improved application performance and UI responsiveness across Android and iOS platforms',
      'Participated in debugging, testing, and code reviews in an agile team environment',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Professional Journey</div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent hidden md:block rounded-full transform -translate-x-1/2" />
          
          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[var(--bg-primary)] shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 transform -translate-x-1/2 hidden md:block" />

                {/* Content card */}
                <div className="w-full md:w-[45%]">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 relative group"
                  >
                    <div className="absolute top-4 right-6 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Active</span>
                    </div>

                    <div className="mb-8">
                      <span className={`inline-block px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${exp.color} text-white mb-4 shadow-lg`}>
                        {exp.type}
                      </span>
                      <h3 className="font-space font-bold text-3xl text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors leading-tight mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-400 font-bold text-xl tracking-tight">{exp.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-5 mb-8 text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                        <FiCalendar className="text-indigo-500" />
                        <span className="font-code">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                        <FiMapPin className="text-indigo-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {exp.icons.map((Icon, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold"
                          style={{ color: exp.iconColors[j] }}
                        >
                          <Icon size={14} />
                          {exp.iconLabels[j]}
                        </div>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[10%]" />
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="glass-card px-6 py-3 rounded-2xl border border-dashed border-indigo-500/30 flex items-center gap-3">
              <FiCode className="text-indigo-500" />
              <p className="text-[var(--text-secondary)] text-sm font-code italic">Continuously learning and building...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
