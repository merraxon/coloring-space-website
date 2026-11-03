import Link from "next/link";
import Art from "../components/Art";
import { books, site } from "../lib/books";

// One card per printed book: its cover, a link to the book's page, and its own Amazon button.
function BookCard({ book, part, label }) {
  const cover = part.samples[0]?.src || book.cover;
  return (
    <div className={`card book-card theme-${book.theme}`}>
      <Link href={`/${book.slug}/`} className="book-link">
        <div className="art">
          <Art book={{ ...book, cover }} />
        </div>
        <span className="badge" style={{ alignSelf: "flex-start" }}>
          Ages {book.ages.replace("-", "–")}
        </span>
        <h3>{book.title}</h3>
        <p className="muted small" style={{ margin: 0 }}>{book.tagline}</p>
      </Link>
      <div className="btns buy">
        {part.amazonUrl ? (
          <a className="btn small" href={part.amazonUrl} target="_blank" rel="noopener">
            {label} on Amazon
          </a>
        ) : (
          <span className="btn small" aria-disabled="true">
            On Amazon: coming soon
          </span>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="badge">{site.tagline}</span>
        <h1 style={{ marginTop: 14 }}>Coloring books that teach kids about space</h1>
        <p className="lead">
          Every Coloring-Space book comes as a pair: a coloring book to make your own, and a full-color companion book
          with the real facts behind every page. Facts are checked against NASA and other trusted sources.
        </p>
      </section>

      <section className="section" id="books">
        <h2>Our books</h2>
        {[
          ["coloring", "Coloring book"],
          ["companion", "Companion book"],
        ].map(([kind, label]) => (
          <div key={kind} className="grid three book-row">
            {books.map((b) => (
              <BookCard key={b.slug} book={b} part={b[kind]} label={label} />
            ))}
          </div>
        ))}
      </section>

      <section className="section">
        <h2>How it works</h2>
        <div className="steps">
          <div className="card">
            <h3>Color</h3>
            <p className="muted small">Each coloring page has one big picture and a short, true fact.</p>
          </div>
          <div className="card">
            <h3>Read</h3>
            <p className="muted small">Open the companion book to see the page in full color and learn more.</p>
          </div>
          <div className="card">
            <h3>Look up</h3>
            <p className="muted small">Scan the QR code in your book to visit its page here, and view additional content (coming soon).</p>
          </div>
        </div>
      </section>
    </>
  );
}
