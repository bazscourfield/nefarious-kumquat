import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Meridian Penthouse — 432 Park Avenue",
  description:
    "A Pritzker Prize–designed penthouse occupying floors 48–49 at 432 Park Avenue, Manhattan. 4 bed · 4.5 bath · 4,200 sqft. Offered at $12,500,000.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
