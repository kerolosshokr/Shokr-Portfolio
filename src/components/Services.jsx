import { useState } from 'react'

const services = [
  {
    title: 'Backend Development',
    description: 'Building robust and scalable backend systems with ASP.NET Core, following Clean Architecture principles.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    tags: ['ASP.NET Core', 'C#', 'Web API', 'EF Core'],
  },
  {
    title: 'Frontend Development',
    description: 'Crafting modern, responsive, and interactive user interfaces using React and modern web technologies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tags: ['React', 'JavaScript', 'Tailwind', 'HTML5'],
  },
  {
    title: 'Database Design',
    description: 'Designing efficient database schemas optimized for performance, scalability, and data integrity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    tags: ['SQL Server', 'Entity Framework', 'T-SQL', 'LINQ'],
  },
  {
    title: 'API Development',
    description: 'Building secure, well-documented RESTful APIs for web and mobile applications with best practices.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tags: ['REST API', 'Swagger', 'JWT Auth', 'Postman'],
  },
  {
    title: 'Web Applications',
    description: 'Developing full-featured web applications using the modern .NET ecosystem with clean code.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    tags: ['ASP.NET MVC', 'Razor Pages', 'Blazor', 'SignalR'],
  },
  {
    title: 'Clean Architecture',
    description: 'Implementing maintainable and testable software using SOLID principles and design patterns.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    tags: ['SOLID', 'DDD', 'CQRS', 'MediatR'],
  },
]

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FF00FF, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7F00FF, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-magenta/20">
            <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
            <span className="font-mono text-xs text-muted tracking-widest uppercase">What I Offer</span>
          </div>

          <h2 className="section-title text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
            My <span className="gradient-text">Services</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-magenta" />
            <div className="w-2 h-2 rounded-full bg-magenta" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-magenta" />
          </div>

          <p className="font-body text-muted text-base max-w-2xl mx-auto leading-relaxed">
            Delivering high-quality solutions tailored to your business needs with modern technologies
            and best development practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative glass rounded-2xl p-8 border border-white/5 hover:border-magenta/30 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                transform: hoveredIdx === idx ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {/* Animated gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,0,255,0.05), rgba(127,0,255,0.05))',
                }}
              />

              {/* Glow effect */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none blur-3xl"
                style={{ background: 'radial-gradient(circle, #FF00FF, transparent)' }}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-magenta/30 text-magenta transition-all duration-500 group-hover:scale-110 group-hover:border-magenta/60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,0,255,0.1), rgba(127,0,255,0.1))',
                  }}
                >
                  {service.icon}
                </div>

                {/* Number indicator */}
                <span className="absolute top-0 right-0 font-mono text-xs text-muted/50">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-700 text-xl text-white mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-magenta/20 text-magenta/80 bg-magenta/5 hover:border-magenta/50 hover:text-magenta transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom border glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px transition-all duration-500"
                style={{
                  background: 'linear-gradient(to right, transparent, #FF00FF, transparent)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="font-body text-muted text-sm mb-6">
            Have a project in mind? Let's discuss how I can help bring it to life.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-neon px-8 py-4 rounded-xl text-sm inline-flex items-center gap-2 group"
          >
            <span>Start a Project</span>
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
      </div>
    </section>
  )
}