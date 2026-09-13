import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function Work() {
  const experiences = [
    {
      company: 'Tars Digital',
      role: 'UI Designer & Digital Marketing Intern',
      duration: '02 Months',
      period: 'Sept 2024 - Present',
      points: [
        'Designed high-fidelity user interfaces and design systems for client web and mobile apps.',
        'Collaborated on digital marketing campaigns, creative assets, and conversion-focused landing pages.',
        'Conducted user flow optimization to increase engagement and retention.',
      ],
    },
    {
      company: 'Asmi.Mindcare',
      role: 'Graphic Designer, Social Media Management & Website Development',
      duration: '01 Month',
      period: '2024',
      points: [
        'Created cohesive visual brand identity across digital social channels.',
        'Developed and maintained website layout and brand touchpoints.',
        'Managed social media visual storytelling and mental health advocacy content.',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Nav />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-mono">Order #0063 • Work Experience</span>
            <h1 className="text-4xl sm:text-5xl font-serif tracking-tight mt-2">Work Experience</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Receipt Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-xs rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/15 bg-white/5 backdrop-blur-sm p-3 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/work-experience.png"
                alt="Arnavi Bhagat - Work Experience Receipt"
                className="w-full h-auto rounded-xl object-contain drop-shadow-md"
              />
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-4 text-center">
              Itemized Career Receipt • Retain for Records
            </p>
          </div>

          {/* Detailed Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 transition-all hover:border-white/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/5">
                  <div>
                    <h2 className="text-2xl font-serif text-white">{exp.company}</h2>
                    <p className="text-sm font-medium text-emerald-400 font-mono mt-0.5">{exp.role}</p>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {exp.duration}
                    </span>
                    <p className="text-xs text-zinc-400 font-mono mt-1">{exp.period}</p>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-sm text-zinc-300">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick summary box */}
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400">Total Work Experience</span>
                <p className="text-xl font-serif text-white mt-0.5">3+ Months Hands-on Industry</p>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-colors"
              >
                Hire / Collaborate
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
