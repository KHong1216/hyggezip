import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-stone-100 text-center bg-white">
      <div className="text-xl font-bold tracking-tighter text-stone-800 mb-4">
        hygge<span className="text-amber-700">ip</span>
      </div>
      <p className="text-stone-400 text-xs mb-6">
        공간을 읽는 가구 큐레이션, 휘게Zip
      </p>
      <div className="flex justify-center space-x-6 text-stone-400 mb-8">
        <a
          href="#"
          className="hover:text-stone-600 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="hover:text-stone-600 transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="hover:text-stone-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <p className="text-stone-300 text-[10px] uppercase tracking-widest">
        &copy; 2024 hyggeip Research Lab. All rights reserved.
      </p>
    </footer>
  );
}

