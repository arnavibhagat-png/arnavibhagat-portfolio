import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/Nav'
import figmaIcon from '../../figma.png'
import photoshopIcon from '../../photoshop.png'
import illustratorIcon from '../../illustrator.png'
import framerIcon from '../../framer.png'
import procreateIcon from '../../procreate.png'
import sketchupIcon from '../../sketchup.png'
import unityIcon from '../../unity.png'
import afterEffectsIcon from '../../after effects.png'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  { name: 'Figma', src: figmaIcon },
  { name: 'Photoshop', src: photoshopIcon },
  { name: 'Illustrator', src: illustratorIcon },
  { name: 'Framer', src: framerIcon },
  { name: 'Procreate', src: procreateIcon },
  { name: 'SketchUp', src: sketchupIcon },
  { name: 'Unity', src: unityIcon },
  { name: 'After Effects', src: afterEffectsIcon },
]

function DraggableTool({ name, src }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef(null)

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      offsetX: offset.x,
      offsetY: offset.y,
    }
    setIsDragging(true)
  }

  const handlePointerMove = (event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    setOffset({
      x: drag.offsetX + event.clientX - drag.x,
      y: drag.offsetY + event.clientY - drag.y,
    })
  }

  const handlePointerUp = (event) => {
    if (dragRef.current?.pointerId !== event.pointerId) return
    dragRef.current = null
    setIsDragging(false)
  }

  const handleKeyDown = (event) => {
    const step = event.shiftKey ? 20 : 5
    const movements = {
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
    }
    const movement = movements[event.key]
    if (!movement) return

    event.preventDefault()
    setOffset(({ x, y }) => ({ x: x + movement[0], y: y + movement[1] }))
  }

  return (
    <button
      type="button"
      className={`about-tool${isDragging ? ' is-dragging' : ''}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      aria-label={`Move ${name} icon. Use arrow keys to move it.`}
      title={name}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      <img src={src} alt="" draggable="false" />
    </button>
  )
}

export default function About() {
  const skillTransitionRef = useRef(null)
  const skillCardsZoomRef = useRef(null)
  const skillCardsRef = useRef(null)
  const skillWaveRef = useRef(null)
  const workOnWaveRef = useRef(null)

  useLayoutEffect(() => {
    const transition = skillTransitionRef.current
    const zoom = skillCardsZoomRef.current
    const container = skillCardsRef.current
    const wave = skillWaveRef.current
    const workOnWave = workOnWaveRef.current
    if (!transition || !zoom || !container || !wave || !workOnWave) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = container.querySelectorAll('.about-skill-card')
    if (cards.length === 0) return

    const containerBounds = container.getBoundingClientRect()
    const stackOffsets = [...cards].map((card) => {
      const cardBounds = card.getBoundingClientRect()
      return {
        x:
          containerBounds.left +
          container.clientWidth / 2 -
          (cardBounds.left + cardBounds.width / 2),
        y:
          containerBounds.top +
          container.clientHeight / 2 -
          (cardBounds.top + cardBounds.height / 2),
      }
    })

    const context = gsap.context(() => {
      const zoomTimeline = gsap.timeline({
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

      zoomTimeline
        .fromTo(
          zoom,
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
        .set(workOnWave, { visibility: 'visible' }, 0.68)
        .fromTo(
          workOnWave,
          { y: 160, scale: 0.72 },
          {
            y: 0,
            scale: 1,
            duration: 0.32,
            ease: 'none',
            transformOrigin: '50% 50%',
          },
          0.68,
        )

      gsap.set(cards, {
        x: (index) => stackOffsets[index].x,
        y: (index) => stackOffsets[index].y,
        rotation: (index) => (index - 1) * 5,
        scale: 0.92,
      })

      gsap.to(cards, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'top 38%',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })

      ScrollTrigger.refresh()
    }, container)

    return () => context.revert()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFFAF6]">
      <Nav />
      <main className="about-corner-page">
        <div className="about-intro">
          <div className="about-visual">
            <img src="/images/about-me-corner.png" alt="" className="about-corner-art" />
            <img
              src="/images/id-card.png"
              alt="Arnavi's creative license ID card"
              className="about-id-card"
            />
            <div className="about-tools" aria-label="Design tools">
              {tools.map((tool) => (
                <DraggableTool key={tool.name} {...tool} />
              ))}
            </div>
          </div>
          <div className="about-intro-copy">
            <div className="about-content">
              <h1 className="about-title">
                <span className="font-bowlby">About</span>
                <span className="font-bubbler">me</span>
              </h1>
              <p className="about-description font-poppins">
                Hi, I’m Arnavi!
                <br />
                I’m a UI/UX design student who’s curious about people, their behaviours, and the
                little things that shape their everyday experiences. I enjoy digging deeper, asking
                questions, and understanding the why behind things, which is what draws me towards
                <strong> research and product design.</strong> I like turning those insights into
                thoughtful solutions that solve problems quietly and efficiently. For me, good
                design isn't always about being noticed; sometimes, it's about simply making things
                work better.
              </p>
              <section className="about-education" aria-labelledby="education-heading">
                <h2 id="education-heading" className="font-bowlby">
                  Education
                </h2>
                <ul className="about-education-list font-poppins">
                  <li>
                    Bachelor’s of Design – <strong>Communication Design</strong>,
                    <br />
                    Symbiosis Institute of Design
                    <br />
                    2023 – 2027.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <section
          ref={skillTransitionRef}
          className="about-skill-transition"
          aria-label="Design skills"
        >
          <div ref={skillCardsZoomRef} className="about-skill-cards-zoom">
            <section ref={skillCardsRef} className="about-skill-cards">
              {[
                {
                  src: '/images/skills-card-research.png',
                  alt: 'Skills: User Research, Wireframing, Prototyping, and Information Architecture',
                },
                {
                  src: '/images/skills-card-design.png',
                  alt: 'Skills: Interaction Design, UX Research, Usability Testing, and User Journey Mapping',
                },
                {
                  src: '/images/skills-card-practice.png',
                  alt: 'Skills: Accessibility Design, Ideation, Visual Design, and Design Systems',
                },
              ].map(({ src, alt }) => (
                <div className="about-skill-card" key={src}>
                  <div className="about-skill-card-art">
                    <img className="about-skill-card-image" src={src} alt={alt} />
                    {Array.from({ length: 4 }, (_, index) => (
                      <svg
                        className="about-skill-card-check"
                        key={index}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="m4 12.5 5.2 5.2L20 6.8" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
          <div ref={skillWaveRef} className="about-skill-wave" aria-hidden="true">
            <img src="/images/brown-wave.png" alt="" width="768" height="1244" />
          </div>
          <section
            ref={workOnWaveRef}
            className="about-work about-wave-work"
            aria-labelledby="work-heading"
          >
            <div className="about-work-copy">
              <h2 id="work-heading" className="font-bowlby">
                Work Experience
              </h2>
              <div className="about-work-timeline">
                <article className="about-work-entry">
                  <div className="about-work-entry-heading font-poppins">
                    <h3>UI/UX Designer — Tars Digital</h3>
                    <span>2 Months</span>
                  </div>
                  <ul className="about-work-entry-details font-poppins">
                    <li>
                      Researched brand identity and developed brand guidelines for visual
                      consistency.
                    </li>
                    <li>Designed user onboarding screens to improve clarity and ease of use.</li>
                    <li>
                      Analysed existing products and documented areas for improvement through
                      comparative analysis.
                    </li>
                    <li>
                      Developed information architecture for a new product to structure content and
                      support intuitive navigation.
                    </li>
                  </ul>
                </article>
                <article className="about-work-entry">
                  <div className="about-work-entry-heading font-poppins">
                    <h3>Graphic Designer — Asmi.mindcare</h3>
                    <span>1 Month</span>
                  </div>
                  <ul className="about-work-entry-details font-poppins">
                    <li>
                      Led design tasks as part of the core design team, contributing to the brand’s
                      visual identity.
                    </li>
                    <li>
                      Designed the logo, visual identity, and business cards to establish a
                      consistent brand presence.
                    </li>
                    <li>Created brochure designs aligned with the brand’s communication goals.</li>
                    <li>
                      Developed website wireframes to structure content and plan the user
                      experience.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
            <div className="about-work-art">
              <img
                src="/images/work-experience-receipt-taped.png"
                alt="Work experience receipt with plaid tape at the top-left and beige tape at the bottom-right"
                className="about-work-receipt"
              />
            </div>
          </section>
        </section>
      </main>
      <footer className="about-connect-footer" aria-label="Connect">
        <h2 className="about-connect-title">
          <span className="font-bowlby">Let’s</span>
          <span className="font-bubbler">connect!</span>
        </h2>
        <nav className="about-connect-links" aria-label="Contact links">
          <a href="mailto:arnavibhagat@gmail.com">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25z" />
              <path d="m4 6 8 6 8-6" />
            </svg>
            <span>arnavibhagat@gmail.com</span>
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
            <span className="about-connect-brand" aria-hidden="true">Bē</span>
            <span>Behance</span>
          </a>
          <a href="tel:+918806567626">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.2 3.5h2.3l1.2 4.2-1.8 1.8a15 15 0 0 0 5.6 5.6l1.8-1.8 4.2 1.2v2.3a2.2 2.2 0 0 1-2.4 2.2A16.6 16.6 0 0 1 5 5.9 2.2 2.2 0 0 1 7.2 3.5Z" />
            </svg>
            <span>8806567626</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span className="about-connect-brand about-connect-linkedin" aria-hidden="true">in</span>
            <span>LinkedIn</span>
          </a>
        </nav>
      </footer>
    </div>
  )
}
