import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot, SiFlutter, SiDart, SiMongodb, SiMysql, SiPostgresql,
  SiBootstrap, SiTailwindcss, SiPostman,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdApi } from 'react-icons/md';

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools'];

const skills = [
  // Frontend
  { name: 'React.js', Icon: FaReact, color: '#61dafb', level: 78, cat: 'Frontend' },
  { name: 'HTML5', Icon: FaHtml5, color: '#e34f26', level: 90, cat: 'Frontend' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6', level: 85, cat: 'Frontend' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952b3', level: 82, cat: 'Frontend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4', level: 75, cat: 'Frontend' },
  // Backend
  { name: 'Java', Icon: FaJava, color: '#f89820', level: 88, cat: 'Backend' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f', level: 85, cat: 'Backend' },
  { name: 'REST APIs', Icon: MdApi, color: '#6366f1', level: 90, cat: 'Backend' },
  { name: 'JWT Auth', Icon: FaDatabase, color: '#f59e0b', level: 83, cat: 'Backend' },
  { name: 'JSP/Servlets', Icon: FaJava, color: '#f89820', level: 75, cat: 'Backend' },
  // Mobile
  { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8', level: 80, cat: 'Mobile' },
  { name: 'Dart', Icon: SiDart, color: '#0175c2', level: 80, cat: 'Mobile' },
  { name: 'API Integration', Icon: MdApi, color: '#6366f1', level: 85, cat: 'Mobile' },
  { name: 'State Mgmt', Icon: SiFlutter, color: '#02569B', level: 75, cat: 'Mobile' },
  // Database
  { name: 'MySQL', Icon: SiMysql, color: '#00758f', level: 87, cat: 'Database' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#4db33d', level: 80, cat: 'Database' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', level: 70, cat: 'Database' },
  // Tools
  { name: 'Git', Icon: FaGitAlt, color: '#f05032', level: 85, cat: 'Tools' },
  { name: 'GitHub', Icon: FaGithub, color: '#ffffff', level: 88, cat: 'Tools' },
  { name: 'Postman', Icon: SiPostman, color: '#ff6c37', level: 90, cat: 'Tools' },
  { name: 'VS Code', Icon: VscCode, color: '#007acc', level: 92, cat: 'Tools' },
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
          style={{ background: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
        >
          <skill.Icon style={{ color: skill.color, fontSize: '1.6rem' }} />
        </div>
        <div>
          <h3 className="font-space font-bold text-[var(--text-primary)] text-sm group-hover:text-indigo-400 transition-colors">{skill.name}</h3>
          <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-wider">{skill.cat}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em]">
          <span>Proficiency</span>
          <span className="text-indigo-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-2.5 overflow-hidden border border-white/5 p-[2px]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.2, ease: 'circOut' }}
            className="h-full rounded-full relative overflow-hidden"
            style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active);

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Technical Arsenal</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>
          
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-8 py-3 font-space font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 group overflow-hidden ${
                active === cat
                  ? 'text-white'
                  : 'text-[var(--text-secondary)] hover:text-indigo-400'
              }`}
            >
              {/* Background Glass */}
              <div className={`absolute inset-0 border transition-all duration-500 ${
                active === cat 
                  ? 'bg-indigo-500/10 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]' 
                  : 'bg-white/5 border-white/10 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5'
              }`} />
            
              {/* Active Indicator Line */}
              {active === cat && (
                <motion.div 
                  layoutId="active-cat"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
                />
              )}
              
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
        <br></br>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
