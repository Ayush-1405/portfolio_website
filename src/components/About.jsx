import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiDart, SiSpringboot } from 'react-icons/si';
import { FiSmartphone, FiServer, FiShield, FiCpu } from 'react-icons/fi';

const stats = [
  { label: 'Projects Built', value: '4+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Experience', value: '1+', suffix: 'yr' },
  { label: 'Focus Areas', value: '3' },
];

const highlights = [
  { 
    Icon: FiServer, 
    label: 'Backend Architecture', 
    desc: 'Specialized in Java Spring Boot, REST APIs, and high-performance system design.', 
    color: 'from-indigo-500 to-blue-600',
    tech: 'Spring Boot • Microservices • JWT'
  },
  { 
    Icon: FiSmartphone, 
    label: 'Mobile Solutions', 
    desc: 'Crafting beautiful, native-performance cross-platform apps using Flutter & Dart.', 
    color: 'from-cyan-500 to-teal-600',
    tech: 'Flutter • Dart • State Mgmt'
  },
  { 
    Icon: FaDatabase, 
    label: 'Data Engineering', 
    desc: 'Designing scalable database schemas and optimizing complex data workflows.', 
    color: 'from-purple-500 to-pink-600',
    tech: 'MySQL • MongoDB • PostgreSQL'
  },
  { 
    Icon: FiShield, 
    label: 'Cloud & Security', 
    desc: 'Implementing secure auth protocols and robust infrastructure protection.', 
    color: 'from-amber-500 to-orange-600',
    tech: 'OAuth 2.0 • Firebase • Security'
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="section-tag mb-6">
                <FiCpu className="text-indigo-400" />
                <span>The Developer Behind The Code</span>
              </div>
              <h2 className="section-title !mb-0">
                Transforming Ideas into <br />
                <span className="gradient-text">Scalable Reality</span>
              </h2>
            </div>
            <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-indigo-500/30 to-transparent mx-12 mb-6" />
            <p className="text-[var(--text-secondary)] font-code text-sm italic mb-4">
              &lt;passionate_about_innovation /&gt;
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left - Visual Orbit (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex justify-center py-12"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow" />
                
                {/* Inner Static Ring */}
                <div className="absolute inset-8 rounded-full border border-purple-500/10" />

                {/* Profile Center */}
                <div className="absolute inset-16 glass-card flex flex-col items-center justify-center gap-4 shadow-2xl border border-white/10 group transition-all duration-500 hover:border-indigo-500/30">
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-space font-extrabold text-white shadow-[0_20px_40px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-500">
                    AM
                  </div>
                  <div className="text-center">
                    <p className="font-space font-bold text-lg text-[var(--text-primary)]">Ayush Mistry</p>
                    <p className="font-code text-xs text-indigo-400 font-bold uppercase tracking-widest">Full-Stack Architect</p>
                  </div>
                </div>

                {/* Orbiting Tech Icons */}
                {[
                  { Icon: FaJava, color: '#f89820', angle: 0 },
                  { Icon: SiSpringboot, color: '#6db33f', angle: 60 },
                  { Icon: SiFlutter, color: '#54c5f8', angle: 120 },
                  { Icon: SiDart, color: '#0175c2', angle: 180 },
                  { Icon: FaReact, color: '#61dafb', angle: 240 },
                  { Icon: SiMongodb, color: '#4db33d', angle: 300 },
                ].map(({ Icon, color, angle }, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 160; // radius
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-14 h-14 glass-card flex items-center justify-center border border-white/10 shadow-xl z-20"
                      style={{
                        left: `calc(50% + ${Math.cos(rad) * 160}px - 28px)`,
                        top: `calc(50% + ${Math.sin(rad) * 160}px - 28px)`,
                      }}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 4 + i * 0.5, 
                        repeat: Infinity, 
                        ease: 'easeInOut' 
                      }}
                    >
                      <Icon style={{ color, fontSize: '1.8rem' }} />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right - Bio & Stats (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <p className="text-[var(--text-secondary)] text-xl leading-relaxed">
                    I am a highly motivated <span className="text-[var(--text-primary)] font-bold">Full-Stack Developer</span> dedicated to crafting 
                    high-impact digital experiences. My core strength lies in bridging the gap between 
                    <span className="text-indigo-400 font-bold"> complex backend architectures</span> and 
                    <span className="text-cyan-400 font-bold"> fluid mobile interfaces</span>.
                  </p>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed border-l-4 border-indigo-500/30 pl-6 italic">
                    "I believe in writing code that is not just functional, but clean, maintainable, and built to scale."
                  </p>
                </div>
                <br></br>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="glass-card p-6 border border-white/5 hover:border-indigo-500/20 transition-all group overflow-hidden relative">
                      <div className="absolute -right-2 -bottom-2 text-4xl opacity-[0.03] font-black group-hover:scale-150 transition-transform">
                        {stat.value}
                      </div>
                      <p className="text-3xl font-space font-extrabold gradient-text mb-1">{stat.value}{stat.suffix || ''}</p>
                      <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <br></br>
              {/* Highlight Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <item.Icon size={28} />
                    </div>
                    
                    <h3 className="font-space font-bold text-xl text-[var(--text-primary)] mb-3 group-hover:text-indigo-400 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-code text-indigo-400 font-bold uppercase tracking-widest">
                        {item.tech}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
