"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const isLight = variant === "light";

  return (
    <nav className={`${isLight ? "absolute" : "sticky"} top-0 left-0 right-0 z-50 ${!isLight ? "bg-white border-b border-black/8" : ""}`}>
      <div className="flex items-center justify-between px-6 md:px-8 py-5 max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={isLight ? "/logo-light.png" : "/logo-dark.png"}
            alt="Tripseek"
            width={240}
            height={64}
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/support" className={`${isLight ? "text-white/60 hover:text-white" : "text-black/40 hover:text-black"} transition-colors`}>Support</Link>
          <Link href="/contact" className={`${isLight ? "text-white/60 hover:text-white" : "text-black/40 hover:text-black"} transition-colors`}>Contact</Link>
          <Link href="/privacy" className={`${isLight ? "text-white/60 hover:text-white" : "text-black/40 hover:text-black"} transition-colors`}>Privacy</Link>
          <Link href="/terms" className={`${isLight ? "text-white/60 hover:text-white" : "text-black/40 hover:text-black"} transition-colors`}>Terms</Link>
          <a
            href="https://apps.apple.com"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${isLight ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/80"}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`block w-5 h-0.5 transition-transform ${isLight ? "bg-white" : "bg-black"} ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 transition-opacity ${isLight ? "bg-white" : "bg-black"} ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 transition-transform ${isLight ? "bg-white" : "bg-black"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden mx-4 mt-1 backdrop-blur-xl rounded-2xl px-6 py-5 flex flex-col gap-4 text-sm animate-[slideDown_0.2s_ease-out] ${isLight ? "bg-white/10" : "bg-black/5"}`}>
          <Link href="/support" className={`${isLight ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black"} py-2`} onClick={() => setOpen(false)}>Support</Link>
          <Link href="/contact" className={`${isLight ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black"} py-2`} onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/privacy" className={`${isLight ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black"} py-2`} onClick={() => setOpen(false)}>Privacy</Link>
          <Link href="/terms" className={`${isLight ? "text-white/70 hover:text-white" : "text-black/50 hover:text-black"} py-2`} onClick={() => setOpen(false)}>Terms</Link>
          <a
            href="https://apps.apple.com"
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold mt-2 ${isLight ? "bg-white text-black" : "bg-black text-white"}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download
          </a>
        </div>
      )}
    </nav>
  );
}
