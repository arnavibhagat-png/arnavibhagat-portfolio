import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Nav />
      <main className="w-full px-4 sm:px-8 py-16">
        <h1 className="text-4xl font-serif tracking-tight">Home</h1>
      </main>
    </div>
  )
}
