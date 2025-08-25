import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";


const FeatureCard = ({ icon, title, desc }) => (
  <div className="card feature-card">
    <div className="feature-icon" aria-hidden="true">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const ValueCard = ({ icon, title, desc }) => (
  <div className="card value-card">
    <div className="value-icon" aria-hidden="true">{icon}</div>
    <div className="value-copy">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

export default function Landing() {
  return (
    <div className="landing">
      {/* ======= NAV ======= */}
      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="/">
            <span className="brand-dot" />
            Aivora
          </a>

          <button className="nav-toggle" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>

          <div className="nav-cta">
            <Link to="/login" className="btn ghost">Log in</Link>
            <Link to="/register" className="btn primary">Register now</Link>
          </div>
        </nav>
      </header>

      {/* ======= HERO ======= */}
      <section className="hero" id="top">
        <div className="hero-col hero-copy">
          <span className="tag">Next-gen Conversational AI</span>
          <h1>
            <span className="grad">Revolutionizing AI</span><br />Conversations
          </h1>
          <p className="lead">
            Unleash AI's potential with Aivora—designed for seamless, intelligent interactions
            that are fast, secure, and available 24/7 for teams and creators.
          </p>

          <div className="hero-actions">
            <Link to="/login" className="btn primary btn-lg">Chat now</Link>
            <a href="#features" className="btn ghost btn-lg">See features</a>
          </div>

          <div className="hero-badges">
            <span>🔐 Auth + private workspaces</span>
            <span>🧠 Short + Long-term Memory (RAG)</span>
          </div>
        </div>

        <div className="hero-col hero-preview">
          <div className="chat-preview card">
            <div className="chat-header">
              <span className="dot live" />
              <span>Aivora · Live</span>
              <span className="chip">Secure</span>
            </div>

            <div className="chat-body">
              <div className="msg user">Hello.</div>
              <div className="msg ai">Hello! Aivora here. 👋 Kaise ho? What can I do for you today?</div>
              <div className="msg user">Tell me about yourself and what can you do ?</div>
              <div className="msg ai">
                Aivora here, your Hinglish-speaking AI buddy, ready to simplify your life with clear guidance and solutions! 😎
              </div>
            </div>
          </div>

          <div className="floating-note card">
            <div className="note-title">Personalization</div>
            <p>Conversations adapt using short & long-term memory via RAG + vectors.</p>
          </div>
        </div>
      </section>

      {/* ======= BENEFITS ======= */}
      <section id="benefits" className="section">
        <div className="section-head">
          <h2>Elevate Your Experience</h2>
          <p className="muted">
            Aivora is built for speed, safety, and reliability—so your team can focus on impact.
          </p>
        </div>

        <div className="values">
          <ValueCard
            icon="💡"
            title="Smart Conversations"
            desc="Context-aware dialogue tailored to user intent."
          />
          <ValueCard
            icon="🔒"
            title="Fast & Secure"
            desc="Rapid responses with robust data protection."
          />
          <ValueCard
            icon="🌐"
            title="Always Available"
            desc="Global availability with enterprise uptime."
          />
        </div>
      </section>

      {/* ======= FEATURES ======= */}
      <section id="features" className="section">
        <div className="section-head">
          <h2>Designed for Builders & Teams</h2>
          <p className="muted">Tooling that scales from prototype to production.</p>
        </div>

        <div className="features-grid">
          <FeatureCard icon="⚙️" title="API-first"
            desc="Simple, secure REST & WebSocket APIs." />
          <FeatureCard icon="🔍" title="Vector Search"
            desc="Embeddings, RAG, and hybrid search ready." />
          <FeatureCard icon="⚡" title="Fine-tuning"
            desc="Customize behavior with your data." />
        </div>
      </section>

      {/* ======= HOW IT WORKS ======= */}
      <section className="section how">
        <div className="section-head">
          <h2>How Aivora Remembers</h2>
          <p className="muted">
            Short-term conversation state + long-term memory via vector databases enables
            continuity across sessions—securely scoped per user.
          </p>
        </div>

        <div className="timeline">
          <div className="step card">
            <span className="step-badge">1</span>
            <h4>Ingest</h4>
            <p>Documents & chats chunked → embedded → stored in vector DB.</p>
          </div>
          <div className="step card">
            <span className="step-badge">2</span>
            <h4>Retrieve</h4>
            <p>Hybrid search pulls only the most relevant context for the prompt.</p>
          </div>
          <div className="step card">
            <span className="step-badge">3</span>
            <h4>Generate</h4>
            <p>Secure, audited generation with guardrails and observability.</p>
          </div>
        </div>
      </section>

      {/* ======= PRICING TEASER ======= */}
      <section id="pricing" className="cta">
        <div className="cta-inner">
          <h2>Try Aivora Today</h2>
          <p className="muted">Build conversational experiences your users love.</p>
          <Link to="/register" className="btn white btn-lg">Get Started</Link>
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div className="footer-inner">
          <a className="brand" href="/"><span className="brand-dot" />Aivora</a>
          <p className="tiny">© {new Date().getFullYear()} Aivora, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
