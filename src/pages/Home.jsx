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
    <div className="min-h-screen overflow-x-hidden bg-[#310C02] text-[#22201d] font-inter">
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
          ref={waveRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-center overflow-visible select-none will-change-transform"
        >
          <img
            src="/images/brown-wave.png"
            alt=""
            className="home-transition-wave block h-auto max-w-none shrink-0"
            width="768"
            height="1244"
            style={{ width: 'max(100vw, 80svh)' }}
          />
          <h1
            aria-label="I’m a Designer who researches, ideates, creates, and solves"
            className="absolute left-1/2 top-[calc(6.5%+48px+5cm)] w-[90vw] max-w-[1280px] -translate-x-1/2 text-left font-bowlby text-[clamp(2rem,8.15vw,125px)] leading-[0.95] text-[#FFFAF6]"
          >
            I’m a Designer
            <br />
            who{' '}
            <span className="word-flip inline-grid h-[1em] overflow-hidden align-bottom font-bubbler text-[clamp(2rem,8.15vw,125px)] leading-none">
              <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true">
                researches
              </span>
              <span className="word-flip-track absolute left-0 top-0 flex flex-col" aria-hidden="true">
                <span>researches</span>
                <span>ideates</span>
                <span>creates</span>
                <span>solves</span>
                <span>researches</span>
              </span>
            </span>
          </h1>
          <p className="absolute left-1/2 top-[calc(6.5%+48px+7cm+clamp(4rem,16.3vw,15.625rem))] w-[90vw] max-w-[1280px] -translate-x-1/2 text-center font-poppins text-[24px] leading-relaxed text-[#FFFAF6]">
            It started with a love for designing and creating. But somewhere along the way, I became just as curious about the people on the other side of the design—their thoughts, behaviours, and the little things that shape their everyday experiences.
            <br />
            That’s when design became more than making things look good. It became a way to understand people, solve problems, and create digital experiences that feel as good as they function.
          </p>
        </div>
      </section>

      <main>
        <section className="relative bg-[#310C02] px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <ProjectGrid />
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/15 bg-[#310C02] px-4 py-6 text-center text-xs text-white/75">
        Arnavi Bhagat • UX &amp; Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
