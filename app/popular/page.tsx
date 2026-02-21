"use client";

import { useEffect, useState } from "react";

type Book = {
  id: string;
  title: string;
  tag: string;
  author: string;
  image: string;
  downloadUrl: string;
};

export default function PopularPage() {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/popular")
      .then((res) => res.json())
      .then((data) => { setAllBooks(data.books); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="popular-page">
      <div className="container">
        <header className="page-header">
          <a href="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Home
          </a>
          <div className="header-content">
            <span className="section-tag">POPULAR BOOKS</span>
            <h1 className="page-title">All Popular Books</h1>
            <p className="page-description">Browse our complete collection of {allBooks.length} most downloaded books across universities.</p>
          </div>
        </header>

        {loading ? (
          <p style={{ color: "#9a9a9a", fontSize: "1.1rem" }}>Loading books...</p>
        ) : (
          <div className="books-grid">
            {allBooks.map((book) => (
              <div className="book-card" key={book.id}>
                <div className="card-inner">
                  <div className="book-cover">
                    <img src={book.image} alt={book.title} />
                    <div className="cover-overlay">
                      <span className="book-tag">{book.tag}</span>
                    </div>
                  </div>
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">{book.author}</p>
                    <a href={book.downloadUrl} className="download-btn" download>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 12L3 7h3V1h4v6h3l-5 5z" fill="currentColor"/>
                        <path d="M1 14h14v2H1v-2z" fill="currentColor"/>
                      </svg>
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .popular-page { background: #000; min-height: 100vh; padding: 4rem 2rem 6rem; }
        .container { max-width: 1400px; margin: 0 auto; }
        .page-header { margin-bottom: 4rem; }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; color: #ffb000; text-decoration: none; font-size: 0.95rem; font-weight: 500; margin-bottom: 2rem; transition: all 0.25s ease; }
        .back-link:hover { gap: 0.75rem; }
        .back-link svg { transition: transform 0.25s ease; }
        .back-link:hover svg { transform: translateX(-4px); }
        .header-content { max-width: 700px; }
        .section-tag { display: inline-block; font-size: 0.75rem; letter-spacing: 1.5px; font-weight: 600; color: #ffb000; margin-bottom: 1rem; }
        .page-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 1.25rem; }
        .page-description { font-size: 1.1rem; color: #9a9a9a; line-height: 1.7; }
        .books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2rem; }
        .book-card { background: #0a0a0a; border: 2px solid #1a1a1a; border-radius: 12px; overflow: hidden; transition: all 0.3s ease; }
        .book-card:hover { border-color: #ffb000; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(255,176,0,0.2); }
        .card-inner { display: flex; flex-direction: column; height: 100%; }
        .book-cover { position: relative; width: 100%; aspect-ratio: 2/3; overflow: hidden; background: #1a1a1a; }
        .book-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .book-card:hover .book-cover img { transform: scale(1.1); }
        .cover-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%); display: flex; align-items: flex-start; padding: 1rem; }
        .book-tag { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; color: #000; background: #ffb000; padding: 0.4rem 0.8rem; border-radius: 6px; }
        .book-info { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
        .book-title { font-size: 1.1rem; font-weight: 600; color: #fff; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .book-author { font-size: 0.9rem; color: #ffb000; margin-bottom: auto; }
        .download-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; color: #ffb000; border: 1px solid #ffb000; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; text-decoration: none; }
        .download-btn:hover { background: #ffb000; color: #000; }
        @media (max-width: 768px) {
          .popular-page { padding: 2rem 1.5rem 4rem; }
          .books-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1.25rem; }
          .book-info { padding: 1rem; }
        }
      `}</style>
    </main>
  );
}
