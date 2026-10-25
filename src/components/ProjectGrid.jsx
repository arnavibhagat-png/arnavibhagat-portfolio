import ScrollReveal from './ScrollReveal'

const projects = [
  {
    title: 'CuraNav',
    category: 'Visual Identity + App Design',
    tag: 'Healthcare / UX',
    description:
      'A comprehensive healthcare navigation platform focusing on seamless visual identity and intuitive user flows.',
    status: 'Completed',
  },
  {
    title: 'Postpartum Care',
    category: 'Product Design + UX Research',
    tag: 'Maternal Health / Product Design',
    description:
      'Empowering new mothers through evidence-based postpartum tracking, empathetic design, and supportive UX.',
    status: 'Completed',
  },
  {
    title: 'Dementia Research',
    category: 'UX Research + Product Design',
    tag: 'Cognitive Health / Assistive Tech',
    description:
      'Research-driven design solutions designed with accessibility and cognitive clarity for memory care patients.',
    status: 'Completed',
  },
  {
    title: 'Deaf and Mute Students Research',
    category: 'Research Project',
    tag: 'Accessibility / Inclusive Learning',
    description:
      'An inclusive research initiative exploring multimodal communication and interactive assistive tools for education.',
    status: 'In Progress',
  },
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ScrollReveal key={project.title} className="h-full">
          <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-[#ded3c5] bg-[#FAF6F0] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8c4a3e]/50 hover:bg-white hover:shadow-[0_12px_30px_rgba(40,20,10,0.1)] sm:p-8">
            <div>
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="rounded-full border border-[#ded3c5] bg-[#FFFAF6] px-2.5 py-1 text-xs font-medium text-[#554e46]">
                  {project.tag}
                </span>
                <span
                  className={`text-xs font-semibold ${
                    project.status === 'Completed' ? 'text-[#2d6a4f]' : 'text-[#b45309]'
                  }`}
                >
                  ● {project.status}
                </span>
              </div>
              <h2 className="text-3xl font-normal text-[#22201d] font-lobster transition-colors group-hover:text-[#8c4a3e]">
                {project.title}
              </h2>
              <p className="mb-3 mt-1 text-xs font-medium uppercase tracking-wider text-[#736a61]">
                {project.category}
              </p>
              <p className="text-sm leading-relaxed text-[#3d3833]">{project.description}</p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#ded3c5]/60 pt-4 text-xs font-semibold text-[#736a61] transition-colors group-hover:text-[#8c4a3e]">
              <span>View Case Study</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  )
}
