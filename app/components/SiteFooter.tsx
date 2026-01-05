// app/components/SiteFooter.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type SiteFooterProps = {
  right?: ReactNode;
};

export function SiteFooter({ right }: SiteFooterProps) {
  return (
    <footer className="mt-14 border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-gray-900">
              Koen van Gasteren
            </div>
            <div className="text-sm text-gray-500">
              Analyse • Organisatie • Software
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <a
              href="mailto:gasteren@gmail.com"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
            {right ? <div className="ml-2">{right}</div> : null}
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Koen van Gasteren
        </div>
      </div>
    </footer>
  );
}
