// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Koen van Gasteren",
  description:
    "Koen van Gasteren - analyse, organisatie en software. Case study: WFM in de polikliniek.",
};

export default function HomePage() {
  const container = "mx-auto max-w-6xl px-6";

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
              Ik ben iemand die graag uitzoekt hoe dingen echt werken. Ik
              analyseer graag, maar minstens zo belangrijk vind ik het om
              ingewikkelde materie simpel en begrijpelijk te maken. Of het nu
              gaat om software, processen of data: ik haal plezier uit het
              puzzelen tot het klopt. Mijn vrije tijd besteed ik aan
              verschillende ambachtelijke hobby&apos;s. Met aandacht voor detail,
              veel geduld en een oog voor kwaliteit.
            </p>
          </div>

          {/* Afbeelding */}
          <div className="md:col-span-5">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
              <div className="relative aspect-4/5">
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
            <h2 className="text-sm font-semibold text-gray-900">
              Analyse en overzicht
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Ik haal plezier uit het doorgronden van complexe vraagstukken en
              het aanbrengen van structuur. Ik wil snappen hoe iets in elkaar
              zit, waar knelpunten ontstaan en wat er echt toe doet.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Helder uitleggen
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Ik ben sterk in het vertalen van technische of abstracte materie
              naar iets begrijpbaars. Voor collega&apos;s, stakeholders of
              gebruikers, zonder het probleem plat te slaan.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Plezier in uitvogelen
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              Ik werk graag zorgvuldig en met aandacht. Of het nu code, data of
              een proces is, ik zoek graag door tot het klopt en beter kan dan
              eerst gedacht.
            </p>
          </div>
        </div>
      </section>

      {/* UITGELICHTE CASE */}
      <section className={`${container} py-12`}>
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                Uitgelichte case study
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                WFM in de polikliniek
              </p>
            </div>

            {/* Content */}
            <div className="grid gap-8 md:grid-cols-12">
              {/* Tekst */}
              <div className="md:col-span-7 space-y-4 text-sm leading-relaxed text-gray-700">
                <p>
                  Dit is een fictieve case study, waarmee ik mijn manier van
                  werken wil laten zien. In deze case onderzoek ik hoe workforce
                  management (het plannen en inzetten van personeel) kan helpen
                  om wachttijden in een polikliniek te beperken en de werkdruk
                  voor artsen en assistenten voorspelbaar te houden.
                </p>

                <p>
                  De case vergelijkt verschillende planningsscenario&apos;s op basis
                  van expliciete aannames, gesimuleerde data en heldere keuzes.
                  Ik heb een adviesrapport opgesteld om de bevindingen over te
                  brengen naar een managementlaag. De analyse is gedocumenteerd
                  in een Python notebook, bedoeld als onderbouwing van het
                  advies.
                </p>
              </div>

              {/* Rechterkolom */}
              <div className="md:col-span-5 flex flex-col gap-6 relative">
                {/* Bullets */}
                <ul className="space-y-2 text-sm text-gray-700 md:pb-16">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gray-900" />
                    3 scenario&apos;s: strak, werkbaar, slimme buffer
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gray-900" />
                    Metrics: wachttijd, uitloop en benutting (proxy&apos;s)
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-gray-900" />
                    Advies in zorgtaal, met eerste stappen voor implementatie
                  </li>
                </ul>
                {/* CTA */}
                <div className="mt-6 md:mt-0 md:absolute md:bottom-6 md:right-6">
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
          </div>
        </div>
      </section>

      {/* ANDERE PROJECTEN */}
      <section id="projects" className={`${container} py-12`}>
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
  );
}
