import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    { name: 'Home', path: '/', end: true },
    { name: 'Work', path: '/work', end: false },
    { name: 'About', path: '/about', end: false },
    { name: 'Projects', path: '/projects', end: false },
    { name: 'Contact', path: '/contact', end: false },
  ]

  return (
    <header className="w-full bg-[#EFE5DB]/90 border-b border-[#ded3c5] px-4 sm:px-8 py-4 sticky top-0 z-50 backdrop-blur-md transition-colors">
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-lobster tracking-wide text-[#22201d] hover:text-[#8c4a3e] transition-colors"
        >
          Arnavi
        </NavLink>

        <div className="flex items-center gap-5 sm:gap-8 font-inter">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `text-xs font-medium tracking-[0.18em] uppercase transition-all duration-200 pb-1 ${
                  isActive
                    ? 'text-[#22201d] font-semibold border-b-2 border-[#22201d]'
                    : 'text-[#736a61] no-underline hover:text-[#22201d] hover:border-b-2 hover:border-[#a89b8d]'
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
