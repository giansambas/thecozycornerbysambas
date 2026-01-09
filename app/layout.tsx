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
    "The Cozy Corner is a cozy online bookstore offering hand-picked book recommendations for readers who love warm and thoughtful stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sky-50 text-emerald-900`}
      >
        {/* Header */}
        <header className="bg-emerald-50 border-b border-emerald-100">
          <div className="mx-auto max-w-6xl flex justify-between items-center px-6 py-4">
            <Link
              href="/"
              className="text-lg font-semibold text-emerald-900"
            >
              The Cozy Corner
            </Link>

            <nav className="flex gap-6 text-sm text-emerald-700">
  <Link href="/" className="hover:text-emerald-900">
    Home
  </Link>
  <Link href="/about" className="hover:text-emerald-900">
    About
  </Link>
  <Link href="/books" className="hover:text-emerald-900">
    Books
  </Link>
  <Link href="/recommendations" className="hover:text-emerald-900">
    Recommendations
  </Link>
  <Link href="/contact" className="hover:text-emerald-900">
    Contact
  </Link>
</nav>

          </div>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-emerald-50 border-t border-emerald-100">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-emerald-700">
            © 2026 The Cozy Corner. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
