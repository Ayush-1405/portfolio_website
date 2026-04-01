import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  {
    Icon: FiMail,
    label: 'Email',
    value: import.meta.env.VITE_EMAIL,
    href: `mailto:${import.meta.env.VITE_EMAIL}`,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    value: import.meta.env.VITE_PHONE,
    href: `tel:${import.meta.env.VITE_PHONE?.replace(/\s/g, '')}`,
    color: 'from-purple-500 to-pink-600',
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    value: import.meta.env.VITE_GITHUB?.replace('https://', ''),
    href: import.meta.env.VITE_GITHUB,
    color: 'from-gray-600 to-gray-800',
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: import.meta.env.VITE_LINKEDIN?.replace('https://www.linkedin.com/in/', '').replace('/', ''),
    href: import.meta.env.VITE_LINKEDIN,
    color: 'from-blue-600 to-blue-700',
  },
  {
    Icon: FiMapPin,
    label: 'Location',
    value: import.meta.env.VITE_LOCATION,
    href: null,
    color: 'from-green-500 to-teal-600',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    // Short simulation delay for UI feedback
    await new Promise(r => setTimeout(r, 1000));
    
    // Format email content
    const mailtoLink = `mailto:${import.meta.env.VITE_EMAIL}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact Form')}&body=${encodeURIComponent(
      `From: ${form.name}\nReply-To: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    
    // Trigger default email client
    window.location.href = mailtoLink;
    
    setSending(false);
    setSent(true);
    
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-tag justify-center mb-4">Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            Open to internship opportunities, freelance projects, and collaborations. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -translate-y-12 translate-x-12" />
              <h3 className="font-space font-bold text-xl text-[var(--text-primary)] mb-4">Work Status</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                Currently seeking <span className="text-indigo-400 font-semibold">full-time or internship</span> roles.
                Available for interesting side projects and open-source contributions.
              </p>
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Open to new projects</span>
              </div>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value, href, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/5 hover:border-indigo-500/30 group transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-0.5">{label}</p>
                        <p className="text-[var(--text-primary)] font-medium truncate group-hover:text-indigo-400 transition-colors">{value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-0.5">{label}</p>
                        <p className="text-[var(--text-primary)] font-medium">{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-10 rounded-3xl border border-white/5 flex flex-col gap-6"
            >
              <div className="mb-2">
                <h3 className="font-space font-bold text-2xl text-[var(--text-primary)] mb-2">Send Message</h3>
                <p className="text-[var(--text-secondary)] text-sm">Have a question or proposal? I'll get back to you shortly.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ayush Mistry"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/30 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="ayush@example.com"
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/30 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Let's build something amazing"
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/30 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest ml-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me more about your project..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/5 text-[var(--text-primary)] placeholder-[var(--text-secondary)]/30 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.08] transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary justify-center py-4 mt-2 text-base font-bold tracking-wide disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(99,102,241,0.2)]"
              >
                {sent ? (
                  '✅ Message Sent!'
                ) : sending ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <FiSend />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
