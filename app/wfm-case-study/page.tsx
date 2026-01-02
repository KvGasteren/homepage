// app/wfm-case-study/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WFM case study – Polikliniek | Koen van Gasteren",
  description:
    "Case study: WFM in de polikliniek. Scenario’s, bevindingen en advies met transparante onderbouwing in een statisch notebook.",
};

export default function WfmCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gray-900" aria-hidden="true" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-gray-900">
                WFM case study
              </div>
              <div className="text-xs text-gray-500">
                Polikliniek • Scenario’s • Advies • Onderbouwing
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              ← Terug
            </Link>
            <a
              href="mailto:gasteren@gmail.com"
              className="hidden rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:inline-flex"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-4">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
          <p className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
            Zorgcase • transparante aannames • scenario-denken
          </p>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            WFM in de polikliniek
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-700">
            Hoe organiseer je de inzet van zorgprofessionals zó dat wachttijden
            beheersbaar blijven, de dag minder vaak uitloopt en het rooster
            werkbaar is — zonder de zorg te reduceren tot een
            “callcenter-probleem”?
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Update these paths once you add the files */}
            <a
              href="/downloads/adviesrapport.pdf"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Lees het advies (PDF)
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href="/downloads/wfm-poli-analyse.html"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Bekijk de analyse (HTML notebook)
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <div className="text-sm text-gray-500">
              Samenvatting eerst • onderbouwing optioneel
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="text-xs font-semibold text-gray-500">Setting</div>
              <div className="mt-1 text-sm font-semibold text-gray-900">
                1 polikliniek
              </div>
              <div className="mt-1 text-sm text-gray-700">
                3 afspraaktypen (nieuw/controle/verrichting)
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="text-xs font-semibold text-gray-500">Capaciteit</div>
              <div className="mt-1 text-sm font-semibold text-gray-900">
                2 artsen + 1 PA/VS
              </div>
              <div className="mt-1 text-sm text-gray-700">
                Productieve tijd i.v.m. overleg/admin
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4">
              <div className="text-xs font-semibold text-gray-500">Focus</div>
              <div className="mt-1 text-sm font-semibold text-gray-900">
                Werkbaarheid
              </div>
              <div className="mt-1 text-sm text-gray-700">
                Wachttijd • uitloop • voorspelbaarheid
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Read this first */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Leeswijzer
          </h2>
          <div className="mt-3 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-gray-900">
                1) Advies (PDF)
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Kort rapport (2–4 pagina’s) met bevindingen, scenario’s en
                aanbevelingen. Dit is het primaire deliverable.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                2) Analyse (notebook)
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Transparante onderbouwing: aannames, scenario-opzet en
                visualisaties. Bedoeld voor wie de redenering wil volgen.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                3) Grenzen & interpretatie
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Dit is een theoretische case (met gesimuleerde data). Het doel is
                een denkkader laten zien, geen blauwdruk voor iedere poli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">
              De vraag
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Poliklinieken ervaren vaak een combinatie van variërende instroom,
              uiteenlopende consultduren en no-shows. Daardoor ontstaan
              wachttijden in de wachtkamer, ad-hoc bijsturen gedurende de dag en
              structurele uitloop.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              <span className="font-semibold text-gray-900">
                Centrale vraag:
              </span>{" "}
              hoe richt je planning en inzet zo in dat je een werkbare dag
              organiseert, met voorspelbare belasting voor medewerkers en
              betrouwbare toegang voor patiënten?
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight text-gray-900">
              Werkwijze
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gray-900" />
                Vraag (instroom) modelleren per dagdeel, inclusief variatie.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gray-900" />
                Consultduur modelleren per afspraaktype (incl. lange staart).
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gray-900" />
                Scenario’s vergelijken met expliciete bufferkeuzes.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-gray-900" />
                Metrics (proxy’s): wachttijd, uitloop & benutting.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key insights */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Belangrijkste inzichten
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-900">
                Variatie is de echte oorzaak
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Niet het gemiddelde bepaalt de werkdruk, maar pieken, uitloop en
                no-shows. Een planning die “op papier klopt” kan in de praktijk
                toch structureel uitlopen.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-900">
                Strak plannen verhoogt risico
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Minder buffer betekent hogere benutting, maar ook meer kans op
                wachtrijen en uitloop. Dit vertaalt zich direct naar roosterstress
                en ad-hoc bijsturen.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-sm font-semibold text-gray-900">
                Buffer is een bewuste keuze
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Buffers zijn geen verspilling, maar beleid: waar zet je ruimte
                neer om variatie op te vangen? Gericht bufferen kan de dag
                voorspelbaarder maken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-semibold text-gray-500">Scenario A</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Strak plannen
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Lage buffer</li>
              <li>• Hoge benutting</li>
              <li>• Hoger risico op uitloop</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-semibold text-gray-500">Scenario B</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Werkbaar plannen
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Gerichte buffer</li>
              <li>• Lagere piekdruk</li>
              <li>• Meer voorspelbaarheid</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="text-xs font-semibold text-gray-500">Scenario C</div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Slimme buffer
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Buffer op piekdagdelen</li>
              <li>• Balans toegang/werkdruk</li>
              <li>• Minder ad-hoc bijsturen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Aanbevelingen
          </h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Maak bufferbeleid expliciet
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Kies bewust waar je ruimte wilt hebben om variatie op te vangen.
                “Verborgen uitloop” is minder stuurbaar dan expliciete buffer.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-900">
                Buffer waar de variatie zit
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Zet buffers vooral in op piekdagdelen of processtappen met veel
                variatie, in plaats van overal een beetje.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-900">
                Maak afspraaktypen concreet
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Heldere duurklassen en periodieke herijking verminderen de
                onzekerheid en maken planning betrouwbaarder.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-gray-900">
                Stuur op werkbaarheid én toegang
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Kijk naast wachttijd ook naar uitloop en roosterstabiliteit. Dit
                helpt om keuzes te maken die draagvlak houden bij professionals.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <div className="text-sm font-semibold text-gray-900">
              Eerste twee weken (praktisch)
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Inventariseer instroom, no-show en uitloop per dagdeel.</li>
              <li>• Spreek “acceptabele werkdag” en “acceptabele wachttijd” af.</li>
              <li>• Test één scenario op kleine schaal en evalueer met het team.</li>
              <li>• Maak bijsturen onderdeel van het dagritme (niet ad-hoc).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Underpinning / downloads */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Downloads & onderbouwing
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Het adviesrapport is het primaire deliverable. De analyse is bedoeld
            als transparante onderbouwing voor wie de aannames en redenering wil
            volgen.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="/downloads/adviesrapport.pdf"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Adviesrapport (PDF)
              <span className="ml-2" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href="/downloads/wfm-poli-analyse.html"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Analyse (HTML)
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

          </div>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700">
            <div className="font-semibold text-gray-900">Disclaimer</div>
            <p className="mt-2 leading-relaxed">
              Dit is een theoretische case met gesimuleerde data. Het doel is het
              denkkader laten zien waarmee je keuzes expliciet maakt (buffers,
              werkbaarheid, voorspelbaarheid), niet een generieke blauwdruk voor
              alle poliklinieken.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-gray-600">
              Vragen of sparren?{" "}
              <a
                href="mailto:gasteren@gmail.com"
                className="font-semibold text-gray-900 underline underline-offset-4 hover:text-gray-700"
              >
                Mail me
              </a>
              .
            </div>

            <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-700">
              ← Terug naar home
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Koen van Gasteren</div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <a href="mailto:gasteren@gmail.com" className="hover:text-gray-900">
              gasteren@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
