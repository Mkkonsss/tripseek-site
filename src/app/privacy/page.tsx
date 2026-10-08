import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Privacy Policy — Tripseek",
  description: "How Tripseek collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <Nav variant="dark" />

      <article className="max-w-2xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-sm text-black/40 mb-12">Last updated: October 3, 2026</p>

        <div className="prose prose-sm max-w-none space-y-10 text-black/80 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">1. Introduction</h2>
            <p>
              Tripseek (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Tripseek mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app. Please read this carefully. If you disagree with its terms, please discontinue use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">2. Information We Collect</h2>
            <h3 className="font-medium text-black mb-2">Information you provide directly</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Account information: email address, name, and password when you register</li>
              <li>Profile preferences: travel interests, dietary needs, budget preferences, and other personalization settings you choose to provide</li>
              <li>Trip data: destinations, dates, itineraries, bookings, and notes you create within the app</li>
              <li>Chat messages: conversations you have with our AI assistant</li>
            </ul>
            <h3 className="font-medium text-black mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device information: device type, operating system, and unique device identifiers</li>
              <li>Usage data: features used, screens viewed, and interactions within the app</li>
              <li>Location data: approximate location when you use the Explore feature (only when permission is granted)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, operate, and maintain the Tripseek app</li>
              <li>Generate personalized travel itineraries and recommendations</li>
              <li>Power our AI chat assistant using your trip context and preferences</li>
              <li>Sync your data across devices</li>
              <li>Communicate with you about your account or the app</li>
              <li>Improve and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">4. AI and Third-Party Services</h2>
            <p className="mb-3">
              Tripseek uses artificial intelligence to generate travel plans and respond to your chat messages. Your messages and trip context are sent to our AI provider (Anthropic) to generate responses. We do not sell your data to AI providers and your data is handled in accordance with their privacy policies.
            </p>
            <p>
              We may also use the following third-party services:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li><strong>Supabase</strong> — database and authentication infrastructure</li>
              <li><strong>Anthropic (Claude)</strong> — AI language model for trip generation and chat</li>
              <li><strong>Google Places API</strong> — location search and place information</li>
              <li><strong>Booking.com (via affiliate)</strong> — hotel and accommodation links</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">5. Data Storage and Security</h2>
            <p>
              Your data is stored securely using Supabase infrastructure hosted on AWS. We implement industry-standard security measures including encryption in transit (TLS) and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">6. Data Sharing</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Service providers:</strong> Third-party vendors who help us operate the app (as described in Section 4), bound by confidentiality obligations</li>
              <li><strong>Legal requirements:</strong> If required by law, court order, or governmental authority</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you</li>
              <li><strong>With your consent:</strong> For any other purpose with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and associated data</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Data portability (receive your data in a machine-readable format)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at <a href="mailto:privacy@tripseekapp.com" className="underline">privacy@tripseekapp.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">8. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide services. If you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">9. Children&apos;s Privacy</h2>
            <p>
              Tripseek is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy in the app and updating the &quot;Last updated&quot; date above. Your continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">11. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 p-4 border border-black/10 rounded-xl text-sm">
              <p className="font-medium">Tripseek</p>
              <p className="text-black/60 mt-1">
                <a href="mailto:privacy@tripseekapp.com" className="underline">privacy@tripseekapp.com</a>
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/40">
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
