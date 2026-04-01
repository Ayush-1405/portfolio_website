import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    short: 'MCA',
    institution: 'Sardar Patel University',
    duration: '2024 – Present',
    location: 'Vallabh Vidyanagar, Gujarat',
    status: 'Ongoing',
    gradient: 'from-indigo-500 to-purple-600',
    description: 'Pursuing advanced studies in computer applications with focus on software engineering, system design, and modern development practices.',
    highlights: ['Software Engineering', 'System Design', 'Advanced Algorithms', 'Project Development'],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    short: 'BCA',
    institution: 'Sardar Patel University',
    duration: '2020 – 2023',
    location: 'Vallabh Vidyanagar, Gujarat',
    status: 'Completed',
    gradient: 'from-cyan-500 to-blue-600',
    description: 'Completed foundational studies in computer applications covering programming fundamentals, database management, web technologies, and software development.',
    highlights: ['Programming Fundamentals', 'Database Management', 'Web Technologies', 'Software Development'],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Academic Background</div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="glass-card glow-border rounded-2xl overflow-hidden"
            >
              {/* Header gradient */}
              <div className={`bg-gradient-to-br ${edu.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 border border-white/10 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border border-white/10 rounded-full translate-y-10 -translate-x-10" />
                <div className="absolute right-2 bottom-0 text-[5.5rem] font-space font-black text-white/10 select-none pointer-events-none tracking-tighter leading-none opacity-40 dark:opacity-100">
                  {edu.short}
                </div>
                <div className="relative z-10 min-h-[4rem] flex flex-col justify-end">
                  <h3 className="font-space font-bold text-white text-xl leading-tight w-4/5">{edu.degree}</h3>
                </div>
                {edu.status === 'Ongoing' && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    <span className="text-white text-xs font-semibold">Ongoing</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Institution */}
                <div className="flex items-center gap-2 mb-2">
                  <FiAward className="text-indigo-400 flex-shrink-0" size={15} />
                  <span className="font-semibold text-[var(--text-primary)] text-sm">{edu.institution}</span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-4 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1">
                    <FiCalendar size={12} />
                    <span className="font-code">{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiMapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{edu.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map(h => (
                    <span
                      key={h}
                      className="px-2.5 py-1 text-xs bg-white/5 border border-[var(--glass-border)] rounded-full text-[var(--text-secondary)]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
