import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Terms of Service — Tripseek",
  description: "The terms and conditions governing your use of Tripseek.",
};

export default function TermsOfService() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <Nav variant="dark" />

      <article className="max-w-2xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Terms of Service</h1>
        <p className="text-sm text-black/40 mb-12">Last updated: October 3, 2026</p>

        <div className="prose prose-sm max-w-none space-y-10 text-black/80 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Tripseek mobile application, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the app. These terms apply to all users of the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">2. Description of Service</h2>
            <p>
              Tripseek is an AI-powered travel planning application that helps users create personalized itineraries, discover places, manage bookings, and plan trips. The service includes an AI chat assistant, explore features, trip management tools, and curated travel recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">3. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use Tripseek. By using the app, you represent and warrant that you meet this age requirement. If you are under 18, you represent that you have your parent or guardian&apos;s permission to use the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">4. User Accounts</h2>
            <p className="mb-3">When you create an account, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify us of any unauthorized use of your account</li>
              <li>Accept responsibility for all activity that occurs under your account</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">5. AI-Generated Content</h2>
            <p className="mb-3">
              Tripseek uses artificial intelligence to generate travel itineraries, recommendations, and chat responses. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>AI-generated content is provided for informational purposes only and may not always be accurate, complete, or up to date</li>
              <li>You should independently verify important travel information such as visa requirements, opening hours, prices, and safety conditions</li>
              <li>Tripseek is not liable for decisions made based on AI-generated content</li>
              <li>AI responses may occasionally contain errors or outdated information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">6. Acceptable Use</h2>
            <p className="mb-3">You agree not to use Tripseek to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Attempt to reverse engineer, hack, or disrupt the service</li>
              <li>Submit false, misleading, or harmful content through the AI chat</li>
              <li>Impersonate any person or entity</li>
              <li>Use automated scripts or bots to access the service</li>
              <li>Circumvent any security or access controls</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">7. Third-Party Services and Links</h2>
            <p>
              Tripseek may display links to third-party services, including hotel and accommodation providers via affiliate partnerships. We do not endorse or guarantee any third-party service and are not responsible for their content, availability, accuracy, or practices. Your interactions with third-party services are governed by their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">8. Intellectual Property</h2>
            <p className="mb-3">
              The Tripseek app, including its design, logo, features, and underlying technology, is owned by Tripseek and protected by applicable intellectual property laws.
            </p>
            <p>
              You retain ownership of the content you create within the app (trip plans, notes, etc.). By using the app, you grant us a limited license to store and process that content solely to provide the service to you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">9. Disclaimer of Warranties</h2>
            <p>
              Tripseek is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Tripseek shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the app — including, without limitation, lost profits, lost data, travel disruptions, or personal injury — even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Tripseek and its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses arising from your use of the app or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">12. Modifications to the Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">13. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of significant changes through the app or via email. Your continued use of the app after changes are posted constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">14. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with applicable law. Any disputes arising from these terms or your use of the app shall be resolved through binding arbitration or in the courts of competent jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">15. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-3 p-4 border border-black/10 rounded-xl text-sm">
              <p className="font-medium">Tripseek</p>
              <p className="text-black/60 mt-1">
                <a href="mailto:legal@tripseekapp.com" className="underline">legal@tripseekapp.com</a>
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
