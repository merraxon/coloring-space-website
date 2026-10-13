import Link from "next/link";
import { books, site } from "../lib/books";
import { Zippy } from "./Art";

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="logo">
          <Zippy />
          {site.name}
        </Link>
        <nav className="nav" aria-label="Books">
          {books.map((b) => (
            <Link key={b.slug} href={`/${b.slug}/`}>
              {b.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
