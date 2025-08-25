import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/">Aivora</Link>
        </div>
        <div className="nav-links">
          <Link to="#features">Features</Link>
          <Link to="#benefits">Benefits</Link>
          <Link to="#pricing">Pricing</Link>
          <Link to="#faq">FAQ</Link>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="nav-login">Log in</Link>
          <Link to="/register" className="nav-register">Register now</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">Next-gen Conversational AI</span>
          <h1>Revolutionizing AI Conversations</h1>
          <p>Unleash AI's potential with Aivora—designed for seamless, intelligent interactions that are fast, secure, and available 24/7 for teams and creators.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">Chat now</Link>
          </div>
          <div className="hero-features">
            <span>✓ SOC2-ready</span>
            <span>⚡ Sub-100ms latency</span>
            <span>🔄 24/7 uptime</span>
          </div>
        </div>
        <div className="hero-demo">
          <div className="chat-preview">
            <div className="chat-header">
              <span className="chat-status">🟢 Aivora · Live</span>
            </div>
            <div className="chat-messages">
              <div className="message ai">Hi! I'm Aivora. How can I help you today?</div>
              <div className="message user">Summarize this PDF into bullet points.</div>
              <div className="message ai">Uploading... Done. Here are 5 concise bullets with key takeaways.</div>
              <div className="message user">Great, now generate an email draft.</div>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2>Elevate Your Experience</h2>
        <p>Aivora is built for speed, safety, and reliability—so your team can focus on impact.</p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">💡</div>
            <h3>Smart Conversations</h3>
            <p>Context-aware dialogue tailored to user intent.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>
            <h3>Fast & Secure</h3>
            <p>Rapid responses with robust data protection.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🌐</div>
            <h3>Always Available</h3>
            <p>Global availability with enterprise uptime.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Designed for Builders & Teams</h2>
        <p>Tooling that scales from prototype to production.</p>
        <div className="features-grid">
          {[
            { icon: '⚙️', title: 'API-first', desc: 'Simple, secure REST & WebSocket APIs.' },
            { icon: '🔍', title: 'Vector Search', desc: 'Embeddings, RAG, and hybrid search ready.' },
            { icon: '📊', title: 'Observability', desc: 'Tracing, evals, and guardrails built-in.' },
            { icon: '🎯', title: 'Multimodal', desc: 'Text, images, PDFs—process everything.' },
            { icon: '⚡', title: 'Fine-tuning', desc: 'Customize behavior with your data.' },
            { icon: '🔄', title: 'On-prem/Cloud', desc: 'Flexible deployments for any stack.' }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Try Aivora Today</h2>
        <p>Build conversational experiences your users love.</p>
        <Link to="/register" className="btn-primary">Get Started</Link>
      </section>
    </div>
  );
};

export default Landing;
