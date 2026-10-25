import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ProjectGrid from '../components/ProjectGrid'

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FFFAF6] text-[#22201d] font-inter selection:bg-[#d8c3b0] selection:text-[#201e1c] flex flex-col justify-between">
      <Nav />
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ded3c5] gap-4">
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
        </ScrollReveal>

        <ProjectGrid />
      </main>

      <footer className="w-full border-t border-[#ded3c5] px-4 py-6 text-center text-xs text-[#736a61] font-inter bg-[#eae0d5]/40 mt-12">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
