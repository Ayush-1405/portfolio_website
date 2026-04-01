import { useState } from 'react';
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot, SiFlutter, SiDart, SiMongodb, SiMysql, SiPostgresql,
  SiBootstrap, SiTailwindcss, SiPostman,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { MdApi } from 'react-icons/md';

const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools'];

const skills = [
  { name: 'React.js', Icon: FaReact, color: '#61dafb', level: 78, cat: 'Frontend' },
  { name: 'HTML5', Icon: FaHtml5, color: '#e34f26', level: 90, cat: 'Frontend' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6', level: 85, cat: 'Frontend' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952b3', level: 82, cat: 'Frontend' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4', level: 75, cat: 'Frontend' },
  { name: 'Java', Icon: FaJava, color: '#f89820', level: 88, cat: 'Backend' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f', level: 85, cat: 'Backend' },
  { name: 'REST APIs', Icon: MdApi, color: '#6366f1', level: 90, cat: 'Backend' },
  { name: 'JWT Auth', Icon: FaDatabase, color: '#f59e0b', level: 83, cat: 'Backend' },
  { name: 'JSP/Servlets', Icon: FaJava, color: '#f89820', level: 75, cat: 'Backend' },
  { name: 'Flutter', Icon: SiFlutter, color: '#54c5f8', level: 80, cat: 'Mobile' },
  { name: 'Dart', Icon: SiDart, color: '#0175c2', level: 80, cat: 'Mobile' },
  { name: 'API Integration', Icon: MdApi, color: '#6366f1', level: 85, cat: 'Mobile' },
  { name: 'State Mgmt', Icon: SiFlutter, color: '#02569B', level: 75, cat: 'Mobile' },
  { name: 'MySQL', Icon: SiMysql, color: '#00758f', level: 87, cat: 'Database' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#4db33d', level: 80, cat: 'Database' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', level: 70, cat: 'Database' },
  { name: 'Git', Icon: FaGitAlt, color: '#f05032', level: 85, cat: 'Tools' },
  { name: 'GitHub', Icon: FaGithub, color: '#333', level: 88, cat: 'Tools' },
  { name: 'Postman', Icon: SiPostman, color: '#ff6c37', level: 90, cat: 'Tools' },
  { name: 'VS Code', Icon: VscCode, color: '#007acc', level: 92, cat: 'Tools' },
];

function ProgressBar({ level, color }) {
  return (
    <div className="win-progress-track">
      <div
        className="win-progress-fill"
        style={{
          width: `${level}%`,
          background: `repeating-linear-gradient(90deg, ${color} 0px, ${color} 8px, ${color}99 8px, ${color}99 10px)`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const filtered = active === 'All' ? skills : skills.filter(s => s.cat === active);

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--win-desktop)', padding: '8px 0' }}>
      <div className="container-custom">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#9881;</span>
              <span>Skills &amp; Technologies - Device Manager</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" aria-label="Close">X</button>
            </div>
          </div>

          <div style={{ padding: '12px', background: 'var(--win-btn-face)' }}>
            {/* Filter tabs */}
            <div className="win-tabs" role="tablist" aria-label="Skill categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active === cat}
                  onClick={() => { setActive(cat); setSelected(null); }}
                  className={`win-tab ${active === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div
              style={{
                background: 'var(--win-window)',
                border: '2px solid',
                borderColor: 'var(--win-btn-shadow) var(--win-btn-highlight) var(--win-btn-highlight) var(--win-btn-shadow)',
                padding: '12px',
              }}
              role="tabpanel"
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '8px',
                }}
              >
                {filtered.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => setSelected(selected?.name === skill.name ? null : skill)}
                    style={{
                      border: '2px solid',
                      borderColor:
                        selected?.name === skill.name
                          ? 'var(--win-highlight)'
                          : 'var(--win-btn-shadow) var(--win-btn-highlight) var(--win-btn-highlight) var(--win-btn-shadow)',
                      background:
                        selected?.name === skill.name
                          ? 'var(--win-highlight)'
                          : 'var(--win-btn-face)',
                      padding: '8px 10px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                    role="button"
                    aria-pressed={selected?.name === skill.name}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelected(selected?.name === skill.name ? null : skill)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        className="win-raised"
                        style={{
                          width: '28px',
                          height: '28px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          background: selected?.name === skill.name ? 'rgba(255,255,255,0.2)' : 'var(--win-btn-face)',
                        }}
                      >
                        <skill.Icon
                          style={{
                            color: selected?.name === skill.name ? '#fff' : skill.color,
                            fontSize: '16px',
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: '11px',
                            fontWeight: 'bold',
                            fontFamily: 'Tahoma',
                            color: selected?.name === skill.name ? '#fff' : '#000',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {skill.name}
                        </div>
                        <div
                          style={{
                            fontSize: '9px',
                            fontFamily: 'Tahoma',
                            color: selected?.name === skill.name ? '#c8d8ff' : '#666',
                          }}
                        >
                          {skill.cat}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '10px',
                          fontFamily: 'Tahoma',
                          fontWeight: 'bold',
                          color: selected?.name === skill.name ? '#fff' : '#316ac5',
                          flexShrink: 0,
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <ProgressBar level={skill.level} color={selected?.name === skill.name ? '#ffffff' : skill.color} />
                  </div>
                ))}
              </div>
            </div>

            {/* Selected skill details panel */}
            {selected && (
              <div
                className="win-groupbox"
                style={{ marginTop: '10px' }}
              >
                <span className="win-groupbox-label">Device Properties</span>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '11px', fontFamily: 'Tahoma' }}>
                  <div
                    className="win-raised"
                    style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                  >
                    <selected.Icon style={{ color: selected.color, fontSize: '28px' }} aria-hidden="true" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '2px' }}>{selected.name}</div>
                    <div style={{ color: '#444', marginBottom: '6px' }}>Category: {selected.cat} &nbsp;|&nbsp; Proficiency: {selected.level}%</div>
                    <ProgressBar level={selected.level} color={selected.color} />
                  </div>
                  <button className="win-btn" onClick={() => setSelected(null)}>OK</button>
                </div>
              </div>
            )}
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>
              {filtered.length} {active === 'All' ? 'total' : active.toLowerCase()} skill{filtered.length !== 1 ? 's' : ''} found
            </div>
            <div className="win-statusbar-pane">{active}</div>
            {selected && <div className="win-statusbar-pane">Selected: {selected.name}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
