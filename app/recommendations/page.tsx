import Image from "next/image";

const books = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    image: "/books/project-hail-mary.jpg",
    description:
      "A science-driven yet deeply human story about survival, friendship, and hope beyond Earth.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/books/pride-and-prejudice.jpg",
    description:
      "A timeless romance exploring love, class, and personal growth with wit and warmth.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/books/the-great-gatsby.jpg",
    description:
      "A reflective look at ambition, love, and the illusion of the American Dream.",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    image: "/books/moby-dick.jpg",
    description:
      "A powerful classic about obsession, fate, and humanity’s struggle against nature.",
  },
];

export default function RecommendationsPage() {
  return (
    <section className="bg-sky-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-emerald-600">
            Hand-picked for you
          </p>
          <h1 className="text-4xl font-semibold text-emerald-900 mb-4">
            Cozy Book Recommendations
          </h1>
          <p className="mx-auto max-w-2xl text-emerald-700">
            A small, intentional selection of books chosen for their warmth,
            depth, and lasting impact.
          </p>
        </div>

        {/* Book Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="group rounded-2xl bg-white border border-emerald-100 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image
                  src={book.image}
                  alt={`Cover of ${book.title}`}
                  width={300}
                  height={450}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-semibold text-emerald-900 mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-emerald-600 mb-3">
                {book.author}
              </p>
              <p className="text-sm leading-relaxed text-emerald-700">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
