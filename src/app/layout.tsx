import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibe Coding - Master MVP Development in 30 Days",
  description: "Transform your coding skills with our intensive 30-day program. Learn modern development practices, build real projects, and join a community of developers who ship fast and iterate quickly.",
  keywords: ["coding bootcamp", "MVP development", "web development", "programming", "30-day challenge", "developer community"],
  authors: [{ name: "Vibe Coding Team" }],
  creator: "Vibe Coding",
  publisher: "Vibe Coding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vibe-coding.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vibe Coding - Master MVP Development in 30 Days",
    description: "Transform your coding skills with our intensive 30-day program. Learn modern development practices, build real projects, and join a community of developers who ship fast and iterate quickly.",
    url: "https://vibe-coding.com",
    siteName: "Vibe Coding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vibe Coding - Master MVP Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding - Master MVP Development in 30 Days",
    description: "Transform your coding skills with our intensive 30-day program. Learn modern development practices, build real projects, and join a community of developers who ship fast and iterate quickly.",
    images: ["/og-image.jpg"],
    creator: "@vibecoding",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Font preloading handled by Next.js */}
      </head>
      <body className="font-sans antialiased bg-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
