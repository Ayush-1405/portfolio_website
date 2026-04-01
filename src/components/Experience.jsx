import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiExternalLink, FiCode } from 'react-icons/fi';
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Work History</div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8 lg:space-y-6 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[min(32px,10%)] md:left-0 top-16 bottom-8 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent hidden md:block rounded-full z-0" />
          
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card glow-border rounded-2xl p-6 md:p-8 border-l-2 border-l-indigo-500 relative z-10"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-green-400 font-code">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Currently Active
                      </span>
                    </div>
                    <h3 className="font-space font-bold text-xl text-[var(--text-primary)] mt-1">{exp.role}</h3>
                    <p className="text-indigo-400 font-semibold text-base mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-3 sm:gap-1 sm:items-end text-[var(--text-secondary)] shrink-0">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar size={13} />
                      <span className="font-code text-xs">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiMapPin size={13} />
                      <span className="text-xs">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex items-center gap-2 mb-5 flex-wrap">
                  {exp.icons.map((Icon, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: `${exp.iconColors[j]}18`, color: exp.iconColors[j], border: `1px solid ${exp.iconColors[j]}30` }}
                    >
                      <Icon style={{ fontSize: '0.95rem' }} />
                      {exp.iconLabels[j]}
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}

          {/* Future placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-4 border border-dashed border-indigo-500/20 flex items-center gap-3">
              <FiCode className="text-indigo-500/50 flex-shrink-0" size={16} />
              <p className="text-[var(--text-secondary)] text-sm font-code italic">Next chapter loading...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
