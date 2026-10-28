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
        <p className="text-sm text-black/40 mb-12">Last updated: October 27, 2026</p>

        <div className="prose prose-sm max-w-none space-y-10 text-black/80 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">1. Introduction</h2>
            <p>
              Tripseek (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Tripseek mobile application. This Privacy Policy explains what we collect, how we use it, who we share it with, and the choices you have. If you disagree with it, please don&apos;t use the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">2. Information We Collect</h2>
            <h3 className="font-medium text-black mb-2">Information you provide</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Account information:</strong> your email address and password, and your name if you choose to add it. If you use Sign in with Apple, Apple shares your name and email (or a private relay address) with us.</li>
              <li><strong>Travel preferences:</strong> interests, pace, budget, and other settings, including dietary needs and accessibility or mobility needs if you choose to add them.</li>
              <li><strong>Trip data:</strong> destinations, dates, itineraries, activities, notes, boards, and bookings you add.</li>
              <li><strong>AI chat messages:</strong> what you send to Tripseek AI and its replies.</li>
              <li><strong>Things you import:</strong> links, text, and screenshots you add to boards.</li>
              <li><strong>Forwarded booking emails:</strong> confirmation emails you forward to our booking address. We keep the booking details we extract, plus the email&apos;s subject and sender &mdash; not the full email.</li>
              <li><strong>Reports and feedback:</strong> if you rate or report an AI reply, we keep that reply and the reason you gave.</li>
              <li><strong>Support requests:</strong> anything you send us by email.</li>
            </ul>
            <h3 className="font-medium text-black mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Location:</strong> if you allow it, your device&apos;s location while you use the app, to show places near you on the Home and Explore tabs and to suggest things to do nearby. We use it at the time of the request and don&apos;t keep a history of where you&apos;ve been.</li>
              <li><strong>Travel Memory:</strong> preferences Tripseek learns from your choices (for example, places you save or skip). You can view, delete, or turn this off in the app.</li>
              <li><strong>Device and diagnostics:</strong> device type, operating system, an app-generated device identifier, crash reports, and performance data.</li>
              <li><strong>Usage data:</strong> features used and screens viewed, to keep the app working well.</li>
              <li><strong>Subscription status:</strong> your Tripseek+ plan and renewal date. Apple handles payment; we never see your card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, operate, and maintain the Tripseek app</li>
              <li>Generate and personalize trip plans and recommendations</li>
              <li>Answer your messages with Tripseek AI</li>
              <li>Find places from the links and screenshots you import, and pull booking details from emails you forward</li>
              <li>Sync your trips across your devices and share trips you choose to share</li>
              <li>Send trip reminders and alerts you&apos;ve allowed</li>
              <li>Manage your subscription and usage limits</li>
              <li>Review reports, respond to support requests, and fix problems</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">4. Tripseek AI (Anthropic)</h2>
            <p className="mb-3">
              Tripseek AI is powered by our AI provider, Anthropic (Claude). It only runs after you turn it on in the app, which asks for your permission the first time you use an AI feature. When it&apos;s on, the content you give an AI feature &mdash; your messages, links, screenshots, and forwarded booking emails &mdash; is sent to Anthropic together with relevant trip details, your travel preferences (including dietary and accessibility needs), and, for nearby suggestions, your location.
            </p>
            <p>
              Anthropic processes this data only to produce responses for you, under its agreement with us, and doesn&apos;t use it to train its models. You can turn Tripseek AI off at any time in Profile &rarr; Settings &rarr; Tripseek AI. While it&apos;s off, nothing is sent to Anthropic, AI features are paused, and booking emails you forward are not read.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">5. Service Providers</h2>
            <p className="mb-3">We use these service providers to run Tripseek:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Supabase</strong> (hosted on AWS) &mdash; database, accounts, and server functions</li>
              <li><strong>Anthropic</strong> &mdash; Tripseek AI (see Section 4)</li>
              <li><strong>Google Maps Platform</strong> &mdash; place search, details, and photos; receives search terms and, for nearby results, a location</li>
              <li><strong>Apple</strong> &mdash; Sign in with Apple, App Store payments, and weather forecasts (Apple WeatherKit), which receive a trip&apos;s location and dates</li>
              <li><strong>Expo</strong> &mdash; app updates, plus crash and performance reports</li>
              <li><strong>OpenStreetMap services</strong> (OpenStreetMap Foundation map tiles, Photon by Komoot, Overpass API, OSRM, and Nominatim) &mdash; maps, place lookups, and driving times. Your device contacts these directly, so they receive your IP address and the areas or places being looked up</li>
              <li><strong>SerpApi</strong> &mdash; flight searches; receives the airports and dates searched</li>
              <li><strong>SendGrid</strong> and our email forwarding provider &mdash; receive emails sent to tripseekapp.com addresses, including forwarded booking emails</li>
              <li><strong>Stay22 and Booking.com</strong> &mdash; when you tap a hotel or activity booking link, you go to Booking.com through Stay22, which records the click for our affiliate commission</li>
            </ul>
            <p className="mt-3">
              We share personal data with these providers only as needed for them to provide their service to Tripseek, and we require them to give your data the same or equal protection as described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">6. Sharing</h2>
            <p className="mb-3">We do not sell your personal information, and we don&apos;t use it to track you across other companies&apos; apps or websites. We share it only:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>With service providers</strong> listed in Section 5</li>
              <li><strong>When you share a trip:</strong> people you invite can see and edit it, and anyone with a trip&apos;s share link can view its details</li>
              <li><strong>For legal reasons:</strong> if required by law, court order, or a government authority</li>
              <li><strong>In a business transfer:</strong> as part of a merger, acquisition, or sale of assets, with notice to you</li>
              <li><strong>With your consent:</strong> for anything else, only if you explicitly agree</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">7. Data Storage and Security</h2>
            <p>
              Your data is stored with Supabase on AWS and is encrypted in transit (TLS) and at rest. Database access rules mean each account can only read its own data. Some data is also stored on your device for offline use. No method of transmission or storage is 100% secure, but we work to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">8. Your Choices and Rights</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Turn off Tripseek AI</strong> in Profile &rarr; Settings &rarr; Tripseek AI to stop sending data to Anthropic.</li>
              <li><strong>Location, photos, and notifications</strong> can be turned off at any time in your iPhone&apos;s Settings. The app keeps working without them.</li>
              <li><strong>Travel Memory</strong> can be paused or cleared in the app.</li>
              <li><strong>Export your data</strong> from Profile &rarr; Settings &rarr; Account &rarr; Export my data.</li>
              <li><strong>Delete your account</strong> from Profile &rarr; Settings &rarr; Account &rarr; Delete account (see Section 9).</li>
            </ul>
            <p className="mt-3">
              Depending on where you live (for example in the EEA, UK, or California), you may also have the right to access, correct, delete, or port your data, and to object to or restrict processing. We don&apos;t sell personal information or share it for cross-context behavioral advertising. To exercise any right, contact <a href="mailto:privacy@tripseekapp.com" className="underline">privacy@tripseekapp.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">9. Data Retention and Deletion</h2>
            <p>
              We keep your data while your account is active. When you delete your account in the app, we delete your account and its associated data from our database right away, and revoke Sign in with Apple if you used it. Copies in backups are removed within 30 days, except where the law requires us to keep something longer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">10. Children&apos;s Privacy</h2>
            <p>
              Tripseek is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has given us personal information, contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will tell you about significant changes in the app and update the &quot;Last updated&quot; date above.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">12. Contact Us</h2>
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
