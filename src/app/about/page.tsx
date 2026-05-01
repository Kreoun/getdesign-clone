export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 font-mono text-4xl font-bold text-white">About</h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          <strong className="text-white">getdesign.md</strong> is a browsable
          collection of DESIGN.md files curated by <strong className="text-white">CHOMRAEUN CHIN</strong> from real, well-known websites.
        </p>

        <p>
          <strong className="text-white">DESIGN.md</strong> is a concept
          introduced by Google Stitch, a structured markdown file that documents
          design patterns such as colors, typography, spacing, elevation, and
          responsive behavior, all observed on a public website.
        </p>

        <p>
          Drop one into your project root and point your coding agent at it to
          build UIs that draw on the same design vocabulary. DESIGN.md files are
          reference material, not exact reproductions, and they are not
          affiliated with or endorsed by the sites they describe.
        </p>

        <h2 className="mt-12 font-mono text-2xl font-bold text-white">
          Disclaimer
        </h2>
        <p>
          These are not official design systems from the listed companies. They
          are curated starting points inspired by publicly visible design
          patterns. Think of them as a source of inspiration and a practical
          foundation for building similar-looking UIs with your AI coding agent.
        </p>
        <p>
          Built by CHOMRAEUN CHIN. An independent community directory. All trademarks,
          brand names, and design elements belong to their respective owners.
          These DESIGN.md files document publicly observable design systems for
          educational and development purposes.
        </p>

        <h2 className="mt-12 font-mono text-2xl font-bold text-white">
          Sponsorship
        </h2>
        <p>
          If you&apos;d like to sponsor the project and the
          landing page, let&apos;s talk. Reach out to CHOMRAEUN CHIN via email.
        </p>
      </div>
    </div>
  );
}
