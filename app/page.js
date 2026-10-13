import Link from "next/link";
import Art from "../components/Art";
import { books, site } from "../lib/books";

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
        <div className="btns">
          <a className="btn" href="#books">Find a book</a>
        </div>
      </section>

      <section className="section" id="books">
        <h2>Our books</h2>
        <div className="grid three">
          {books.map((b) => (
            <Link key={b.slug} href={`/${b.slug}/`} className={`card book-card theme-${b.theme}`}>
              <div className="art">
                <Art book={b} />
              </div>
              <span className="badge" style={{ alignSelf: "flex-start" }}>
                Ages {b.ages.replace("-", "–")}
              </span>
              <h3>{b.title}</h3>
              <p className="muted small" style={{ margin: 0 }}>{b.tagline}</p>
            </Link>
          ))}
        </div>
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
