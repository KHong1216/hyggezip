interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({
  id,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

