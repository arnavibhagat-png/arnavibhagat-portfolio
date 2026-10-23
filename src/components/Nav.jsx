import { NavLink } from 'react-router-dom'

export default function Nav() {
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="w-full bg-[#EFE5DB]/95 px-4 sm:px-8 py-2 sticky top-0 z-50 backdrop-blur-md transition-all">
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand: Avatar + Bold Name */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group no-underline text-inherit"
          aria-label="Arnavi - Home"
        >
          <img
            src="/images/nav-avatar.png"
            alt="Arnavi avatar"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover transition-transform duration-200 group-hover:scale-110 shadow-xs"
          />
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] font-inter select-none">
            Arnavi
          </span>
        </NavLink>

        {/* Navigation Links in Handwritten Font */}
        <div className="flex items-center gap-6 sm:gap-9 font-patrick">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg sm:text-[20px] transition-all duration-150 no-underline pb-0.5 ${
                  isActive
                    ? 'text-[#111111] font-bold border-b-2 border-[#111111]'
                    : 'text-[#2a2622] hover:text-[#8c4a3e]'
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
