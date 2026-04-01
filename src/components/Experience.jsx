import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { SiFlutter, SiMongodb, SiDart } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const experiences = [
  {
    company: 'Tech Elecon Pvt. Ltd.',
    role: 'Flutter Application Developer Intern',
    duration: 'Dec 2025 – Present',
    location: 'Anand, Gujarat',
    type: 'Internship',
    icons: [SiFlutter, SiDart, SiMongodb, FaJava],
    iconLabels: ['Flutter', 'Dart', 'MongoDB', 'Java'],
    iconColors: ['#54c5f8', '#0175c2', '#4db33d', '#f89820'],
    responsibilities: [
      'Developed and maintained responsive Flutter applications with clean, modern UI designs',
      'Integrated REST APIs with Java Spring Boot backend services for seamless data flow',
      'Worked with MongoDB for backend data storage and retrieval features',
      'Improved application performance and UI responsiveness across Android and iOS platforms',
      'Participated in debugging, testing, and code reviews in an agile team environment',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--win-desktop)', padding: '8px 0' }}>
      <div className="container-custom">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#128188;</span>
              <span>Work Experience - Event Viewer</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" aria-label="Close">X</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win-menubar">
            <span className="win-menuitem">Log</span>
            <span className="win-menuitem">View</span>
            <span className="win-menuitem">Options</span>
            <span className="win-menuitem">Help</span>
          </div>

          <div style={{ display: 'flex', background: 'var(--win-btn-face)', height: '100%' }}>
            {/* Left pane: log types */}
            <div
              className="win-sunken"
              style={{
                width: '160px',
                flexShrink: 0,
                background: 'var(--win-window)',
                margin: '8px 0 8px 8px',
                padding: '4px 0',
                overflowY: 'auto',
              }}
              aria-label="Log type list"
            >
              {['Application', 'System', 'Security', 'Career'].map((item, i) => (
                <div
                  key={item}
                  className={`win-listitem ${item === 'Career' ? 'selected' : ''}`}
                  style={{ fontSize: '11px' }}
                >
                  <span aria-hidden="true">{i === 3 ? '>' : ' '}</span> {item}
                </div>
              ))}
            </div>

            {/* Right pane: event entries */}
            <div style={{ flex: 1, padding: '8px', overflowX: 'auto' }}>
              {/* Column headers */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr 160px 130px',
                  gap: '0',
                  marginBottom: '2px',
                }}
              >
                {['Type', 'Description', 'Source', 'Date'].map((col) => (
                  <div
                    key={col}
                    className="win-raised"
                    style={{
                      padding: '2px 8px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      fontFamily: 'Tahoma',
                      borderRight: '1px solid var(--win-btn-shadow)',
                    }}
                  >
                    {col}
                  </div>
                ))}
              </div>

              {/* Entry row */}
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="win-sunken"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr 160px 130px',
                    gap: '0',
                    background: 'var(--win-window)',
                    marginBottom: '1px',
                    cursor: 'default',
                  }}
                >
                  <div style={{ padding: '4px 8px', fontSize: '10px', fontFamily: 'Tahoma', borderRight: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#00aa00', fontWeight: 'bold' }}>i</span>
                    <span style={{ color: '#00aa00' }}>Active</span>
                  </div>
                  <div style={{ padding: '4px 8px', fontSize: '11px', fontWeight: 'bold', fontFamily: 'Tahoma', borderRight: '1px solid #ddd' }}>
                    {exp.role}
                  </div>
                  <div style={{ padding: '4px 8px', fontSize: '11px', fontFamily: 'Tahoma', borderRight: '1px solid #ddd', color: '#316ac5' }}>
                    {exp.company}
                  </div>
                  <div style={{ padding: '4px 8px', fontSize: '10px', fontFamily: 'Tahoma', fontFamily: 'Courier New' }}>
                    {exp.duration}
                  </div>
                </div>
              ))}

              {/* Detail panel */}
              {experiences.map((exp, i) => (
                <div key={i} className="win-groupbox" style={{ marginTop: '10px' }}>
                  <span className="win-groupbox-label">Event Detail</span>

                  <div style={{ display: 'flex', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <div className="win-raised" style={{ padding: '3px 10px', fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#00aa00', fontWeight: 'bold', fontSize: '12px' }}>&#10003;</span>
                      {exp.type}
                    </div>
                    <div className="win-raised" style={{ padding: '3px 10px', fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiCalendar size={11} aria-hidden="true" /> {exp.duration}
                    </div>
                    <div className="win-raised" style={{ padding: '3px 10px', fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiMapPin size={11} aria-hidden="true" /> {exp.location}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    {exp.icons.map((Icon, j) => (
                      <div
                        key={j}
                        className="win-raised"
                        style={{ padding: '3px 8px', fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '4px', color: exp.iconColors[j] }}
                      >
                        <Icon size={12} aria-hidden="true" /> {exp.iconLabels[j]}
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities as event log entries */}
                  <div
                    className="win-sunken"
                    style={{ padding: '6px 8px', background: 'var(--win-window)', fontFamily: 'Courier New', fontSize: '11px' }}
                  >
                    {exp.responsibilities.map((r, j) => (
                      <div key={j} style={{ display: 'flex', gap: '8px', marginBottom: '3px', lineHeight: '1.4' }}>
                        <span style={{ color: '#316ac5', flexShrink: 0 }}>[{String(j + 1).padStart(2, '0')}]</span>
                        <span style={{ color: '#000' }}>{r}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end', gap: '6px' }}>
                    <button className="win-btn">Previous</button>
                    <button className="win-btn">Next</button>
                    <button className="win-btn win-btn-primary">Close</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>Career log: {experiences.length} entry</div>
            <div className="win-statusbar-pane">Status: Active</div>
          </div>
        </div>
      </div>
    </section>
  );
}
