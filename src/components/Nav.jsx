import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="w-full relative z-[100]">
      {/* Fixed navbar stays fixed in its spot at the top on top of everything */}
      <div className="fixed top-3 sm:top-5 left-0 right-0 z-[100] w-full px-3 sm:px-6 flex justify-center pointer-events-none">
        <nav className="navbar-glass pointer-events-auto w-full max-w-5xl rounded-full px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300">
        {/* Brand: Avatar + Bold Name in Bowlby One */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group no-underline text-white pl-0.5 sm:pl-1 select-none"
          aria-label="Arnavi - Home"
        >
          <img
            src="/images/nav-avatar.png"
            alt="Arnavi avatar"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 select-none transition-transform duration-200 group-hover:scale-105 shadow-sm"
          />
          <span className="font-bowlby text-xl sm:text-2xl text-white tracking-wide leading-none select-none">
            Arnavi
          </span>
        </NavLink>

        {/* Navigation Links in Poppins */}
        <div className="flex items-center gap-5 sm:gap-10 font-poppins pr-2 sm:pr-4">
          {navItems.map((item) => {
            const isWorkActive =
              item.name === 'Work' &&
              (location.pathname === '/projects' || location.pathname === '/work')
            const isActive = location.pathname === item.path || isWorkActive

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`text-sm sm:text-base tracking-wide transition-all duration-200 no-underline select-none ${
                  isActive
                    ? 'text-white font-semibold opacity-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]'
                    : 'text-white/80 hover:text-white hover:opacity-100 font-normal'
                }`}
              >
                {item.name}
              </NavLink>
            )
          })}
        </div>
      </nav>
      </div>
      {/* Spacer to prevent content jump and maintain top spacing */}
      <div className="h-16 sm:h-20 pointer-events-none" aria-hidden="true" />
    </header>
  )
}

