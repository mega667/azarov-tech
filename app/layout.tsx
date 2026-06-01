import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Konstantin Azarov | Senior Backend / Platform Engineer",
  description:
    "Senior Backend and Platform Engineer focused on Node.js, TypeScript, APIs, ecommerce platforms, identity, integrations, and reliability.",
  openGraph: {
    title: "Konstantin Azarov | Senior Backend / Platform Engineer",
    description:
      "Senior Backend and Platform Engineer focused on Node.js, TypeScript, APIs, ecommerce platforms, identity, integrations, and reliability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-app-bg font-sans text-app-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
