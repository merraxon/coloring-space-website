import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../lib/books";

export const metadata = {
  title: { default: `${site.name}: coloring books that teach space`, template: `%s | ${site.name}` },
  description: "Coloring books, full-color companion books and videos that teach kids about space, for ages 2 to 10.",
  metadataBase: new URL(site.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
