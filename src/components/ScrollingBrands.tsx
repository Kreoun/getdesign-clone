"use client";

const brands = [
  { name: "Vercel", icon: "▲" },
  { name: "Stripe", icon: "💜" },
  { name: "Figma", icon: "🎯" },
  { name: "Notion", icon: "📓" },
  { name: "Supabase", icon: "⚡" },
  { name: "Linear", icon: "📐" },
  { name: "Airbnb", icon: "🏠" },
  { name: "Spotify", icon: "🎵" },
  { name: "Apple", icon: "🍎" },
  { name: "Uber", icon: "🚕" },
  { name: "Nike", icon: "✔️" },
  { name: "Tesla", icon: "🔋" },
  { name: "Claude", icon: "🤖" },
  { name: "Cursor", icon: "⌨️" },
  { name: "Shopify", icon: "🛒" },
];

export default function ScrollingBrands() {
  return (
    <div className="border-y border-white/10 bg-[#0d0d1a]/50 py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-gray-500">
            Design systems inspired from:
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-scroll flex gap-8">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex shrink-0 items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span>{brand.icon}</span>
                  <span className="font-medium">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
