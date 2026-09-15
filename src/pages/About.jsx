import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-[#EFE5DB] text-[#22201d] font-inter selection:bg-[#d8c3b0] selection:text-[#201e1c] flex flex-col justify-between">
      <Nav />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ded3c5] gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8c4a3e] font-inter font-semibold">Creative License #0026</span>
            <h1 className="text-4xl sm:text-5xl font-lobster tracking-wide mt-2 text-[#22201d] font-normal">About Me</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#736a61] hover:text-[#22201d] font-inter font-medium transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Card visual preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(40,20,10,0.12)] border border-[#ded3c5] bg-white p-2.5 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/id-card.png"
                alt="Arnavi Bhagat - Creative License ID Card"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <p className="text-xs text-[#736a61] font-inter mt-4 text-center">
              Licensed UX & Visual Designer • Valid: Does Not Expire
            </p>
          </div>

          {/* Bio info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-3xl font-lobster text-[#22201d] font-normal">Hi, I'm Arnavi Bhagat 👋</h2>
              <p className="text-[#3d3833] text-base leading-relaxed">
                I am a passionate <strong className="text-[#22201d] font-semibold">UX Designer</strong> and <strong className="text-[#22201d] font-semibold">Visual Designer</strong> based in Nagpur, Maharashtra.
                My mission is simple: to create, design, think, and make digital experiences intuitive, empathetic, and visually captivating.
              </p>
              <p className="text-[#6e655c] text-sm leading-relaxed">
                With a blend of user research, interaction design, and aesthetic craftsmanship, I transform complex problems into clean, accessible digital interfaces that delight users and deliver measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-xl p-5 shadow-sm">
                <span className="text-xs uppercase text-[#736a61] font-medium">Location</span>
                <p className="text-lg font-semibold text-[#22201d] mt-1">Nagpur, India</p>
              </div>
              <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-xl p-5 shadow-sm">
                <span className="text-xs uppercase text-[#736a61] font-medium">Core Expertise</span>
                <p className="text-lg font-semibold text-[#22201d] mt-1">UX / UI / Visual</p>
              </div>
            </div>

            <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-lobster text-[#22201d] mb-3 font-normal">Core Toolset & Skills</h3>
              <div className="flex flex-wrap gap-2 font-inter">
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
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#EFE5DB] border border-[#d8ccbe] text-[#3d3833]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
