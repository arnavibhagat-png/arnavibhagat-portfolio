import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function PinboardLink({ to, src, alt, className }) {
  const navigate = useNavigate()
  const [isPressed, setIsPressed] = useState(false)
  const navigationTimer = useRef(null)

  useEffect(() => () => window.clearTimeout(navigationTimer.current), [])

  const handleClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    window.clearTimeout(navigationTimer.current)
    setIsPressed(true)
    navigationTimer.current = window.setTimeout(() => {
      navigate(to, { viewTransition: true })
    }, 90)
  }

  return (
    <Link
      to={to}
      viewTransition
      className={`pinboard-link${isPressed ? ' is-pressed' : ''} ${className}`}
      aria-label={alt}
      onClick={handleClick}
    >
      <img src={src} alt={alt} draggable="false" />
    </Link>
  )
}
