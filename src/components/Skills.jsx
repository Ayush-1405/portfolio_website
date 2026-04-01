import { useState } from 'react';
import { motion } from 'framer-motion';
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card glow-border rounded-2xl p-5 group w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] max-w-[240px] flex-shrink-0"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${skill.color}20` }}
        >
          <skill.Icon style={{ color: skill.color, fontSize: '1.4rem' }} />
        </div>
        <div>
          <h3 className="font-space font-semibold text-[var(--text-primary)] text-sm">{skill.name}</h3>
          <span className="text-[var(--text-secondary)] text-xs">{skill.level}%</span>
        </div>
      </div>

      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active);

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-tag justify-center mb-4">Technical Arsenal</div>
          <h2 className="section-title mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm">
            A comprehensive toolkit built through real-world projects and hands-on experience.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                active === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 border-transparent'
                  : 'bg-white/5 border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-indigo-500/40 hover:bg-indigo-500/5'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills wrap */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
