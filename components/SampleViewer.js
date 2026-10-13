"use client";
import { useEffect, useState } from "react";

// A row of sample pages; clicking one opens it large, with arrows (or the arrow keys) to flip pages.
export default function SampleViewer({ title, samples }) {
  const [open, setOpen] = useState(null);
  const n = samples.length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, n]);

  if (!n) {
    return (
      <div className="samples-empty">
        <p className="muted">Sample pages coming soon.</p>
      </div>
    );
  }

  return (
    <>
      <div className="thumbs">
        {samples.map((s, i) => (
          <button key={s.src} className="thumb" onClick={() => setOpen(i)} aria-label={`Open sample page: ${s.caption}`}>
            <img src={s.src} alt="" loading="lazy" />
            <span>{s.caption}</span>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} sample pages`} onClick={() => setOpen(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={samples[open].src} alt={samples[open].caption} />
            <div className="lightbox-bar">
              <button onClick={() => setOpen((open - 1 + n) % n)} aria-label="Previous page">‹</button>
              <span>
                {samples[open].caption} · {open + 1} of {n}
              </span>
              <button onClick={() => setOpen((open + 1) % n)} aria-label="Next page">›</button>
              <button className="close" onClick={() => setOpen(null)} aria-label="Close">✕</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
