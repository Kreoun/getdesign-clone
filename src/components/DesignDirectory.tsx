"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { designs, categories, type DesignEntry } from "../data/designs";

export default function DesignDirectory() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    let result = designs;
    if (activeCategory !== "All") {
      result = result.filter((d) => d.category === activeCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [search, activeCategory]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 font-mono text-2xl font-bold text-white">
        Find Designs
      </h2>

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Category Sidebar */}
        <aside className="w-full shrink-0 lg:w-56">
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-0">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors lg:rounded-none lg:border-b lg:border-white/5 ${
                  activeCategory === cat.name
                    ? "bg-white/10 font-semibold text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                }`}
              >
                <span className="truncate">{cat.name}</span>
                <span className="ml-2 text-xs text-gray-500">{cat.count}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="min-w-0 flex-1">
          {/* Search Bar */}
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search all designs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
            />
          </div>

          {/* Table Header */}
          <div className="hidden items-center border-b border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:flex">
            <span className="flex-1">
              <span className="text-gray-400">#</span> Design Systems
            </span>
            <span className="w-24 text-right">Installs</span>
            <span className="w-24 text-right">Bookmarked</span>
          </div>

          {/* Design Rows */}
          <div className="divide-y divide-white/5">
            {filtered.map((design) => (
              <DesignRow key={design.slug} design={design} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              No designs found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function DesignRow({ design }: { design: DesignEntry }) {
  return (
    <Link
      href={`/design-md/${design.slug}`}
      className="group flex items-center gap-3 px-3 py-3 transition-colors hover:bg-white/5"
    >
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-lg"
        style={{ backgroundColor: design.accentColor + "20" }}
      >
        {design.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate font-mono text-sm font-semibold text-white group-hover:text-emerald-400">
            {design.name}
          </span>
          {design.isNew && (
            <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] font-bold text-rose-400">
              NEW
            </span>
          )}
        </div>
        <p className="truncate text-xs text-gray-500">{design.description}</p>
      </div>
      <span className="hidden w-24 text-right text-sm text-gray-400 sm:block">
        {design.installs}
      </span>
      <span className="hidden w-24 text-right text-sm text-gray-400 sm:block">
        {design.bookmarked > 0 ? design.bookmarked : "—"}
      </span>
    </Link>
  );
}
