import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header-nav" id="top-nav">
      <div className="header-container">
        <Link to="/" className="brand-logo">
          LuxeRetail
        </Link>

        <div className="desktop-links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/product/1" className="nav-link">Product</NavLink>
          <NavLink to="/cart" className="nav-link">Cart</NavLink>
          <NavLink to="/this-route-does-not-exist" className="nav-link">Not Found</NavLink>
        </div>

        <div className="header-actions">
          <Link to="/cart" className="cart-link">
            🛒
            <span className="cart-badge">{cartCount}</span>
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/product/1" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Product
          </NavLink>
          <NavLink to="/cart" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Cart
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Header;