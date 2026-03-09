"use client";

export function Newsletter() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center text-[#063c71]">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold">
          Stay Relentless
        </h2>

        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Get exclusive drops, new gear alerts, and updates delivered straight
          to your inbox.
        </p>

        {/* Form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 rounded-md text-gray-900 text-xs border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#063c71] focus:border-[#063c71] transition"
          />

          <button className="bg-[#063c71] text-white font-medium px-4 py-2 text-xs rounded-md hover:bg-[#042a50] transition cursor-pointer">
            Join the Squad
          </button>
        </div>

        {/* Small text */}
        <p className="text-xs text-gray-600 mt-4">
          No spam. Just relentless updates.
        </p>
      </div>
    </section>
  );
}
