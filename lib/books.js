import data from "../data/books.json";

export const site = data.site;

// Books in reading order (youngest first). Add a book to data/books.json and its
// three pages (/<slug>, /<slug>/videos, /<slug>/printables) are built automatically.
export const books = [...data.books].sort((a, b) => a.order - b.order);

export function getBook(slug) {
  return books.find((b) => b.slug === slug);
}

export function bookParams() {
  return books.map((b) => ({ book: b.slug }));
}
