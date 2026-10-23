import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Home() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null)
  const [hoveredSticker, setHoveredSticker] = useState(null)

  const interactiveItems = [
    {
      id: 'about',
      title: 'About Me',
      route: '/about',
      style: {
        left: '2.8%',
        top: '8.6%',
        width: '32.3%',
        height: '45.0%',
      },
      previewSrc: '/images/id-card.png',
      previewAlt: 'Arnavi Bhagat ID card',
      tagColor: 'bg-[#1e293b]/95 text-cyan-200 border-cyan-400/50',
      hoverStyle: 'border-2 border-cyan-200/70 bg-cyan-400/10 shadow-[0_0_20px_rgba(6,182,212,0.35)]',
      icon: '🪪',
    },
    {
      id: 'projects',
      title: 'Projects',
      route: '/projects',
      style: {
        left: '10.8%',
        top: '54.2%',
        width: '22.0%',
        height: '36.4%',
      },
      previewSrc: '/images/todo-list.png',
      previewAlt: 'Portfolio project to-do list',
      tagColor: 'bg-[#1c1917]/95 text-amber-200 border-amber-300/50',
      hoverStyle: 'border-2 border-amber-200/70 bg-amber-400/10 shadow-[0_0_20px_rgba(251,191,36,0.35)]',
      icon: '📝',
    },
    {
      id: 'work',
      title: 'Work Experience',
      route: '/projects',
      style: {
        left: '75.0%',
        top: '13.5%',
        width: '22.0%',
        height: '78.5%',
      },
      previewSrc: '/images/work-experience.png',
      previewAlt: 'Arnavi Bhagat work experience',
      tagColor: 'bg-[#064e3b]/95 text-emerald-200 border-emerald-400/50',
      hoverStyle: 'border-2 border-emerald-200/70 bg-emerald-400/10 shadow-[0_0_20px_rgba(16,185,129,0.35)]',
      icon: '🧾',
    },
  ]

  const foregroundStickers = [
    {
      id: 'music-monk',
      tagline: 'Deep focus & zen vibe 🎧',
      style: { left: '67.9%', top: '57.9%', width: '7.5%', height: '23.4%' },
    },
    {
      id: 'figureoutable',
      tagline: 'Everything is figureoutable ✨',
      style: { left: '64.0%', top: '80.1%', width: '11.4%', height: '9.6%' },
    },
  ]

  return (
    <div className="min-h-screen bg-[#EFE5DB] text-[#22201d] font-inter overflow-x-hidden flex flex-col justify-between">
      <Nav />

      <main className="flex-1 flex flex-col justify-center">
        {/* ─── HERO: Full-width pinboard with beige frame ─── */}
        <section className="w-full select-none relative">
          {/* Aspect ratio wrapper: 1796 × 811 → 45.1559% */}
          <div className="relative w-full pb-[45.156%]">
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
                  className={`absolute cursor-pointer rounded-xl transition-[z-index] duration-300 ${isHovered ? 'z-30' : 'z-20'}`}
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
                  <div className="w-full h-full rounded-xl" />
                  {/* Enlarged card preview */}
                  <div
                    className={`absolute inset-0 pointer-events-none z-40 w-full h-full transition-all duration-300 ease-out ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
                    }`}
                  >
                    <img
                      src={item.previewSrc}
                      alt={item.previewAlt}
                      className="w-full h-full object-contain drop-shadow-[0_18px_24px_rgba(40,20,10,0.28)]"
                    />
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
      </main>

      {/* Subtle bottom space/footer */}
      <footer className="w-full py-4 text-center text-xs text-[#736a61]/80 font-inter">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
