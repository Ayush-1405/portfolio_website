import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    short: 'MCA',
    institution: 'Sardar Patel University',
    duration: '2024 – Present',
    location: 'Vallabh Vidyanagar, Gujarat',
    status: 'Ongoing',
    description:
      'Pursuing advanced studies in computer applications with focus on software engineering, system design, and modern development practices.',
    highlights: ['Software Engineering', 'System Design', 'Advanced Algorithms', 'Project Development'],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    short: 'BCA',
    institution: 'Sardar Patel University',
    duration: '2020 – 2023',
    location: 'Vallabh Vidyanagar, Gujarat',
    status: 'Completed',
    description:
      'Completed foundational studies in computer applications covering programming fundamentals, database management, web technologies, and software development.',
    highlights: ['Programming Fundamentals', 'Database Management', 'Web Technologies', 'Software Development'],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: 'var(--win-desktop)', padding: '8px 0' }}>
      <div className="container-custom">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#127891;</span>
              <span>Education &amp; Qualifications - System Information</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" aria-label="Close">X</button>
            </div>
          </div>

          <div style={{ padding: '12px', background: 'var(--win-btn-face)' }}>
            {/* System info panel layout */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {/* Left tree */}
              <div
                className="win-sunken"
                style={{
                  width: '170px',
                  flexShrink: 0,
                  background: 'var(--win-window)',
                  padding: '4px 0',
                  alignSelf: 'flex-start',
                }}
                role="tree"
                aria-label="Education tree"
              >
                <div style={{ padding: '4px 8px', fontSize: '11px', fontWeight: 'bold', fontFamily: 'Tahoma', borderBottom: '1px solid #ccc', marginBottom: '2px' }}>
                  Academic Background
                </div>
                <div role="treeitem" style={{ padding: '2px 8px 2px 20px', fontSize: '11px', fontFamily: 'Tahoma', cursor: 'default', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px' }}>&#9660;</span> Degrees
                </div>
                {education.map((edu, i) => (
                  <div
                    key={i}
                    role="treeitem"
                    style={{
                      padding: '2px 8px 2px 32px',
                      fontSize: '11px',
                      fontFamily: 'Tahoma',
                      cursor: 'default',
                      background: i === 0 ? 'var(--win-highlight)' : 'transparent',
                      color: i === 0 ? '#fff' : '#000',
                    }}
                  >
                    {edu.short}
                  </div>
                ))}
                <div role="treeitem" style={{ padding: '2px 8px 2px 20px', fontSize: '11px', fontFamily: 'Tahoma', cursor: 'default', marginTop: '4px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px' }}>&#9658;</span> Certifications
                </div>
                <div role="treeitem" style={{ padding: '2px 8px 2px 20px', fontSize: '11px', fontFamily: 'Tahoma', cursor: 'default', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px' }}>&#9658;</span> Awards
                </div>
              </div>

              {/* Right detail panel */}
              <div style={{ flex: 1, minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {education.map((edu, i) => (
                  <div key={i} className="win-groupbox" style={{ marginTop: 0 }}>
                    <span className="win-groupbox-label">{edu.short} – {edu.institution}</span>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                      {/* Degree badge */}
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #0a246a, #316ac5)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '2px outset #808080',
                          color: '#fff',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          fontFamily: 'Tahoma',
                        }}
                        aria-label={`${edu.short} degree badge`}
                      >
                        {edu.short}
                      </div>

                      <div style={{ flex: 1, minWidth: '180px' }}>
                        {edu.status === 'Ongoing' && (
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '2px 8px',
                              background: '#e8ffe8',
                              border: '1px solid #008000',
                              fontSize: '10px',
                              fontFamily: 'Tahoma',
                              color: '#006600',
                              marginBottom: '6px',
                            }}
                          >
                            <span
                              className="win-blink"
                              style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00aa00', display: 'inline-block' }}
                            />
                            Ongoing
                          </div>
                        )}

                        <div style={{ fontWeight: 'bold', fontSize: '12px', fontFamily: 'Tahoma', marginBottom: '4px' }}>
                          {edu.degree}
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                          <span style={{ fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '3px', color: '#444' }}>
                            <FiAward size={10} aria-hidden="true" /> {edu.institution}
                          </span>
                          <span style={{ fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '3px', color: '#444' }}>
                            <FiCalendar size={10} aria-hidden="true" /> {edu.duration}
                          </span>
                          <span style={{ fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '3px', color: '#444' }}>
                            <FiMapPin size={10} aria-hidden="true" /> {edu.location}
                          </span>
                        </div>

                        <div
                          className="win-sunken"
                          style={{ padding: '6px', fontSize: '11px', fontFamily: 'Tahoma', lineHeight: '1.5', marginBottom: '8px' }}
                        >
                          {edu.description}
                        </div>

                        {/* Highlights as property list */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                          {edu.highlights.map(h => (
                            <div
                              key={h}
                              style={{
                                fontSize: '10px',
                                fontFamily: 'Tahoma',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                padding: '2px 0',
                              }}
                            >
                              <span style={{ color: '#316ac5', fontWeight: 'bold' }}>&#10003;</span>
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>{education.length} items</div>
            <div className="win-statusbar-pane">Sardar Patel University</div>
          </div>
        </div>
      </div>
    </section>
  );
}
