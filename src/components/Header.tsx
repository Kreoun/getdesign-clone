import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d1a]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight text-white">
            getdesign.md
          </Link>
          <Link
            href="/request"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:flex"
          >
            🔒 Request private DESIGN.md
          </Link>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/design-md"
            className="hidden items-center gap-1 text-gray-300 transition-colors hover:text-white sm:flex"
          >
            Websites
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
              NEW
            </span>
          </Link>
          <Link href="/what-is-design-md" className="hidden text-gray-300 transition-colors hover:text-white sm:flex">
            What is DESIGN.md?
          </Link>
          <a
            href="https://github.com/VoltAgent/awesome-design-md"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-300 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="hidden sm:inline">Star</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-semibold">68.5k</span>
          </a>
          <Link
            href="/auth"
            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
