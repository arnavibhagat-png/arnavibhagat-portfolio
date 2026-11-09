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
    <div className="min-h-screen overflow-hidden bg-[#FFFAF6]">
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
            <h1 className="font-bowlby">Hello! I’m Arnavi Bhagat</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
