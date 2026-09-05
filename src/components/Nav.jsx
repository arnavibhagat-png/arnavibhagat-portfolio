import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/', end: true },
    { name: 'Work', path: '/work', end: false },
    { name: 'About', path: '/about', end: false },
    { name: 'Contact', path: '/contact', end: false },
  ]

  return (
    <header className="w-full bg-[#0d0d0d] border-b border-white/10 px-6 py-4 sticky top-0 z-50 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl sm:text-2xl font-serif italic tracking-wider text-white hover:text-gray-300 transition-colors"
        >
          Arnavi
        </NavLink>

        <div className="flex items-center gap-6 sm:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `text-xs font-medium tracking-[0.18em] uppercase transition-all duration-200 pb-1 ${
                  isActive
                    ? 'text-white font-semibold border-b-2 border-white'
                    : 'text-zinc-400 no-underline hover:text-zinc-200 hover:border-b-2 hover:border-zinc-500'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
