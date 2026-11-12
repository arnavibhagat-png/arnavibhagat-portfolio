import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import PinboardLink from '../components/PinboardLink'
import curaNavMockup from '../../CuraNav.png'
import agrovisionMockup from '../../agrovision.png'
import dementiaMockup from '../../Dementia research.png'
import valaceMockup from '../../Valace.png'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'CuraNav',
    category: 'Visual Identity + App Design',
    description:
      'A healthcare navigation platform designed to simplify access to medical services through intuitive interfaces and seamless user flows.',
    caseStudyUrl: 'https://www.behance.net/gallery/251901053/CuraNav?platform=direct',
    image: curaNavMockup,
    alt: 'CuraNav mobile health app mockup',
  },
  {
    title: 'AgroVision',
    category: 'Dashboard Design + Group Project',
    description:
      'A collaborative dashboard designed to help agricultural officers monitor progress, track activities, and manage agricultural development through organised data and clear visual insights.',
    caseStudyUrl: 'https://www.behance.net/gallery/251896171/AgroVision',
    image: agrovisionMockup,
    alt: 'AgroVision crop monitoring dashboard mockup',
  },
  {
    title: 'Dementia Research',
    category: 'UX Research + Product Design',
    description:
      'Exploring research-driven design solutions that support memory care through accessibility, cognitive clarity, and everyday assistance.',
    caseStudyUrl: 'https://www.behance.net/gallery/258409297/Memory-aid',
    image: dementiaMockup,
    alt: 'Dementia care device mockup',
  },
  {
    title: 'Postpartum Care',
    category: 'Product Design + UX Research',
    description:
      'An empathetic postpartum care experience designed to support new mothers through personalised tracking, accessible guidance, and everyday support.',
    caseStudyUrl: 'https://www.behance.net/gallery/251897507/Valace',
    image: valaceMockup,
    alt: 'Postpartum care mobile app mockup',
  },
]

function ProjectImage({ project }) {
  return (
    <article
      className="home-project-card"
      tabIndex={0}
      aria-label={`${project.title}. ${project.category}. ${project.description}`}
    >
      <img src={project.image} alt={project.alt} />
      <div className="home-project-overlay">
        <div className="home-project-copy">
          <h2>{project.title}</h2>
          <p className="home-project-category">{project.category}</p>
          <p className="home-project-description">{project.description}</p>
        </div>
        <a
          className="home-project-cta"
          href={project.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} case study on Behance`}
        >
          View Case Study
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 4h6v6M20 4l-9 9" />
            <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function Home() {
  const location = useLocation()
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

      document.querySelectorAll('.home-mockups img').forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.82 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: image,
              start: 'top 88%',
              end: 'top 58%',
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        )
      })

      ScrollTrigger.refresh()
    }, transition)

    return () => context.revert()
  }, [])

  useEffect(() => {
    if (location.hash !== '#projects') return

    const timeout = window.setTimeout(() => {
      ScrollTrigger.refresh()
      document.getElementById('projects')?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      })
    }, 100)

    return () => window.clearTimeout(timeout)
  }, [location.hash])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#310C02] text-[#22201d] font-inter">
      <Nav />
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

        <div className="absolute inset-0 z-20 flex items-center justify-center px-1 sm:px-3">
          <div
            ref={boardRef}
            className="relative w-full max-w-[1280px] origin-center drop-shadow-[0_22px_36px_rgba(58,32,20,0.16)] will-change-transform"
          >
            <img
              src="/images/pin-board.png"
              alt="Arnavi pin board"
              className="block h-auto w-full"
            />
            <PinboardLink
              to="/about"
              src="/images/id-card.png"
              alt="ID card — About Me"
              className="pinboard-link-id"
            />
            <PinboardLink
              to="/#projects"
              src="/images/todo-list.png"
              alt="To-do list — Projects and Research"
              className="pinboard-link-todo"
            />
            <PinboardLink
              to="/about#work-experience"
              src="/images/work-experience.png"
              alt="Work experience receipt — About Me, Work Experience"
              className="pinboard-link-work"
            />
          </div>
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
          <img
            src="/images/heyy-sticker.png"
            alt="Hey yaaa!!"
            className="home-greeting-sticker"
          />
          <h1
            aria-label="I’m a Designer who researches, ideates, creates, and solves"
            className="absolute left-1/2 top-[calc(6.5%+48px+5cm)] home-text-inset max-w-[1280px] -translate-x-1/2 text-center font-bowlby text-[clamp(2rem,8.15vw,110px)] leading-[0.95] text-[#FFFAF6]"
          >
            I’m a Designer
            <br />
            who{' '}
            <span className="word-flip inline-grid h-[1em] overflow-hidden align-bottom font-bubbler text-[clamp(2rem,8.15vw,110px)] leading-none">
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
          <p className="absolute left-1/2 top-[calc(6.5%+48px+7cm+clamp(4rem,16.3vw,15.625rem))] home-text-inset max-w-[1280px] -translate-x-1/2 text-center font-poppins text-[24px] leading-relaxed text-[#FFFAF6]">
            It started with a love for designing and creating. But somewhere along the way, I became just as curious about the people on the other side of the design—their thoughts, behaviours, and the little things that shape their everyday experiences.
            <br />
            That’s when design became more than making things look good. It became a way to understand people, solve problems, and create digital experiences that feel as good as they function.
          </p>
        </div>
      </section>

      <main>
        <section
          id="projects"
          className="home-mockups"
          aria-label="Projects and research"
        >
          <div className="home-mockups-row home-mockups-row-top">
            <ProjectImage project={projects[0]} />
            <ProjectImage project={projects[1]} />
          </div>
          <div className="home-mockups-row home-mockups-row-bottom">
            <ProjectImage project={projects[2]} />
            <ProjectImage project={projects[3]} />
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/15 bg-[#310C02] px-4 py-6 text-xs text-white/75 font-poppins flex flex-col items-center gap-3">
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
