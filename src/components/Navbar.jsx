
import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Experience', 'Projects', 'Skills','Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'glass rounded-2xl mx-6 px-6 py-4' : ''
      }`}>
        {/* Logo */}
        <button onClick={() => scrollTo('Home')} className="flex items-center gap-2 group">
          <div className="relative">
            <span className="font-sans font-800 text-xl text-white tracking-tight">K</span>
            <span className="neon-text font-sans font-800 text-xl">S</span>
            <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-magenta to-violet opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Portfolio</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-4 py-2 rounded-lg font-body text-sm font-500 tracking-wide transition-all duration-300 relative group ${
                active === link ? 'text-white' : 'text-muted hover:text-light'
              }`}
            >
              {active === link && (
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-magenta/10 to-violet/10 border border-magenta/20" />
              )}
              <span className="relative">{link}</span>
              {active !== link && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-magenta to-violet group-hover:w-4 transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* CTA - Contact Me Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo('Contact')}
            className="btn-neon text-sm px-5 py-2 rounded-lg flex items-center gap-2 group"
          >
            <span>Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-px w-6 bg-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-px w-4 bg-light transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : ''}`} />
          <span className={`block h-px w-6 bg-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass mx-6 mt-2 rounded-2xl p-4 flex flex-col gap-2">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-left px-4 py-3 rounded-lg font-body text-sm transition-all ${
                active === link ? 'text-magenta bg-magenta/5' : 'text-muted hover:text-light'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="btn-neon text-sm px-5 py-3 rounded-xl text-center mt-2 flex items-center justify-center gap-2"
          >
            <span>Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
