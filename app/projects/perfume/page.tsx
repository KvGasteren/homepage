// app/projects/perfume/page.tsx
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/layout/Card";
import { ButtonLink } from "@/app/components/ui/ButtonLink";
import { HomeAndContactActions } from "@/app/components/header/HeaderActions";
import { SiteFooter } from "@/app/components/SiteFooter";

export default function PerfumeProjectPage() {
  return (
    <main className="py-10 sm:py-14">
      <SiteHeader right={<HomeAndContactActions />} />      
      <Container>
        {/* Hero */}
        <header className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Software project
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Perfume app
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Een full-stack applicatie voor het beheren van parfums,
              ingrediënten en allergenen. Gebouwd met focus op een helder
              datamodel en een bewerkflow die fouten voorkomt.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink
              href="https://perfume.koenvangasteren.nl"
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
            >
              Bekijk de app
            </ButtonLink>
            <ButtonLink
              href="https://github.com/KvGasteren/perfumeapp"
              className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Bekijk de code
            </ButtonLink>
          </div>

          <Card className="p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Type
                </p>
                <p className="text-sm font-medium">Full-stack web app</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Doel
                </p>
                <p className="text-sm font-medium">
                  Grip op ingrediënten en allergenen
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Karakter
                </p>
                <p className="text-sm font-medium">
                  Complex domein, simpele bediening
                </p>
              </div>
            </div>
          </Card>
        </header>

        <div className="mt-10 space-y-12 sm:mt-14">
          {/* Aanleiding */}
          <Section id="aanleiding" title="Aanleiding" kicker="Waarom dit project">
            <div className="max-w-3xl space-y-4 text-muted-foreground">
              <p>
                In parfum formulering werken ingrediënten, concentraties en
                allergenen direct op elkaar in. In spreadsheets raak je al snel
                het overzicht kwijt, en kleine wijzigingen kunnen onverwacht
                doorwerken in berekeningen.
              </p>
              <p>
                Ik wilde een applicatie die die relaties expliciet maakt en die
                bewerkingen logisch en veilig houdt. Niet meer opties, maar
                minder ruis.
              </p>
            </div>
          </Section>

          {/* Functionaliteit */}
          <Section
            id="functionaliteit"
            title="Wat de app doet"
            kicker="Functionaliteit"
          >
            <Card className="p-5 sm:p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Beheren van ingrediënten met gekoppelde allergenen",
                  "Vastleggen en aanpassen van concentraties per formule",
                  "Overzicht van allergenen op formulaniveau",
                  "Begeleiden van bewerkingen",
                  "Wijzigingen pas opslaan bij expliciete bevestiging",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </Section>

          {/* Ontwerpkeuzes */}
          <Section
            id="ontwerp"
            title="Ontwerpkeuzes"
            kicker="Hoe ik het heb aangepakt"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  De uitdaging zat niet in de hoeveelheid schermen, maar in het
                  modelleren van het domein en het voorkomen van verborgen
                  neveneffecten.
                </p>
                <p>
                  Eén ingrediënt kan meerdere allergenen bevatten, en die tellen
                  cumulatief op in een formule. Daarom moest de applicatie
                  voorspelbaar blijven als je iets wijzigt.
                </p>
                <p>
                  De bewerkflow is bewust: wijzigingen worden verzameld en pas
                  opgeslagen als je dat expliciet bevestigt.
                </p>
              </div>

              <Card className="p-5 sm:p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Relaties expliciet in het datamodel",
                    "Zo min mogelijk automatische magie",
                    "Wijzigingen pas opslaan aan het einde van een bewerksessie",
                    "Foutpreventie door regels en duidelijke feedback",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground"
                        aria-hidden="true"
                      />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>

          {/* Wat dit laat zien */}
          <Section
            id="takeaway"
            title="Wat dit project laat zien"
            kicker="Relevantie"
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dit project laat zien hoe ik een complex domein terugbreng tot
                  een set simpele, begrijpelijke handelingen. Niet door het
                  probleem weg te abstraheren, maar door het expliciet te maken.
                </p>
                <p>
                  Het is een werkend voorbeeld van mijn manier van bouwen:
                  eerst structuur en regels, daarna pas schermen.
                </p>
              </div>

              <Card className="p-5 sm:p-6">
                <p className="text-sm font-medium">Sterke punten</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Complexe relaties vertalen naar een helder model",
                    "Bewerkflow die verrassingen voorkomt",
                    "Consistente regels en duidelijke feedback",
                    "Pragmatische full-stack aanpak",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 shrink-0 rounded-full bg-foreground"
                        aria-hidden="true"
                      />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                Terug naar home
              </Link>
            </div>
          </Section>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}
