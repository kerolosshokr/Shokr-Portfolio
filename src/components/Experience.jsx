import orascomLogo from '../assets/orascom.png'

const education = [
  {
    period: '2022 – 2026',
    degree: "Bachelor's Degree",
    institution: 'Modern Academy',
    field: 'Management Information Systems',
    desc: "I'm a student of Information Systems at Modern Academy, expected to graduate in 2026 with a Bachelor's degree in MIS.",
    color: '#00BBFF',
  },
]

const experiences = [
  {
    period: '2025 – Present',
    role: 'Back-End .NET Trainee',
    company: 'Digital Egypt Pioneers Initiative (DEPI)',
    logo: null,
    initials: 'DE',
    color: '#7F00FF',
    active: true,
    challenge: 'Building scalable, maintainable web applications using ASP.NET Core and .NET Framework.',
    action: 'Implemented Clean Architecture across 3+ project modules, developed RESTful APIs, and followed modern software engineering best practices.',
    result: 'Delivered production-ready, clean, and maintainable back-end code with improved scalability.',
  },
  {
    period: 'Aug 2024 – Sep 2024',
    role: 'Software Development Intern',
    company: 'Orascom Development',
    logo: orascomLogo,
    initials: 'OD',
    color: '#FF00FF',
    active: false,
    challenge: 'Developing scalable software solutions and assisting in real-world web application development.',
    action: 'Collaborated on .NET-based applications, wrote SQL queries for data management, performed testing and debugging to improve performance.',
    result: 'Gained hands-on experience in enterprise software development and team collaboration.',
  },
  {
    period: 'Jun 2023 – Sep 2023',
    role: 'IT Intern',
    company: 'Golden Beach Hotel',
    logo: null,
    initials: 'GB',
    color: '#FFB800',
    active: false,
    challenge: 'Providing technical support for 50+ employees while maintaining stable network infrastructure.',
    action: 'Resolved hardware/software/network issues, configured LAN/Wi-Fi, and maintained hotel management systems (PMS).',
    result: 'Ensured stable daily IT operations and improved team productivity through timely technical support.',
  },
]

function TimelineDot({ color, active }) {
  return (
    <div className="relative flex items-center justify-center w-4 h-4 flex-shrink-0">
      {active && (
        <div className="absolute w-5 h-5 rounded-full animate-ping opacity-30" style={{ background: color }} />
      )}
      <div className="w-3.5 h-3.5 rounded-full border-2 z-10"
        style={{ borderColor: color, background: active ? color : '#0D0D0D', boxShadow: `0 0 10px ${color}66` }} />
    </div>
  )
}

function EducationCard({ item }) {
  return (
    <div className="relative flex gap-4 items-start mb-6">
      <div className="flex flex-col items-center flex-shrink-0 mt-1">
        <TimelineDot color={item.color} active={true} />
        <div className="w-px mt-2 flex-1 min-h-8" style={{ background: `linear-gradient(to bottom, ${item.color}44, transparent)` }} />
      </div>
      <div className="flex-1 glass glass-hover rounded-2xl p-5 relative overflow-hidden"
        style={{ borderColor: `${item.color}25`, background: `${item.color}05` }}>
        <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none rounded-bl-full"
          style={{ background: `radial-gradient(circle at top right, ${item.color}10, transparent 70%)` }} />
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] px-2.5 py-1 rounded-md"
            style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}>
            🎓 {item.field}
          </span>
          <span className="font-mono text-[10px] text-muted">{item.period}</span>
        </div>
        <h3 className="font-sans font-700 text-white text-base mb-0.5">{item.degree}</h3>
        <p className="font-body text-sm mb-3" style={{ color: item.color }}>{item.institution}</p>
        <p className="font-body text-xs text-muted leading-relaxed">{item.desc}</p>
      </div>
    </div>
  )
}

