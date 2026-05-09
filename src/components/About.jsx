export default function About() {
  const highlights = [
    { icon: '⚡', label: 'Clean Architecture', desc: 'Building scalable, maintainable systems' },
    { icon: '🔗', label: 'RESTful APIs', desc: 'Designing and consuming APIs efficiently' },
    { icon: '🎨', label: 'React Frontend', desc: 'Building modern, responsive UIs' },
    { icon: '🗄️', label: 'SQL Server', desc: 'Database design & query optimization' },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-magenta tracking-widest uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-magenta/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="section-title text-5xl text-white leading-tight mb-8">
              Passionate about
              <br />
              <span className="gradient-text">building things</span>
              <br />
              that matter
            </h2>

            <div className="space-y-4 text-muted font-body text-base leading-relaxed">
              <p>
                I'm a Junior Full Stack .NET Developer who started my programming journey over <span className="text-light font-500">4 years ago</span>, driven by pure curiosity and a love for problem-solving. Currently pursuing my Bachelor's in Information Systems at Modern Academy.
              </p>
              <p>
                I specialize in building web applications using <span className="text-magenta font-500">ASP.NET Core</span> and <span className="text-violet font-500">React</span>, with a strong focus on Clean Architecture principles, RESTful APIs, and writing code that's both elegant and maintainable.
              </p>
              <p>
                My experience spans real-world internships at <span className="text-light font-500">Orascom Development</span> and the <span className="text-light font-500">Digital Egypt Pioneers Initiative (DEPI)</span>, where I sharpened my skills on production-level systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {['C#', '.NET Core', 'React', 'SQL Server', 'Clean Architecture', 'OOP', 'Git', 'Web API'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon, label, desc }) => (
              <div key={label} className="glass glass-hover rounded-2xl p-6 group cursor-default">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-sans font-700 text-white text-base mb-2 group-hover:text-magenta transition-colors">{label}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Big accent card */}
            <div className="col-span-2 glass rounded-2xl p-6 relative overflow-hidden"
              style={{ borderColor: 'rgba(255,0,255,0.15)', background: 'rgba(255,0,255,0.03)' }}>
              <div className="absolute right-4 top-4 font-mono text-7xl font-800 text-magenta/5 select-none pointer-events-none leading-none">&lt;/&gt;</div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-2">Currently</p>
              <p className="font-sans font-700 text-white text-xl">Back-End .NET Trainee</p>
              <p className="font-body text-muted text-sm mt-1">Digital Egypt Pioneers Initiative (DEPI) · 2025 – Present</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
