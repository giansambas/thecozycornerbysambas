import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Cozy Corner",
    template: "%s | The Cozy Corner",
  },
  description:
    "The Cozy Corner is a cozy online bookstore offering hand-picked book recommendations for readers who love comfort reads and thoughtful stories.",
  keywords: [
    "The Cozy Corner",
    "online bookstore",
    "book recommendations",
    "cozy reads",
    "books",
  ],
  authors: [{ name: "The Cozy Corner" }],
  openGraph: {
    title: "The Cozy Corner",
    description:
      "A cozy online bookstore with carefully curated book recommendations.",
    type: "website",
    siteName: "The Cozy Corner",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        {/* Header */}
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              The Cozy Corner
            </Link>

            <nav className="flex gap-6 text-sm text-zinc-600">
              <Link href="/" className="hover:text-zinc-900">
                Home
              </Link>
              <Link href="/about" className="hover:text-zinc-900">
                About
              </Link>
              <Link href="/books" className="hover:text-zinc-900">
                Books
              </Link>
              <Link href="/contact" className="hover:text-zinc-900">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-zinc-500">
            © 2026 The Cozy Corner. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
