import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFFAF6] text-[#22201d] font-inter selection:bg-[#d8c3b0] selection:text-[#201e1c] flex flex-col justify-between">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ded3c5] gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8c4a3e] font-inter font-semibold">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-lobster tracking-wide mt-2 text-[#22201d] font-normal">Let's Connect</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#736a61] hover:text-[#22201d] font-inter font-medium transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
            <h2 className="text-3xl font-lobster text-[#22201d] font-normal">Have a project in mind?</h2>
            <p className="text-sm text-[#554e46] leading-relaxed">
              I'm always excited to collaborate on new UX/UI projects, design systems, visual branding, or research initiatives.
            </p>
            <div className="space-y-3 pt-3">
              <div className="flex items-center gap-3 text-sm text-[#3d3833]">
                <span className="p-2 rounded-lg bg-[#FFFAF6] border border-[#ded3c5]">📍</span>
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#3d3833]">
                <span className="p-2 rounded-lg bg-[#FFFAF6] border border-[#ded3c5]">✉️</span>
                <span>arnavibhagat@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase text-[#736a61] font-medium font-inter">Connect Directly</span>
              <h3 className="text-2xl font-lobster text-[#22201d] mt-1 font-normal">Social & Professional Links</h3>
              <p className="text-xs text-[#736a61] mt-2 font-inter">Find my latest work, prototypes, and thoughts across platforms.</p>
            </div>

            <div className="space-y-2.5 pt-2 font-inter">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#ded3c5] hover:border-[#8c4a3e] hover:shadow-sm text-sm font-medium text-[#22201d] transition-all"
              >
                <span>LinkedIn Profile</span>
                <span className="text-[#8c4a3e]">↗</span>
              </a>
              <a
                href="https://figma.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#ded3c5] hover:border-[#8c4a3e] hover:shadow-sm text-sm font-medium text-[#22201d] transition-all"
              >
                <span>Figma Community / Portfolio</span>
                <span className="text-[#8c4a3e]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-[#ded3c5] px-4 py-6 text-center text-xs text-[#736a61] font-inter bg-[#eae0d5]/40 mt-12">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
