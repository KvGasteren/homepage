// app/components/ui/ButtonLink.tsx
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:opacity-90"
      : "border border-border hover:bg-accent";

  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");

  if (isExternal) {
    const rel = href.startsWith("http") ? "noreferrer" : undefined;
    const target = href.startsWith("http") ? "_blank" : undefined;

    return (
      <a href={href} rel={rel} target={target} className={[base, styles, className].join(" ")}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={[base, styles, className].join(" ")}>
      {children}
    </Link>
  );
}
