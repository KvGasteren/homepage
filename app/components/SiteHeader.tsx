// app/components/SiteHeader.tsx
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type SiteHeaderProps = {
  title?: string
  subtitle?: string
  href?: string
  right?: ReactNode
}

export function SiteHeader({
  title = 'Koen van Gasteren',
  subtitle = 'Analyse • Organisatie • Software',
  href = '/',
  right,
}: SiteHeaderProps) {
  return (
    <header className="mx-auto max-w-6xl px-6 py-6">
      <nav className="flex items-center justify-between">
        <Link href={href} className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="" width={36} height={36} priority />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-gray-900">{title}</div>
            <div className="text-xs text-gray-500">{subtitle}</div>
          </div>
        </Link>

        {right ? <div className="flex items-center gap-2">{right}</div> : null}
      </nav>
    </header>
  )
}
