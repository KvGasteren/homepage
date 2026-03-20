'use client'

import { useEffect, useRef, useState } from 'react'

function takeUp(over: number, onder: number): number {
  const maxFloat = Math.max(over, onder)
  const kruising = 2 / (over + onder + 2)
  const a = 0.163167, b = 0.084428, c = 1.677688
  return a * Math.exp(-b * maxFloat) * (c * kruising)
}

function berekenGaren(
  draden_per_cm: number,
  over: number,
  onder: number,
  lengte_cm: number,
  breedte_cm: number,
  rest_cm: number
) {
  const tu = takeUp(over, onder)
  const tu_factor = 1 + tu
  const schering_per_cm = draden_per_cm * (over + onder) / (over + onder + 2)
  const herhaling = over + onder
  const draden_schering = Math.ceil(breedte_cm * tu_factor * schering_per_cm / herhaling) * herhaling
  const inslag_per_cm = schering_per_cm
  const aantal_inslagen = Math.round(lengte_cm * tu_factor * inslag_per_cm)
  const schering_cm = (lengte_cm * tu_factor + rest_cm) * draden_schering
  const inslag_cm = breedte_cm * tu_factor * aantal_inslagen
  const totaal_cm = schering_cm + inslag_cm
  return { draden_schering, aantal_inslagen, schering_cm, inslag_cm, totaal_cm, tu }
}

type ResultType = ReturnType<typeof berekenGaren>

