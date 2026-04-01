import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiFlutter } from 'react-icons/si';

const roles = [
  'Java Spring Boot Developer',
  'Flutter Developer',
  'Backend Engineer',
  'Full-Stack Developer',
];

const floatingIcons = [
  { Icon: FaJava, color: '#f89820', x: '10%', y: '20%', delay: 0 },
  { Icon: SiSpringboot, color: '#6db33f', x: '85%', y: '15%', delay: 0.5 },
  { Icon: SiFlutter, color: '#54c5f8', x: '8%', y: '70%', delay: 1 },
  { Icon: FaReact, color: '#61dafb', x: '88%', y: '65%', delay: 1.5 },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIdx]);

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 md:pt-0 flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center w-14 h-14 glass-card rounded-xl pointer-events-auto"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.08, 1],
              y: [0, -12, 0],
            }}
            transition={{
              delay,
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon style={{ color, fontSize: '1.8rem' }} />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-indigo-500/30 mb-6 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-code text-indigo-500 font-medium dark:text-indigo-400 text-xs text-[var(--text-primary)]">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-space text-4xl sm:text-6xl md:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Ayush Mistry</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex items-center justify-center gap-2 text-lg md:text-2xl font-medium text-[var(--text-secondary)] mb-6 h-10 min-h-[2.5rem]"
          >
            <span className="font-code text-indigo-400">&gt;</span>
            <span className="text-[var(--text-primary)]">{displayed}</span>
            <span className="w-0.5 h-7 bg-indigo-400 animate-pulse" />
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I build <span className="text-indigo-400 font-semibold">scalable backend systems</span>, secure REST APIs, and modern web & mobile apps.
            Specializing in <span className="text-purple-400 font-semibold">Java Spring Boot</span>,
            <span className="text-cyan-400 font-semibold"> Flutter</span>, JWT auth, MySQL, and MongoDB —
            focused on <span className="text-indigo-400 font-semibold">production-ready</span> solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="btn-primary"
            >
              <FiArrowDown className="inline" /> View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="btn-outline"
            >
              <FiDownload /> Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-outline"
            >
              <FiMail /> Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            {[
              { href: 'https://github.com/Ayush-1405', Icon: FiGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/ayush-mistry14/', Icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:ayushmistry0054@gmail.com', Icon: FiMail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 glass-card glow-border rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-400 transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[var(--text-secondary)]"
          >
            <span className="font-code text-xs">scroll down</span>
            <div className="w-5 h-8 border border-[var(--border-color)] rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 bg-indigo-400 rounded-full animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
