import { useRef, useState } from 'react'
import Nav from '../components/Nav'
import figmaIcon from '../../figma.png'
import photoshopIcon from '../../photoshop.png'
import illustratorIcon from '../../illustrator.png'
import framerIcon from '../../framer.png'
import procreateIcon from '../../procreate.png'
import sketchupIcon from '../../sketchup.png'
import unityIcon from '../../unity.png'
import afterEffectsIcon from '../../after effects.png'
import mailIcon from '../../mail.png'
import contactIcon from '../../contact.png'
import behanceIcon from '../../behance.png'
import linkedinIcon from '../../linkedin.png'

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
                    Bachelor’s of Design - <strong>Communication Design</strong>,
                    <br />
                    Symbiosis Institute of Design
                    <br />
                    2023 – 2027.
                  </li>
                  <li>
                    Higher Secondary Education
                    <br />
                    St. Paul's College
                    <br />
                    2021-2023
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <section className="about-languages-skills" aria-label="Languages and skills">
          <div className="about-languages" aria-labelledby="languages-heading">
            <h2 id="languages-heading" className="font-bowlby">
              Language
            </h2>
            <ul className="about-language-list font-poppins">
              <li>
                <span>English</span>
                <div
                  className="about-language-meter"
                  role="meter"
                  aria-label="English proficiency"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="94"
                >
                  <span style={{ width: '94%' }} />
                </div>
              </li>
              <li>
                <span>Hindi</span>
                <div
                  className="about-language-meter"
                  role="meter"
                  aria-label="Hindi proficiency"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="75"
                >
                  <span style={{ width: '75%' }} />
                </div>
              </li>
              <li>
                <span>Marathi</span>
                <div
                  className="about-language-meter"
                  role="meter"
                  aria-label="Marathi proficiency"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="75"
                >
                  <span style={{ width: '75%' }} />
                </div>
              </li>
            </ul>
          </div>
          <section className="about-skills" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="font-bubbler">
              Skills
            </h2>
            <ul className="about-skills-list font-poppins">
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Information Architecture</li>
              <li>Interaction Design</li>
              <li>UX Thinking</li>
              <li>Usability Testing</li>
              <li>User Journey Mapping</li>
              <li>Accessibility Design</li>
              <li>Ideation</li>
              <li>Visual Design</li>
              <li>Design Systems</li>
            </ul>
          </section>
          <section className="about-contact" aria-labelledby="about-contact-heading">
            <h2 id="about-contact-heading" className="font-bowlby">
              Contact
            </h2>
            <div className="about-contact-links font-poppins">
              <div className="about-contact-column">
                <a href="mailto:arnavibhagat@gmail.com">
                  <img src={mailIcon} alt="" />
                  <span>arnavibhagat@gmail.com</span>
                </a>
                <a href="tel:+918806567626">
                  <img src={contactIcon} alt="" />
                  <span>8806567626</span>
                </a>
              </div>
              <div className="about-contact-column">
                <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
                  <img src={behanceIcon} alt="" />
                  <span>Behance</span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} alt="" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>
        </section>
        <section className="about-work" aria-labelledby="work-heading">
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
                    Researched brand identity and developed brand guidelines for visual consistency.
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
                    Designed the logo, visual identity, and business cards to establish a consistent
                    brand presence.
                  </li>
                  <li>Created brochure designs aligned with the brand’s communication goals.</li>
                  <li>
                    Developed website wireframes to structure content and plan the user experience.
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="about-work-art">
            <img
              src="/images/work-experience.png"
              alt="Illustrated receipt listing Arnavi's work experience"
              className="about-work-receipt"
            />
            <img
              src="/images/work-experience-tape-plaid.png"
              alt=""
              className="about-work-tape about-work-tape-plaid"
            />
            <img
              src="/images/work-experience-tape-kraft.png"
              alt=""
              className="about-work-tape about-work-tape-kraft"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
