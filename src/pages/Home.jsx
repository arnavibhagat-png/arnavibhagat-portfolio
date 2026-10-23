import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFFAF6] text-[#22201d] font-inter overflow-x-hidden flex flex-col justify-between">
      {/* Background Grid Image */}
      <div className="absolute inset-x-0 top-0 h-full min-h-screen pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="/images/hero-grid-bg.png"
          alt=""
          className="w-full h-full object-cover object-top opacity-100"
        />
        <div className="absolute inset-x-0 bottom-[-48%] h-[95vh] bg-gradient-to-b from-transparent via-[#f5e7e2]/25 to-[#FFFAF6]" />
      </div>

      <Nav />

      <main className="relative z-10 flex-1 flex items-start justify-center pt-2 sm:pt-3 pb-4">
        <div className="w-full flex justify-center px-1 sm:px-3">
          <img
            src="/images/pin-board.png"
            alt="Arnavi pin board"
            className="w-full max-w-[1280px] h-auto object-contain drop-shadow-[0_22px_36px_rgba(58,32,20,0.16)]"
          />
        </div>
      </main>

      {/* Subtle bottom footer */}
      <footer className="w-full py-4 text-center text-xs text-[#736a61]/80 font-inter relative z-10">
        Arnavi Bhagat • UX & Visual Designer Portfolio • Nagpur, India
      </footer>
    </div>
  )
}
