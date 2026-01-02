// app/components/ui/Card.tsx
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
