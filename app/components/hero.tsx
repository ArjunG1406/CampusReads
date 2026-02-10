"use client"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          FREE FOREVER • NO CATCH
        </div>
        
        <h1 className="hero-title">
          Empowering
          <br />
          <span className="title-highlight">KNOWLEDGE</span>
          <br />
          Students among us.
        </h1>

        <p className="hero-subtitle">
          Break free from expensive textbooks. Access thousands of PDFs, share resources, 
          and build a community where education is a right, not a privilege.
        </p>

        <div className="hero-cta">
          <button className="cta-primary">
            START READING
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="cta-secondary">Explore Library</button>
        </div>

        <div className="stats-mini">
          <div className="stat">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Free Books</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-number">200K+</div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Universities</div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-circle"></div>
        <div className="floating-element element-1">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M10 15L30 5L50 15V35C50 42 45 48 30 50C15 48 10 42 10 35V15Z" fill="url(#grad1)" stroke="#ff6b35" strokeWidth="2"/>
            <path d="M20 25H40M20 32H40M20 39H35" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="grad1" x1="10" y1="5" x2="50" y2="50">
                <stop offset="0%" stopColor="#ff6b35"/>
                <stop offset="100%" stopColor="#f7931e"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="floating-element element-2">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="25" r="15" fill="url(#grad2)" stroke="#ffd700" strokeWidth="2"/>
            <path d="M15 35L30 40L45 35V50H15V35Z" fill="url(#grad2)" stroke="#ffd700" strokeWidth="2"/>
            <path d="M30 40V50" stroke="#ffd700" strokeWidth="2"/>
            <defs>
              <linearGradient id="grad2" x1="15" y1="10" x2="45" y2="50">
                <stop offset="0%" stopColor="#ffd700"/>
                <stop offset="100%" stopColor="#f7931e"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="floating-element element-3">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="35" r="8" fill="url(#grad3)" stroke="#ff6b35" strokeWidth="2"/>
            <path d="M30 10V27M30 43V50M10 30H22M38 30H50M15 15L23 23M37 37L45 45M45 15L37 23M23 37L15 45" stroke="url(#grad3)" strokeWidth="3" strokeLinecap="round"/>
            <defs>
              <linearGradient id="grad3" x1="10" y1="10" x2="50" y2="50">
                <stop offset="0%" stopColor="#ffd700"/>
                <stop offset="100%" stopColor="#ff6b35"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="floating-element element-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M30 5L35 20L50 22L38 32L42 47L30 38L18 47L22 32L10 22L25 20L30 5Z" fill="url(#grad4)" stroke="#ffd700" strokeWidth="2"/>
            <circle cx="30" cy="28" r="6" fill="#fff" opacity="0.6"/>
            <defs>
              <linearGradient id="grad4" x1="10" y1="5" x2="50" y2="47">
                <stop offset="0%" stopColor="#ff6b35"/>
                <stop offset="50%" stopColor="#f7931e"/>
                <stop offset="100%" stopColor="#ffd700"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="ticker-wrapper">
        <div className="ticker">
          <span>POSSIBILITY • DREAMS • VISIONS • KNOWLEDGE • FREEDOM • POSSIBILITY • DREAMS • VISIONS • KNOWLEDGE • FREEDOM • </span>
          <span>POSSIBILITY • DREAMS • VISIONS • KNOWLEDGE • FREEDOM • POSSIBILITY • DREAMS • VISIONS • KNOWLEDGE • FREEDOM • </span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: #000000;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 0 2rem;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 1000px;
          height: 1000px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 6rem 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          margin-bottom: 2rem;
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 2rem;
          color: #ffffff;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-highlight {
          font-weight: 900;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          position: relative;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          line-height: 1.8;
          color: #b0b0b0;
          max-width: 700px;
          margin-bottom: 3rem;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .cta-primary {
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          padding: 1.25rem 2.5rem;
          border: none;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
        }

        .cta-primary:hover {
          background: linear-gradient(135deg, #f7931e 0%, #ff6b35 100%);
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 107, 53, 0.5);
        }

        .cta-primary svg {
          transition: transform 0.3s ease;
        }

        .cta-primary:hover svg {
          transform: translateX(5px);
        }

        .cta-secondary {
          background: transparent;
          color: #ffffff;
          padding: 1.25rem 2.5rem;
          border: 2px solid #ff6b35;
          border-radius: 60px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: #ff6b35;
          color: white;
          transform: translateY(-2px);
        }

        .stats-mini {
          display: flex;
          gap: 3rem;
          align-items: center;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .stat {
          text-align: left;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ff6b35 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #888888;
          font-weight: 600;
        }

        .stat-divider {
          width: 2px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, #333333, transparent);
        }

        .hero-visual {
          position: absolute;
          right: 10%;
          top: 50%;
          transform: translateY(-50%);
          width: 400px;
          height: 400px;
          z-index: 1;
        }

        .visual-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%);
          border: 2px dashed rgba(255, 107, 53, 0.3);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .floating-element {
          position: absolute;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 12px rgba(255, 107, 53, 0.4));
        }

        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          top: 20%;
          right: 10%;
          animation-delay: 0.5s;
        }

        .element-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 1s;
        }

        .element-4 {
          bottom: 10%;
          right: 20%;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        .ticker-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          padding: 1.5rem 0;
          overflow: hidden;
          z-index: 3;
        }

        .ticker {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: 0.1em;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .ticker span {
          padding-right: 2rem;
        }

        @media (max-width: 1024px) {
          .hero-visual {
            display: none;
          }

          .hero-content {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 0 1.5rem;
          }

          .hero-content {
            padding: 4rem 0;
          }

          .hero-title {
            font-size: 3rem;
          }

          .stats-mini {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }

          .stat-divider {
            display: none;
          }

          .hero-cta {
            flex-direction: column;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .ticker {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}