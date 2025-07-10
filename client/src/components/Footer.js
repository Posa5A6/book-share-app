// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>📚 Book Share App &copy; {new Date().getFullYear()} | Built by Narendra Posa</p>

      <div className="footer-contact">
        <p>Contact for any issues while using the application:</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/narendra-posa-421067254" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <a href="https://github.com/Posa5A6" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          <a href="mailto:narisnarendras6@gmail.com">📧 Email</a>
          <a href="tel:+919014293910">📞 +91 9014293910</a>
          <a href="https://x.com/NarendraTheKin1" target="_blank" rel="noopener noreferrer">🐦 X (Twitter)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
