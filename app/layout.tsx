import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://callvea.com"),
  title: "Callvea | Enterprise AI Voice Agents & Conversational Receptionists",
  description:
    "Callvea delivers bespoke 24/7 AI Voice Agents, Conversational Receptionists, and Multi-channel Chatbots for businesses with sub-500ms latency and 2-way CRM integration.",
  keywords: [
    "AI Voice Agents",
    "AI Receptionist",
    "Conversational AI",
    "Callvea",
    "Voice Automation",
    "Customer Support AI",
    "After-Hours Answering Service",
  ],
  authors: [{ name: "Callvea Inc." }],
  openGraph: {
    title: "Callvea | 24/7 Enterprise AI Voice Agents",
    description:
      "Never miss another high-value call. Sub-500ms turnaround voice agents connected directly to your CRM.",
    url: "https://callvea.com",
    siteName: "Callvea",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Callvea | 24/7 Enterprise AI Voice Agents",
    description:
      "Sub-500ms turnaround voice agents connected directly to your CRM at 80% lower cost.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
