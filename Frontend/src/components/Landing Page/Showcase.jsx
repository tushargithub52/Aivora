import React from 'react';
import './Showcase.css';

const Showcase = () => {
  return (
    <section className="showcase">
      <h2>See Aivora in Action</h2>
      <div className="chat-preview">
        <div className="chat-container">
          <div className="chat-message ai">
            <div className="message-content">Hello! How can I assist you today?</div>
          </div>
          <div className="chat-message user">
            <div className="message-content">Can you help me analyze this data?</div>
          </div>
          <div className="chat-message ai">
            <div className="message-content">Of course! I'll help you break down the data and identify key patterns...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
