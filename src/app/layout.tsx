import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  verification: {
    google: "2JCZYPUzghoqHH2N5qBZKVUGuS_tuPcPnDXN1A8H1D8",
  },
  title: "Tripseek — AI Travel Companion",
  description:
    "Tripseek is your personal AI travel companion. Get personalized picks for every trip, stay ahead with smart travel alerts, manage bookings and plans in one place, discover places you'll love, turn inspiration into real trips, and plan together with friends.",
  metadataBase: new URL("https://tripseekapp.com"),
  openGraph: {
    title: "Tripseek — AI Travel Companion",
    description:
      "Tripseek is your personal AI travel companion. Get personalized picks for every trip, stay ahead with smart travel alerts, manage bookings and plans in one place, discover places you'll love, turn inspiration into real trips, and plan together with friends.",
    url: "https://tripseekapp.com",
    siteName: "Tripseek",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
        <Script
          src="https://emrldtp.cc/NTg0NjIx.js?t=584621"
          strategy="afterInteractive"
          data-cmp-ab="2"
        />
      </body>
    </html>
  );
}
