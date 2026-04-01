import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  {
    Icon: FiMail,
    label: 'Email',
    value: 'ayushmistry0054@gmail.com',
    href: 'mailto:ayushmistry0054@gmail.com',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    Icon: FiPhone,
    label: 'Phone',
    value: '+91 7622831980',
    href: 'tel:+917622831980',
    color: 'from-purple-500 to-pink-600',
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Ayush-1405',
    href: 'https://github.com/Ayush-1405',
    color: 'from-gray-600 to-gray-800',
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayush-mistry14',
    href: 'https://www.linkedin.com/in/ayush-mistry14/',
    color: 'from-blue-600 to-blue-700',
  },
  {
    Icon: FiMapPin,
    label: 'Location',
    value: 'Gujarat, India',
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
    await new Promise(r => setTimeout(r, 800));
    
    // Format email content
    const mailtoLink = `mailto:ayushmistry0054@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact Form')}&body=${encodeURIComponent(
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Get In Touch</div>
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm">
            Open to internship opportunities, freelance projects, and collaborations. Let's build something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass-card glow-border rounded-2xl p-5 mb-2">
              <h3 className="font-space font-bold text-[var(--text-primary)] mb-1">Available for Opportunities</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Currently seeking <span className="text-indigo-400 font-semibold">full-time or internship</span> roles in
                backend development, mobile development, or full-stack engineering.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-code">Open to work</span>
              </div>
            </div>

            {contactInfo.map(({ Icon, label, value, href, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 4, scale: 1.01 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 glass-card glow-border rounded-xl group"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white text-sm" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-[var(--text-secondary)]">{label}</div>
                      <div className="text-sm text-[var(--text-primary)] font-medium truncate group-hover:text-indigo-400 transition-colors">{value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 p-3 glass-card rounded-xl">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white text-sm" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-secondary)]">{label}</div>
                      <div className="text-sm text-[var(--text-primary)] font-medium">{value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card glow-border rounded-2xl p-8 flex flex-col gap-5"
            >
              <h3 className="font-space font-bold text-xl text-[var(--text-primary)]">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Your Name', placeholder: 'Ayush Mistry', type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'you@example.com', type: 'email' },
                ].map(field => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[var(--text-secondary)]">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[var(--text-secondary)]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Let's collaborate on a project..."
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 text-sm focus:outline-none focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[var(--text-secondary)]">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 text-sm focus:outline-none focus:border-indigo-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary justify-center py-3 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? (
                  '✅ Message Sent!'
                ) : sending ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
