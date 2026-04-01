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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

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

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group h-full flex flex-col"
            >
              {/* Header gradient */}
              <div className={`bg-gradient-to-br ${edu.gradient} p-8 relative overflow-hidden shrink-0`}>
                <div className="absolute top-0 right-0 w-40 h-40 border border-white/10 rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border border-white/10 rounded-full translate-y-12 -translate-x-12" />
                <div className="absolute right-4 bottom-0 text-[6rem] font-space font-black text-white/10 select-none pointer-events-none tracking-tighter leading-none group-hover:scale-110 transition-transform duration-500">
                  {edu.short}
                </div>
                
                <div className="relative z-10 min-h-[5rem] flex flex-col justify-end">
                  {edu.status === 'Ongoing' && (
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-4 border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest">Ongoing</span>
                    </div>
                  )}
                  <h3 className="font-space font-bold text-white text-2xl leading-tight md:w-4/5">{edu.degree}</h3>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                {/* Institution */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <FiAward size={20} />
                  </div>
                  <span className="font-space font-bold text-[var(--text-primary)] text-lg leading-tight">{edu.institution}</span>
                </div>

                <div className="flex flex-wrap gap-5 mb-8 text-xs text-[var(--text-secondary)] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                    <FiCalendar className="text-indigo-500" />
                    <span className="font-code">{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg">
                    <FiMapPin className="text-indigo-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-grow">{edu.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {edu.highlights.map(h => (
                    <span
                      key={h}
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 rounded-xl text-[var(--text-secondary)] group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors"
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
