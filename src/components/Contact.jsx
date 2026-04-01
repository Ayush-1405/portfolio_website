import { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  { Icon: FiMail, label: 'Email', value: import.meta.env.VITE_EMAIL, href: `mailto:${import.meta.env.VITE_EMAIL}` },
  { Icon: FiPhone, label: 'Phone', value: import.meta.env.VITE_PHONE, href: `tel:${import.meta.env.VITE_PHONE?.replace(/\s/g, '')}` },
  { Icon: FiGithub, label: 'GitHub', value: import.meta.env.VITE_GITHUB?.replace('https://', ''), href: import.meta.env.VITE_GITHUB },
  { Icon: FiLinkedin, label: 'LinkedIn', value: import.meta.env.VITE_LINKEDIN?.replace('https://www.linkedin.com/in/', '').replace('/', ''), href: import.meta.env.VITE_LINKEDIN },
  { Icon: FiMapPin, label: 'Location', value: import.meta.env.VITE_LOCATION, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    const mailtoLink = `mailto:${import.meta.env.VITE_EMAIL}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact Form')}&body=${encodeURIComponent(`From: ${form.name}\nReply-To: ${form.email}\n\nMessage:\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--win-desktop)', padding: '8px 0' }}>
      <div className="container-custom">
        <div className="win-window">
          {/* Title bar */}
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '12px' }}>&#9993;</span>
              <span>Contact Me - New Message</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button className="win-titlebtn" aria-label="Minimize">_</button>
              <button className="win-titlebtn" aria-label="Maximize">&#9633;</button>
              <button className="win-titlebtn" aria-label="Close">X</button>
            </div>
          </div>

          {/* Outlook-style toolbar */}
          <div className="win-toolbar">
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 10px', fontWeight: 'bold' }} type="submit" form="contact-form">
              <FiSend size={12} aria-hidden="true" /> Send
            </button>
            <div className="win-separator" style={{ width: '1px', height: '20px', margin: '0 4px' }} />
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Cut</button>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Copy</button>
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Paste</button>
            <div className="win-separator" style={{ width: '1px', height: '20px', margin: '0 4px' }} />
            <button className="win-btn" style={{ minWidth: 'auto', padding: '2px 8px' }}>Address Book</button>
          </div>

          <div style={{ padding: '12px', background: 'var(--win-btn-face)', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {/* Left: contact info sidebar */}
            <div style={{ width: '200px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {/* Status */}
              <div
                className="win-raised"
                style={{ padding: '6px 10px', background: '#e8ffe8', borderColor: '#008000 #c0e0c0 #c0e0c0 #008000', fontSize: '10px', fontFamily: 'Tahoma' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px', fontWeight: 'bold', color: '#006600' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00aa00', display: 'inline-block', border: '1px solid #006600' }} />
                  Open to Opportunities
                </div>
                <div style={{ fontSize: '10px', color: '#004400', lineHeight: '1.4' }}>
                  Seeking full-time or internship roles. Available for side projects.
                </div>
              </div>

              {/* Contact entries - Outlook contact card style */}
              <div className="win-groupbox" style={{ marginTop: 0, padding: '8px' }}>
                <span className="win-groupbox-label">Address Book</span>
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '6px',
                      fontSize: '10px',
                      fontFamily: 'Tahoma',
                      padding: '3px 0',
                      borderBottom: '1px dotted #ccc',
                    }}
                  >
                    <div
                      className="win-raised"
                      style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}
                    >
                      <Icon size={11} style={{ color: '#316ac5' }} aria-hidden="true" />
                    </div>
                    <div>
                      <div style={{ color: '#666', fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          style={{ color: '#316ac5', textDecoration: 'underline', fontSize: '10px', wordBreak: 'break-all' }}
                        >
                          {value || 'N/A'}
                        </a>
                      ) : (
                        <span style={{ color: '#000', fontSize: '10px' }}>{value || 'N/A'}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: email compose form */}
            <div style={{ flex: 1, minWidth: '260px' }}>
              <form id="contact-form" onSubmit={handleSubmit}>
                {/* To / From fields like Outlook */}
                <div className="win-sunken" style={{ padding: '0', background: 'var(--win-window)', marginBottom: '2px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', borderBottom: '1px solid #ddd', alignItems: 'center' }}>
                    <label htmlFor="contact-to" style={{ padding: '4px 8px', fontSize: '11px', fontFamily: 'Tahoma', fontWeight: 'bold', background: 'var(--win-btn-face)', borderRight: '1px solid #ddd' }}>
                      To:
                    </label>
                    <div id="contact-to" style={{ padding: '4px 8px', fontSize: '11px', fontFamily: 'Tahoma', color: '#316ac5' }}>
                      {import.meta.env.VITE_EMAIL || 'ayush@example.com'}
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', borderBottom: '1px solid #ddd', alignItems: 'center' }}>
                    <label htmlFor="contact-name" style={{ padding: '4px 8px', fontSize: '11px', fontFamily: 'Tahoma', fontWeight: 'bold', background: 'var(--win-btn-face)', borderRight: '1px solid #ddd' }}>
                      From:
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="win-input"
                      style={{ border: 'none', outline: 'none', borderRadius: 0 }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', borderBottom: '1px solid #ddd', alignItems: 'center' }}>
                    <label htmlFor="contact-email" style={{ padding: '4px 8px', fontSize: '11px', fontFamily: 'Tahoma', fontWeight: 'bold', background: 'var(--win-btn-face)', borderRight: '1px solid #ddd' }}>
                      Reply-To:
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="win-input"
                      style={{ border: 'none', outline: 'none', borderRadius: 0 }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', alignItems: 'center' }}>
                    <label htmlFor="contact-subject" style={{ padding: '4px 8px', fontSize: '11px', fontFamily: 'Tahoma', fontWeight: 'bold', background: 'var(--win-btn-face)', borderRight: '1px solid #ddd' }}>
                      Subject:
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Let's build something amazing"
                      className="win-input"
                      style={{ border: 'none', outline: 'none', borderRadius: 0 }}
                    />
                  </div>
                </div>

                {/* Message body */}
                <div className="win-separator" />
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  placeholder="Tell me about your project or inquiry..."
                  className="win-textarea"
                  style={{ borderRadius: 0, resize: 'vertical', minHeight: '160px' }}
                  aria-label="Message body"
                />

                <div style={{ display: 'flex', gap: '6px', marginTop: '8px', justifyContent: 'flex-end' }}>
                  <button
                    type="submit"
                    className="win-btn win-btn-primary"
                    disabled={sending || sent}
                    style={{ opacity: sending || sent ? 0.7 : 1 }}
                  >
                    {sent ? (
                      <>&#10003; Sent!</>
                    ) : sending ? (
                      'Sending...'
                    ) : (
                      <><FiSend size={12} aria-hidden="true" /> Send Message</>
                    )}
                  </button>
                  <button type="button" className="win-btn" onClick={() => setForm({ name: '', email: '', subject: '', message: '' })}>
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="win-statusbar">
            <div className="win-statusbar-pane" style={{ flex: 1 }}>Ready</div>
            <div className="win-statusbar-pane">Open to new opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
