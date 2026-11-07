"use client";

import { useState } from "react";
import Link from "next/link";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/launch";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot: hidden from people, bots fill it in
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (company) {
      setStatus("done");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email: email.trim(), source: "website" }),
      });
      // 409 means this email is already on the list, which is fine
      setStatus(res.ok || res.status === 409 ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-black/10 px-6 py-5 text-center">
        <div className="font-semibold mb-1">You&apos;re on the list</div>
        <div className="text-sm text-black/50">We&apos;ll email you the moment Tripseek is on the App Store.</div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          autoComplete="email"
          aria-label="Email address"
          className="flex-1 min-w-0 rounded-full border border-black/15 px-5 py-4 text-sm outline-none focus:border-black/40"
        />
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Adding…" : "Notify me"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600 mt-3">Something went wrong. Please try again.</p>
      )}
      <p className="text-xs text-black/40 mt-4">
        We&apos;ll only use your email to tell you when Tripseek launches.{" "}
        <Link href="/privacy" className="underline hover:text-black">Privacy Policy</Link>
      </p>
    </form>
  );
}
