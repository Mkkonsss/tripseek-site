import type { Metadata } from "next";

export const metadata: Metadata = { title: "Link test", robots: { index: false, follow: false } };

// Temporary: which App Store link formats get past TikTok's in-app browser
const LINKS = [
  { label: "A · itunes.apple.com", href: "https://itunes.apple.com/app/id6819936121" },
  { label: "B · our redirect (/get)", href: "/get" },
  { label: "C · itms-appss://", href: "itms-appss://apps.apple.com/app/id6819936121" },
  { label: "D · apps.apple.com with ?mt=8", href: "https://apps.apple.com/app/id6819936121?mt=8" },
  { label: "E · x-safari to homepage", href: "x-safari-https://www.tripseekapp.com/" },
];

export default function OpenTest() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-12 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Link test</h1>
      <p className="text-sm text-black/50 mb-8">Tap each one from inside TikTok and note which opens the App Store or Safari.</p>
      <div className="flex flex-col gap-3">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} className="block rounded-full bg-black text-white text-center px-6 py-4 text-sm font-semibold">
            {l.label}
          </a>
        ))}
      </div>
    </main>
  );
}
