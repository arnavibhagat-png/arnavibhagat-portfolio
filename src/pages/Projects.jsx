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
    <div className="min-h-screen bg-[#EFE5DB] text-[#22201d] font-inter selection:bg-[#d8c3b0] selection:text-[#201e1c] flex flex-col justify-between">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ded3c5] gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8c4a3e] font-inter font-semibold">
              From the To-Do List
            </span>
            <h1 className="text-4xl sm:text-5xl font-lobster tracking-wide mt-2 text-[#22201d] font-normal">Projects & Research</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#736a61] hover:text-[#22201d] font-inter font-medium transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FAF6F0] border border-[#ded3c5] hover:border-[#8c4a3e]/50 hover:bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(40,20,10,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-inter uppercase font-medium px-2.5 py-1 rounded-full bg-[#EFE5DB] border border-[#ded3c5] text-[#554e46]">
                    {project.tag}
                  </span>
                  <span
                    className={`text-xs font-inter font-semibold ${
                      project.status === 'Completed' ? 'text-[#2d6a4f]' : 'text-[#b45309]'
                    }`}
                  >
                    ● {project.status}
                  </span>
                </div>
                <h2 className="text-3xl font-lobster text-[#22201d] group-hover:text-[#8c4a3e] transition-colors font-normal">
                  {project.title}
                </h2>
                <p className="text-xs text-[#736a61] uppercase tracking-wider font-inter font-medium mt-1 mb-3">
                  {project.category}
                </p>
                <p className="text-sm text-[#3d3833] leading-relaxed font-inter">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ded3c5]/60 flex items-center justify-between text-xs text-[#736a61] group-hover:text-[#8c4a3e] font-inter font-semibold transition-colors">
                <span>View Case Study</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full border-t border-[#ded3c5] px-4 py-6 text-center text-xs text-[#736a61] font-inter bg-[#eae0d5]/40 mt-12">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
