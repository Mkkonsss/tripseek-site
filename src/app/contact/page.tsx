import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Contact — Tripseek",
  description: "Get in touch with the Tripseek team.",
};

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />

      <section className="max-w-xl mx-auto px-6 py-20 w-full flex-1">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Get in touch</h1>
        <p className="text-black/50 text-lg mb-12">We&apos;re a small team and we read every message. Whether it&apos;s a bug, a question, or just feedback — reach out.</p>

        <div className="space-y-4 mb-12">
          <a
            href="mailto:support@tripseekapp.com"
            className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm">General support</div>
              <div className="text-black/40 text-sm">support@tripseekapp.com</div>
            </div>
            <svg className="ml-auto text-black/20 group-hover:text-black/40 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a
            href="mailto:privacy@tripseekapp.com"
            className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm">Privacy inquiries</div>
              <div className="text-black/40 text-sm">privacy@tripseekapp.com</div>
            </div>
            <svg className="ml-auto text-black/20 group-hover:text-black/40 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a
            href="mailto:legal@tripseekapp.com"
            className="flex items-center gap-4 p-5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm">Legal</div>
              <div className="text-black/40 text-sm">legal@tripseekapp.com</div>
            </div>
            <svg className="ml-auto text-black/20 group-hover:text-black/40 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <p className="text-sm text-black/30 text-center">We typically respond within 1–2 business days.</p>
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
