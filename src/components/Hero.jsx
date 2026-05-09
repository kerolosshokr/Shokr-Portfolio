import { useEffect, useState, useRef } from 'react'
import avatarImg from '../assets/avatar.png'

const roles = [
  'Full Stack .NET Developer',
  'ASP.NET Core Specialist',
  'React Frontend Engineer',
  'Clean Architecture Advocate',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIdx, setCharIdx] = useState(0)
  const canvasRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 30)
        return () => clearTimeout(t)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [charIdx, typing, roleIdx])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '#FF00FF' : '#7F00FF',
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,0,255,${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px pointer-events-none overflow-hidden" style={{ top: 0, height: '100%' }}>
        <div className="absolute left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255,0,255,0.03), transparent)',
            animation: 'scanLine 8s linear infinite',
          }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-magenta/20">
              <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
              <span className="font-mono text-xs text-muted tracking-widest uppercase">Available for opportunities</span>
            </div>

            <div className="mb-4">
              <span className="font-mono text-sm text-muted tracking-widest">Hello, I'm</span>
            </div>

            <h1 className="section-title text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-6">
              Kerolos
              <br />
              <span className="gradient-text">Shokr</span>
            </h1>

            <div className="h-12 mb-6 flex items-center">
              <span className="font-body text-xl text-light font-300">{displayed}</span>
              <span className="cursor-blink ml-0.5 w-0.5 h-6 bg-magenta inline-block" />
            </div>

            <p className="font-body text-muted text-base leading-relaxed mb-10 max-w-lg">
             Full Stack .NET Developer specializing in building secure, scalable, 
                and high-performance web applications using modern technologies and clean architecture principles .
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => scrollTo('projects')} className="btn-neon px-8 py-4 rounded-xl text-sm">
                View Projects →
              </button>
              <a href="/cv.pdf" download className="btn-outline px-8 py-4 rounded-xl text-sm">
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { val: '4+', label: 'Years Learning' },
                { val: '3+', label: 'Internships' },
                { val: '10+', label: 'Projects Built' },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="font-sans text-3xl font-800 gradient-text leading-none">{val}</div>
                  <div className="font-mono text-xs text-muted mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="orbit-ring" style={{
                  width: '420px', height: '420px',
                  borderColor: 'rgba(255,0,255,0.15)',
                  animationDuration: '20s'
                }} />
                <div className="orbit-ring absolute" style={{
                  width: '360px', height: '360px',
                  borderColor: 'rgba(127,0,255,0.1)',
                  animationDuration: '15s',
                  animationDirection: 'reverse'
                }} />
              </div>

              {/* Floating skill badges */}
              {[
                { label: 'ASP.NET Core', angle: -30, r: 200 },
                { label: 'React', angle: 60, r: 200 },
                { label: 'SQL Server', angle: 150, r: 200 },
                { label: 'Clean Arch', angle: 230, r: 200 },
              ].map(({ label, angle, r }) => {
                const rad = (angle * Math.PI) / 180
                const x = Math.cos(rad) * r
                const y = Math.sin(rad) * r
                return (
                  <div
                    key={label}
                    className="absolute glass rounded-lg px-3 py-1.5 z-20 whitespace-nowrap"
                    style={{
                      left: `calc(50% + ${x}px - 50px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                      borderColor: 'rgba(255,0,255,0.2)',
                    }}
                  >
                    <span className="font-mono text-[10px] text-magenta">{label}</span>
                  </div>
                )
              })}

              {/* Avatar container */}
              <div className="relative w-72 h-72 rounded-full" style={{
                background: 'linear-gradient(135deg, #FF00FF, #7F00FF)',
                padding: '2px',
              }}>
                <div className="w-full h-full rounded-full overflow-hidden bg-bg">
                  <img
                    src={avatarImg}
                    alt="Kerolos Shokr"
                    className="w-full h-full object-cover "
                    style={{
                      objectPosition: 'center 20%',
                      transform:'scale(1.1)'
                    }}
                  />
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-full animate-glow-pulse" style={{
                  background: 'transparent',
                  boxShadow: '0 0 60px rgba(255,0,255,0.3), 0 0 120px rgba(127,0,255,0.2)',
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
