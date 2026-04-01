import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import {
  SiSpringboot, SiFlutter, SiMongodb, SiMysql, SiDart,
} from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { RiAiGenerate } from 'react-icons/ri';

const filterCategories = ['All', 'Backend', 'Mobile', 'Full-Stack', 'Web'];

const techIconMap = {
  React: { Icon: FaReact, color: '#61dafb' },
  'Spring Boot': { Icon: SiSpringboot, color: '#6db33f' },
  Java: { Icon: FaJava, color: '#f89820' },
  MySQL: { Icon: SiMysql, color: '#00758f' },
  MongoDB: { Icon: SiMongodb, color: '#4db33d' },
  JWT: { Icon: MdApi, color: '#6366f1' },
  AI: { Icon: RiAiGenerate, color: '#f59e0b' },
  Flutter: { Icon: SiFlutter, color: '#54c5f8' },
  Dart: { Icon: SiDart, color: '#0175c2' },
  'REST APIs': { Icon: MdApi, color: '#8b5cf6' },
  JSP: { Icon: FaJava, color: '#f89820' },
};

const projects = [
  {
    id: 1,
    title: 'Skill-Based Career Path Advisor',
    subtitle: 'AI + Resume Analyzer',
    description:
      'An AI-powered platform that analyzes resumes, identifies core skills, and recommends personalized career paths. Features include resume parsing, intelligent career recommendation engine, secure JWT authentication, and dynamic roadmap generation.',
    category: 'Full-Stack',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'AI', 'REST APIs'],
    features: ['Resume Parsing Engine', 'AI Career Recommendations', 'JWT Authentication', 'Personalized Roadmaps'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: true,
    bgPattern: '🤖',
  },
  {
    id: 2,
    title: 'Online Examination System',
    subtitle: 'Web-based Exam Portal',
    description:
      'A full-featured web-based examination platform built with Java, JSP, Servlets, and MySQL. Supports student exam-taking with secure login, question management, automatic grading, and a comprehensive admin control panel.',
    category: 'Backend',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    tech: ['Java', 'JSP', 'MySQL', 'Spring Boot', 'REST APIs'],
    features: ['Secure Login System', 'Question Management', 'Auto Evaluation', 'Admin Dashboard'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: false,
    bgPattern: '📝',
  },
  {
    id: 3,
    title: 'Online Furniture Shop',
    subtitle: 'Home Comfort E-Commerce',
    description:
      'A fully functional e-commerce platform for furniture browsing and purchasing. Includes user-facing product catalog, shopping cart, and order management — plus a robust admin panel for product and inventory control.',
    category: 'Full-Stack',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'JWT'],
    features: ['Product Catalog', 'Cart & Checkout', 'Admin Panel', 'Order Management'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: false,
    bgPattern: '🛋️',
  },
  {
    id: 4,
    title: 'Flutter Mobile Application',
    subtitle: 'Cross-Platform Mobile App',
    description:
      'A modern cross-platform mobile application built with Flutter and Dart, connected to a Java Spring Boot backend via REST APIs. Features a clean UI, efficient state management, JWT-based authentication, and smooth UX across Android and iOS.',
    category: 'Mobile',
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'MongoDB', 'JWT', 'REST APIs'],
    features: ['Cross-platform (Android/iOS)', 'REST API Integration', 'JWT Authentication', 'State Management'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: false,
    bgPattern: '📱',
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card glow-border rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Project visual header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-white/20 rounded-full"
              style={{
                width: `${60 + i * 30}px`,
                height: `${60 + i * 30}px`,
                top: `${20 - i * 15}px`,
                right: `${-10 - i * 10}px`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <span className="text-5xl drop-shadow-lg">{project.bgPattern}</span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white text-xs font-bold tracking-wider">⭐ FEATURED</span>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute bottom-4 left-6">
          <span className="px-2.5 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-space font-bold text-lg text-[var(--text-primary)] mb-0.5">{project.title}</h3>
        <p className="text-indigo-400 text-sm font-medium mb-3">{project.subtitle}</p>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.map(f => (
            <span key={f} className="px-2 py-0.5 bg-white/5 border border-[var(--glass-border)] rounded-full text-xs text-[var(--text-secondary)]">
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack icons */}
        <div className="flex items-center gap-2 mb-5 flex-wrap">
          {project.tech.map(t => {
            const tc = techIconMap[t];
            if (!tc) return <span key={t} className="px-2 py-0.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-xs text-indigo-400">{t}</span>;
            return (
              <div
                key={t}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium"
                style={{ background: `${tc.color}15`, color: tc.color }}
                title={t}
              >
                <tc.Icon style={{ fontSize: '0.9rem' }} />
                <span className="hidden sm:inline">{t}</span>
              </div>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-indigo-500/50 text-sm font-medium transition-all"
          >
            <FiGithub size={15} /> GitHub
          </motion.a>
          {project.live ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 btn-primary justify-center py-2 text-sm"
            >
              <FiExternalLink size={15} /> Live Demo
            </motion.a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 text-[var(--text-secondary)] text-sm opacity-50 cursor-not-allowed">
              <FiExternalLink size={15} /> Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-tag justify-center mb-4">Portfolio</div>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm">
            Real-world applications built with modern tech stacks, focusing on scalability, security, and clean architecture.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map(f => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
                activeFilter === f
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 border-transparent'
                  : 'bg-white/5 border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-indigo-500/40 hover:bg-indigo-500/5'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <ProjectCard key={proj.id} project={proj} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Ayush-1405"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
