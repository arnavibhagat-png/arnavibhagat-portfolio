import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

// Polaroid strip hotspot definitions
// Image: 682 x 1024px. Each polaroid occupies a vertical slice.
// Hotspot x range: ~10% to 90% (the polaroid frame within the strip)
// Vertical positions measured from the strip image
const polaroidHotspots = [
  {
    id: 'postpartum',
    title: 'Postpartum Care',
    description: 'A mindful journaling & self-reflection app designed to help users develop healthy mental habits through guided prompts, mood tracking, and daily rituals.',
    category: 'Product Design + UX Research',
    // top, height as % of the strip image height
    top: '1%',
    height: '23%',
  },
  {
    id: 'curanav',
    title: 'CuraNav',
    description: 'A comprehensive geriatric health management platform connecting elderly patients with caregivers, featuring medication tracking, appointment scheduling, and emergency SOS.',
    category: 'Healthcare UX + Visual Design',
    top: '27%',
    height: '23%',
  },
  {
    id: 'ar-vr',
    title: 'AR Experience',
    description: 'CamGuide — an augmented reality app for photography enthusiasts that provides real-time composition guides, camera settings suggestions, and scene analysis overlays.',
    category: 'Interaction Design + AR/VR',
    top: '52%',
    height: '24%',
  },
  {
    id: 'dementia',
    title: 'Dementia Research',
    description: 'Research-driven UX for a dedicated device designed to assist dementia patients with daily reminders, family communication, and cognitive exercises through an accessible interface.',
    category: 'Assistive Tech + UX Research',
    top: '77%',
    height: '23%',
  },
]

