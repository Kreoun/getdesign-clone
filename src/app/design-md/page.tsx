import DesignDirectory from "../../components/DesignDirectory";

export default function DesignMdPage() {
  return (
    <div>
      <div className="border-b border-white/10 bg-gradient-to-b from-[#0d0d1a] to-[#111128] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="font-mono text-3xl font-bold text-white">
            DESIGN.md Collection
          </h1>
          <p className="mt-2 text-gray-400">
            Browse all {70} curated DESIGN.md files inspired by popular brand
            design systems.
          </p>
        </div>
      </div>
      <DesignDirectory />
    </div>
  );
}
