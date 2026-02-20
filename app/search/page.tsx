"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
  image?: string;
  tag?: string;
  downloadUrl?: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setSearched(false);

    // Search across all 3 endpoints in parallel
    Promise.all([
      fetch(`http://localhost:3001/api/books?search=${encodeURIComponent(query)}`).then((r) => r.json()),
      fetch(`http://localhost:3001/api/recommended`).then((r) => r.json()),
      fetch(`http://localhost:3001/api/popular`).then((r) => r.json()),
    ])
      .then(([books, recommended, popular]) => {
        const q = query.toLowerCase();

        // Filter recommended and popular by query
        const filteredRecommended = (recommended.books || []).filter(
          (b: Book) =>
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            (b.tag && b.tag.toLowerCase().includes(q))
        );
        const filteredPopular = (popular.books || []).filter(
          (b: Book) =>
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            (b.tag && b.tag.toLowerCase().includes(q))
        );

        // Merge all results, deduplicate by title
        const all = [...(books.books || []), ...filteredRecommended, ...filteredPopular];
        const seen = new Set();
        const unique = all.filter((b: Book) => {
          if (seen.has(b.title)) return false;
          seen.add(b.title);
          return true;
        });

        setResults(unique);
        setSearched(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Search failed:", err);
        setLoading(false);
        setSearched(true);
      });
  }, [query]);

  return (
    <main className="search-page">
      <div className="container">
        <header className="page-header">
          <a href="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Home
          </a>
          <div className="header-content">
            <span className="section-tag">SEARCH RESULTS</span>
            <h1 className="page-title">
              {query ? `Results for "${query}"` : "Search Books"}
            </h1>
            {searched && (
              <p className="page-description">
                {results.length > 0
                  ? `Found ${results.length} book${results.length !== 1 ? "s" : ""}`
                  : "No books found. Try a different search."}
              </p>
            )}
          </div>
        </header>

        {loading && (
          <p style={{ color: "#9a9a9a", fontSize: "1.1rem" }}>Searching...</p>
        )}

        {!loading && results.length > 0 && (
          <div className="books-grid">
           {results.map((book, index) => (
  <div className="book-card" key={`${book.title}-${index}`}>
                <div className="card-inner">
                  <div className="book-cover">
                    {book.image ? (
                      <img src={book.image} alt={book.title} />
                    ) : (
                      <div className="placeholder-cover">
                        <span>{book.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className="cover-overlay">
                      <span className="book-tag">{book.tag || book.genre}</span>
                    </div>
                  </div>
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    {book.price && (
                      <p className="book-price">${book.price.toFixed(2)}</p>
                    )}
                    {book.downloadUrl ? (
                      <a href={book.downloadUrl} className="action-btn" download>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 12L3 7h3V1h4v6h3l-5 5z" fill="currentColor"/>
                          <path d="M1 14h14v2H1v-2z" fill="currentColor"/>
                        </svg>
                        Download
                      </a>
                    ) : (
                      <button className="action-btn">Add to Cart</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && searched && results.length === 0 && (
          <div className="empty-state">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="28" cy="28" r="18" stroke="#333" strokeWidth="3"/>
              <path d="M42 42l12 12" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <p>No results for <strong>"{query}"</strong></p>
            <a href="/" className="back-link-btn">Go back home</a>
          </div>
        )}
      </div>

      <style jsx>{`
        .search-page { background: #000; min-height: 100vh; padding: 4rem 2rem 6rem; }
        .container { max-width: 1400px; margin: 0 auto; }
        .page-header { margin-bottom: 4rem; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; color: #ffb000; text-decoration: none; font-size: 0.95rem; font-weight: 500; margin-bottom: 2rem; transition: all 0.25s ease; }
        .back-link:hover { gap: 0.75rem; }
        .back-link svg { transition: transform 0.25s ease; }
        .back-link:hover svg { transform: translateX(-4px); }
        .header-content { max-width: 700px; }
        .section-tag { display: inline-block; font-size: 0.75rem; letter-spacing: 1.5px; font-weight: 600; color: #ffb000; margin-bottom: 1rem; }
        .page-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 1rem; }
        .page-description { font-size: 1.05rem; color: #9a9a9a; }
        .books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2rem; }
        .book-card { background: #0a0a0a; border: 2px solid #1a1a1a; border-radius: 12px; overflow: hidden; transition: all 0.3s ease; }
        .book-card:hover { border-color: #ffb000; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(255,176,0,0.2); }
        .card-inner { display: flex; flex-direction: column; height: 100%; }
        .book-cover { position: relative; width: 100%; aspect-ratio: 2/3; overflow: hidden; background: #1a1a1a; }
        .book-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .book-card:hover .book-cover img { transform: scale(1.1); }
        .placeholder-cover { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #1a1a1a; font-size: 4rem; font-weight: 700; color: #ffb000; }
        .cover-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%); display: flex; align-items: flex-start; padding: 1rem; }
        .book-tag { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; color: #000; background: #ffb000; padding: 0.4rem 0.8rem; border-radius: 6px; }
        .book-info { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
        .book-title { font-size: 1.1rem; font-weight: 600; color: #fff; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .book-author { font-size: 0.9rem; color: #ffb000; }
        .book-price { font-size: 1rem; font-weight: 700; color: #fff; }
        .action-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; color: #ffb000; border: 1px solid #ffb000; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; text-decoration: none; margin-top: auto; }
        .action-btn:hover { background: #ffb000; color: #000; }
        .empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; padding: 6rem 2rem; color: #555; text-align: center; }
        .empty-state p { font-size: 1.2rem; color: #9a9a9a; }
        .empty-state strong { color: #fff; }
        .back-link-btn { color: #ffb000; border: 1px solid #ffb000; padding: 0.75rem 2rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.25s ease; }
        .back-link-btn:hover { background: #ffb000; color: #000; }
        @media (max-width: 768px) {
          .search-page { padding: 2rem 1.5rem 4rem; }
          .books-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1.25rem; }
          .book-info { padding: 1rem; }
        }
      `}</style>
    </main>
  );
}