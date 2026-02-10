"use client";

const popularBooks = [
  { title: "Harry Potter and the Philosopher’s Stone", genre: "Fantasy" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Epic Fantasy" },
  { title: "The Hunger Games", genre: "Dystopian" },
  { title: "The Alchemist", genre: "Philosophical Fiction" },
  { title: "The Da Vinci Code", genre: "Thriller" },
  { title: "Percy Jackson & the Olympians: The Lightning Thief", genre: "Young Adult Fantasy" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <section className="brand">
            <h2 className="brand-title">CampusReads</h2>
            <p className="brand-desc">
              A free digital library built for readers — from students to
              storytellers. No barriers. Just books.
            </p>
          </section>

          {/* Popular Books */}
          <section className="footer-section">
            <h4 className="footer-heading">Popular reads</h4>
            <ul className="book-list">
              {popularBooks.map((book) => (
                <li key={book.title}>
                  <span className="book-title">{book.title}</span>
                  <span className="book-genre">{book.genre}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Explore */}
          <section className="footer-section">
            <h4 className="footer-heading">Explore</h4>
            <ul className="link-list">
              <li>Browse library</li>
              <li>Genres</li>
              <li>Community</li>
              <li>About CampusReads</li>
            </ul>
          </section>

          {/* Credibility */}
          <section className="footer-section right">
            <h4 className="footer-heading muted">
              University College of Engineering
            </h4>
            <p className="location">Kariavattom</p>

            <div className="socials">
              <span>in</span>
              <span>ig</span>
              <span>yt</span>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CampusReads</span>
          <span>Made for readers</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #000;
          padding: 6rem 2rem 2.5rem;
          border-top: 1px solid #141414;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
        }

        /* Grid */

        .footer-grid {
          display: grid;
          grid-template-columns: 2.4fr 2fr 1.4fr 1.8fr;
          gap: 4.5rem;
          margin-bottom: 4rem;
        }

        /* Brand */

        .brand-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.6px;
          color: #fff;
          margin-bottom: 1.2rem;
        }

        .brand-desc {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #8c8c8c;
          max-width: 360px;
        }

        /* Headings */

        .footer-heading {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 1.6rem;
        }

        .footer-heading.muted {
          color: #b0b0b0;
        }

        /* Popular books */

        .book-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .book-list li {
          margin-bottom: 1.1rem;
        }

        .book-title {
          display: block;
          font-size: 0.95rem;
          font-weight: 500;
          color: #eaeaea;
          line-height: 1.5;
        }

        .book-genre {
          font-size: 0.75rem;
          letter-spacing: 0.5px;
          color: #7a7a7a;
        }

        /* Links */

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          font-size: 0.95rem;
          color: #9a9a9a;
          margin-bottom: 1rem;
          cursor: pointer;
        }

        .link-list li:hover {
          color: #fff;
        }

        /* Right */

        .right {
          text-align: right;
        }

        .location {
          font-size: 0.9rem;
          font-style: italic;
          color: #7a7a7a;
          margin-bottom: 1.6rem;
        }

        .socials {
          display: flex;
          justify-content: flex-end;
          gap: 1.2rem;
        }

        .socials span {
          font-size: 0.85rem;
          font-weight: 600;
          color: #9a9a9a;
          cursor: pointer;
        }

        .socials span:hover {
          color: #fff;
        }

        /* Bottom */

        .footer-bottom {
          border-top: 1px solid #141414;
          padding-top: 1.8rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: #6f6f6f;
        }

        @media (max-width: 1000px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .right {
            text-align: left;
          }

          .socials {
            justify-content: flex-start;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}
