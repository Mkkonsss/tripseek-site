import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  verification: {
    google: "2JCZYPUzghoqHH2N5qBZKVUGuS_tuPcPnDXN1A8H1D8",
  },
  title: "Tripseek — AI Travel Planner",
  description:
    "Plan smarter trips with AI-powered itineraries, personalized recommendations, and real-time travel insights.",
  metadataBase: new URL("https://tripseekapp.com"),
  openGraph: {
    title: "Tripseek — AI Travel Planner",
    description: "Plan smarter trips with AI-powered itineraries.",
    url: "https://tripseekapp.com",
    siteName: "Tripseek",
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
      </body>
    </html>
  );
}
