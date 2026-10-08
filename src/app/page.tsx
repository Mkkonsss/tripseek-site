import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-black">

      {/* Hero — full viewport with photo, overlay nav, split layout */}
      <section className="relative w-full h-screen">
        {/* Full-bleed container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay — darker on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/15" />

          {/* Nav overlaid */}
          <Nav />

          {/* Hero content — bottom aligned, split layout */}
          <div className="absolute bottom-0 left-0 right-0 px-10 pb-12 flex items-end justify-between gap-12">
            {/* Left — headline */}
            <div className="max-w-xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Your whole trip.<br />Organized by AI.
              </h1>
            </div>
            {/* Right — description + scroll hint */}
            <div className="max-w-sm flex flex-col items-end gap-8">
              <p className="text-base text-white/70 leading-relaxed text-right">
                Plan smarter, explore deeper, and let AI handle the details — so you can focus on the experience.
              </p>
              {/* Scroll down arrow */}
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI three points */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="border-b border-black/8 py-12">
          <p className="text-center text-sm text-black/40 font-medium mb-8">AI that...</p>
          <div className="grid grid-cols-3 divide-x divide-black/8">
            <div className="px-8 flex gap-4 items-start">
              <svg className="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <div>
                <div className="font-semibold text-sm mb-1">Knows how you travel</div>
                <div className="text-sm text-black/40 leading-relaxed">Learns your preferences and planning style</div>
              </div>
            </div>
            <div className="px-8 flex gap-4 items-start">
              <svg className="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              <div>
                <div className="font-semibold text-sm mb-1">Handles the details</div>
                <div className="text-sm text-black/40 leading-relaxed">Keeps bookings, places, and plans connected</div>
              </div>
            </div>
            <div className="px-8 flex gap-4 items-start">
              <svg className="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <div>
                <div className="font-semibold text-sm mb-1">Anticipates what&apos;s next</div>
                <div className="text-sm text-black/40 leading-relaxed">Spots changes and helps before you need to ask</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Globe + description */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 pt-4 pb-16">
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/hero-globe.png"
              alt="Travel the world with Tripseek"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <p className="text-2xl font-semibold tracking-tight leading-snug">
              Bring your bookings, places, plans, and inspiration together.
            </p>
            <p className="text-lg text-black/50 leading-relaxed">
              Tripseek helps you build the trip, keeps everything connected, and adapts when plans change.
            </p>
          </div>
        </div>
      </section>

      {/* Discover places */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-3">Explore</p>
            <h2 className="text-4xl font-bold tracking-tight">Discover real places<br />you&apos;ll love.</h2>
            <p className="text-lg text-black/50 mt-4 max-w-lg">Not the same tourist list everyone gets. Tripseek surfaces places matched to how you travel.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                photo: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&h=900&q=80",
                name: "Oia Village",
                location: "Santorini, Greece",
                category: "Village",
                rating: "4.9",
              },
              {
                photo: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=600&h=900&q=80",
                name: "Fushimi Inari Shrine",
                location: "Kyoto, Japan",
                category: "Shrine",
                rating: "4.9",
              },
              {
                photo: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&h=900&q=80",
                name: "Positano",
                location: "Amalfi Coast, Italy",
                category: "Coastal town",
                rating: "4.8",
              },
              {
                photo: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=600&h=900&q=80",
                name: "Chefchaouen Medina",
                location: "Morocco",
                category: "Old city",
                rating: "4.7",
              },
            ].map((place) => (
              <div key={place.name} className="relative rounded-2xl overflow-hidden aspect-[3/4] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={place.photo} alt={place.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.18) 65%, rgba(0,0,0,0.72) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-5">
                  <span className="inline-block text-white/80 text-[10px] font-semibold uppercase tracking-widest mb-2">{place.category}</span>
                  <div className="text-white font-bold text-base leading-tight mb-2">{place.name}</div>
                  <div className="flex items-center gap-1.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-white font-semibold text-xs">{place.rating}</span>
                    <span className="text-white/40 text-xs mx-0.5">·</span>
                    <span className="text-white/60 text-xs">{place.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat section */}
      <section className="py-24 px-6 border-t border-black/8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Just ask Tripseek.</h2>
          <p className="text-lg text-black/50 leading-relaxed mb-10">
            Plan, explore, make changes, or get help on the go. Tripseek understands your trip and works with everything already in it.
          </p>

          {/* Fake chat input */}
          <div className="flex items-center gap-3 border border-black/12 rounded-full px-5 py-3.5 bg-white shadow-sm mb-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/30 shrink-0">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span className="text-black/30 text-sm flex-1 text-left">Ask anything about your trip...</span>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          {/* Suggestion chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              {
                label: "Plan 4 days in Tokyo",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
                  </svg>
                ),
              },
              {
                label: "Find restaurants I'd actually like",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
                  </svg>
                ),
              },
              {
                label: "Make Day 2 less busy",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                ),
              },
              {
                label: "What if it rains tomorrow?",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/><line x1="8" y1="16" x2="8" y2="21"/><line x1="12" y1="19" x2="12" y2="21"/><line x1="16" y1="16" x2="16" y2="21"/>
                  </svg>
                ),
              },
            ].map((chip) => (
              <div key={chip.label} className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-2 text-sm text-black/50 bg-white hover:bg-black/4 transition-colors cursor-default">
                {chip.icon}
                <span>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-black/8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-5">Ready to plan<br />your next trip?</h2>
          <p className="text-lg text-black/50 mb-10">Download Tripseek free and start planning in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center justify-center gap-2.5 bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a
              href="https://play.google.com"
              className="inline-flex items-center justify-center gap-2.5 border border-black/15 text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-black/4 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.19l12.6-7.27-2.72-2.72-10.87 9.8zM.54 1.7C.2 2.03 0 2.56 0 3.26v17.48c0 .7.2 1.23.55 1.56l.08.08 9.79-9.79v-.23L.62 1.62.54 1.7zM20.1 10.53l-2.54-1.47-3.03 3.03 3.03 3.03 2.56-1.48c.73-.42.73-1.11-.02-1.55v-.56zM4.17.24L16.77 7.5l-2.72 2.72L3.18.44a1.13 1.13 0 011-.2z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/8 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/30">
          <Image src="/logo-dark.png" alt="Tripseek" width={100} height={28} className="h-6 w-auto" />
          <span>&copy; {new Date().getFullYear()} Tripseek. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
