import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlutter, SiMongodb, SiDart } from 'react-icons/si';
import { FiCode, FiSmartphone, FiServer, FiShield } from 'react-icons/fi';

const stats = [
  { label: 'Projects Built', value: '4+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Experience', value: '1+ yr' },
  { label: 'Focus Areas', value: '3' },
];

const highlights = [
  { Icon: FiServer, label: 'Backend Engineering', desc: 'Java Spring Boot, REST APIs, JWT Auth' },
  { Icon: FiSmartphone, label: 'Mobile Development', desc: 'Flutter, Dart, Cross-platform Apps' },
  { Icon: FaDatabase, label: 'Database & Storage', desc: 'MySQL, MongoDB, PostgreSQL' },
  { Icon: FiShield, label: 'Security & Auth', desc: 'JWT, Role-based Security, OAuth' },
];

const orbitIcons = [
  { Icon: FaJava, color: '#f89820', label: 'Java' },
  { Icon: SiDart, color: '#0175c2', label: 'Dart' },
  { Icon: SiFlutter, color: '#54c5f8', label: 'Flutter' },
  { Icon: FaReact, color: '#61dafb', label: 'React' },
  { Icon: SiMongodb, color: '#4db33d', label: 'MongoDB' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--win-desktop)', padding: '8px 0' }}>
      <div className="container-custom">
        {/* Section Window */}
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#128100;</span>
              <span>About Me - Ayush Mistry</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" aria-label="Close">X</button>
            </div>
          </div>

          <div style={{ padding: '16px', background: 'var(--win-btn-face)' }}>
            {/* Two-column layout */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {/* Left: Tech icons as file explorer */}
              <div className="win-window" style={{ width: '220px', flexShrink: 0 }}>
                <div className="win-titlebar win-titlebar-inactive" style={{ fontSize: '10px' }}>
                  <span>Tech Stack</span>
                </div>
                {/* Explorer toolbar */}
                <div
                  className="win-sunken"
                  style={{ margin: '4px', padding: '4px 6px', fontSize: '10px', fontFamily: 'Tahoma', color: '#555' }}
                >
                  C:\Ayush\Skills\
                </div>
                {/* Icons grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '8px',
                    padding: '12px',
                    background: 'var(--win-window)',
                    margin: '0 4px 4px',
                    border: '2px solid',
                    borderColor: 'var(--win-btn-shadow) var(--win-btn-highlight) var(--win-btn-highlight) var(--win-btn-shadow)',
                  }}
                >
                  {orbitIcons.map(({ Icon, color, label }) => (
                    <div
                      key={label}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'default', padding: '4px' }}
                      title={label}
                    >
                      <div
                        className="win-raised"
                        style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Icon style={{ color, fontSize: '22px' }} aria-hidden="true" />
                      </div>
                      <span style={{ fontSize: '9px', fontFamily: 'Tahoma', textAlign: 'center', color: '#000' }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Stats in the panel */}
                <div style={{ padding: '6px 8px 8px' }}>
                  <div className="win-separator" />
                  <div style={{ fontSize: '10px', fontFamily: 'Tahoma', color: '#444', marginBottom: '4px', fontWeight: 'bold' }}>Quick Stats</div>
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '10px',
                        fontFamily: 'Tahoma',
                        padding: '1px 0',
                        borderBottom: '1px dotted #ccc',
                      }}
                    >
                      <span style={{ color: '#444' }}>{stat.label}:</span>
                      <strong style={{ color: '#316ac5' }}>{stat.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Text panel */}
              <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="win-groupbox" style={{ marginTop: 0 }}>
                  <span className="win-groupbox-label">Bio</span>
                  <p style={{ fontSize: '11px', fontFamily: 'Tahoma', lineHeight: '1.6', marginBottom: '8px' }}>
                    I am a passionate <strong>Full-Stack Developer</strong> specializing in building high-performance backend
                    systems and intuitive mobile experiences. My expertise lies in{' '}
                    <span style={{ color: '#316ac5', fontWeight: 'bold' }}>Java Spring Boot</span> and{' '}
                    <span style={{ color: '#316ac5', fontWeight: 'bold' }}>Flutter</span>.
                  </p>
                  <p style={{ fontSize: '11px', fontFamily: 'Tahoma', lineHeight: '1.6' }}>
                    With a strong foundation in <strong>RESTful architecture</strong>, database management (MySQL &amp;
                    MongoDB), and secure authentication protocols, I focus on creating scalable, maintainable, and
                    user-centric applications.
                  </p>
                </div>

                {/* AM initials "avatar" */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div
                    className="win-raised"
                    style={{
                      width: '56px',
                      height: '56px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      fontFamily: 'Tahoma',
                      background: 'linear-gradient(135deg, #0a246a, #316ac5)',
                      color: '#fff',
                      flexShrink: 0,
                    }}
                    aria-label="Initials: Ayush Mistry"
                  >
                    AM
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '13px', fontFamily: 'Tahoma' }}>Ayush Mistry</div>
                    <div style={{ fontSize: '10px', fontFamily: 'Courier New', color: '#316ac5' }}>Full-Stack Developer</div>
                    <div style={{ fontSize: '10px', fontFamily: 'Tahoma', color: '#444' }}>Gujarat, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight cards as list view */}
            <div className="win-groupbox" style={{ marginTop: '10px' }}>
              <span className="win-groupbox-label">Areas of Expertise</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px' }}>
                {highlights.map(({ Icon, label, desc }) => (
                  <div
                    key={label}
                    className="win-listitem"
                    style={{
                      border: '1px solid var(--win-btn-shadow)',
                      padding: '6px 10px',
                      background: 'var(--win-window)',
                    }}
                  >
                    <div
                      className="win-raised"
                      style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                    >
                      <Icon size={16} style={{ color: '#316ac5' }} aria-hidden="true" />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'Tahoma', color: '#000' }}>{label}</div>
                      <div style={{ fontSize: '10px', fontFamily: 'Tahoma', color: '#555' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>4 items</div>
            <div className="win-statusbar-pane">Full-Stack Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
