export default function AboutPage() {
  return (
    <main className="w-full px-6 py-16 max-w-3xl mx-auto">
      {/* Hero */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#b45e2a] mb-4">
          Our Story
        </p>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Food made with <br /> intention.
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          We started with a simple idea — that good food should feel like home.
          Every dish we serve is crafted with care, using fresh ingredients and
          recipes passed down through generations.
        </p>
      </div>

      <div className="w-10 h-px bg-[#b45e2a] mb-16" />

      {/* Values */}
      <div className="grid grid-cols-1 gap-12 mb-16">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-500 leading-relaxed">
            To bring people together through honest, flavorful food. We believe
            a great meal is more than sustenance — it's a moment worth savoring.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Fresh Ingredients
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We source locally whenever possible. Our relationships with nearby
            farms and suppliers mean you get the best quality on your plate,
            every single time.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Our Community
          </h2>
          <p className="text-gray-500 leading-relaxed">
            This place was built for the neighborhood. We're proud to be a space
            where regulars feel at home and newcomers are always welcome.
          </p>
        </div>
      </div>

      <div className="w-10 h-px bg-[#b45e2a] mb-16" />

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-gray-900">12+</p>
          <p className="text-sm text-gray-400 mt-1">Years serving</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-900">40+</p>
          <p className="text-sm text-gray-400 mt-1">Menu items</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-gray-900">1k+</p>
          <p className="text-sm text-gray-400 mt-1">Happy customers</p>
        </div>
      </div>
    </main>
  );
}
