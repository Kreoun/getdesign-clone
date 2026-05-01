export default function WhatIsDesignMdPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 font-mono text-4xl font-bold text-white">
        What is DESIGN.md?
      </h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          <strong className="text-white">DESIGN.md</strong> is a new concept
          introduced by{" "}
          <a
            href="https://stitch.withgoogle.com"
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Stitch
          </a>
          . It&apos;s a plain-text design system document that AI agents read to
          generate consistent UI.
        </p>

        <p>
          It&apos;s just a markdown file. No Figma exports, no JSON schemas, no
          special tooling. Drop it into your project root and any AI coding
          agent or Google Stitch instantly understands how your UI should look.
          Markdown is the format LLMs read best, so there&apos;s nothing to
          parse or configure.
        </p>

        <div className="my-8 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left font-semibold text-white">
                  File
                </th>
                <th className="px-4 py-3 text-left font-semibold text-white">
                  Who reads it
                </th>
                <th className="px-4 py-3 text-left font-semibold text-white">
                  What it defines
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="px-4 py-3 font-mono text-emerald-400">
                  AGENTS.md
                </td>
                <td className="px-4 py-3 text-gray-400">Coding agents</td>
                <td className="px-4 py-3 text-gray-400">
                  How to build the project
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-emerald-400">
                  DESIGN.md
                </td>
                <td className="px-4 py-3 text-gray-400">Design agents</td>
                <td className="px-4 py-3 text-gray-400">
                  How the project should look and feel
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-mono text-2xl font-bold text-white">
          What does a DESIGN.md contain?
        </h2>

        <ul className="list-inside list-disc space-y-2 text-gray-300">
          <li>
            <strong className="text-white">Color Palette</strong> — Brand
            colors, surface colors, text hierarchy, borders
          </li>
          <li>
            <strong className="text-white">Typography</strong> — Font families,
            weight scale, size scale, line heights
          </li>
          <li>
            <strong className="text-white">Spacing</strong> — Base unit,
            spacing scale (xs to 3xl)
          </li>
          <li>
            <strong className="text-white">Components</strong> — Buttons,
            cards, inputs, navigation patterns
          </li>
          <li>
            <strong className="text-white">Elevation</strong> — Shadow system,
            layering conventions
          </li>
          <li>
            <strong className="text-white">Responsive</strong> — Breakpoints,
            grid behavior, mobile adaptations
          </li>
        </ul>

        <h2 className="mt-12 font-mono text-2xl font-bold text-white">
          How to use it
        </h2>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <ol className="list-inside list-decimal space-y-3 text-gray-300">
            <li>
              Browse the collection and find a design system you like
            </li>
            <li>
              Run{" "}
              <code className="rounded bg-white/10 px-2 py-0.5 font-mono text-sm text-emerald-400">
                npx getdesign@latest add [name]
              </code>{" "}
              in your project root
            </li>
            <li>
              Tell your AI coding agent:{" "}
              <em className="text-white">
                &quot;Build me a page that looks like this DESIGN.md&quot;
              </em>
            </li>
            <li>Get pixel-perfect UI that actually matches</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
