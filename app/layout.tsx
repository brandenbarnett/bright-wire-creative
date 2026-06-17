import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Wire Creative | Therapy & Coaching for Creative Professionals",
  description:
    "Therapy and coaching for musicians, artists, writers, and creative professionals with ADHD and anxiety. Based in St. Petersburg, Florida.",
  openGraph: {
    title: "Bright Wire Creative",
    description:
      "Therapy and coaching for musicians, artists, and creative professionals with ADHD and anxiety.",
    siteName: "Bright Wire Creative",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
