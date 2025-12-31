"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#research", label: "Research" },
  { href: "#interview", label: "Interview", isActive: true },
];

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  if (href?.startsWith("#")) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={handleSmoothScroll}
          className="text-2xl font-bold tracking-tighter text-stone-800"
        >
          hygge<span className="text-amber-700">Zip</span>
        </a>
        <div className="hidden md:flex space-x-10 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className={cn(
                "relative transition-colors",
                link.isActive
                  ? "text-amber-700 font-bold underline underline-offset-4"
                  : "nav-link hover:text-stone-900"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-stone-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "block text-sm font-medium transition-colors",
                  link.isActive
                    ? "text-amber-700 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}


