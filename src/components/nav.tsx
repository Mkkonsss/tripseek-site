import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link href="/">
          <Image src="/logo-light.png" alt="Tripseek" width={240} height={64} className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-6 text-sm">
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
      </div>
    </nav>
  );
}
