import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-stone-100 text-center bg-white">
      <div className="text-xl font-bold tracking-tighter text-stone-800 mb-4">
        hygge<span className="text-amber-700">Zip</span>
      </div>
      <p className="text-stone-500 text-xs mb-6">
        공간을 읽는 가구 큐레이션, 휘게Zip
      </p>
      <div className="flex justify-center space-x-6 text-stone-400 mb-8">
        <a
          href="https://www.instagram.com/hygge.zip_official?igsh=MWljZ2RqZ3p5NHMwNw%3D%3D&utm_source=qr"
          className="hover:text-stone-600 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
      <p className="text-stone-500 text-[10px] uppercase tracking-widest">
        &copy; 2026 hyggeZip Research Lab. All rights reserved.
      </p>
    </footer>
  );
}


