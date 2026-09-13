import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Home() {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null)
  const [hoveredSticker, setHoveredSticker] = useState(null)

  const interactiveItems = [
    {
      id: 'about',
      title: 'About Me',
      subtitle: 'Creative License #0026',
      route: '/about',
      imgSrc: '/images/id-card.png',
      alt: 'Arnavi Bhagat ID Card - Creative License (About Me)',
      style: {
        left: '6.737%',
        top: '8.801%',
        width: '37.695%',
        aspectRatio: '677 / 412',
      },
      tagColor: 'bg-cyan-500/95 text-white border-cyan-400/40 shadow-[0_8px_20px_rgba(6,182,212,0.4)]',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]',
      description: 'UX & Visual Designer bio, philosophy & background',
      badge: 'About Me',
      icon: '🪪',
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Featured Case Studies & UX Research',
      route: '/projects',
      imgSrc: '/images/todo-list.png',
      alt: 'To-Do List - CuraNav, Postpartum Care, Dementia Research (Projects)',
      style: {
        left: '13.029%',
        top: '54.484%',
        width: '27.840%',
        aspectRatio: '500 / 420',
      },
      tagColor: 'bg-amber-400/95 text-black border-amber-300/60 shadow-[0_8px_20px_rgba(251,191,36,0.4)]',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(251,191,36,0.5)]',
      description: 'CuraNav, Postpartum Care & assistive UX projects',
      badge: 'Projects',
      icon: '📝',
    },
    {
      id: 'work',
      title: 'Work Experience',
      subtitle: 'Itemized Career Receipt',
      route: '/work',
      imgSrc: '/images/work-experience.png',
      alt: 'Work Experience Receipt - Tars Digital, Asmi.Mindcare (Experience)',
      style: {
        left: '67.372%',
        top: '17.100%',
        width: '30.735%',
        aspectRatio: '552 / 951',
      },
      tagColor: 'bg-emerald-500/95 text-white border-emerald-400/40 shadow-[0_8px_20px_rgba(16,185,129,0.4)]',
      glowColor: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.5)]',
      description: 'UI Design, Digital Marketing & Web Development internships',
      badge: 'Work Experience',
      icon: '🧾',
    },
  ]

  const foregroundStickers = [
    {
      id: 'music-monk',
      name: 'Music Monk',
      tagline: 'Deep focus & zen vibe 🎧',
      imgSrc: '/images/music-monk-clean.png',
      alt: 'Meditating person with headphones sticker',
      style: {
        left: '5.011%',
        top: '33.194%',
        width: '8.073%',
        aspectRatio: '323 / 492',
      },
      rotation: '-rotate-2',
      hoverRotation: 'hover:rotate-3',
    },
    {
      id: 'figureoutable',
      name: 'Figureoutable',
      tagline: 'Everything is figureoutable ✨',
      imgSrc: '/images/figureoutable-clean.png',
      alt: 'Everything is figureoutable red sticker',
      style: {
        left: '66.147%',
        top: '86.169%',
        width: '12.918%',
        aspectRatio: '540 / 192',
      },
      rotation: 'rotate-1',
      hoverRotation: 'hover:-rotate-2',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0d0d10] text-white selection:bg-amber-500/30 selection:text-amber-200 flex flex-col justify-between overflow-x-hidden">
      <Nav />

      {/* Main Full-Width Pinboard Hero Section */}
      <main className="w-full flex-1 flex flex-col p-0 m-0">
        {/* Full-bleed edge-to-edge Pinboard Canvas Container */}
        <section className="w-full relative select-none">
          {/* Aspect Ratio Box matching the Pinboard (1796 / 1193 => 66.425%) */}
          <div className="relative w-full pb-[66.425%] bg-[#caa07a]">
            {/* High-Resolution Base Board Image spanning 100% width */}
            <img
              src="/images/hero-board.png"
              alt="Arnavi Bhagat Pinboard Hero"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="eager"
            />

            {/* Interactive Cutout Overlay Elements (ID Card, To-Do List, Work Experience) */}
            {interactiveItems.map((item) => {
              const isHovered = activeItem === item.id

              return (
                <div
                  key={item.id}
                  style={item.style}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    isHovered ? 'z-30' : 'z-20'
                  }`}
                  onMouseEnter={() => setActiveItem(item.id)}
                  onMouseLeave={() => setActiveItem(null)}
                  onClick={() => navigate(item.route)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Navigate to ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      navigate(item.route)
                    }
                  }}
                >
                  {/* Floating Cutout with 3D Hover Elevation */}
                  <div
                    className={`relative w-full h-full transition-all duration-300 ease-out transform ${
                      isHovered
                        ? 'scale-[1.035] -translate-y-2 drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)]'
                        : 'scale-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:scale-[1.015]'
                    }`}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.alt}
                      className="w-full h-full object-contain pointer-events-none"
                    />

                    {/* Gentle Hover Highlight */}
                    <div
                      className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 border ${
                        isHovered
                          ? 'opacity-100 bg-white/5 border-white/40 ring-2 ring-white/20'
                          : 'opacity-0 border-transparent'
                      }`}
                    />
                  </div>

                  {/* Interactive Tooltip Badge on Hover */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 z-40 whitespace-nowrap ${
                      item.id === 'work' ? 'top-3 sm:top-6' : 'top-2 sm:top-4'
                    } ${
                      isHovered
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-2 scale-90'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border backdrop-blur-md transition-all ${item.tagColor}`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                      <span className="text-[10px]">→</span>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Foreground Stickers Placed in FRONT of EVERYTHING ELSE (z-50) */}
            {foregroundStickers.map((sticker) => {
              const isHovered = hoveredSticker === sticker.id

              return (
                <div
                  key={sticker.id}
                  style={sticker.style}
                  className="absolute z-50 cursor-pointer select-none group/sticker transition-transform duration-300"
                  onMouseEnter={() => setHoveredSticker(sticker.id)}
                  onMouseLeave={() => setHoveredSticker(null)}
                >
                  <div
                    className={`relative w-full h-full transition-all duration-300 ease-out transform ${sticker.rotation} ${
                      isHovered
                        ? 'scale-110 -translate-y-1.5 drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]'
                        : 'scale-100 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] hover:scale-105'
                    }`}
                  >
                    <img
                      src={sticker.imgSrc}
                      alt={sticker.alt}
                      className="w-full h-full object-contain pointer-events-none"
                    />

                    {/* Playful Floating Tagline on Sticker Hover */}
                    <div
                      className={`absolute -top-7 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 z-50 whitespace-nowrap ${
                        isHovered
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-1 scale-90'
                      }`}
                    >
                      <div className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono bg-black/85 text-amber-200 border border-amber-400/40 shadow-lg backdrop-blur-md">
                        {sticker.tagline}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Quick-Access Navigation Cards below full-width hero */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono">Interactive Navigation</span>
              <h2 className="text-2xl font-serif text-white mt-1">Explore Portfolio Sections</h2>
            </div>
            <p className="text-xs text-zinc-400">Click any card on the board above or shortcuts below</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {interactiveItems.map((item) => (
              <Link
                key={item.id}
                to={item.route}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
                className={`group flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                  activeItem === item.id
                    ? 'bg-[#18181c] border-white/30 shadow-lg -translate-y-0.5'
                    : 'bg-[#121215] border-white/10 hover:border-white/20 hover:bg-[#161619]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-2xl p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-medium text-white group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{item.description}</p>
                  </div>
                </div>
                <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all text-sm font-bold pl-2">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500 font-mono">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
