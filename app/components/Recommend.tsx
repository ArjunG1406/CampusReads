"use client";

export default function Recommend() {
  return (
    <section className="recommend-section">
      <div className="container">
        <header className="section-header">
          <span className="section-tag">RECOMMENDED</span>

          <h2 className="section-title">
            Recommended for you
          </h2>

          <p className="section-description">
            Hand-picked reads based on what students like you explore.
          </p>
        </header>

        <div className="books-grid">
          {[
            {
              id: "01",
              title: "Atomic Habits",
              tag: "Self Improvement",
              author: "James Clear",
              price: "₹399",
              image:
                "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop",
            },
            {
              id: "02",
              title: "Deep Work",
              tag: "Productivity",
              author: "Cal Newport",
              price: "₹449",
              image:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=450&fit=crop",
            },
            {
              id: "03",
              title: "Clean Code",
              tag: "Programming",
              author: "Robert C. Martin",
              price: "₹699",
              image:
                "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop",
            },
            {
              id: "04",
              title: "The Psychology of Money",
              tag: "Finance",
              author: "Morgan Housel",
              price: "₹499",
              image:
                "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=450&fit=crop",
            },
          ].map((book) => (
            <div className="book-card" key={book.id}>
              <div className="card-inner">
                {/* Image */}
                <div className="book-cover">
                  <img src={book.image} alt={book.title} />
                  <div className="cover-overlay">
                    <span className="book-tag">{book.tag}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>

                  <div className="price-row">
                    <span className="book-price">{book.price}</span>
                  </div>

                  <button className="cart-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .recommend-section {
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
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          font-weight: 600;
          color: #ffb000;
        }

        .section-title {
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #fff;
          margin: 0.75rem 0 1rem;
        }

        .section-description {
          color: #9a9a9a;
          line-height: 1.7;
        }

        /* Grid */
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2rem;
        }

        /* Card */
        .book-card {
          background: #0a0a0a;
          border: 2px solid #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .book-card:hover {
          border-color: #ffb000;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 176, 0, 0.2);
        }

        .book-cover {
          position: relative;
          aspect-ratio: 2 / 3;
          overflow: hidden;
        }

        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .book-card:hover img {
          transform: scale(1.1);
        }

        .cover-overlay {
          position: absolute;
          inset: 0;
          padding: 1rem;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85),
            transparent
          );
        }

        .book-tag {
          background: #ffb000;
          color: #000;
          font-size: 0.7rem;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-weight: 600;
        }

        /* Info */
        .book-info {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .book-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .book-author {
          color: #ffb000;
          font-size: 0.85rem;
        }

        .book-price {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .cart-btn {
          margin-top: 0.5rem;
          background: #ffb000;
          color: #000;
          border: none;
          border-radius: 8px;
          padding: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .cart-btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .books-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
