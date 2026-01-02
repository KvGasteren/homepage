// app/components/layout/Section.tsx
export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id?: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="space-y-2">
        {kicker ? (
          <p className="text-sm font-medium text-muted-foreground">{kicker}</p>
        ) : null}
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
