import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container" id="home-page">
      {/* Hero Section with Background Image */}
      <div className="hero-section" id="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title" id="hero-title">
              Paradise Nursery
            </h1>
            <p className="hero-subtitle">
              Where Green Meets Serenity
            </p>
            <p className="hero-description">
              Discover the perfect houseplant to transform your space into a
              lush, green paradise. From air-purifying wonders to stunning
              tropical beauties — we have it all.
            </p>
            <button
              className="hero-button"
              id="get-started-btn"
              onClick={() => navigate('/plants')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
