import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiFlutter, SiMongodb, SiMysql, SiDart } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { RiAiGenerate } from 'react-icons/ri';

const filterCategories = ['All', 'Backend', 'Mobile', 'Full-Stack', 'Web'];

const techIconMap = {
  React: { Icon: FaReact, color: '#61dafb' },
  'Spring Boot': { Icon: SiSpringboot, color: '#6db33f' },
  Java: { Icon: FaJava, color: '#f89820' },
  MySQL: { Icon: SiMysql, color: '#00758f' },
  MongoDB: { Icon: SiMongodb, color: '#4db33d' },
  JWT: { Icon: MdApi, color: '#6366f1' },
  AI: { Icon: RiAiGenerate, color: '#f59e0b' },
  Flutter: { Icon: SiFlutter, color: '#54c5f8' },
  Dart: { Icon: SiDart, color: '#0175c2' },
  'REST APIs': { Icon: MdApi, color: '#8b5cf6' },
  JSP: { Icon: FaJava, color: '#f89820' },
};

const projects = [
  {
    id: 1,
    title: 'Skill-Based Career Path Advisor',
    subtitle: 'AI + Resume Analyzer',
    description:
      'An AI-powered platform that analyzes resumes, identifies core skills, and recommends personalized career paths. Features include resume parsing, intelligent career recommendation engine, secure JWT authentication, and dynamic roadmap generation.',
    category: 'Full-Stack',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'AI', 'REST APIs'],
    features: ['Resume Parsing Engine', 'AI Career Recommendations', 'JWT Authentication', 'Personalized Roadmaps'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: true,
    icon: 'AI',
  },
  {
    id: 2,
    title: 'Online Examination System',
    subtitle: 'Web-based Exam Portal',
    description:
      'A full-featured web-based examination platform built with Java, JSP, Servlets, and MySQL. Supports student exam-taking with secure login, question management, automatic grading, and a comprehensive admin control panel.',
    category: 'Backend',
    tech: ['Java', 'JSP', 'MySQL', 'Spring Boot', 'REST APIs'],
    features: ['Secure Login System', 'Question Management', 'Auto Evaluation', 'Admin Dashboard'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: false,
    icon: 'DOC',
  },
  {
    id: 3,
    title: 'Online Furniture Shop',
    subtitle: 'Home Comfort E-Commerce',
    description:
      'A fully functional e-commerce platform for furniture browsing and purchasing. Includes user-facing product catalog, shopping cart, and order management — plus a robust admin panel for product and inventory control.',
    category: 'Full-Stack',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'JWT'],
    features: ['Product Catalog', 'Cart & Checkout', 'Admin Panel', 'Order Management'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: false,
    icon: 'EXE',
  },
  {
    id: 4,
    title: 'Flutter Mobile Application',
    subtitle: 'Cross-Platform Mobile App',
    description:
      'A modern cross-platform mobile application built with Flutter and Dart, connected to a Java Spring Boot backend via REST APIs. Features a clean UI, efficient state management, JWT-based authentication, and smooth UX across Android and iOS.',
    category: 'Mobile',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'MongoDB', 'JWT', 'REST APIs'],
    features: ['Cross-platform (Android/iOS)', 'REST API Integration', 'JWT Authentication', 'State Management'],
    github: 'https://github.com/Ayush-1405',
    live: null,
    featured: false,
    icon: 'APP',
  },
];

