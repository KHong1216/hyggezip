import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

