// app/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'

export const metadata: Metadata = {
  title: 'Koen van Gasteren',
  description:
    'Koen van Gasteren — analyse, organisatie en software. Case study: WFM in de polikliniek.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <SiteHeader
        right={
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/wfm-case-study"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Bekijk WFM case study
            </Link>
          </div>
        }
      />

      {/* Hero (ANCHOR CARD) */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
              Beschikbaar voor analytisch advies en implementatie
            </p>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Ik help organisaties complexe keuzes expliciet en werkbaar maken.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Ik ben sterk in het doorgronden van complexe werkomgevingen en het
              helder uitleggen van wat daar echt gebeurt. In mijn werk combineer
              ik analyse en software om variatie zichtbaar te maken en keuzes
              expliciet te maken. Zo help ik organisaties bewust afwegen tussen
              efficiëntie, werkbaarheid en voorspelbaarheid, in plaats van
              alleen te sturen op wat op papier klopt.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/wfm-case-study"
                className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                WFM case study: polikliniek
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <a
                href="mailto:gasteren@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Neem contact op
              </a>

              <div className="text-sm text-gray-500">
                Haarlem • NL •{' '}
                <span className="whitespace-nowrap">Nederlands / Engels</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 sm:hidden">
              <Link
                href="/wfm-case-study"
                className="block w-full rounded-2xl bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Bekijk WFM case study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I do (EDITORIAL BLOCKS, no cards) */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Analyse</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Instroom, variatie, consultduur, no-shows en uitloop vertalen naar
              heldere inzichten en scenario’s.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">Advies</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Keuzes expliciet maken: buffers, werkbaarheid, voorspelbaarheid en
              dienstverlening. Inclusief concrete aanbevelingen.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Implementatie
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Van aanpak naar uitvoering: dashboards, processen, rituelen en
              tooling die teams helpen bijsturen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured case study (ANCHOR CARD) */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                Uitgelichte case study
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                <span className="font-medium text-gray-900">
                  WFM in de polikliniek:
                </span>{' '}
                wachttijd omlaag, roosterstress omlaag. Met transparante
                aannames en scenario’s. Inclusief adviesrapport en onderbouwing
                in een statisch (HTML) notebook.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gray-900" />
                  3 scenario’s: strak, werkbaar, slimme buffer
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gray-900" />
                  Metrics: wachttijd, uitloop & benutting (proxy’s)
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-2 w-2 flex-none rounded-full bg-gray-900" />
                  Advies in zorgtaal, met eerste stappen voor implementatie
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 md:min-w-[240px]">
              <Link
                href="/wfm-case-study"
                className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Open case study
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <p className="text-xs leading-relaxed text-gray-500">
                Tip: begin met het advies (2–4 pagina’s). De analyse is
                optioneel als onderbouwing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other projects (EDITORIAL BLOCKS, no nested cards) */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-lg font-semibold text-gray-900">
          Andere projecten
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
          Naast advies- en analysewerk bouw ik ook softwareprojecten. Deze
          projecten laten zien hoe ik complexe vraagstukken benader, ook buiten
          het WFM-domein.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {/* Perfume */}
          <div className="flex h-full flex-col">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Perfume</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Een full-stack project ontstaan vanuit een praktisch probleem:
                het berekenen van allergenen in parfums bleek in spreadsheets
                onoverzichtelijk en foutgevoelig. Het project richt zich op het
                modelleren van ingrediënten, allergenen en formules, en het
                terugbrengen van complexe regels tot een werkbare interface.
              </p>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="/projects/perfume"
                className="inline-block text-sm font-medium text-gray-900 hover:underline"
              >
                Meer over dit project →
              </Link>
            </div>
          </div>

          {/* Mahjong */}
          <div className="flex h-full flex-col">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Mahjong Scores
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Een interactief project ontstaan vanuit de behoefte om
                Mahjong-scores bij te houden zonder te werken met fiches. Het
                groeide uit tot een toepassing waarin scores worden vastgelegd,
                geschiedenis wordt bijgehouden en eenvoudige statistieken
                inzicht geven in het spelverloop.
              </p>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="/projects/mahjong"
                className="inline-block text-sm font-medium text-gray-900 hover:underline"
              >
                Meer over dit project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
