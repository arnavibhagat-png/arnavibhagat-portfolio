import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Nav />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">Creative License #0026</span>
            <h1 className="text-4xl sm:text-5xl font-serif tracking-tight mt-2">About Me</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Card visual preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/15 bg-white/5 backdrop-blur-sm p-2 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/id-card.png"
                alt="Arnavi Bhagat - Creative License ID Card"
                className="w-full h-auto rounded-xl object-contain drop-shadow-md"
              />
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-4 text-center">
              Licensed UX & Visual Designer • Valid: Does Not Expire
            </p>
          </div>

          {/* Bio info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-2xl font-serif text-white">Hi, I'm Arnavi Bhagat 👋</h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                I am a passionate <strong className="text-white font-medium">UX Designer</strong> and <strong className="text-white font-medium">Visual Designer</strong> based in Nagpur, Maharashtra.
                My mission is simple: to create, design, think, and make digital experiences intuitive, empathetic, and visually captivating.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                With a blend of user research, interaction design, and aesthetic craftsmanship, I transform complex problems into clean, accessible digital interfaces that delight users and deliver measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#141414] border border-white/10 rounded-xl p-5">
                <span className="text-xs font-mono uppercase text-zinc-400">Location</span>
                <p className="text-lg font-medium text-white mt-1">Nagpur, India</p>
              </div>
              <div className="bg-[#141414] border border-white/10 rounded-xl p-5">
                <span className="text-xs font-mono uppercase text-zinc-400">Core Expertise</span>
                <p className="text-lg font-medium text-white mt-1">UX / UI / Visual</p>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-3">Core Toolset & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'UX Research',
                  'UI Design',
                  'Figma',
                  'Wireframing & Prototyping',
                  'Design Systems',
                  'Visual Identity',
                  'User Testing',
                  'Accessibility (a11y)',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
