import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Support — Tripseek",
  description: "Frequently asked questions and help for Tripseek.",
};

const faqs = [
  {
    section: "Getting started",
    items: [
      {
        q: "Is Tripseek free to use?",
        a: "Yes, Tripseek is free to download and use. Core features including AI trip planning, explore, and chat are available at no cost.",
      },
      {
        q: "What devices is Tripseek available on?",
        a: "Tripseek is available on iOS (iPhone and iPad) and Android. Download it from the App Store or Google Play.",
      },
      {
        q: "Do I need an account to use Tripseek?",
        a: "You can browse the app without an account, but creating a free account lets you save trips, sync across devices, and access the AI chat.",
      },
    ],
  },
  {
    section: "AI & trip planning",
    items: [
      {
        q: "How does the AI trip planner work?",
        a: "Tell Tripseek your destination, travel dates, and what you enjoy. The AI builds a personalized day-by-day itinerary in seconds, including restaurants, activities, and local tips matched to your interests.",
      },
      {
        q: "Can I edit the itinerary after it's generated?",
        a: "Yes — just chat with Tripseek. You can swap activities, change timings, add places, or ask for alternatives. Your itinerary updates in real time.",
      },
      {
        q: "How accurate is the AI information?",
        a: "Tripseek's AI provides great starting points, but we always recommend verifying important details like opening hours, prices, and reservations directly with the venue before your trip.",
      },
    ],
  },
  {
    section: "Account & data",
    items: [
      {
        q: "How do I delete my account?",
        a: "You can delete your account from the Profile tab in the app under Settings → Delete Account. This permanently removes all your data within 30 days.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. All data is encrypted in transit and at rest. We use Supabase (built on AWS) for secure storage and never sell your personal information.",
      },
      {
        q: "Can I export my trip data?",
        a: "Trip export is on our roadmap. In the meantime, you can contact support@tripseekapp.com and we can help you retrieve your data.",
      },
    ],
  },
  {
    section: "Bookings",
    items: [
      {
        q: "Can I book hotels through Tripseek?",
        a: "Yes — Tripseek shows accommodation options and links you to booking partners. Bookings are completed through our partner platforms.",
      },
      {
        q: "Who do I contact for booking issues?",
        a: "For issues with a specific booking, contact the booking platform directly. For general questions, reach out to support@tripseekapp.com.",
      },
    ],
  },
];

export default function Support() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav variant="dark" />

      <section className="max-w-2xl mx-auto px-6 py-20 w-full flex-1">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Support</h1>
        <p className="text-black/50 text-lg mb-12">Answers to the most common questions. Can&apos;t find what you need? <Link href="/contact" className="text-black underline underline-offset-2">Contact us.</Link></p>

        <div className="space-y-12">
          {faqs.map((section) => (
            <div key={section.section}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-5">{section.section}</h2>
              <div className="space-y-px rounded-2xl overflow-hidden border border-black/8">
                {section.items.map((item, i) => (
                  <details key={i} className="group bg-white">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-black/[0.02] transition-colors">
                      <span className="font-medium text-sm">{item.q}</span>
                      <svg className="shrink-0 text-black/30 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-black/50 leading-relaxed border-t border-black/5 pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl border border-black/8 text-center">
          <p className="font-semibold text-sm mb-1">Still need help?</p>
          <p className="text-sm text-black/50 mb-4">We&apos;re happy to assist with anything not covered here.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors"
          >
            Contact support
          </Link>
        </div>
      </section>

      <footer className="border-t border-black/8 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/30">
          <Image src="/logo-dark.png" alt="Tripseek" width={100} height={28} className="h-6 w-auto" />
          <span>© {new Date().getFullYear()} Tripseek. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
