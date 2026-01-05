// app/(site)/layout.tsx
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
