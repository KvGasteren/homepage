// app/projects/mahjong/page.tsx
import Link from 'next/link'
import { SiteHeader } from '@/app/components/SiteHeader'
import { Container } from '@/app/components/layout/Container'
import { Section } from '@/app/components/layout/Section'
import { Card } from '@/app/components/layout/Card'
import { ButtonLink } from '@/app/components/ui/ButtonLink'
import { HomeAndContactActions } from '@/app/components/header/HeaderActions'
import { SiteFooter } from '@/app/components/SiteFooter'

export default function MahjongProjectPage() {
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
              Mahjong scores
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Een kleine webapplicatie om Mahjong scores bij te houden tijdens
              het spelen. Ontstaan uit een praktisch probleem en gebouwd met
              focus op eenvoud en snelheid.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink
              href="https://mahjong.koenvangasteren.nl"
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
            >
              Bekijk de app
            </ButtonLink>
            <ButtonLink
              href="https://github.com/KvGasteren/mahjong-scores"
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
                <p className="text-sm font-medium">Frontend web app</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Doel
                </p>
                <p className="text-sm font-medium">
                  Scores snel en foutloos bijhouden
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">
                  Karakter
                </p>
                <p className="text-sm font-medium">Praktisch en lichtgewicht</p>
              </div>
            </div>
          </Card>
        </header>

        <div className="mt-10 space-y-12 sm:mt-14">
          {/* Aanleiding */}
          <Section
            id="aanleiding"
            title="Aanleiding"
            kicker="Waarom dit project"
          >
            <div className="max-w-3xl space-y-4 text-muted-foreground">
              <p>
                Tijdens Mahjong sessies werden scores bijgehouden op papier of
                in losse notities. Dat werkte, maar leidde regelmatig tot
                fouten, onduidelijkheid en discussies achteraf.
              </p>
              <p>
                Ik wilde een simpele applicatie die precies doet wat nodig is,
                zonder extra functies of afleiding. De app moest tijdens het
                spel te gebruiken zijn, ook op mobiel.
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
                  'Bijhouden van scores per speler',
                  'Ondersteuning voor meerdere rondes',
                  'Direct inzicht in tussenstanden',
                  'Eenvoudige bediening zonder uitleg',
                  'Geen account of setup nodig',
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
                  Dit project is bewust klein gehouden. De uitdaging zat niet in
                  complexiteit, maar in het weglaten van alles wat niet nodig
                  is.
                </p>
                <p>
                  Elke interactie moest logisch zijn zonder uitleg. Als een
                  gebruiker moet nadenken, is het ontwerp te ingewikkeld.
                </p>
              </div>

              <Card className="p-5 sm:p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'Zo min mogelijk schermen en stappen',
                    'Directe feedback bij elke actie',
                    'State lokaal en voorspelbaar',
                    'Geen verborgen logica of automatische correcties',
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
                  Mahjong scores was de eerste applicatie die ik publiek op het
                  web heb gezet. Het begon als een klein hulpmiddel voor eigen
                  gebruik, maar werd daarmee ook een leerproject.
                </p>
                <p>
                  Door deze app leerde ik wat het betekent om iets daadwerkelijk
                  te publiceren: rekening houden met gebruik op verschillende
                  apparaten, omgaan met fouten, en accepteren dat eenvoudige
                  keuzes vaak beter werken dan uitgebreide oplossingen.
                </p>
                <p>
                  Die lessen neem ik nog steeds mee in latere projecten, ook
                  wanneer het domein complexer wordt.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
                  >
                    Terug naar home
                  </Link>
                </div>
              </div>

              <Card className="p-5 sm:p-6">
                <p className="text-sm font-medium">
                  Wat ik hiervan heb geleerd
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {[
                    'Publiceren is iets anders dan lokaal bouwen',
                    'Eenvoud is vaak robuuster dan flexibiliteit',
                    'Gebruikersgedrag is belangrijker dan aannames',
                    'Kleine projecten zijn waardevolle leerstappen',
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-foreground"
                        aria-hidden="true"
                      />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>
        </div>
      </Container>
      <SiteFooter />
    </main>
  )
}
