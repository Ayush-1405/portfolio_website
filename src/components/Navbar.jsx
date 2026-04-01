import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function WinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" fill="#FF0000"/>
      <rect x="9" y="1" width="6" height="6" fill="#00FF00"/>
      <rect x="1" y="9" width="6" height="6" fill="#0000FF"/>
      <rect x="9" y="9" width="6" height="6" fill="#FFFF00"/>
    </svg>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{ fontFamily: 'Tahoma, sans-serif', fontSize: '11px' }}>
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.replace('#', ''));
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 40;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Win2K Taskbar - fixed to bottom */}
      <nav className="win-taskbar" role="navigation" aria-label="Main navigation">
        {/* Start Button */}
        <button className="win-start-btn" aria-label="Start menu">
          <WinIcon />
          <strong>Start</strong>
        </button>

        {/* Divider */}
        <div style={{ width: '1px', height: '20px', background: '#808080', marginRight: '2px' }} />
        <div style={{ width: '1px', height: '20px', background: '#ffffff', marginLeft: '0' }} />

        {/* Nav quick-launch buttons (desktop) */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`win-task-btn ${active === link.href.replace('#', '') ? 'active' : ''}`}
              aria-current={active === link.href.replace('#', '') ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="win-task-btn lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? 'Close' : 'Navigate'}
        </button>

        {/* System Tray */}
        <div className="win-systray" role="status" aria-label="System tray">
          <button
            onClick={() => setDarkMode && setDarkMode(!darkMode)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontFamily: 'Tahoma, sans-serif',
              padding: '0 2px',
            }}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle display mode"
          >
            {darkMode ? '[Day]' : '[Ngt]'}
          </button>
          <span aria-hidden="true">|</span>
          <Clock />
        </div>
      </nav>

      {/* Mobile Navigation popup (above taskbar) */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="win-window lg:hidden"
          style={{
            position: 'fixed',
            bottom: '34px',
            left: '8px',
            zIndex: 999,
            minWidth: '180px',
          }}
          role="menu"
        >
          <div className="win-titlebar win-titlebar-inactive">
            <span>Navigation</span>
            <button
              className="win-titlebtn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
            >
              X
            </button>
          </div>
          <div style={{ padding: '4px 0' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="win-listitem"
                style={{ display: 'flex' }}
                role="menuitem"
              >
                {active === link.href.replace('#', '') ? '> ' : '  '}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