export default function WeavingCalculator() {
  const [draden, setDraden] = useState(12)
  const [over, setOver] = useState(2)
  const [onder, setOnder] = useState(2)
  const [lengte, setLengte] = useState(100)
  const [breedte, setBreedte] = useState(100)
  const [rest, setRest] = useState(50)
  const [result, setResult] = useState<ResultType | null>(null)
  const [bindingGrid, setBindingGrid] = useState<boolean[][]>([])
  const [mounted, setMounted] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const rows = over + onder
    const cols = Math.min(rows * 3, 24)
    const grid: boolean[][] = []
    for (let r = 0; r < Math.min(rows, 6); r++) {
      const row: boolean[] = []
      for (let c = 0; c < cols; c++) {
        row.push((c + r) % rows < over)
      }
      grid.push(row)
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBindingGrid(grid)
  }, [over, onder])

  function bereken() {
    if (!draden || !over || !onder || !lengte || !breedte) return
    setResult(berekenGaren(draden, over, onder, lengte, breedte, rest))
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Enter') bereken() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  if (!mounted) return null

  return (
    <div style={s.page}>
      <header style={s.header}>
        <p style={s.eyebrow}>Handweef gereedschap</p>
        <h1 style={s.h1}>Weefcalculator</h1>
        <p style={s.subtitle}>berekent benodigde garenlengte voor schering &amp; inslag</p>
        <div style={s.weavePattern}>
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} style={{ ...s.weaveCell, opacity: i % 3 === 0 ? 0.08 : i % 2 === 0 ? 0.5 : 0.12 }} />
          ))}
        </div>
      </header>

      <section style={s.section}>
        <p style={s.sectionLabel}>Garen</p>
        <div style={s.fieldRow}>
          <Field label="Draden per cm" unit="wikkeltest">
            <input style={s.input} type="number" min={1} value={draden}
              onChange={e => setDraden(Number(e.target.value))} />
          </Field>
        </div>
      </section>

      <section style={s.section}>
        <p style={s.sectionLabel}>Binding</p>
        <div style={s.fieldRow}>
          <Field label="Over" unit="scheringdraden">
            <input style={s.input} type="number" min={1} value={over}
              onChange={e => setOver(Number(e.target.value))} />
          </Field>
          <Field label="Onder" unit="scheringdraden">
            <input style={s.input} type="number" min={1} value={onder}
              onChange={e => setOnder(Number(e.target.value))} />
          </Field>
        </div>
        <div style={s.bindingPreview}>
          <span style={s.bindingPreviewLabel}>Bindingspatroon (inslag perspectief)</span>
          <div style={s.bindingGrid}>
            {bindingGrid.map((row, r) => (
              <div key={r} style={s.bindingRow}>
                {row.map((isOver, c) => (
                  <div key={c} style={{ ...s.bindingCell, opacity: isOver ? 0.85 : 0.1 }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={s.section}>
        <p style={s.sectionLabel}>Afmetingen</p>
        <div style={{ ...s.fieldRow, gridTemplateColumns: '1fr 1fr 1fr' }}>
          <Field label="Lengte" unit="cm">
            <input style={s.input} type="number" min={1} value={lengte}
              onChange={e => setLengte(Number(e.target.value))} />
          </Field>
          <Field label="Breedte" unit="cm">
            <input style={s.input} type="number" min={1} value={breedte}
              onChange={e => setBreedte(Number(e.target.value))} />
          </Field>
          <Field label="Touwrest" unit="cm">
            <input style={s.input} type="number" min={0} value={rest}
              onChange={e => setRest(Number(e.target.value))} />
          </Field>
        </div>
      </section>

      <button style={s.btn} onClick={bereken}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
        Bereken garenlengte
      </button>

      {result && (
        <div ref={resultRef} style={s.results}>
          <p style={s.resultsTitle}>Resultaat</p>
          <div style={s.resultGrid}>
            <ResultCell label="Scheringdraden" value={result.draden_schering} unit="draden" />
            <ResultCell label="Aantal inslagen" value={result.aantal_inslagen} unit="inslagen" />
            <ResultCell label="Scheringlengte" value={Math.round(result.schering_cm)} unit="cm" />
            <ResultCell label="Inslaglengte" value={Math.round(result.inslag_cm)} unit="cm" />
          </div>
          <div style={s.resultTotal}>
            <span style={s.resultTotalLabel}>Totaal garen</span>
            <span>
              <span style={s.resultTotalValue}>{(result.totaal_cm / 100).toFixed(2)}</span>
              <span style={s.resultTotalUnit}> meter</span>
            </span>
          </div>
          <p style={s.takeUpNote}>
            Inkrimp ({over}/{onder} binding): {(result.tu * 100).toFixed(1)}% —
            schering afgerond op veelvoud van {over + onder} draden
          </p>
        </div>
      )}

      <footer style={s.footer}>
        weefcalculator — inkrimp gebaseerd op empirisch model — aanpassen op basis van eigen meetdata
      </footer>
    </div>
  )
}

function Field({ label, unit, children }: { label: string; unit: string; children: React.ReactNode }) {
  return (
    <div style={s.field}>
      <label style={s.label}>{label}</label>
      {children}
      <span style={s.unit}>{unit}</span>
    </div>
  )
}

function ResultCell({ label, value, unit }: { label: string; value: number; unit: string }) {
  return (
    <div style={s.resultCell}>
      <div style={s.resultCellLabel}>{label}</div>
      <div style={s.resultCellValue}>{value}</div>
      <div style={s.resultCellUnit}>{unit}</div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: 640, margin: '0 auto', padding: '4rem 2rem 6rem',
    fontFamily: "'Roboto', sans-serif", fontWeight: 300,
    color: '#111', background: '#fff', minHeight: '100vh',
  },
  header: { marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid #111' },
  eyebrow: { fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' },
  h1: { fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#111' },
  subtitle: { marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', fontWeight: 300 },
  weavePattern: { display: 'flex', gap: 2, marginTop: '1.25rem' },
  weaveCell: { display: 'block', width: 6, height: 6, background: '#111' },
  section: { marginBottom: '2.5rem' },
  sectionLabel: { fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem' },
  fieldRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '0.4rem' },
  label: { fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444' },
  input: {
    background: '#f5f5f5', border: '1px solid #ddd', borderBottom: '1px solid #111',
    color: '#111', fontFamily: "'Roboto', sans-serif", fontWeight: 300,
    fontSize: '1.1rem', padding: '0.55rem 0.75rem', width: '100%', outline: 'none', borderRadius: 0,
  },
  unit: { fontSize: '0.6rem', color: '#888', letterSpacing: '0.05em' },
  bindingPreview: { marginTop: '1rem', padding: '1rem', background: '#f5f5f5', border: '1px solid #ddd', minHeight: 60, display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  bindingPreviewLabel: { fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888' },
  bindingGrid: { display: 'flex', flexDirection: 'column', gap: 2 },
  bindingRow: { display: 'flex', gap: 2 },
  bindingCell: { width: 14, height: 14, background: '#111' },
  btn: {
    width: '100%', padding: '0.85rem', background: '#111', color: '#fff',
    border: 'none', fontFamily: "'Roboto', sans-serif", fontWeight: 400,
    fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase',
    cursor: 'pointer', borderRadius: 0, marginTop: '0.5rem',
  },
  results: { marginTop: '2.5rem', borderTop: '1px solid #111', paddingTop: '2rem' },
  resultsTitle: { fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#888', marginBottom: '1.5rem' },
  resultGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#ddd', border: '1px solid #ddd', marginBottom: 1 },
  resultCell: { background: '#f5f5f5', padding: '1rem' },
  resultCellLabel: { fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '0.3rem' },
  resultCellValue: { fontSize: '1.5rem', fontWeight: 300, color: '#111', letterSpacing: '-0.02em' },
  resultCellUnit: { fontSize: '0.6rem', color: '#888' },
  resultTotal: { background: '#111', color: '#fff', padding: '1.25rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' },
  resultTotalLabel: { fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase' },
  resultTotalValue: { fontSize: '2.2rem', fontWeight: 300, letterSpacing: '-0.03em' },
  resultTotalUnit: { fontSize: '0.75rem', fontWeight: 300, opacity: 0.6, marginLeft: '0.25rem' },
  takeUpNote: { fontSize: '0.65rem', fontWeight: 300, color: '#888', marginTop: '1rem', lineHeight: 1.7 },
  footer: { marginTop: '4rem', paddingTop: '1rem', borderTop: '1px solid #ddd', fontSize: '0.6rem', fontWeight: 300, color: '#888', letterSpacing: '0.08em' },
}
