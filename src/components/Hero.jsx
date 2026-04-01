import { useState, useEffect, useRef } from 'react';
import { FiArrowDown, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiFlutter } from 'react-icons/si';
import heroImg from '../assets/hero.png';

const roles = [
  'Java Spring Boot Developer',
  'Flutter Developer',
  'Backend Engineer',
  'Full-Stack Developer',
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
    <section id="home" style={{ padding: '16px', background: 'var(--win-desktop)' }}>
      <div className="container-custom">
        {/* Main Hero Window */}
        <div className="win-window" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#128187;</span>
              <span>Ayush Mistry - Portfolio - Welcome</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" style={{ background: '#c0392b', color: 'white', fontWeight: 'bold' }} aria-label="Close">X</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win-menubar">
            <span className="win-menuitem">File</span>
            <span className="win-menuitem">Edit</span>
            <span className="win-menuitem">View</span>
            <span className="win-menuitem">Favorites</span>
            <span className="win-menuitem">Tools</span>
            <span className="win-menuitem">Help</span>
          </div>

          {/* Toolbar */}
          <div className="win-toolbar">
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }} onClick={() => window.scrollTo(0, 0)} aria-label="Back">Back</button>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }} aria-label="Forward">Forward</button>
            <div className="win-separator" style={{ width: '1px', height: '20px', margin: '0 4px' }} />
            <div
              className="win-sunken"
              style={{ flex: 1, padding: '2px 6px', fontSize: '11px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center' }}
              aria-label="Address bar"
            >
              C:\Users\Ayush\Portfolio\index.html
            </div>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 10px' }}>Go</button>
          </div>

          {/* Content area */}
          <div style={{ background: 'var(--win-btn-face)', padding: '24px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

              {/* Left: Profile image */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div
                  className="win-sunken"
                  style={{ width: '160px', height: '160px', overflow: 'hidden', padding: '3px' }}
                >
                  <img
                    src={heroImg}
                    alt="Ayush Mistry profile photo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                {/* Status badge */}
                <div
                  className="win-raised"
                  style={{
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'Tahoma',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#e8ffe8',
                    borderColor: '#008000 #c0e0c0 #c0e0c0 #008000',
                    width: '160px',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#00aa00',
                      display: 'inline-block',
                      border: '1px solid #006600',
                    }}
                  />
                  Available
                </div>
              </div>

              {/* Right: Info */}
              <div style={{ flex: 1, minWidth: '260px' }}>
                {/* Name section */}
                <div className="win-groupbox" style={{ marginTop: 0 }}>
                  <span className="win-groupbox-label">Personal Info</span>
                  <div style={{ marginBottom: '8px' }}>
                    <p style={{ fontSize: '10px', color: '#666', fontFamily: 'Tahoma' }}>Full Name:</p>
                    <p style={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'Tahoma', color: '#000', lineHeight: 1.2 }}>
                      Ayush Mistry
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', fontFamily: 'Tahoma' }}>Current Role:</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '24px' }}>
                      <span style={{ fontFamily: 'Courier New', fontSize: '13px', color: '#316ac5', fontWeight: 'bold' }}>
                        C:\&gt;_
                      </span>
                      <span style={{ fontFamily: 'Courier New', fontSize: '13px', fontWeight: 'bold', color: '#000' }}>
                        {displayed}
                      </span>
                      <span className="win-blink" style={{ fontFamily: 'Courier New', fontSize: '13px', fontWeight: 'bold' }}>|</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div
                  className="win-sunken"
                  style={{ padding: '8px', marginTop: '10px', fontSize: '11px', lineHeight: '1.5', fontFamily: 'Tahoma', color: '#000' }}
                >
                  I build <strong>scalable backend systems</strong>, secure REST APIs, and modern apps.
                  Focused on delivering <strong>production-ready</strong> solutions with Java &amp; Flutter.
                </div>

                {/* Tech icons row */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                  {[
                    { Icon: FaJava, color: '#f89820', label: 'Java' },
                    { Icon: SiSpringboot, color: '#6db33f', label: 'Spring' },
                    { Icon: SiFlutter, color: '#54c5f8', label: 'Flutter' },
                    { Icon: FaReact, color: '#61dafb', label: 'React' },
                  ].map(({ Icon, color, label }) => (
                    <div
                      key={label}
                      className="win-raised"
                      style={{
                        padding: '4px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '10px',
                        fontFamily: 'Tahoma',
                        cursor: 'default',
                      }}
                      title={label}
                    >
                      <Icon style={{ color, fontSize: '14px' }} aria-hidden="true" />
                      {label}
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  <button className="win-btn win-btn-primary" onClick={scrollToProjects}>
                    <FiArrowDown size={12} aria-hidden="true" /> View Projects
                  </button>
                  <a
                    href="./assets/ayushmistryresume.pdf"
                    className="win-btn"
                    download
                  >
                    <FiDownload size={12} aria-hidden="true" /> Resume
                  </a>
                  <button className="win-btn" onClick={scrollToContact}>
                    <FiMail size={12} aria-hidden="true" /> Contact Me
                  </button>
                </div>

                {/* Social links */}
                <div style={{ display: 'flex', gap: '6px', marginTop: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', fontFamily: 'Tahoma', color: '#444' }}>Links:</span>
                  {[
                    { href: import.meta.env.VITE_GITHUB, Icon: FiGithub, label: 'GitHub' },
                    { href: import.meta.env.VITE_LINKEDIN, Icon: FiLinkedin, label: 'LinkedIn' },
                    { href: `mailto:${import.meta.env.VITE_EMAIL}`, Icon: FiMail, label: 'Email' },
                  ].map(({ href, Icon, label }) => (
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
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>Portfolio loaded successfully</div>
            <div className="win-statusbar-pane">Java &amp; Flutter Developer</div>
            <div className="win-statusbar-pane">Gujarat, India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
