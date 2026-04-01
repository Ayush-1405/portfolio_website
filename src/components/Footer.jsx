import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { href: 'https://github.com/Ayush-1405', Icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ayush-mistry14/', Icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:ayushmistry0054@gmail.com', Icon: FiMail, label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[var(--glass-border)] pt-14 pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <FaCode className="text-white text-base" />
              </div>
              <span className="font-space font-bold text-xl text-[var(--text-primary)]">
                Ayush<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
              Full-Stack Developer Intern crafting scalable backend systems, modern web apps, and cross-platform mobile solutions.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-code">Open to opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-semibold text-[var(--text-primary)] mb-4 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {links.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[var(--text-secondary)] text-sm hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-space font-semibold text-[var(--text-primary)] mb-4 text-sm">Tech I Work With</h4>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Flutter', 'React', 'MySQL', 'MongoDB', 'REST APIs', 'JWT', 'Dart', 'Git'].map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs glass-card border border-[var(--glass-border)] rounded-full text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 glass-card border border-[var(--glass-border)] rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--glass-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--text-secondary)] text-xs flex items-center gap-1.5 text-center sm:text-left">
            Designed &amp; Developed with <FiHeart className="text-red-400 translate-y-[1px]" size={12} /> by{' '}
            <span className="gradient-text font-semibold">Ayush Mistry</span>
          </p>
          <p className="text-[var(--text-secondary)] text-xs font-code">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
