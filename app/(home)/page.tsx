// app/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Koen van Gasteren',
  description:
    'Koen van Gasteren - analyse, organisatie en software. Case study: WFM in de polikliniek.',
}

export default function HomePage() {
  const container = 'mx-auto max-w-6xl px-6'

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className={`${container} py-16`}>
        <div className="grid items-center gap-12 md:grid-cols-12">
          {/* Tekst */}
          <div className="md:col-span-7">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Complexe omgevingen,
              <br />
              simpel uitgelegd
            </h1>

            <p className="mt-5 max-w-prose text-lg text-muted-foreground">
              Ik combineer workforce planning en data-analyse met softwareontwikkeling.
              Mijn focus: variatie zichtbaar maken, keuzes expliciet maken en teams
              meenemen in een aanpak die werkt in de praktijk.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/wfm-case-study"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Bekijk WFM case study
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Bekijk projecten
              </Link>
            </div>
          </div>

          {/* Afbeelding */}
          <div className="md:col-span-5">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/photo.png"
                  alt="Portret Koen van Gasteren"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover contrast-150"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIJLERS */}
      <section className={`${container} py-12`}>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Analyse</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Complexe situaties doorgronden. Variatie, onzekerheid en
              afhankelijkheden vertalen naar inzichten die laten zien waar het
              echt knelt.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">Advies</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Keuzes expliciet maken. Afwegingen rond capaciteit, buffers en
              voorspelbaarheid concreet maken en bespreekbaar krijgen.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">Implementatie</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Zorgen dat het werkt in de praktijk. Structuur, hulpmiddelen en
              ritme aanbrengen zodat teams kunnen bijsturen zonder ad hoc druk.
            </p>
          </div>
        </div>
      </section>

      {/* UITGELICHTE CASE */}
      <section className={`${container} py-12`}>
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
            </div>
          </div>
        </div>
      </section>

      {/* ANDERE PROJECTEN */}
      <section className={`${container} py-12`}>
        <h2 className="text-lg font-semibold text-gray-900">Andere projecten</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
          Naast advies- en analysewerk bouw ik ook softwareprojecten. Deze
          projecten laten zien hoe ik complexe vraagstukken benader, ook buiten
          het WFM-domein.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {/* Perfume */}
          <div className="flex h-full flex-col bg-gray-50 px-6 py-10">
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
          <div className="flex h-full flex-col bg-gray-50 px-6 py-10">
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
    </main>
  )
}
