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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`glass-card overflow-hidden border border-white/5 h-full flex flex-col transition-all duration-500 ${hovered ? 'shadow-2xl shadow-indigo-500/10 border-indigo-500/30 -translate-y-2' : ''}`}>
        {/* Project Header/Image Placeholder */}
        <div className={`relative ${project.featured ? 'h-64 md:h-72' : 'h-48 md:h-52'} w-full overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8 transition-all duration-500`}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          <div className={`text-8xl md:text-9xl opacity-20 group-hover:scale-110 transition-transform duration-700 ${hovered ? 'rotate-12' : ''}`}>{project.bgPattern}</div>
          
          {project.featured && (
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 border border-white/30 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-yellow-400 animate-pulse" />
              Featured Project
            </div>
          )}
          
          <div className="absolute bottom-4 right-4 flex gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <FiGithub size={18} />
            </motion.a>
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                <FiExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content - Centered */}
        <div className="p-8 flex-grow flex flex-col items-center text-center">
          <div className="mb-6">
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">{project.category}</p>
            <h3 className="text-2xl font-space font-black text-[var(--text-primary)] leading-tight group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
          </div>
          
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 max-w-sm">
            {project.description}
          </p>

          <div className="mt-auto space-y-8 w-full">
            <div className="flex flex-wrap justify-center gap-2">
              {project.tech.map((t) => {
                const config = techIconMap[t] || { Icon: null, color: '#6366f1' };
                return (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/5 text-[10px] font-bold text-[var(--text-secondary)] hover:text-indigo-400 hover:border-indigo-500/30 transition-all cursor-default"
                  >
                    {config.Icon && <config.Icon style={{ color: config.color }} />}
                    {t}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
              {project.features.slice(0, 2).map((feat, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active || (active === 'Web' && p.category === 'Full-Stack'));

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Featured Work</div>
          <h2 className="section-title">
            Creative <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 font-space font-bold text-sm transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40'
                  : 'glass-card border border-white/5 text-[var(--text-secondary)] hover:text-indigo-400 hover:border-indigo-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <br></br>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
        <br></br>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/Ayush-1405" 
            target="_blank" 
            rel="noreferrer"
            className="btn-outline group"
          >
            <span>View More on GitHub</span>
            <FiGithub className="ml-2 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
