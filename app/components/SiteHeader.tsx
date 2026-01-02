// app/components/SiteHeader.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type SiteHeaderProps = {
  title?: string;
  subtitle?: string;
  href?: string;
  right?: ReactNode;
};

export function SiteHeader({
  title = "Koen van Gasteren",
  subtitle = "Analyse • Organisatie • Software",
  href = "/",
  right,
}: SiteHeaderProps) {
  return (
    <header className="mx-auto max-w-5xl px-6 py-6">
      <nav className="flex items-center justify-between">
        <Link href={href} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gray-900" aria-hidden="true" />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-gray-900">{title}</div>
            <div className="text-xs text-gray-500">{subtitle}</div>
          </div>
        </Link>

        {right ? <div className="flex items-center gap-2">{right}</div> : null}
      </nav>
    </header>
  );
}
