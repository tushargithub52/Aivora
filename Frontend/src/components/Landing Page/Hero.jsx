import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The Future of Conversations with AI</h1>
        <p className="hero-description">
          Experience the next generation of AI-powered conversations with Aivora.
          Smarter, faster, and more intuitive than ever before.
        </p>
        <button className="cta-button">Try Now</button>
      </div>
      <div className="hero-illustration">
        <div className="gradient-orb"></div>
      </div>
    </section>
  );
};

export default Hero;
