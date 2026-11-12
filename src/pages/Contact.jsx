import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFFAF6] text-[#22201d] font-poppins selection:bg-[#d8c3b0] selection:text-[#201e1c] flex flex-col justify-between">
      <Nav />
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ded3c5] gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#310C02] font-poppins font-semibold">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bowlby tracking-wide mt-2 text-[#22201d] font-normal">Let's Connect</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#736a61] hover:text-[#22201d] font-poppins font-medium transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#310C02] border border-[#310C02] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
            <h2 className="text-3xl font-bubbler text-[#FFFAF6] font-bold">Have a project in mind?</h2>
            <p className="text-sm text-[#eae0d5] leading-relaxed font-poppins">
              I'm always excited to collaborate on new UX/UI projects, design systems, visual branding, or research initiatives.
            </p>
            <div className="space-y-3 pt-3">
              <a
                href="tel:+918806567626"
                className="flex items-center gap-3 text-sm text-[#FFFAF6] font-poppins no-underline"
              >
                <span className="p-2 rounded-lg bg-[#FFFAF6] border border-[#ded3c5]">📞</span>
                <span>8806567626</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[#FFFAF6] font-poppins">
                <span className="p-2 rounded-lg bg-[#FFFAF6] border border-[#ded3c5]">✉️</span>
                <span>arnavibhagat@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="bg-[#310C02] border border-[#310C02] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase text-[#e8c9a8] font-medium font-poppins">Connect Directly</span>
              <h3 className="text-2xl font-bubbler text-[#FFFAF6] mt-1 font-bold">Social &amp; Professional Links</h3>
              <p className="text-xs text-[#eae0d5] mt-2 font-poppins">Find my latest work, prototypes, and thoughts across platforms.</p>
            </div>

            <div className="space-y-2.5 pt-2 font-poppins">
              <a
                href="https://www.behance.net/arnavibhagat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#ded3c5] hover:border-[#310C02] hover:shadow-sm text-sm font-medium text-[#22201d] transition-all"
              >
                <span>Behance Portfolio</span>
                <span className="text-[#310C02]">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arnavi-bhagat-1a4497275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#ded3c5] hover:border-[#310C02] hover:shadow-sm text-sm font-medium text-[#22201d] transition-all"
              >
                <span>LinkedIn Profile</span>
                <span className="text-[#310C02]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-[#ded3c5] px-4 py-6 text-xs text-[#736a61] font-poppins bg-[#eae0d5]/40 mt-12 flex flex-col items-center gap-3">
        <span>Arnavi Bhagat • UX &amp; Visual Designer Portfolio • Nagpur, India</span>
        <nav className="site-footer-links" aria-label="Social profiles">
          <a href="https://www.behance.net/arnavibhagat" target="_blank" rel="noopener noreferrer">
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/arnavi-bhagat-1a4497275"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </footer>
    </div>
  )
}
