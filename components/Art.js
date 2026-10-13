// Simple drawn artwork for each book theme, used until real cover pictures are added
// (set "cover" on a book in data/books.json to show a picture instead).
export function Zippy({ size = 34 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <path d="M50 4l13 28 30 4-22 21 6 30-27-15-27 15 6-30L7 36l30-4z" fill="#ffd66b" />
      <circle cx="40" cy="48" r="6" fill="#0e1a3a" />
      <circle cx="60" cy="48" r="6" fill="#0e1a3a" />
      <circle cx="42" cy="46" r="2" fill="#fff" />
      <circle cx="62" cy="46" r="2" fill="#fff" />
      <path d="M42 62q8 7 16 0" stroke="#0e1a3a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Sun() {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      {rays.map((a) => (
        <rect key={a} x="96" y="14" width="8" height="30" rx="4" fill="#ff9f43" transform={`rotate(${a} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="48" fill="#ffd66b" />
      <circle cx="84" cy="94" r="6" fill="#0e1a3a" />
      <circle cx="116" cy="94" r="6" fill="#0e1a3a" />
      <path d="M84 114q16 12 32 0" stroke="#0e1a3a" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Rocket() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="150" cy="50" r="22" fill="#a29bfe" />
      <ellipse cx="150" cy="50" rx="38" ry="8" fill="none" stroke="#c9d3ea" strokeWidth="4" />
      <path d="M100 24c26 20 32 60 22 104H78C68 84 74 44 100 24z" fill="#fff" />
      <circle cx="100" cy="76" r="14" fill="#5dade2" stroke="#16264f" strokeWidth="5" />
      <path d="M78 108l-22 30 26-6zM122 108l22 30-26-6z" fill="#ff6b81" />
      <path d="M86 128h28l-6 26-8-10-8 10z" fill="#ff9f43" />
    </svg>
  );
}

function Stars() {
  // the Big Dipper, joined with dotted lines like on the book pages
  const s = [[30, 60], [62, 70], [92, 84], [118, 104], [124, 140], [168, 146], [170, 106]];
  const path = [0, 1, 2, 3, 4, 5, 6, 3];
  const d = path.map((i, k) => `${k ? "L" : "M"}${s[i][0]} ${s[i][1]}`).join(" ");
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <path d={d} stroke="#ffd66b" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" fill="none" />
      {s.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" fill="#ffd66b33" />
          <circle cx={x} cy={y} r="5.5" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

export default function Art({ book }) {
  if (book.cover) return <img src={book.cover} alt={`${book.title} book cover`} />;
  if (book.theme === "sun") return <Sun />;
  if (book.theme === "rocket") return <Rocket />;
  return <Stars />;
}
