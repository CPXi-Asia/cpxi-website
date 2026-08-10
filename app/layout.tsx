import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CPXi Asia | Performance marketing and technology for brands across Asia",
  description:
    "A Singapore-headquartered digital agency with offices in Indonesia and Malaysia, founded in 2014. Performance marketing and marketing technology for brands across Asia.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      {/* Same GTM container as the legacy site — keeps GA4 history and the
          Google Ads (AW-710811234) conversion wiring in one property. */}
      <GoogleTagManager gtmId="GTM-WKHW43" />
      <body>{children}</body>
    </html>
  );
}
