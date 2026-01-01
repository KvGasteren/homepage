import Link from "next/link";

export const metadata = {
  title: "Workforce Planning Case Study | Koen van Gasteren",
  description:
    "Workforce planning case study: analyse, simulatie en advies voor capaciteitsplanning.",
};

export default function WorkforcePlanningCasePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide opacity-70">Case study</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Workforce Planning Case Study
        </h1>
        <p className="text-lg opacity-80">
          Een realistische WFM-analyse met simulaties en advies voor capaciteitsplanning.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="https://mahjong.koenvangasteren.nl"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-black/5"
          >
            Demo: Mahjong
          </Link>
          <Link
            href="https://perfume.koenvangasteren.nl"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-black/5"
          >
            Demo: Perfume
          </Link>
        </div>
      </header>

      <section className="mt-12 space-y-10">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Context</h2>
          <p className="opacity-80">
            Deze case study laat zien hoe ik een WFM-vraagstuk benader: van probleemdefinitie
            en data-analyse tot simulaties en een concreet advies met implementatiestappen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Vraagstuk</h2>
          <ul className="list-disc space-y-2 pl-5 opacity-80">
            <li>Hoe ontwikkelt de workload zich door de tijd?</li>
            <li>Welke staffing-scenario’s voldoen aan SLA/serviceniveaus?</li>
            <li>Wat is de impact op kosten, bezetting en risico’s?</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Aanpak</h2>
          <ol className="list-decimal space-y-2 pl-5 opacity-80">
            <li>Data verkennen & aannames expliciet maken</li>
            <li>Baseline forecast & varianten</li>
            <li>Simulaties voor scenariovergelijking</li>
            <li>Adviesrapport met roadmap</li>
          </ol>
        </section>

        <section className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Downloads</h2>
          <p className="mt-2 opacity-80">
            Zet straks je PDF’s in <code className="rounded bg-black/5 px-1">/public</code> en link ze hier.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-xl border px-4 py-2 text-sm opacity-60">
              Rapport (PDF) — binnenkort
            </span>
            <span className="rounded-xl border px-4 py-2 text-sm opacity-60">
              Notebook (PDF/HTML) — binnenkort
            </span>
          </div>
        </section>

        <div className="pt-2">
          <Link href="/" className="text-sm underline opacity-80 hover:opacity-100">
            ← Terug naar home
          </Link>
        </div>
      </section>
    </main>
  );
}
