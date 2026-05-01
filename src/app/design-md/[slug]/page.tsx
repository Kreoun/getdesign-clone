import { notFound } from "next/navigation";
import Link from "next/link";
import { designs } from "../../../data/designs";
import DesignDetailClient from "./DesignDetailClient";

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export default async function DesignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const design = designs.find((d) => d.slug === slug);

  if (!design) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      {/* Back link */}
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
      >
        ← Back to designs
      </Link>

      {/* Title */}
      <div className="mb-8">
        <h1 className="flex items-center gap-3 font-mono text-3xl font-bold text-white">
          <span className="text-4xl">{design.icon}</span>
          Design System inspired by {design.name}
        </h1>
        <p className="mt-2 text-gray-400">{design.description}</p>
      </div>

      {/* Usage + Actions */}
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            Usage
          </h3>
          <div className="flex items-center justify-between rounded-lg bg-black/50 px-4 py-3 font-mono text-sm text-gray-300">
            <code>npx getdesign@latest add {design.slug}</code>
            <button className="ml-3 text-gray-500 transition-colors hover:text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Run this command from your project root, then ask your AI assistant
            to use DESIGN.md for UI work.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-5 py-2.5 text-sm font-semibold text-rose-400 transition-colors hover:bg-rose-500/20">
              🔖 SAVE
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500/20">
              ✨ Download for Claude Design
            </button>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm">
              <span className="text-gray-500">Installs</span>
              <span className="ml-4 font-mono font-semibold text-white">
                {design.installs}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm">
              <span className="text-gray-500">Bookmarked</span>
              <span className="ml-4 font-mono font-semibold text-white">
                {design.bookmarked}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="mb-8 text-xs text-gray-500">
        • Not an official {design.name} design system. A curated starting point
        for building {design.name}-like UIs with your AI coding agent.
      </p>

      {/* Preview + Design Content */}
      <DesignDetailClient design={design} />
    </div>
  );
}
