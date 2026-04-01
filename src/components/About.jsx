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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-spin" style={{ animationDuration: '12s' }} />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />

              {/* Center card */}
              <div className="absolute inset-8 glass-card rounded-full glow-border flex flex-col items-center justify-center gap-2">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-space font-bold text-white shadow-lg shadow-indigo-500/40">
                  AM
                </div>
                <span className="font-code text-xs text-indigo-400 text-center w-full block">Full-Stack<br/>Dev</span>
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
                const r = 118;
                const cx = 144, cy = 144;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-10 h-10 glass-card border border-[var(--glass-border)] rounded-xl flex items-center justify-center"
                    style={{
                      left: cx + r * Math.cos(rad) - 20,
                      top: cy + r * Math.sin(rad) - 20,
                    }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Icon style={{ color, fontSize: '1.2rem' }} />
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
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
              Experienced <span className="text-[var(--text-primary)] font-semibold">Full-Stack Developer Intern</span> with
              hands-on experience in backend development using <span className="text-indigo-400 font-semibold">Java Spring Boot</span>,
              REST APIs, <span className="text-purple-400 font-semibold">JWT authentication</span>, MySQL, MongoDB,
              and role-based security.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
              Built real-world projects including an <span className="text-indigo-400 font-semibold">AI-based Career Path Advisor</span>,
              an <span className="text-cyan-400 font-semibold">Online Examination System</span>, and a
              <span className="text-purple-400 font-semibold"> Furniture Shop</span> e-commerce platform.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
              Also experienced in <span className="text-cyan-400 font-semibold">Flutter and Dart</span> for
              cross-platform mobile app development — including UI design, API integration,
              state management, and database connectivity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ label, value, suffix }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card glow-border rounded-xl p-3 text-center"
                >
                  <div className="font-space font-bold text-2xl gradient-text">{value}{suffix}</div>
                  <div className="text-[var(--text-secondary)] text-xs mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-4">
          {highlights.map(({ Icon, label, desc, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card glow-border rounded-2xl p-5 group cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="text-white text-lg" />
              </div>
              <h3 className="font-space font-semibold text-[var(--text-primary)] text-sm mb-1">{label}</h3>
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
