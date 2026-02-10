"use client";

import { useState } from "react";

export default function Popular() {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 5; // Change this number to show different initial count

  const allBooks = [
    { 
      id: "01", 
      title: "Harry Potter and the Philosopher's Stone", 
      tag: "Fantasy",
      author: "J.K. Rowling",
      image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=450&fit=crop",
      downloadUrl: "/download/harry-potter.pdf"
    },
    { 
      id: "02", 
      title: "The Lord of the Rings", 
      tag: "Epic Fantasy",
      author: "J.R.R. Tolkien",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop",
      downloadUrl: "/download/lotr.pdf"
    },
    { 
      id: "03", 
      title: "The Hunger Games", 
      tag: "Dystopian",
      author: "Suzanne Collins",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop",
      downloadUrl: "/download/hunger-games.pdf"
    },
    { 
      id: "04", 
      title: "The Alchemist", 
      tag: "Philosophy",
      author: "Paulo Coelho",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=450&fit=crop",
      downloadUrl: "/download/alchemist.pdf"
    },
    { 
      id: "05", 
      title: "The Da Vinci Code", 
      tag: "Thriller",
      author: "Dan Brown",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=450&fit=crop",
      downloadUrl: "/download/da-vinci.pdf"
    },
    { 
      id: "06", 
      title: "Percy Jackson", 
      tag: "YA Fantasy",
      author: "Rick Riordan",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
      downloadUrl: "/download/percy-jackson.pdf"
    },
    { 
      id: "07", 
      title: "1984", 
      tag: "Classic",
      author: "George Orwell",
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=450&fit=crop",
      downloadUrl: "/download/1984.pdf"
    },
    { 
      id: "08", 
      title: "To Kill a Mockingbird", 
      tag: "Classic",
      author: "Harper Lee",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop",
      downloadUrl: "/download/mockingbird.pdf"
    },
    { 
      id: "09", 
      title: "The Great Gatsby", 
      tag: "Classic",
      author: "F. Scott Fitzgerald",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop",
      downloadUrl: "/download/gatsby.pdf"
    },
    { 
      id: "10", 
      title: "Pride and Prejudice", 
      tag: "Romance",
      author: "Jane Austen",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop",
      downloadUrl: "/download/pride-prejudice.pdf"
    },
    { 
      id: "11", 
      title: "The Catcher in the Rye", 
      tag: "Classic",
      author: "J.D. Salinger",
      image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=450&fit=crop",
      downloadUrl: "/download/catcher.pdf"
    },
    { 
      id: "12", 
      title: "Brave New World", 
      tag: "Sci-Fi",
      author: "Aldous Huxley",
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300&h=450&fit=crop",
      downloadUrl: "/download/brave-new-world.pdf"
    }
  ];

  const displayedBooks = showAll ? allBooks : allBooks.slice(0, initialDisplayCount);
  const hasMoreBooks = allBooks.length > initialDisplayCount;

  return (
    <section className="popular-section">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">POPULAR</span>

          <h2 className="section-title">
            Most downloaded books
          </h2>

          <p className="section-description">
            A few titles students consistently come back to across universities.
          </p>
        </header>

        <div className="books-grid">
          {displayedBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="card-inner">
                {/* Book Cover */}
                <div className="book-cover">
                  <img 
                    src={book.image} 
                    alt={book.title}
                  />
                  <div className="cover-overlay">
                    <span className="book-tag">{book.tag}</span>
                  </div>
                </div>

                {/* Book Info */}
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  
                  <a 
                    href={book.downloadUrl}
                    className="download-btn"
                    download
                  >
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

        {/* Show More / Show Less Button */}
        {hasMoreBooks && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 13L5 8h10l-5 5z" fill="currentColor"/>
                  </svg>
                  Show Less
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 7L5 12h10L10 7z" fill="currentColor"/>
                  </svg>
                  Show More ({allBooks.length - initialDisplayCount} more books)
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .popular-section {
          background: #000;
          padding: 6rem 2rem;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header */
        .section-header {
          max-width: 640px;
          margin-bottom: 4rem;
        }

        .section-tag {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          font-weight: 600;
          color: #ffb000;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.05rem;
          color: #9a9a9a;
          line-height: 1.7;
        }

        /* Books Grid */
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2rem;
        }

        /* Book Card */
        .book-card {
          background: #0a0a0a;
          border: 2px solid #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .book-card:hover {
          border-color: #ffb000;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 176, 0, 0.2);
        }

        .card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Book Cover */
        .book-cover {
          position: relative;
          width: 100%;
          aspect-ratio: 2/3;
          overflow: hidden;
          background: #1a1a1a;
        }

        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .book-card:hover .book-cover img {
          transform: scale(1.1);
        }

        .cover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%);
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1rem;
        }

        .book-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #000;
          background: #ffb000;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
        }

        /* Book Info */
        .book-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .book-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .book-author {
          font-size: 0.9rem;
          color: #ffb000;
          margin-bottom: auto;
        }

        .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: transparent;
          color: #ffb000;
          border: 1px solid #ffb000;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .download-btn:hover {
          background: #ffb000;
          color: #000;
        }

        /* Show More Button */
        .show-more-container {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }

        .show-more-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: transparent;
          color: #ffb000;
          border: 2px solid #ffb000;
          border-radius: 10px;
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .show-more-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: #ffb000;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
          z-index: -1;
        }

        .show-more-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .show-more-btn:hover {
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 176, 0, 0.3);
        }

        .show-more-btn svg {
          transition: transform 0.3s ease;
        }

        .show-more-btn:hover svg {
          transform: translateY(2px);
        }

        @media (max-width: 768px) {
          .popular-section {
            padding: 4rem 1.5rem;
          }

          .books-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1.25rem;
          }

          .book-info {
            padding: 1rem;
          }

          .book-title {
            font-size: 0.95rem;
          }

          .book-author {
            font-size: 0.8rem;
          }

          .show-more-btn {
            padding: 0.875rem 2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}