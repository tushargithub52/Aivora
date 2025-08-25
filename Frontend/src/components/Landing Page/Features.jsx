import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'Smart Conversations',
      description: 'Advanced AI that understands context and nuance',
      icon: '🧠'
    },
    {
      title: 'Fast & Secure',
      description: 'Enterprise-grade security with lightning-fast responses',
      icon: '🔒'
    },
    {
      title: 'Always Available',
      description: '24/7 availability with consistent performance',
      icon: '⚡'
    },
    {
      title: 'Scalable for Business',
      description: 'Grows with your needs, from startup to enterprise',
      icon: '📈'
    }
  ];

  return (
    <section className="features">
      <h2>Features that set us apart</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
