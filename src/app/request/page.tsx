"use client";

import { useState } from "react";

export default function RequestPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <h1 className="mb-2 font-mono text-3xl font-bold text-white">
        Request a DESIGN.md
      </h1>
      <p className="mb-8 text-gray-400">
        Get a specific website DESIGN.md, design tokens, and dark + light
        preview HTMLs.
      </p>

      <div className="mb-8 space-y-4 text-sm text-gray-400 leading-relaxed">
        <p>
          We put each request through DESIGN.md and work on it ourselves. We
          spend time with the site, check the details, and send it back once
          it&apos;s ready.
        </p>
        <p>
          The 60+ DESIGN.md files on the landing page are free, and we add 3
          new ones every day.
        </p>
        <p>
          Need a specific DESIGN.md or have a private site you&apos;d rather
          not see listed publicly? Fill out the form below. We work on these
          privately and send the files only to you — they&apos;re never
          published on the landing page.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6 rounded-xl border border-white/10 bg-white/5 p-6"
      >
        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Website URL <span className="text-rose-400">*</span>
          </label>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald-500/50"
          />
          <p className="mt-1 text-xs text-gray-500">
            The website you want us to generate DESIGN.md for
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Delivery Email <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald-500/50"
          />
          <p className="mt-1 text-xs text-gray-500">
            Email address where we should send the generated DESIGN.md
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-white">
            Additional Details{" "}
            <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            placeholder="Any specific requirements or notes..."
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald-500/50"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Proceed to Payment ($39)
        </button>
        <p className="text-center text-xs text-gray-500">
          You&apos;ll be redirected to Stripe to complete payment.
        </p>
      </form>
    </div>
  );
}
