import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  const inputStyle = (field) => ({
    background: focused === field ? 'rgba(255,0,255,0.04)' : 'rgba(255,255,255,0.02)',
    border: `1px solid ${focused === field ? 'rgba(255,0,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: focused === field ? '0 0 20px rgba(255,0,255,0.08)' : 'none',
  })

  const contactLinks = [
    {
      label: 'Email',
      value: 'kerolos.shokr@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:kerolos.shokr@gmail.com',
      color: '#FF00FF',
    },
    {
      label: 'Phone',
      value: '01211104197',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: 'tel:+201211104197',
      color: '#7F00FF',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/Kerolos-Shokr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: 'https://linkedin.com/in/Kerolos-Shokr',
      color: '#0077B5',
    },
    {
      label: 'GitHub',
      value: 'github.com/kerolosshokr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: 'https://github.com/kerolosshokr',
      color: '#FFFFFF',
    },
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,0,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-magenta tracking-widest uppercase">05 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-magenta/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="section-title text-5xl text-white leading-tight mb-6">
              Let's build
              <br />
              <span className="gradient-text">something great</span>
            </h2>
            <p className="font-body text-muted text-base leading-relaxed mb-10 max-w-md">
              I'm actively looking for opportunities to grow as a Full Stack .NET Developer.
              Whether it's a job opportunity, collaboration, or just a tech chat — my inbox is open.
            </p>

            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map(({ label, value, icon, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 glass glass-hover rounded-2xl px-5 py-4 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
                    {icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-muted tracking-widest uppercase">{label}</p>
                    <p className="font-body text-sm text-light group-hover:text-white transition-colors">{value}</p>
                  </div>
                  <svg className="w-4 h-4 text-muted ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass rounded-3xl p-8" style={{ borderColor: 'rgba(255,0,255,0.1)' }}>
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-sans font-700 text-white text-2xl mb-3">Message Sent!</h3>
                <p className="font-body text-muted text-sm mb-8">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus(null)} className="btn-outline px-6 py-3 rounded-xl text-sm">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase block mb-2">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Kerolos Shokr"
                    className="w-full rounded-xl px-4 py-3.5 font-body text-sm text-light placeholder:text-muted/40 outline-none transition-all duration-300"
                    style={inputStyle('name')}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase block mb-2">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="hello@example.com"
                    className="w-full rounded-xl px-4 py-3.5 font-body text-sm text-light placeholder:text-muted/40 outline-none transition-all duration-300"
                    style={inputStyle('email')}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted tracking-widest uppercase block mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Hey Kerolos, I'd love to talk about..."
                    className="w-full rounded-xl px-4 py-3.5 font-body text-sm text-light placeholder:text-muted/40 outline-none transition-all duration-300 resize-none"
                    style={inputStyle('message')}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-neon w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
