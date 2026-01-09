import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-sky-50 to-sky-100">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center relative z-10">
          <p className="mb-4 text-sm tracking-widest uppercase text-emerald-600">
            A quiet place for readers
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-emerald-900 leading-tight">
            The Cozy Corner
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-700">
            A thoughtfully curated online bookstore for readers who enjoy warm,
            meaningful stories and slow, intentional reading experiences.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/books"
              className="rounded-full bg-emerald-600 px-10 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              Explore Books
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-emerald-300 bg-white px-10 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-100"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* soft background shapes */}
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-emerald-100 opacity-50 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-sky-100 opacity-50 blur-3xl" />
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-emerald-900 mb-6">
              Not Just Books, <br className="hidden sm:block" />
              But a Reading Mood
            </h2>
            <p className="text-base leading-relaxed text-emerald-700 mb-6">
              The Cozy Corner isn’t about endless scrolling or overwhelming
              choices. It’s about slowing down and discovering books that feel
              like home — stories you return to when you want comfort, insight,
              or quiet joy.
            </p>
            <Link
              href="/books"
              className="text-sm font-medium text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
            >
              Browse our curated picks →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 border border-emerald-100 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3">
                Carefully Curated
              </h3>
              <p className="text-sm leading-relaxed text-emerald-700">
                Each recommendation is chosen with intention, focusing on warmth,
                storytelling, and emotional depth.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 border border-sky-100 shadow-sm">
              <h3 className="text-lg font-semibold text-sky-900 mb-3">
                Calm by Design
              </h3>
              <p className="text-sm leading-relaxed text-sky-700">
                From layout to colors, everything is designed to feel gentle,
                inviting, and easy to explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 border-t border-emerald-100">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-4">
            Find Your Next Cozy Read
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-emerald-700 mb-8">
            Whether you’re looking for comfort, inspiration, or a quiet escape,
            The Cozy Corner is here to guide you.
          </p>
          <Link
            href="/books"
            className="inline-block rounded-full bg-emerald-600 px-12 py-3 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Start Browsing
          </Link>
        </div>
      </section>
    </>
  );
}
