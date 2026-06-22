export default function ContactPage() {
  return (
    <main className="w-full px-6 py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#b45e2a] mb-4">
          Get In Touch
        </p>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          We'd love to <br /> hear from you.
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Have a question, feedback, or just want to say hello? Fill out the
          form below and we'll get back to you as soon as we can.
        </p>
      </div>

      <div className="w-10 h-px bg-[#b45e2a] mb-16" />

      {/* Form */}
      <div className="flex flex-col gap-6 mb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#b45e2a] focus:border-transparent transition"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#b45e2a] focus:border-transparent transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#b45e2a] focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            placeholder="How can we help?"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#b45e2a] focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows={5}
            placeholder="Tell us what's on your mind..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#b45e2a] focus:border-transparent transition resize-none"
          />
        </div>

        <button className="w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-700 transition-colors">
          Send Message
        </button>
      </div>

      <div className="w-10 h-px bg-[#b45e2a] mb-16" />

      {/* Info strip */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Location</p>
          <p className="text-sm text-gray-400">123 Main St, St. Louis, MO</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Hours</p>
          <p className="text-sm text-gray-400">Mon–Sat, 11am – 9pm</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
          <p className="text-sm text-gray-400">hello@foodsite.com</p>
        </div>
      </div>
    </main>
  );
}
