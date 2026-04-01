import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

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
    <footer style={{ background: 'var(--win-desktop)', padding: '8px 0 42px' }}>
      <div className="container-custom">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar win-titlebar-inactive">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#128196;</span>
              <span>Ayush Mistry - Portfolio Footer</span>
            </div>
          </div>

          <div style={{ padding: '12px', background: 'var(--win-btn-face)' }}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '10px' }}>
              {/* Brand */}
              <div style={{ flex: '2', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(135deg, #0a246a, #316ac5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      fontFamily: 'Tahoma',
                      border: '2px outset #808080',
                    }}
                    aria-hidden="true"
                  >
                    AM
                  </div>
                  <span style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'Tahoma' }}>
                    Ayush Mistry
                  </span>
                </div>
                <div
                  className="win-sunken"
                  style={{ padding: '6px', fontSize: '10px', fontFamily: 'Tahoma', lineHeight: '1.5', maxWidth: '300px' }}
                >
                  Passionate Full-Stack Developer focused on building high-performance backend systems
                  and modern mobile experiences. Built with React &amp; Tailwind.
                </div>
                <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
                  {socials.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="win-btn"
                      style={{ minWidth: 'auto', padding: '2px 8px', gap: '4px' }}
                      aria-label={label}
                    >
                      <Icon size={12} aria-hidden="true" /> {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div style={{ flex: 1, minWidth: '120px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '11px', fontFamily: 'Tahoma', marginBottom: '6px', borderBottom: '1px solid var(--win-btn-shadow)', paddingBottom: '3px' }}>
                  Quick Links
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {links.slice(0, 4).map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{ fontSize: '11px', fontFamily: 'Tahoma', color: '#316ac5', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '3px' }}
                      >
                        <span style={{ fontSize: '9px', color: '#666' }}>&#9658;</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More Links */}
              <div style={{ flex: 1, minWidth: '120px' }}>
                <div style={{ fontWeight: 'bold', fontSize: '11px', fontFamily: 'Tahoma', marginBottom: '6px', borderBottom: '1px solid var(--win-btn-shadow)', paddingBottom: '3px' }}>
                  Resources
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {links.slice(4).map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{ fontSize: '11px', fontFamily: 'Tahoma', color: '#316ac5', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '3px' }}
                      >
                        <span style={{ fontSize: '9px', color: '#666' }}>&#9658;</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="win-separator" />

            {/* Copyright bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
                paddingTop: '6px',
                fontSize: '10px',
                fontFamily: 'Tahoma',
                color: '#555',
              }}
            >
              <span>Copyright &copy; {currentYear} Ayush Mistry. All rights reserved.</span>
              <span style={{ fontFamily: 'Courier New' }}>
                Microsoft Windows 2000 [Version 5.00.2195]
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
