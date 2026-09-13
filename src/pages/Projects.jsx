import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function Projects() {
  const projects = [
    {
      title: 'CuraNav',
      category: 'Visual Identity + App Design',
      tag: 'Healthcare / UX',
      description: 'A comprehensive healthcare navigation platform focusing on seamless visual identity and intuitive user flows.',
      status: 'Completed',
    },
    {
      title: 'Postpartum Care',
      category: 'Product Design + UX Research',
      tag: 'Maternal Health / Product Design',
      description: 'Empowering new mothers through evidence-based postpartum tracking, empathetic design, and supportive UX.',
      status: 'Completed',
    },
    {
      title: 'Dementia Research',
      category: 'UX Research + Product Design',
      tag: 'Cognitive Health / Assistive Tech',
      description: 'Research-driven design solutions designed with accessibility and cognitive clarity for memory care patients.',
      status: 'Completed',
    },
    {
      title: 'Deaf and Mute Students Research',
      category: 'Research Project',
      tag: 'Accessibility / Inclusive Learning',
      description: 'An inclusive research initiative exploring multimodal communication and interactive assistive tools for education.',
      status: 'In Progress',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-amber-500/30 selection:text-amber-200">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono">From the To-Do List</span>
            <h1 className="text-4xl sm:text-5xl font-serif tracking-tight mt-2">Projects & Research</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#141414] border border-white/10 hover:border-amber-400/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {project.tag}
                  </span>
                  <span className={`text-xs font-mono ${project.status === 'Completed' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    ● {project.status}
                  </span>
                </div>
                <h2 className="text-2xl font-serif text-white group-hover:text-amber-200 transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono mt-1 mb-3">
                  {project.category}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 group-hover:text-amber-300 transition-colors">
                <span>View Case Study</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
