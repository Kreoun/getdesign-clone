import Link from "next/link";

const featuredDesigns = [
  { name: "BMW M", icon: "🏎️" },
  { name: "Binance", icon: "💰" },
  { name: "Airtable", icon: "📊" },
];

export default function HeroSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-[#0d0d1a] to-[#111128]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_380px]">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            AWESOME
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              DESIGN.md
            </span>
          </h1>
          <p className="mt-4 max-w-lg text-lg text-gray-400">
            Design system inspirations from popular websites.
            <br />
            Drop one into your project and let coding agents build matching UI.
          </p>
          <div className="mt-8">
            <Link
              href="#designs"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse DESIGN.md Files ↓
            </Link>
          </div>
        </div>

        {/* Right - Stats & Featured */}
        <div className="flex flex-col gap-4">
          {/* Quick Stats */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
              ▸ Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-sm text-gray-300">DESIGN.md Files</span>
                <span className="font-mono text-lg font-bold text-emerald-400">
                  70
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Last Updated</span>
                <span className="font-mono text-sm font-semibold text-rose-400">
                  May 1, 2026
                </span>
              </div>
            </div>
          </div>

          {/* Featured Designs */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
              ▸ Featured Designs
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {featuredDesigns.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300"
                >
                  <span>{d.icon}</span>
                  <span className="font-medium">{d.name}</span>
                </div>
              ))}
              <div className="flex items-center justify-center rounded-lg border border-dashed border-white/10 px-3 py-2 text-xs text-gray-500">
                Feature your brand?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
