import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-sky-50 to-sky-100">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-emerald-900">
            A Cozy Corner for Curious Readers
          </h1>
          <p className="mx-auto max-w-2xl text-emerald-700">
            Discover thoughtfully curated books, gentle recommendations, and
            stories meant to be savored slowly — just like your favorite cozy
            corner.
          </p>
          <div className="flex justify-center gap-4 pt-8">
            <Link
              href="/books"
              className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              Explore Books
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-emerald-300 bg-white px-8 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-100"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-100 opacity-50 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-sky-100 opacity-50 blur-3xl" />
      </section>

      {/* Featured philosophy */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Thoughtful Picks, Not Endless Lists
            </h2>
            <p className="text-emerald-700">
              Instead of overwhelming you with thousands of titles, The Cozy
              Corner focuses on a small, intentional collection of books that
              feel comforting, meaningful, and worth returning to.
            </p>
            <Link
              href="/books"
              className="inline-block mt-4 text-sm font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
            >
              See our recommendations →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm">
              <h3 className="font-semibold text-emerald-900 mb-2">
                Curated with Care
              </h3>
              <p className="text-sm text-emerald-700">
                Every book is selected for its warmth, depth, and lasting
                impact.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-sky-100 shadow-sm">
              <h3 className="font-semibold text-sky-900 mb-2">
                A Calm Space
              </h3>
              <p className="text-sm text-sky-700">
                Designed to feel slow, welcoming, and easy to explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-emerald-50 border-t border-emerald-100">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center space-y-6">
          <h2 className="text-2xl font-semibold text-emerald-900">
            Find Your Next Cozy Read
          </h2>
          <p className="mx-auto max-w-xl text-emerald-700">
            Whether you’re looking for comfort, inspiration, or a quiet escape,
            The Cozy Corner is here to guide you.
          </p>
          <Link
            href="/books"
            className="inline-block rounded-full bg-emerald-600 px-10 py-3 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Start Browsing
          </Link>
        </div>
      </section>
    </>
  );
}
