import { notFound } from "next/navigation";
import Art from "../../components/Art";
import SampleViewer from "../../components/SampleViewer";
import { bookParams, getBook } from "../../lib/books";

// One page per book. Its address is the book's main title (the QR code in the book points here).
export const dynamicParams = false;
export function generateStaticParams() {
  return bookParams();
}

export async function generateMetadata({ params }) {
  const book = getBook((await params).book);
  return { title: `${book.title} (ages ${book.ages})`, description: book.tagline };
}

function BuyButton({ part }) {
  if (part.amazonUrl) {
    return (
      <a className="btn" href={part.amazonUrl} target="_blank" rel="noopener">
        Buy on Amazon
      </a>
    );
  }
  return (
    <span className="btn" aria-disabled="true">
      On Amazon: coming soon
    </span>
  );
}

function BookPart({ part, kind }) {
  return (
    <div className="card">
      <span className="badge">{kind}</span>
      <h2 style={{ marginTop: 10 }}>{part.title}</h2>
      <p className="muted" style={{ marginTop: 0 }}>{part.subtitle}</p>
      <ul className="ticks">
        {part.bullets.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <h3 style={{ marginTop: 22 }}>Look inside</h3>
      <SampleViewer title={part.title} samples={part.samples} />
      <div className="btns">
        <BuyButton part={part} />
      </div>
    </div>
  );
}

export default async function BookPage({ params }) {
  const book = getBook((await params).book);
  if (!book) notFound();
  return (
    <div className={`theme-${book.theme}`}>
      <section className="hero book-top">
        <div>
          <span className="badge">Ages {book.ages.replace("-", "–")}</span>
          <h1 style={{ marginTop: 12 }}>{book.title}</h1>
          <p className="lead">{book.tagline}</p>
          <p style={{ color: "var(--soft)" }}>{book.intro}</p>
        </div>
        <div className="art">
          <Art book={book} />
        </div>
      </section>

      <section className="section">
        <h2>Watch the overview</h2>
        <div className="video">
          {book.overviewVideo ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${book.overviewVideo}`}
              title={`${book.title} overview video`}
              allow="encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div>
              <span className="soon">Coming soon</span>
              <p className="muted" style={{ marginBottom: 0 }}>A short video tour of {book.title} will play here.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section grid two">
        <BookPart part={book.coloring} kind="Coloring book" />
        <BookPart part={book.companion} kind="Companion book" />
      </section>
    </div>
  );
}
