import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 antialiased dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <header className="mb-10 flex flex-col items-center gap-4 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            koenvangasteren.nl
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Koen van Gasteren
          </h1>

          <p className="max-w-2xl text-balance text-slate-600 dark:text-slate-300">
            Workforce Management (WFM) & workforce planning — van analyse en simulatie
            tot advies en implementatie.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/workforce-planning-case"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              Bekijk case study
            </Link>

            <a
              href="mailto:koen@koenvangasteren.nl"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-black/5 dark:border-slate-800 dark:bg-slate-900"
            >
              Contact
            </a>

            <a
              href="https://github.com/koenvangasteren"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-black/5 dark:border-slate-800 dark:bg-slate-900"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Case study spotlight */}
        <section className="mb-8">
          <Link
            href="/workforce-planning-case"
            className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl dark:border-slate-800 dark:bg-slate-800">
                📊
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Workforce Planning Case Study</h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Analyse • scenario’s • simulatie • adviesrapport
                </p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">
                hoofdcase
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              Een bedrijf-neutrale case die laat zien hoe ik een WFM-vraagstuk structureer:
              van probleemdefinitie en metrics tot een uitvoerbare roadmap.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600 group-hover:gap-3 dark:text-indigo-400">
              Open case study
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
          </Link>
        </section>

        {/* Proof / demos */}
        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <h3 className="text-lg font-semibold">Voorbeelden (bewijs)</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Werkende demo’s / workflows
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href="https://mahjong.koenvangasteren.nl"
              className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl dark:border-slate-800 dark:bg-slate-800">
                  🀄
                </span>
                <h4 className="text-xl font-semibold">Mahjong Scores</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Data input → aggregatie → inzicht. Snel, fouttolerant en overzichtelijk.
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
                <h4 className="text-xl font-semibold">Perfume App</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Domeinlogica, bewerkflows en dataconsistentie (ingrediënten, allergenen, formules).
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
                  <path d="M5 12.75a.75.75 0 0 1 0-1.5h11.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5z" />
                </svg>
              </div>
              <span className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-transparent transition group-hover:ring-indigo-200/60 dark:group-hover:ring-indigo-500/30" />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Koen van Gasteren • Built with Next.js + Tailwind</p>
          <p className="max-w-2xl text-balance">
            Focus: workforce planning, analyse & advies. Demo’s zijn ondersteunend aan de case study.
          </p>
        </footer>
      </div>
    </main>
  );
}
