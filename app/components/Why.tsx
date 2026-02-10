"use client"

export default function Why() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHY CAMPUSREADS?</span>
          <h2 className="section-title">
            Education shouldn't come with a
            <br />
            <span className="title-highlight">price tag</span>
          </h2>
          <p className="section-description">
            We believe knowledge is a fundamental right, not a luxury. That's why we've built 
            a platform where students can access textbooks without barriers.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card card-1">
            {/* <div className="card-number">01</div> */}
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="20" stroke="url(#iconGrad1)" strokeWidth="3" fill="none"/>
                <path d="M15 25L22 32L35 18" stroke="url(#iconGrad1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="iconGrad1" x1="5" y1="5" x2="45" y2="45">
                    <stop offset="0%" stopColor="#ff6b35"/>
                    <stop offset="100%" stopColor="#ffd700"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="feature-title">100% Free Access</h3>
            <p className="feature-description">
              No hidden fees, no premium plans, no credit card required. Every single textbook 
              on our platform is completely free to access and download.
            </p>
          </div>

          <div className="feature-card card-2">
            {/* <div className="card-number">02</div> */}
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M10 15L25 5L40 15V30C40 35 35 40 25 42C15 40 10 35 10 30V15Z" stroke="url(#iconGrad2)" strokeWidth="3" fill="none"/>
                <path d="M18 23H32M18 28H32M18 33H28" stroke="url(#iconGrad2)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="iconGrad2" x1="10" y1="5" x2="40" y2="42">
                    <stop offset="0%" stopColor="#f7931e"/>
                    <stop offset="100%" stopColor="#ffd700"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="feature-title">Massive Library</h3>
            <p className="feature-description">
              Over 50,000 textbooks across every major subject and field. From engineering 
              to liberal arts, we've got your academic needs covered.
            </p>
          </div>

          <div className="feature-card card-3">
            {/* <div className="card-number">03</div> */}
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="15" cy="15" r="8" stroke="url(#iconGrad3)" strokeWidth="3" fill="none"/>
                <circle cx="35" cy="15" r="8" stroke="url(#iconGrad3)" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="35" r="8" stroke="url(#iconGrad3)" strokeWidth="3" fill="none"/>
                <path d="M20 19L18 28M30 19L32 28" stroke="url(#iconGrad3)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="iconGrad3" x1="7" y1="7" x2="43" y2="43">
                    <stop offset="0%" stopColor="#ff6b35"/>
                    <stop offset="100%" stopColor="#f7931e"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="feature-title">Student Community</h3>
            <p className="feature-description">
              Join a thriving community of 200,000+ students sharing resources, study tips, 
              and supporting each other's academic journey.
            </p>
          </div>

          <div className="feature-card card-4">
            {/* <div className="card-number">04</div> */}
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <rect x="10" y="10" width="30" height="30" rx="5" stroke="url(#iconGrad4)" strokeWidth="3" fill="none"/>
                <path d="M20 20L30 30M30 20L20 30" stroke="url(#iconGrad4)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="iconGrad4" x1="10" y1="10" x2="40" y2="40">
                    <stop offset="0%" stopColor="#ffd700"/>
                    <stop offset="100%" stopColor="#ff6b35"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="feature-title">No Barriers</h3>
            <p className="feature-description">
              No registration walls, no email verification, no waiting periods. Search, 
              click, download. Education should be this simple.
            </p>
          </div>

          <div className="feature-card card-5">
            {/* <div className="card-number">05</div> */}
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25 5L30 18L45 20L35 28L38 43L25 35L12 43L15 28L5 20L20 18L25 5Z" stroke="url(#iconGrad5)" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="25" r="5" fill="url(#iconGrad5)"/>
                <defs>
                  <linearGradient id="iconGrad5" x1="5" y1="5" x2="45" y2="43">
                    <stop offset="0%" stopColor="#ff6b35"/>
                    <stop offset="50%" stopColor="#f7931e"/>
                    <stop offset="100%" stopColor="#ffd700"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="feature-title">Quality First</h3>
            <p className="feature-description">
              Every PDF is verified for quality and completeness. We ensure you get 
              legitimate, readable copies of the textbooks you need.
            </p>
          </div>

          <div className="feature-card card-6">
            {/* <div className="card-number">06</div> */}
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <circle cx="25" cy="25" r="15" stroke="url(#iconGrad6)" strokeWidth="3" fill="none"/>
                <path d="M25 15V25L32 32" stroke="url(#iconGrad6)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="iconGrad6" x1="10" y1="10" x2="40" y2="40">
                    <stop offset="0%" stopColor="#ffd700"/>
                    <stop offset="100%" stopColor="#f7931e"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="feature-title">24/7 Available</h3>
            <p className="feature-description">
              Access your textbooks anytime, anywhere. Whether it's 2 PM or 2 AM, 
              we're here when you need to study.
            </p>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        .why-section {
          background: #000000;
          padding: 8rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .why-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .why-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: -20%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 6rem;
          animation: fadeInUp 0.8s ease-out;
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

        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 2px;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 300;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .title-highlight {
          font-weight: 800;
          background: linear-gradient(135deg, #ff6b35 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #a0a0a0;
          max-width: 800px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(255, 215, 0, 0.02) 100%);
          border: 2px solid rgba(255, 107, 53, 0.2);
          border-radius: 20px;
          padding: 3rem 2.5rem;
          position: relative;
          transition: all 0.4s ease;
          animation: fadeInUp 0.8s ease-out both;
          backdrop-filter: blur(10px);
        }

        .card-1 { animation-delay: 0.1s; }
        .card-2 { animation-delay: 0.2s; }
        .card-3 { animation-delay: 0.3s; }
        .card-4 { animation-delay: 0.4s; }
        .card-5 { animation-delay: 0.5s; }
        .card-6 { animation-delay: 0.6s; }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 107, 53, 0.5);
          box-shadow: 0 20px 60px rgba(255, 107, 53, 0.2);
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%);
        }

        .card-number {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ff6b35 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.3;
        }

        .feature-icon {
          margin-bottom: 2rem;
          display: inline-block;
          padding: 1rem;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          background: rgba(255, 107, 53, 0.2);
        }

        .feature-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .feature-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #a0a0a0;
        }

        .stats-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
          margin-top: 6rem;
          padding: 4rem;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.05) 100%);
          border-radius: 30px;
          border: 2px solid rgba(255, 107, 53, 0.2);
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .stat-box {
          text-align: center;
          padding: 2rem;
        }

        .stat-value {
          font-size: 4rem;
          font-weight: 900;
          background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .stat-detail {
          font-size: 1rem;
          line-height: 1.6;
          color: #888888;
        }

        @media (max-width: 768px) {
          .why-section {
            padding: 4rem 1.5rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .stats-showcase {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
          }

          .stat-value {
            font-size: 3rem;
          }

          .card-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}