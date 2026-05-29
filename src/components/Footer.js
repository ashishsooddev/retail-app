function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        <div className="footer-brand-area">
          <a href="/" className="footer-logo">
            LuxeRetail
          </a>
          <p className="footer-description">
            The definitive destination for high-end fashion,
            precision electronics, and exquisite jewelry.
          </p>
        </div>
        <div className="footer-links-column">
          <h4 className="footer-heading">Company</h4>
          <a href="/about" className="footer-link">About Us</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-links-column">
          <h4 className="footer-heading">Customer Service</h4>
          <a href="/shipping" className="footer-link">Shipping Policy</a>
          <a href="/returns" className="footer-link">Returns</a>
          <a href="/faq" className="footer-link">FAQ</a>
        </div>
        <div className="footer-newsletter">
          <h4 className="footer-heading">Stay Informed</h4>
          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2024 LuxeRetail. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;