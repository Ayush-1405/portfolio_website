import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiFlutter } from 'react-icons/si';
import heroImg from '../assets/hero.png';
import resumePdf from '../assets/ayushmistryresume.pdf';


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
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
          <motion.div
            key={i}
            className="absolute flex items-center justify-center w-16 h-16 glass-card rounded-2xl pointer-events-auto"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.1, 1],
              y: [0, -15, 0],
            }}
            transition={{
              delay,
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon style={{ color, fontSize: '2rem' }} />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-tag mb-10"
            >
              <span className="w-2 h-2 bg-green-400 animate-pulse" />
              <span>Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl font-space font-bold text-[var(--text-primary)] mb-2">Hi, I'm</p>
              <h1 className="section-title">
                Ayush Mistry
              </h1>
            </div>

            {/* Typing effect */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-2xl md:text-4xl font-bold mb-10 h-12">
              <span className="font-code text-indigo-500">&gt;</span>
              <span className="gradient-text">{displayed}</span>
              <span className="w-1 h-8 bg-indigo-500 animate-pulse" />
            </div>

            {/* Subheading */}
            <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
              I build <span className="text-indigo-400 font-semibold">scalable backend systems</span>, secure REST APIs, and modern apps.
              Focused on delivering <span className="text-purple-400 font-semibold">production-ready</span> solutions with Java & Flutter.
            </p>

            {/* CTA Buttons & Social links */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                  onClick={scrollToProjects} 
                  className="btn-primary w-full sm:w-auto"
                >
                  <FiArrowDown /> View Projects
                </button>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a href={resumePdf} download="Ayush_Mistry_Resume.pdf" className="btn-outline !py-3 !px-8 text-sm border-white/10 flex-1 sm:flex-initial">
                    <FiDownload /> Resume
                  </a>
                  <button 
                    onClick={scrollToContact} 
                    className="btn-outline !py-3 !px-8 text-sm border-white/10 flex-1 sm:flex-initial"
                  >
                    <FiMail /> Contact
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                {[
                  { href: import.meta.env.VITE_GITHUB, Icon: FiGithub, label: 'GitHub' },
                  { href: import.meta.env.VITE_LINKEDIN, Icon: FiLinkedin, label: 'LinkedIn' },
                  { href: `mailto:${import.meta.env.VITE_EMAIL}`, Icon: FiMail, label: 'Email' },
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-500 transition-colors border border-white/5"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/10 animate-spin-slow" />
              <div className="absolute inset-12 rounded-full border border-purple-500/5 animate-reverse-spin-slow" />
              
              <div className="relative z-10 w-[380px] h-[380px] overflow-hidden glass-card p-3 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 group-hover:opacity-50 transition-opacity" />
                <img 
                  src={heroImg} 
                  alt="Ayush Mistry" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-8 glass-card p-4 border border-indigo-500/20 shadow-xl backdrop-blur-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <SiSpringboot size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">Expertise</p>
                    <p className="text-sm font-bold">Backend Architecture</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-8 glass-card p-4 border border-purple-500/20 shadow-xl backdrop-blur-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <SiFlutter size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">Expertise</p>
                    <p className="text-sm font-bold">Mobile Solutions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        >
          <span className="font-code text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)] opacity-50">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[var(--border-color)] rounded-full flex justify-center p-1.5 backdrop-blur-sm">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-indigo-500 rounded-full" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

