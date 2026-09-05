import Nav from '../components/Nav'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Nav />
      <main className="w-full px-4 sm:px-8 py-16">
        <h1 className="text-4xl font-serif tracking-tight">About</h1>
      </main>
    </div>
  )
}
