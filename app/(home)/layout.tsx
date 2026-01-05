// app/(home)/layout.tsx
import Link from "next/link";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader
        right={
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/wfm-case-study"
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Bekijk WFM case study
            </Link>
          </div>
        }
      />
      {children}
      <SiteFooter />
    </div>
  );
}
