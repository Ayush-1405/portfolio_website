import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiDart } from 'react-icons/si';
import { FiCode, FiSmartphone, FiServer, FiShield } from 'react-icons/fi';

const stats = [
  { label: 'Projects Built', value: '4+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Experience', value: '1+', suffix: 'yr' },
  { label: 'Focus Areas', value: '3' },
];

const highlights = [
  { Icon: FiServer, label: 'Backend Engineering', desc: 'Java Spring Boot, REST APIs, JWT Auth', color: 'from-indigo-500 to-blue-500' },
  { Icon: FiSmartphone, label: 'Mobile Development', desc: 'Flutter, Dart, Cross-platform Apps', color: 'from-cyan-500 to-teal-500' },
  { Icon: FaDatabase, label: 'Database & Storage', desc: 'MySQL, MongoDB, PostgreSQL', color: 'from-purple-500 to-pink-500' },
  { Icon: FiShield, label: 'Security & Auth', desc: 'JWT, Role-based Security, OAuth', color: 'from-amber-500 to-orange-500' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">About Me</div>
          <h2 className="section-title">
            Crafting <span className="gradient-text">Scalable Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-purple-500/10 animate-reverse-spin-slow" />

              {/* Center card */}
              <div className="absolute inset-10 glass-card rounded-full flex flex-col items-center justify-center gap-2 shadow-2xl shadow-indigo-500/10 border border-indigo-500/20">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-space font-bold text-white shadow-lg shadow-indigo-500/40">
                  AM
                </div>
                <div className="text-center">
                  <p className="font-space font-bold text-sm tracking-tight">Ayush Mistry</p>
                  <p className="font-code text-[10px] text-indigo-400">Full-Stack Dev</p>
                </div>
              </div>

              {/* Orbit icons */}
              {[
                { Icon: FaJava, color: '#f89820', angle: 0 },
                { Icon: SiDart, color: '#0175c2', angle: 72 },
                { Icon: SiFlutter, color: '#54c5f8', angle: 144 },
                { Icon: FaReact, color: '#61dafb', angle: 216 },
                { Icon: SiMongodb, color: '#4db33d', angle: 288 },
              ].map(({ Icon, color, angle }, i) => {
                const rad = (angle * Math.PI) / 180;
                const r = 135;
                const cx = 160, cy = 160;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 glass-card rounded-xl flex items-center justify-center border border-white/10 shadow-xl"
                    style={{
                      left: cx + r * Math.cos(rad) - 24,
                      top: cy + r * Math.sin(rad) - 24,
                    }}
                    animate={{ 
                      y: [0, -6, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3 + i * 0.5, 
                      repeat: Infinity, 
                      ease: 'easeInOut' 
                    }}
                  >
                    <Icon style={{ color, fontSize: '1.5rem' }} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                I am a passionate <span className="text-[var(--text-primary)] font-semibold">Full-Stack Developer</span> specializing in 
                building high-performance backend systems and intuitive mobile experiences. My expertise lies in 
                <span className="text-indigo-400 font-semibold"> Java Spring Boot</span> and 
                <span className="text-cyan-400 font-semibold"> Flutter</span>.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                With a strong foundation in <span className="text-purple-400 font-semibold">RESTful architecture</span>, 
                database management (MySQL & MongoDB), and secure authentication protocols, I focus on creating 
                scalable, maintainable, and user-centric applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="glass-card p-6 rounded-3xl border border-indigo-500/10 hover:border-indigo-500/30 transition-colors group">
                    <p className="text-3xl font-space font-bold gradient-text group-hover:scale-110 transition-transform origin-left">{stat.value}{stat.suffix || ''}</p>
                    <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.Icon size={24} />
              </div>
              <h3 className="font-space font-bold text-[var(--text-primary)] mb-2">{item.label}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
