import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import ProjectGrid from '../components/ProjectGrid'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const transitionRef = useRef(null)
  const boardRef = useRef(null)
  const waveRef = useRef(null)

  useLayoutEffect(() => {
    const transition = transitionRef.current
    const board = boardRef.current
    const wave = waveRef.current

    if (!transition || !board || !wave) return

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: transition,
          start: 'top top',
          end: () => `+=${window.innerHeight * 2.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      timeline
        .fromTo(
          board,
          { scale: 1, y: 0 },
          { scale: 0.48, y: -8, duration: 0.78, ease: 'none' },
          0,
        )
        .fromTo(
          wave,
          { yPercent: 100 },
          {
            yPercent: () => {
              const waveHeight = wave.getBoundingClientRect().height
              const solidTopOffset = waveHeight * 0.1
              return ((waveHeight - transition.clientHeight - solidTopOffset) / waveHeight) * 100
            },
            duration: 1,
            ease: 'none',
          },
          0,
        )

      ScrollTrigger.refresh()
    }, transition)

    return () => context.revert()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#461102] text-[#22201d] font-inter">
      <section
        ref={transitionRef}
        className="relative isolate h-[100svh] min-h-[480px] w-full overflow-hidden"
        aria-label="Arnavi's portfolio pinboard"
      >
        <div className="absolute inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
          <img
            src="/images/hero-grid-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-[-48%] z-10 h-[95vh] bg-gradient-to-b from-transparent via-[#f5e7e2]/25 to-[#FFFAF6]" />
        </div>

        <Nav />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-1 sm:px-3">
          <img
            ref={boardRef}
            src="/images/pin-board.png"
            alt="Arnavi pin board"
            className="h-auto w-full max-w-[1280px] origin-center drop-shadow-[0_22px_36px_rgba(58,32,20,0.16)] will-change-transform"
          />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-30 flex justify-center overflow-visible pointer-events-none select-none"
          aria-hidden="true"
        >
          <img
            ref={waveRef}
            src="/images/brown-wave.png"
            alt=""
            className="home-transition-wave block h-auto max-w-none shrink-0 will-change-transform"
            width="768"
            height="1244"
            style={{ width: 'max(100vw, 80svh)' }}
          />
        </div>
      </section>

      <main>
        <section className="relative bg-[#461102] px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <ProjectGrid />
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/15 bg-[#461102] px-4 py-6 text-center text-xs text-white/75">
        Arnavi Bhagat • UX &amp; Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
