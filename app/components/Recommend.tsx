"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Book = {
  id: string;
  title: string;
  tag: string;
  author: string;
  image: string;
  downloadUrl: string;
};

export default function Recommend() {
  const router = useRouter();
  const initialDisplayCount = 5;
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/recommended")
      .then((res) => res.json())
      .then((data) => { setAllBooks(data.books); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const displayedBooks = allBooks.slice(0, initialDisplayCount);
  const hasMoreBooks = allBooks.length > initialDisplayCount;

  return (
    <section className="recommend-section">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">RECOMMENDED</span>
          <h2 className="section-title">Handpicked for you</h2>
          <p className="section-description">Curated recommendations based on trending topics and student interests.</p>
        </header>

        {loading ? (
          <p style={{ color: "#9a9a9a" }}>Loading books...</p>
        ) : (
          <div className="books-grid">
            {displayedBooks.map((book) => (
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

        {hasMoreBooks && (
          <div className="show-more-container">
            <button className="show-more-btn" onClick={() => router.push("/recommend")}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 7L5 12h10L10 7z" fill="currentColor"/>
              </svg>
              View More ({allBooks.length - initialDisplayCount} more books)
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .recommend-section { background: #000; padding: 6rem 2rem; }
        .container { max-width: 1400px; margin: 0 auto; }
        .section-header { max-width: 640px; margin-bottom: 4rem; }
        .section-tag { display: inline-block; font-size: 0.75rem; letter-spacing: 1.5px; font-weight: 600; color: #ffb000; margin-bottom: 0.75rem; }
        .section-title { font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 600; color: #fff; line-height: 1.25; margin-bottom: 1rem; }
        .section-description { font-size: 1.05rem; color: #9a9a9a; line-height: 1.7; }
        .books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 2rem; }
        .book-card { background: #0a0a0a; border: 2px solid #1a1a1a; border-radius: 12px; overflow: hidden; transition: all 0.3s ease; cursor: pointer; }
        .book-card:hover { border-color: #ffb000; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(255, 176, 0, 0.2); }
        .card-inner { display: flex; flex-direction: column; height: 100%; }
        .book-cover { position: relative; width: 100%; aspect-ratio: 2/3; overflow: hidden; background: #1a1a1a; }
        .book-cover img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
        .book-card:hover .book-cover img { transform: scale(1.1); }
        .cover-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%); display: flex; align-items: flex-start; justify-content: flex-start; padding: 1rem; }
        .book-tag { display: inline-block; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #000; background: #ffb000; padding: 0.4rem 0.8rem; border-radius: 6px; }
        .book-info { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; flex: 1; }
        .book-title { font-size: 1.1rem; font-weight: 600; color: #fff; line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .book-author { font-size: 0.9rem; color: #ffb000; margin-bottom: auto; }
        .download-btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: transparent; color: #ffb000; border: 1px solid #ffb000; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; text-decoration: none; }
        .download-btn:hover { background: #ffb000; color: #000; }
        .show-more-container { display: flex; justify-content: center; margin-top: 3rem; }
        .show-more-btn { display: flex; align-items: center; justify-content: center; gap: 0.75rem; background: transparent; color: #ffb000; border: 2px solid #ffb000; border-radius: 10px; padding: 1rem 2.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
        .show-more-btn:hover { color: #000; background: #ffb000; }
        @media (max-width: 768px) {
          .recommend-section { padding: 4rem 1.5rem; }
          .books-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1.25rem; }
          .book-info { padding: 1rem; }
          .book-title { font-size: 0.95rem; }
          .book-author { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}
