import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
        404
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        This page has gone astray.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-neutral-400">
        &ldquo;I have gone astray like a lost sheep; seek thy servant.&rdquo;
        <span className="mt-2 block text-sm text-neutral-500">— Psalm 119:176 (KJV)</span>
      </p>
      <p className="mt-6 text-neutral-300">
        Return to the fold and find your daily encounter.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium tracking-wide text-neutral-100 transition hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Lead me home
      </Link>
    </article>
  );
}