export default function Home() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null)
  const [hoveredSticker, setHoveredSticker] = useState(null)
  const [hoveredPolaroid, setHoveredPolaroid] = useState(null)

  const interactiveItems = [
    {
      id: 'about',
      title: 'About Me',
      route: '/about',
      style: {
        left: '6.74%',
        top: '8.72%',
        width: '37.31%',
        height: '33.28%',
      },
      tagColor: 'bg-[#1e293b]/95 text-cyan-200 border-cyan-400/50',
      hoverStyle: 'border-2 border-cyan-200/70 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.35)]',
      icon: '🪪',
    },
    {
      id: 'projects',
      title: 'Projects',
      route: '/projects',
      style: {
        left: '12.08%',
        top: '53.56%',
        width: '25.39%',
        height: '34.37%',
      },
      tagColor: 'bg-[#1c1917]/95 text-amber-200 border-amber-300/50',
      hoverStyle: 'border-2 border-amber-200/70 bg-amber-400/10 shadow-[0_0_20px_rgba(251,191,36,0.35)]',
      icon: '📝',
    },
    {
      id: 'work',
      title: 'Work Experience',
      route: '/work',
      style: {
        left: '68.60%',
        top: '21.04%',
        width: '27.34%',
        height: '70.16%',
      },
      tagColor: 'bg-[#064e3b]/95 text-emerald-200 border-emerald-400/50',
      hoverStyle: 'border-2 border-emerald-200/70 bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.35)]',
      icon: '🧾',
    },
  ]

  const foregroundStickers = [
    {
      id: 'music-monk',
      tagline: 'Deep focus & zen vibe 🎧',
      style: { left: '3.8%', top: '33%', width: '8.5%', height: '16%' },
    },
    {
      id: 'figureoutable',
      tagline: 'Everything is figureoutable ✨',
      style: { left: '67%', top: '87%', width: '14%', height: '8%' },
    },
  ]

  return (
    <div className="min-h-screen bg-[#EFE5DB] text-[#22201d] font-inter overflow-x-hidden flex flex-col">
      <Nav />

      <main className="flex-1 flex flex-col">

        {/* ─── HERO: Full-width pinboard with beige frame ─── */}
        <section className="w-full select-none relative">
          {/* Aspect ratio wrapper: 1796 × 1193 → 66.4254% */}
          <div className="relative w-full pb-[66.4254%]">
            <img
              src="/images/hero-board.png"
              alt="Arnavi Bhagat Pinboard Hero"
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
              loading="eager"
            />

            {/* Clickable interactive hotspots */}
            {interactiveItems.map((item) => {
              const isHovered = activeItem === item.id
              return (
                <div
                  key={item.id}
                  style={item.style}
                  className={`absolute cursor-pointer rounded-xl transition-all duration-250 ${isHovered ? 'z-30' : 'z-20'}`}
                  onMouseEnter={() => setActiveItem(item.id)}
                  onMouseLeave={() => setActiveItem(null)}
                  onClick={() => navigate(item.route)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(item.route) }
                  }}
                >
                  <div
                    className={`w-full h-full rounded-xl transition-all duration-250 ${
                      isHovered
                        ? `${item.hoverStyle}`
                        : 'border-2 border-transparent hover:border-white/20'
                    }`}
                  />
                  {/* Tooltip */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-2 pointer-events-none z-40 whitespace-nowrap transition-all duration-250 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}
                  >
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${item.tagColor}`}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                      <span className="text-[10px]">→</span>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Sticker hover areas */}
            {foregroundStickers.map((s) => (
              <div
                key={s.id}
                style={s.style}
                className="absolute z-40 rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredSticker(s.id)}
                onMouseLeave={() => setHoveredSticker(null)}
              >
                <div className={`w-full h-full rounded-xl transition-all duration-250 ${
                  hoveredSticker === s.id ? 'border-2 border-white/60 bg-white/10' : 'border border-transparent'
                }`} />
                <div className={`absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none transition-all duration-250 ${
                  hoveredSticker === s.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                }`}>
                  <div className="px-2.5 py-0.5 rounded-full text-[11px] font-inter font-medium bg-stone-900/90 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-lg">
                    {s.tagline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── TEXT SECTION: Statement + description ─── */}
        <section className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-4 text-center">
          {/* Lobster quote */}
          <h2 className="font-lobster font-normal text-4xl sm:text-5xl md:text-6xl text-[#3a2210] leading-tight">
            Design isn't about screens, it's about helping someone choose what to do next
          </h2>

          {/* Inter medium description */}
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl text-[#5c534b] leading-relaxed mt-5 sm:mt-7">
            a UX designer driven by curiosity about people, their behavior, and the psychology behind the way we experience things
          </p>
        </section>

        {/* ─── HANGING POLAROIDS: Project showcase using the exact uploaded strip image ─── */}
        <section className="w-full flex flex-col items-center pb-20 sm:pb-28 pt-2">
          <div className="flex flex-col items-center">

            {/* Hanging polaroid strip with project hotspots */}
            <div className="hanging-element relative select-none" style={{ width: 'clamp(340px, 58vw, 760px)' }}>

              {/* The actual image — 682x1024, aspect-ratio maintained */}
              <img
                src="/images/polaroid-projects-strip.png"
                  alt="Project Polaroids — Postpartum Care, CuraNav, AR Experience, Dementia Research"
                draggable="false"
                className="w-full h-auto object-contain pointer-events-none select-none"
              />

              {/* Invisible hover hotspots over each polaroid */}
              {polaroidHotspots.map((p, index) => (
                <div
                  key={p.id}
                  className="absolute left-[8%] w-[84%] cursor-pointer"
                  style={{ top: p.top, height: p.height }}
                  onMouseEnter={() => setHoveredPolaroid(p.id)}
                  onMouseLeave={() => setHoveredPolaroid(null)}
                  onClick={() => navigate('/projects')}
                  role="button"
                  tabIndex={0}
                  aria-label={`View project: ${p.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate('/projects') }}
                >
                  {/* Hover overlay glow */}
                  <div className="w-full h-full rounded-xl" />

                  {/* Description popup — appears to the RIGHT of the polaroid strip */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-56 sm:w-64 pointer-events-none z-50 transition-all duration-300 ${
                      index % 2 === 0 ? 'left-[105%]' : 'right-[105%]'
                    } ${
                      hoveredPolaroid === p.id
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-2'
                    }`}
                  >
                    <div className="bg-white/95 backdrop-blur-sm border border-[#ded3c5] rounded-2xl p-4 shadow-[0_12px_30px_rgba(40,20,10,0.14)]">
                      <span className="text-[10px] uppercase tracking-widest text-[#8c4a3e] font-inter font-semibold">{p.category}</span>
                      <h3 className="font-lobster font-normal text-xl text-[#3a2210] mt-1 leading-tight">{p.title}</h3>
                      <p className="text-sm sm:text-base font-inter text-[#5c534b] leading-relaxed mt-2">{p.description}</p>
                      <div className="mt-3 flex items-center gap-1 text-[11px] font-inter font-semibold text-[#8c4a3e]">
                        <span>View case study</span>
                        <span>→</span>
                      </div>
                    </div>
                    {/* Arrow pointing left back to polaroid */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-[#ded3c5] rotate-45 ${
                      index % 2 === 0
                        ? '-left-2 border-l border-b'
                        : '-right-2 border-r border-t'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/projects"
            className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-sm font-inter font-semibold text-[#8c4a3e] hover:text-[#3a2210] transition-colors group"
          >
            <span>View all projects</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#ded3c5] px-4 py-6 text-center text-xs text-[#736a61] font-inter bg-[#eae0d5]/40">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
