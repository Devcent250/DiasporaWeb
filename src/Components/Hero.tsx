

export function HeroSection() {
  return (
    <section className="relative min-h-screen  text-white overflow-hidden">
        

      <div className="absolute right-0 top-1/2 w-1/2 h-[600px] bg-blue-600 rounded-l-full transform -translate-y-1/2" />

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              HELPING YOU OWN
              <br />A HOUSE AT HOME
            </h1>
            <p className="text-lg text-blue-100">Find your dream home with our expert guidance and support.</p>
            <p className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              Get Started
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

