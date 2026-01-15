import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#research", label: "Research" },
  { href: "#game", label: "Event", isActive: true },
];

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#about"
          className="text-2xl font-bold tracking-tighter text-stone-800"
        >
          hygge<span className="text-amber-700">Zip</span>
        </a>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                "relative transition-colors",
                link.isActive
                  ? "text-amber-700 font-bold underline underline-offset-4"
                  : "nav-link hover:text-stone-900",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </div>
        <details className="md:hidden">
          <summary
            className="list-none cursor-pointer inline-flex items-center justify-center rounded-md size-9 text-stone-600 hover:bg-stone-100 transition"
            aria-label="메뉴 열기/닫기"
          >
            <span className="sr-only">메뉴</span>
            <span className="details-open:hidden">
              <Menu className="h-5 w-5" />
            </span>
            <span className="hidden details-open:inline">
              <X className="h-5 w-5" />
            </span>
          </summary>
          <div className="absolute left-0 right-0 top-16 bg-white border-t border-stone-100">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    "block text-sm font-medium transition-colors",
                    link.isActive
                      ? "text-amber-700 font-bold"
                      : "text-stone-600 hover:text-stone-900",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}


