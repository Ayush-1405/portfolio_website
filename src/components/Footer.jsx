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
  { href: import.meta.env.VITE_GITHUB, Icon: FiGithub, label: 'GitHub' },
  { href: import.meta.env.VITE_LINKEDIN, Icon: FiLinkedin, label: 'LinkedIn' },
  { href: `mailto:${import.meta.env.VITE_EMAIL}`, Icon: FiMail, label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
        <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
                <FaCode className="text-white text-lg" />
              </div>
              <span className="font-space font-bold text-[var(--text-primary)] text-2xl tracking-tight">
                Ayush<span className="text-indigo-500">.</span>
              </span>
            </a>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm">
              Passionate Full-Stack Developer focused on building high-performance backend systems and modern mobile experiences.
              Let's create something meaningful together.
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-500 border border-white/5 transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-space font-bold text-[var(--text-primary)] uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {links.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[var(--text-secondary)] hover:text-indigo-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="space-y-6">
            <h4 className="font-space font-bold text-[var(--text-primary)] uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-3">
              {links.slice(4).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-sm text-[var(--text-secondary)] hover:text-indigo-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[var(--text-secondary)] font-medium">
            © {currentYear} Ayush Mistry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
            <span>Built with</span>
            <FiHeart className="text-rose-500 animate-pulse" fill="currentColor" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </footer>
  );
}
