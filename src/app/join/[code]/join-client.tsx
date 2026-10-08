"use client";

import Image from "next/image";

const APP_STORE_URL = "https://apps.apple.com/app/tripseek/id6746416905";

export default function JoinClient({ code }: { code: string }) {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-sm w-full flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <Image src="/sign-up-hero.png" alt="Tripseek" width={80} height={80} className="mb-2" />

        {/* Invite card */}
        <div className="w-full border border-black/10 rounded-2xl p-6 flex flex-col gap-3">
          <p className="text-sm text-black/50 font-medium uppercase tracking-wide">
            You&apos;ve been invited to plan a trip
          </p>
          <h1 className="text-2xl font-bold text-black">Join on Tripseek</h1>
          <p className="text-sm text-black/60">
            Download the app and enter the code below to join.
          </p>
          <div className="mt-1 text-sm text-black/60 font-mono tracking-widest bg-black/5 rounded-lg px-3 py-3 font-semibold">
            {code}
          </div>
        </div>

        {/* App Store CTA */}
        <a
          href={APP_STORE_URL}
          className="w-full bg-black text-white text-center py-4 rounded-full text-base font-semibold hover:bg-black/80 transition-colors flex items-center justify-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download Tripseek
        </a>

        <p className="text-xs text-black/40">
          After installing, tap the link again or enter code{" "}
          <span className="font-mono font-semibold">{code}</span> in the app.
        </p>
      </div>
    </main>
  );
}
