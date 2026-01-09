import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-emerald-50 border-b">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-emerald-900">
            Welcome to The Cozy Corner
          </h1>
          <p className="mx-auto max-w-2xl text-emerald-700">
            The Cozy Corner is an online bookstore dedicated to readers who enjoy
            warm, thoughtful stories and carefully curated book recommendations.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Link
              href="/books"
              className="rounded-md bg-emerald-600 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Browse Books
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-emerald-300 bg-white px-6 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-100 bg-white p-6">
            <h3 className="mb-2 font-semibold text-emerald-900">
              Curated Recommendations
            </h3>
            <p className="text-sm text-emerald-700">
              Each book is carefully selected to match cozy themes, meaningful
              narratives, and enjoyable reading experiences.
            </p>
          </div>

          <div className="rounded-xl border border-sky-100 bg-white p-6">
            <h3 className="mb-2 font-semibold text-sky-900">
              For Every Reader
            </h3>
            <p className="text-sm text-sky-700">
              Whether you enjoy fiction, classics, or light reads, The Cozy
              Corner offers recommendations for every type of reader.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-white p-6">
            <h3 className="mb-2 font-semibold text-emerald-900">
              A Cozy Experience
            </h3>
            <p className="text-sm text-emerald-700">
              Our goal is to recreate the feeling of a small, welcoming bookstore
              in a simple and accessible online space.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
