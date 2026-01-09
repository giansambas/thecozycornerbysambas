import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Welcome to The Cozy Corner
        </h1>
        <p className="mx-auto max-w-2xl text-zinc-600">
          The Cozy Corner is an online bookstore dedicated to readers who enjoy
          warm, thoughtful stories and carefully curated book recommendations.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/books"
            className="rounded-md bg-zinc-900 px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Browse Books
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-zinc-300 px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-2 font-semibold">Curated Recommendations</h3>
          <p className="text-sm text-zinc-600">
            Each book is carefully selected to match cozy themes, meaningful
            narratives, and enjoyable reading experiences.
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-2 font-semibold">For Every Reader</h3>
          <p className="text-sm text-zinc-600">
            Whether you enjoy fiction, classics, or light reads, The Cozy Corner
            offers recommendations for every type of reader.
          </p>
        </div>

        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-2 font-semibold">A Cozy Experience</h3>
          <p className="text-sm text-zinc-600">
            Our goal is to recreate the feeling of a small, welcoming bookstore
            in a simple and accessible online space.
          </p>
        </div>
      </div>
    </section>
  );
}
