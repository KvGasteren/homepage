export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 antialiased dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <header className="mb-12 flex flex-col items-center gap-4 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            koenvangasteren.nl
          </div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Koen van Gasteren
          </h1>
          <p className="max-w-2xl text-balance text-slate-600 dark:text-slate-300">
            Welcome! Pick an app to continue.
          </p>
        </header>

        {/* Apps grid */}
        <section className="grid gap-6 sm:grid-cols-2">
          <a
            href="https://mahjong.koenvangasteren.nl"
            className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl dark:border-slate-800 dark:bg-slate-800">
                🀄
              </span>
              <h2 className="text-xl font-semibold">Mahjong Scores</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Track and compare Mahjong results. Quick input, clear stats.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:gap-3 dark:text-indigo-400">
              Open app
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12.75a.75.75 0 0 1 0-1.5h11.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5z" />
              </svg>
            </div>
            <span className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-transparent transition group-hover:ring-indigo-200/60 dark:group-hover:ring-indigo-500/30" />
          </a>

          <a
            href="https://perfume.koenvangasteren.nl"
            className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl dark:border-slate-800 dark:bg-slate-800">
                🌿
              </span>
              <h2 className="text-xl font-semibold">Perfume App</h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Manage ingredients, allergens, and formulas with clean workflows.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:gap-3 dark:text-indigo-400">
              Open app
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12.75a.75.75 0 0 1 0-1.5h11.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5z" />
              </svg>
            </div>
            <span className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-transparent transition group-hover:ring-indigo-200/60 dark:group-hover:ring-indigo-500/30" />
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Koen van Gasteren • Built with Next.js + Tailwind
          </p>
          <nav className="flex gap-4">
            <a
              className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
              href="mailto:koen@koenvangasteren.nl"
            >
              Contact
            </a>
            <a
              className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
              href="https://github.com/koenvangasteren"
            >
              GitHub
            </a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
