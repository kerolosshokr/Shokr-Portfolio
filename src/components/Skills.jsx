import { useState, useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    color: '#7F00FF',
    skills: [
      { name: 'C# / .NET', level: 82, icon: '⚙️' },
      { name: 'ASP.NET Core', level: 78, icon: '🔧' },
      { name: 'Web API / REST', level: 80, icon: '🔗' },
      { name: 'Clean Architecture', level: 72, icon: '🏗️' },
      { name: 'Entity Framework', level: 70, icon: '🗺️' },
    ],
  },
  {
    category: 'Database',
    color: '#FF00FF',
    skills: [
      { name: 'SQL Server', level: 78, icon: '🗄️' },
      { name: 'Database Design', level: 75, icon: '📐' },
      { name: 'Query Optimization', level: 68, icon: '⚡' },
      { name: 'LINQ', level: 72, icon: '🔍' },
    ],
  },
  {
    category: 'Frontend',
    color: '#00BBFF',
    skills: [
      { name: 'React.js', level: 72, icon: '⚛️' },
      { name: 'JavaScript', level: 76, icon: '📜' },
      { name: 'HTML / CSS', level: 85, icon: '🎨' },
      { name: 'Tailwind CSS', level: 70, icon: '💅' },
    ],
  },
  {
    category: 'Tools & Concepts',
    color: '#FFB800',
    skills: [
      { name: 'Git / GitHub', level: 80, icon: '📦' },
      { name: 'OOP Principles', level: 85, icon: '🧩' },
      { name: 'Visual Studio', level: 82, icon: '🖥️' },
      { name: 'Problem Solving', level: 78, icon: '🧠' },
    ],
  },
]

const techBadges = [
  { name: 'C#', color: '#7F00FF' },
  { name: '.NET Core', color: '#7F00FF' },
  { name: 'ASP.NET', color: '#7F00FF' },
  { name: 'Web API', color: '#7F00FF' },
  { name: 'Entity Framework', color: '#7F00FF' },
  { name: 'Clean Architecture', color: '#FF00FF' },
  { name: 'SQL Server', color: '#FF00FF' },
  { name: 'LINQ', color: '#FF00FF' },
  { name: 'React.js', color: '#00BBFF' },
  { name: 'JavaScript', color: '#00BBFF' },
  { name: 'HTML5/CSS3', color: '#00BBFF' },
  { name: 'Tailwind', color: '#00BBFF' },
  { name: 'Git', color: '#FFB800' },
  { name: 'OOP', color: '#FFB800' },
  { name: 'RESTful APIs', color: '#FFB800' },
  { name: 'C++', color: '#888' },
]

function SkillBar({ skill, color, visible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{skill.icon}</span>
          <span className="font-body text-sm text-light">{skill.name}</span>
        </div>
        <span className="font-mono text-xs" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: visible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const active = skillGroups[activeTab]

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(127,0,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-magenta tracking-widest uppercase">04 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-magenta/30 to-transparent" />
        </div>

        <h2 className="section-title text-5xl text-white leading-tight mb-4">
          Technical
          <br />
          <span className="gradient-text">arsenal</span>
        </h2>
        <p className="font-body text-muted text-base mb-16 max-w-lg">
          A curated overview of the technologies and tools I work with regularly.
        </p>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillGroups.map((group, i) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 rounded-xl font-mono text-xs font-500 tracking-wide transition-all duration-300"
              style={{
                background: activeTab === i ? `${group.color}15` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeTab === i ? group.color + '40' : 'rgba(255,255,255,0.06)'}`,
                color: activeTab === i ? group.color : '#888',
                boxShadow: activeTab === i ? `0 0 20px ${group.color}20` : 'none',
              }}
            >
              {group.category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill bars */}
          <div className="glass rounded-3xl p-8"
            style={{ borderColor: `${active.color}20`, background: `${active.color}05` }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 rounded-full" style={{ background: `linear-gradient(to bottom, ${active.color}, ${active.color}44)` }} />
              <h3 className="font-sans font-700 text-white text-xl">{active.category}</h3>
            </div>
            <div className="space-y-6">
              {active.skills.map(skill => (
                <SkillBar key={skill.name} skill={skill} color={active.color} visible={visible} />
              ))}
            </div>
          </div>

          {/* Right side: All tech badges + languages */}
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-5">All Technologies</p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map(({ name, color }) => (
                  <span
                    key={name}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg cursor-default transition-all duration-300 hover:scale-105"
                    style={{
                      background: `${color}0D`,
                      border: `1px solid ${color}25`,
                      color: color,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Language proficiency */}
            <div className="glass rounded-2xl p-6" style={{ borderColor: 'rgba(255,0,255,0.1)' }}>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-5">Languages</p>
              <div className="space-y-4">
                {[
                  { lang: 'Arabic', level: 'Native', pct: 100, color: '#FF00FF' },
                  { lang: 'English', level: 'Professional Working', pct: 75, color: '#7F00FF' },
                ].map(({ lang, level, pct, color }) => (
                  <div key={lang}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-sm text-light">{lang}</span>
                      <span className="font-mono text-xs text-muted">{level}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{
                        width: visible ? `${pct}%` : '0%',
                        background: `linear-gradient(90deg, ${color}, ${color}88)`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div className="glass rounded-2xl p-6" style={{ borderColor: 'rgba(127,0,255,0.1)' }}>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-4">Currently Learning</p>
              <div className="flex flex-wrap gap-2">
                {['Microservices', 'Docker', 'Azure', 'SignalR', 'gRPC'].map(t => (
                  <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-lg"
                    style={{
                      background: 'rgba(127,0,255,0.08)',
                      border: '1px solid rgba(127,0,255,0.2)',
                      color: '#AA55FF',
                    }}>
                    {t} →
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