function ExperienceCard({ exp }) {
  return (
    <div className="relative flex gap-4 items-start mb-6">
      <div className="flex flex-col items-center flex-shrink-0 mt-1">
        <TimelineDot color={exp.color} active={exp.active} />
        <div className="w-px mt-2 flex-1 min-h-8" style={{ background: `linear-gradient(to bottom, ${exp.color}44, transparent)` }} />
      </div>
      <div className="flex-1 glass glass-hover rounded-2xl p-5 relative overflow-hidden"
        style={{ borderColor: exp.active ? `${exp.color}30` : 'rgba(255,255,255,0.06)', background: exp.active ? `${exp.color}05` : 'rgba(255,255,255,0.02)' }}>
        {exp.active && (
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${exp.color}06` }} />
        )}
        <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
          style={{ background: `radial-gradient(circle at top right, ${exp.color}08, transparent 70%)` }} />

        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}>
              {exp.logo
                ? <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
                : <span className="font-sans font-800 text-sm" style={{ color: exp.color }}>{exp.initials}</span>}
            </div>
            <div>
              {exp.active && (
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                  <span className="font-mono text-[9px] text-green-400 tracking-widest uppercase">Active</span>
                </div>
              )}
              <h3 className="font-sans font-700 text-white text-sm leading-tight">{exp.role}</h3>
              <p className="font-body text-xs mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
            </div>
          </div>
          <span className="font-mono text-[10px] text-muted whitespace-nowrap flex-shrink-0">{exp.period}</span>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2.5 p-3 rounded-xl" style={{ background: 'rgba(255,180,0,0.04)', border: '1px solid rgba(255,180,0,0.12)' }}>
            <div className="flex-shrink-0 pt-0.5 flex items-start gap-1">
              <svg className="w-3 h-3 text-yellow-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <span className="font-mono text-[9px] text-yellow-500 uppercase tracking-wider">Challenge</span>
            </div>
            <p className="font-body text-[11px] text-muted leading-relaxed">{exp.challenge}</p>
          </div>

          <div className="flex gap-2.5 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex-shrink-0 pt-0.5 flex items-start gap-1">
              <svg className="w-3 h-3 text-light mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-mono text-[9px] text-light uppercase tracking-wider">Action</span>
            </div>
            <p className="font-body text-[11px] text-muted leading-relaxed">{exp.action}</p>
          </div>

          <div className="flex gap-2.5 p-3 rounded-xl" style={{ background: 'rgba(0,200,100,0.04)', border: '1px solid rgba(0,200,100,0.12)' }}>
            <div className="flex-shrink-0 pt-0.5 flex items-start gap-1">
              <svg className="w-3 h-3 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-[9px] text-green-400 uppercase tracking-wider">Result</span>
            </div>
            <p className="font-body text-[11px] text-muted leading-relaxed">{exp.result}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 rounded-full pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FF00FF40, #7F00FF40, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-magenta tracking-widest uppercase">02 / Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-magenta/30 to-transparent" />
        </div>

        <h2 className="section-title text-5xl text-white leading-tight mb-4">
          Where I've
          <br />
          <span className="gradient-text">worked & learned</span>
        </h2>
        <p className="font-body text-muted text-base mb-16 max-w-lg">
          Real-world experience across internships and training programs, building production-level systems.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #00BBFF, #00BBFF44)' }} />
              <h3 className="font-sans font-700 text-white text-2xl">Education</h3>
            </div>
            <div className="relative">
              <div className="absolute left-[6px] top-2 bottom-0 w-px pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, rgba(0,187,255,0.35), transparent)' }} />
              {education.map((item) => (
                <EducationCard key={item.degree} item={item} />
              ))}
              <div className="flex items-center gap-4">
                <div className="w-3.5 h-3.5 rounded-full border border-dashed flex-shrink-0"
                  style={{ borderColor: 'rgba(0,187,255,0.3)' }} />
                <span className="font-mono text-xs text-muted">More milestones ahead...</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 rounded-full" style={{ background: 'linear-gradient(to bottom, #FF00FF, #7F00FF)' }} />
              <h3 className="font-sans font-700 text-white text-2xl">Experience</h3>
            </div>
            <div className="relative">
              <div className="absolute left-[6px] top-2 bottom-0 w-px pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, rgba(255,0,255,0.35), rgba(127,0,255,0.2), transparent)' }} />
              {experiences.map((exp) => (
                <ExperienceCard key={exp.company} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