function ProjectRow({ project, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`win-listitem ${isSelected ? 'selected' : ''}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr 100px 120px',
        gap: 0,
        borderBottom: '1px solid #e8e8e8',
        padding: '3px 4px',
        cursor: 'pointer',
        fontSize: '11px',
        fontFamily: 'Tahoma',
      }}
      role="row"
      aria-selected={isSelected}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            background: isSelected ? 'rgba(255,255,255,0.2)' : 'linear-gradient(135deg, #316ac5, #0a246a)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '8px',
            fontWeight: 'bold',
            fontFamily: 'Tahoma',
            border: '1px outset #808080',
          }}
          aria-hidden="true"
        >
          {project.icon}
        </div>
      </div>
      <div style={{ padding: '0 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontWeight: 'bold' }}>{project.title}</span>
        {project.featured && (
          <span style={{ fontSize: '9px', padding: '1px 4px', background: isSelected ? 'rgba(255,255,255,0.3)' : '#0a246a', color: '#fff' }}>
            Featured
          </span>
        )}
      </div>
      <div style={{ padding: '0 8px', display: 'flex', alignItems: 'center', color: isSelected ? '#fff' : '#555' }}>
        {project.category}
      </div>
      <div style={{ padding: '0 8px', display: 'flex', alignItems: 'center', fontFamily: 'Courier New', fontSize: '10px', color: isSelected ? '#cce0ff' : '#316ac5' }}>
        {project.tech.length} technologies
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(projects[0]);
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter || (activeFilter === 'Web' && p.category === 'Full-Stack'));

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--win-desktop)', padding: '8px 0' }}>
      <div className="container-custom">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#128193;</span>
              <span>My Projects - Windows Explorer</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" aria-label="Close">X</button>
            </div>
          </div>

          {/* Menu bar */}
          <div className="win-menubar">
            <span className="win-menuitem">File</span>
            <span className="win-menuitem">Edit</span>
            <span className="win-menuitem">View</span>
            <span className="win-menuitem active">Favorites</span>
            <span className="win-menuitem">Tools</span>
            <span className="win-menuitem">Help</span>
          </div>

          {/* Toolbar */}
          <div className="win-toolbar">
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Back</button>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Forward</button>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Up</button>
            <div className="win-separator" style={{ width: '1px', height: '20px', margin: '0 4px' }} />
            <div className="win-sunken" style={{ flex: 1, padding: '2px 6px', fontSize: '11px', fontFamily: 'Tahoma' }}>
              C:\Users\Ayush\My Documents\Projects\
            </div>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 10px' }}>Go</button>
          </div>

          {/* Filter tabs */}
          <div style={{ padding: '4px 8px 0', background: 'var(--win-btn-face)' }}>
            <div className="win-tabs" role="tablist" aria-label="Project categories">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeFilter === cat}
                  onClick={() => { setActiveFilter(cat); }}
                  className={`win-tab ${activeFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Explorer layout */}
          <div style={{ display: 'flex', background: 'var(--win-btn-face)', gap: '0' }}>
            {/* Left tasks panel */}
            <div
              className="win-raised"
              style={{
                width: '170px',
                flexShrink: 0,
                margin: '8px 0 8px 8px',
                padding: '8px',
                fontSize: '11px',
                fontFamily: 'Tahoma',
                alignSelf: 'flex-start',
              }}
            >
              <div style={{ fontWeight: 'bold', fontSize: '11px', color: '#316ac5', borderBottom: '1px solid #316ac5', paddingBottom: '4px', marginBottom: '6px' }}>
                File and Folder Tasks
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <button className="win-btn" style={{ justifyContent: 'flex-start', minWidth: 'auto', padding: '3px 6px', fontSize: '11px' }}>
                  Make a new folder
                </button>
                <button className="win-btn" style={{ justifyContent: 'flex-start', minWidth: 'auto', padding: '3px 6px', fontSize: '11px' }}>
                  Share this folder
                </button>
              </div>

              <div style={{ fontWeight: 'bold', fontSize: '11px', color: '#316ac5', borderBottom: '1px solid #316ac5', paddingBottom: '4px', marginBottom: '6px', marginTop: '12px' }}>
                Other Places
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '11px' }}>
                <a href={projects[0]?.github} target="_blank" rel="noreferrer" style={{ color: '#316ac5', textDecoration: 'underline' }}>
                  GitHub Profile
                </a>
                <a href="#contact" style={{ color: '#316ac5', textDecoration: 'underline' }}>
                  Contact Me
                </a>
              </div>

              {selected && (
                <>
                  <div style={{ fontWeight: 'bold', fontSize: '11px', color: '#316ac5', borderBottom: '1px solid #316ac5', paddingBottom: '4px', marginBottom: '6px', marginTop: '12px' }}>
                    Details
                  </div>
                  <div style={{ fontSize: '10px', color: '#000' }}>
                    <strong>{selected.title}</strong><br />
                    <span style={{ color: '#555' }}>Category: {selected.category}</span><br />
                    <span style={{ color: '#555' }}>Tech: {selected.tech.length} items</span>
                  </div>
                </>
              )}
            </div>

            {/* Right files panel */}
            <div style={{ flex: 1, padding: '8px', overflowX: 'auto' }}>
              {/* Column header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr 100px 120px',
                  marginBottom: '2px',
                }}
                role="rowgroup"
              >
                {['', 'Name', 'Category', 'Tech Stack'].map((col, i) => (
                  <div
                    key={i}
                    className="win-raised"
                    style={{
                      padding: '2px 8px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      fontFamily: 'Tahoma',
                      borderRight: '1px solid var(--win-btn-shadow)',
                      cursor: 'pointer',
                    }}
                  >
                    {col}
                  </div>
                ))}
              </div>

              {/* Project rows */}
              <div
                className="win-sunken"
                style={{ background: 'var(--win-window)', marginBottom: '8px' }}
                role="grid"
                aria-label="Project list"
              >
                {filtered.map((project) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    isSelected={selected?.id === project.id}
                    onClick={() => setSelected(project)}
                  />
                ))}
              </div>

              {/* Selected project detail */}
              {selected && (
                <div className="win-window" style={{ marginTop: '8px' }}>
                  <div className="win-titlebar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '11px' }}>&#128196;</span>
                      <span>{selected.title} - Properties</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      <button className="win-titlebtn" onClick={() => setSelected(null)} aria-label="Close properties">X</button>
                    </div>
                  </div>

                  <div style={{ padding: '12px', background: 'var(--win-btn-face)' }}>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {/* Icon + title */}
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flex: 1, minWidth: '260px' }}>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #316ac5, #0a246a)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fontFamily: 'Tahoma',
                            border: '2px outset #808080',
                            flexShrink: 0,
                          }}
                          aria-hidden="true"
                        >
                          {selected.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 'bold', fontSize: '14px', fontFamily: 'Tahoma', marginBottom: '2px' }}>{selected.title}</div>
                          <div style={{ fontSize: '11px', color: '#316ac5', fontFamily: 'Tahoma', marginBottom: '4px' }}>{selected.subtitle}</div>
                          <div style={{ fontSize: '10px', background: '#e8e8f8', padding: '1px 6px', display: 'inline-block', border: '1px solid #316ac5', color: '#316ac5' }}>
                            {selected.category}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }}>
                        <a
                          href={selected.github}
                          target="_blank"
                          rel="noreferrer"
                          className="win-btn win-btn-primary"
                          style={{ textDecoration: 'none' }}
                        >
                          <FiGithub size={12} aria-hidden="true" /> View on GitHub
                        </a>
                        {selected.live && (
                          <a href={selected.live} target="_blank" rel="noreferrer" className="win-btn" style={{ textDecoration: 'none' }}>
                            <FiExternalLink size={12} aria-hidden="true" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className="win-sunken"
                      style={{ padding: '8px', marginTop: '10px', fontSize: '11px', fontFamily: 'Tahoma', lineHeight: '1.5', background: 'var(--win-window)' }}
                    >
                      {selected.description}
                    </div>

                    {/* Tech stack */}
                    <div style={{ marginTop: '8px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'Tahoma', marginBottom: '4px' }}>Technologies Used:</div>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        {selected.tech.map((t) => {
                          const config = techIconMap[t] || { Icon: null, color: '#316ac5' };
                          return (
                            <div
                              key={t}
                              className="win-raised"
                              style={{ padding: '2px 8px', fontSize: '10px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '4px' }}
                            >
                              {config.Icon && <config.Icon style={{ color: config.color, fontSize: '12px' }} aria-hidden="true" />}
                              {t}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Features */}
                    <div style={{ marginTop: '8px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 'bold', fontFamily: 'Tahoma', marginBottom: '4px' }}>Key Features:</div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '3px' }}>
                        {selected.features.map((feat) => (
                          <div key={feat} style={{ fontSize: '11px', fontFamily: 'Tahoma', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ color: '#316ac5', fontWeight: 'bold' }}>&#10003;</span> {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '6px' }}>
                      <button className="win-btn win-btn-primary" onClick={() => setSelected(null)}>OK</button>
                      <button className="win-btn" onClick={() => setSelected(null)}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>{filtered.length} object(s)</div>
            <div className="win-statusbar-pane">My Computer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
