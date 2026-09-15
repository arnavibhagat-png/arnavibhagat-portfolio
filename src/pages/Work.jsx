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
    <div className="min-h-screen bg-[#EFE5DB] text-[#22201d] font-inter selection:bg-[#d8c3b0] selection:text-[#201e1c] flex flex-col justify-between">
      <Nav />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#ded3c5] gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#2d6a4f] font-inter font-semibold">
              Order #0063 • Work Experience
            </span>
            <h1 className="text-4xl sm:text-5xl font-lobster tracking-wide mt-2 text-[#22201d] font-normal">Work Experience</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#736a61] hover:text-[#22201d] font-inter font-medium transition-colors self-start md:self-auto"
          >
            <span>← Back to Pinboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Receipt Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-xs rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(40,20,10,0.12)] border border-[#ded3c5] bg-white p-3 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/images/work-experience.png"
                alt="Arnavi Bhagat - Work Experience Receipt"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <p className="text-xs text-[#736a61] font-inter mt-4 text-center">
              Itemized Career Receipt • Retain for Records
            </p>
          </div>

          {/* Detailed Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6F0] border border-[#ded3c5] rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[#ded3c5]/60">
                  <div>
                    <h2 className="text-3xl font-lobster text-[#22201d] font-normal">{exp.company}</h2>
                    <p className="text-sm font-semibold text-[#2d6a4f] font-inter mt-0.5">{exp.role}</p>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <span className="text-xs font-inter uppercase font-medium px-2.5 py-1 rounded-full bg-[#EFE5DB] border border-[#ded3c5] text-[#3d3833]">
                      {exp.duration}
                    </span>
                    <p className="text-xs text-[#736a61] font-inter mt-1">{exp.period}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2 text-sm text-[#3d3833]">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#2d6a4f] font-bold mt-0.5">▹</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Quick summary box */}
            <div className="bg-[#FAF6F0] border border-[#ded3c5] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs uppercase text-[#736a61] font-medium font-inter">Total Work Experience</span>
                <p className="text-2xl font-lobster text-[#22201d] mt-0.5 font-normal">3+ Months Hands-on Industry</p>
              </div>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-[#22201d] text-white text-xs font-inter uppercase tracking-wider font-semibold hover:bg-[#3d3833] transition-colors"
              >
                Get In Touch
              </Link>
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
