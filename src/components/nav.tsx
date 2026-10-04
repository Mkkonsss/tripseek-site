import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/8">
      <div className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <Link href="/">
          <Image src="/logo-dark.png" alt="Tripseek" width={240} height={64} className="h-11 w-auto" />
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/support" className="text-black/40 hover:text-black transition-colors">Support</Link>
          <Link href="/contact" className="text-black/40 hover:text-black transition-colors">Contact</Link>
          <Link href="/privacy" className="text-black/40 hover:text-black transition-colors">Privacy</Link>
          <Link href="/terms" className="text-black/40 hover:text-black transition-colors">Terms</Link>
          <a
            href="https://apps.apple.com"
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
