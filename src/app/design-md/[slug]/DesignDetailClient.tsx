"use client";

import { useState } from "react";
import type { DesignEntry } from "../../../data/designs";

interface Props {
  design: DesignEntry;
}

export default function DesignDetailClient({ design }: Props) {
  const [activeTab, setActiveTab] = useState<"preview" | "designmd">(
    "preview"
  );
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div>
      {/* Tab Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-mono text-xl font-bold text-white">Preview</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "preview"
                ? "bg-white/10 text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            👁️ Live Preview
          </button>
          <button
            onClick={() => setActiveTab("designmd")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeTab === "designmd"
                ? "bg-white/10 text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            📄 DESIGN.md
          </button>
          <div className="ml-2 flex rounded-lg border border-white/10">
            <button
              onClick={() => setTheme("light")}
              className={`rounded-l-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                theme === "light"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              ☀️ Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`rounded-r-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                theme === "dark"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              🌙 Dark
            </button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      {activeTab === "preview" ? (
        <PreviewPanel design={design} theme={theme} />
      ) : (
        <DesignMdPanel design={design} />
      )}

      {/* Color Palette Section */}
      <ColorPaletteSection design={design} />

      {/* Typography Section */}
      <TypographySection design={design} />

      {/* Components Section */}
      <ComponentsSection design={design} />
    </div>
  );
}

