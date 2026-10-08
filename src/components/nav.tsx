"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-8 py-5 max-w-7xl mx-auto">
        <Link href="/">
          <Image src="/logo-light.png" alt="Tripseek" width={240} height={64} className="h-8 md:h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/support" className="text-white/60 hover:text-white transition-colors">Support</Link>
          <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="text-white/60 hover:text-white transition-colors">Terms</Link>
          <a
            href="https://apps.apple.com"
            className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mt-1 bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-5 flex flex-col gap-4 text-sm animate-[slideDown_0.2s_ease-out]">
          <Link href="/support" className="text-white/70 hover:text-white py-2" onClick={() => setOpen(false)}>Support</Link>
          <Link href="/contact" className="text-white/70 hover:text-white py-2" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/privacy" className="text-white/70 hover:text-white py-2" onClick={() => setOpen(false)}>Privacy</Link>
          <Link href="/terms" className="text-white/70 hover:text-white py-2" onClick={() => setOpen(false)}>Terms</Link>
          <a
            href="https://apps.apple.com"
            className="bg-white text-black px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
}
