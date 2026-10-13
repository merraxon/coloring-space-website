import { site } from "../lib/books";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>
          © {new Date().getFullYear()} {site.name}. {site.tagline}
        </span>
        <span>Facts checked against NASA and other trusted sources.</span>
      </div>
    </footer>
  );
}