function PreviewPanel({
  design,
  theme,
}: {
  design: DesignEntry;
  theme: "light" | "dark";
}) {
  const bg = theme === "light" ? "bg-white" : "bg-gray-900";
  const text = theme === "light" ? "text-gray-900" : "text-white";
  const subtext = theme === "light" ? "text-gray-600" : "text-gray-400";

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 ${bg} p-0`}
    >
      {/* Fake browser header */}
      <div
        className={`flex items-center gap-4 border-b px-4 py-3 ${theme === "light" ? "border-gray-200 bg-gray-50" : "border-gray-700 bg-gray-800"}`}
      >
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="font-semibold" style={{ color: design.accentColor }}>
            getdesign.md
          </span>
          <span>·</span>
          <span>awesome-design-md</span>
        </div>
        <div className="flex gap-6 text-xs font-medium text-gray-400">
          <span>Colors</span>
          <span>Typography</span>
          <span>Components</span>
          <span>Responsive</span>
        </div>
        <div className="ml-auto text-xs text-gray-400">Become a host</div>
      </div>

      {/* Preview Content */}
      <div className="p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_300px]">
          <div>
            <h2 className={`text-3xl font-bold ${text}`}>
              Design System
              <br />
              Inspiration of {design.name}
            </h2>
            <p className={`mt-4 text-sm leading-relaxed ${subtext}`}>
              {design.description} This design system captures the core visual
              language, color palette, typography choices, and component patterns
              that define the {design.name} brand experience.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
                style={{ backgroundColor: design.accentColor }}
              >
                Search
              </button>
              <button
                className={`rounded-lg border px-5 py-2.5 text-sm font-semibold ${theme === "light" ? "border-gray-300 text-gray-700" : "border-gray-600 text-gray-300"}`}
              >
                Become a host
              </button>
            </div>
          </div>
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: design.accentColor + "15" }}
          >
            <div className="flex items-center justify-between">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: design.accentColor + "30",
                  color: design.accentColor,
                }}
              >
                Guest favorite
              </span>
              <span className="text-xl">❤️</span>
            </div>
            <div className="mt-16">
              <p className={`text-sm font-semibold ${text}`}>
                Sample Card Component
              </p>
              <p className={`text-xs ${subtext}`}>
                $182 night · ★ 4.92
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignMdPanel({ design }: { design: DesignEntry }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gray-900 p-6 font-mono text-sm">
      <pre className="whitespace-pre-wrap text-gray-300">
        {`# DESIGN.md — ${design.name}

## Overview
${design.description}

## 1. Color Palette

### Brand Colors
- Primary: ${design.accentColor}
- Background: #FFFFFF (light) / #0A0A0A (dark)
- Text: #222222 (light) / #EDEDED (dark)

### Surface Colors
- Canvas: #FFFFFF
- Surface Soft: #F7F7F7
- Surface Strong: #F2F2F2

### Text Colors
- Ink: #222222
- Body: #3F3F3F
- Muted: #6A6A6A
- Muted Soft: #929292

## 2. Typography

### Font Family
- Display & Body: System font stack
- Monospace: ui-monospace, monospace

### Scale
- Display: 48px / 700
- Heading 1: 32px / 700
- Heading 2: 24px / 600
- Body: 16px / 400
- Caption: 14px / 400
- Small: 12px / 500

## 3. Spacing

### Base Unit: 8px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## 4. Components

### Buttons
- Primary: Filled with brand color, rounded corners
- Secondary: Outlined, neutral border
- Ghost: Text only, hover underline

### Cards
- Border radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Padding: 24px

### Navigation
- Sticky header with blur backdrop
- Height: 64px
- Border-bottom: 1px solid border color

## 5. Responsive Breakpoints
- Mobile: 0–639px
- Tablet: 640–1023px
- Desktop: 1024–1279px
- Wide: 1280px+
`}
      </pre>
    </div>
  );
}

function ColorPaletteSection({ design }: { design: DesignEntry }) {
  const colors = [
    { name: "Brand", hex: design.accentColor, desc: "Primary brand accent" },
    { name: "Canvas", hex: "#FFFFFF", desc: "Default page surface" },
    {
      name: "Surface Soft",
      hex: "#F7F7F7",
      desc: "Disabled fields, sub-nav hover",
    },
    {
      name: "Surface Strong",
      hex: "#F2F2F2",
      desc: "Circular icon button surface",
    },
    {
      name: "Ink",
      hex: "#222222",
      desc: "Display, body, primary nav links",
    },
    {
      name: "Body",
      hex: "#3F3F3F",
      desc: "Long-form review and amenity copy",
    },
    {
      name: "Muted",
      hex: "#6A6A6A",
      desc: 'Sub-titles, footer sub-labels, "View all" links',
    },
    {
      name: "Border",
      hex: "#DDDDDD",
      desc: "Default 1px divider, search bar, footer",
    },
  ];

  return (
    <section className="mt-12">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        01 — Color Palette
      </div>
      <h3 className="mb-6 font-mono text-2xl font-bold text-white">
        Brand Colors + Neutrals
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {colors.map((c) => (
          <div
            key={c.name}
            className="overflow-hidden rounded-xl border border-white/10"
          >
            <div className="h-20" style={{ backgroundColor: c.hex }} />
            <div className="bg-white/5 p-3">
              <p className="text-sm font-semibold text-white">{c.name}</p>
              <p className="font-mono text-xs text-gray-500">{c.hex}</p>
              <p className="mt-1 text-xs text-gray-500">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TypographySection({ design }: { design: DesignEntry }) {
  return (
    <section className="mt-12">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        02 — Typography
      </div>
      <h3 className="mb-6 font-mono text-2xl font-bold text-white">
        Type Scale
      </h3>
      <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="border-b border-white/5 pb-4">
          <span className="text-xs text-gray-500">Display — 48px / 700</span>
          <p className="mt-1 text-5xl font-bold text-white">
            {design.name}
          </p>
        </div>
        <div className="border-b border-white/5 pb-4">
          <span className="text-xs text-gray-500">Heading 1 — 32px / 700</span>
          <p className="mt-1 text-3xl font-bold text-white">
            Design System Overview
          </p>
        </div>
        <div className="border-b border-white/5 pb-4">
          <span className="text-xs text-gray-500">Heading 2 — 24px / 600</span>
          <p className="mt-1 text-2xl font-semibold text-white">
            Component Library
          </p>
        </div>
        <div className="border-b border-white/5 pb-4">
          <span className="text-xs text-gray-500">Body — 16px / 400</span>
          <p className="mt-1 text-base text-gray-300">
            The quick brown fox jumps over the lazy dog. This text demonstrates
            the default body copy style.
          </p>
        </div>
        <div>
          <span className="text-xs text-gray-500">Caption — 14px / 400</span>
          <p className="mt-1 text-sm text-gray-400">
            Supporting text and secondary information displayed at caption size.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComponentsSection({ design }: { design: DesignEntry }) {
  return (
    <section className="mb-12 mt-12">
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
        03 — Components
      </div>
      <h3 className="mb-6 font-mono text-2xl font-bold text-white">
        UI Components
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Buttons */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-sm font-semibold text-white">Buttons</h4>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: design.accentColor }}
            >
              Primary
            </button>
            <button className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white">
              Secondary
            </button>
            <button className="rounded-lg px-5 py-2.5 text-sm font-semibold text-gray-400 underline-offset-4 hover:underline">
              Ghost
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-sm font-semibold text-white">Card</h4>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div
              className="mb-3 h-24 rounded-lg"
              style={{ backgroundColor: design.accentColor + "20" }}
            />
            <p className="text-sm font-semibold text-white">Sample Card</p>
            <p className="text-xs text-gray-500">
              A card component with {design.name}&apos;s design language
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-sm font-semibold text-white">
            Input Fields
          </h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Text input"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-white/30"
              readOnly
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-white/30"
              readOnly
            />
          </div>
        </div>

        {/* Badge */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h4 className="mb-4 text-sm font-semibold text-white">Badges</h4>
          <div className="flex flex-wrap gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: design.accentColor }}
            >
              Default
            </span>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
              Success
            </span>
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
              Warning
            </span>
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-400">
              Error
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
