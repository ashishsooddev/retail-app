import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header ({cartCount = 0 }){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className="header-nav" id="top-nav">
            <div className="header-container">
                <Link to="/" className="brand-logo">
                    LuxeRetail
                </Link>

                <div className="desktop-links">
                    <NavLink to="/" className="nav-link">New Arrivals</NavLink>
                    <NavLink to="/" className="nav-link">Electronics</NavLink>
                    <NavLink to="/" className="nav-link">Jewellery</NavLink>
                    <NavLink to="/" className="nav-link">Men's</NavLink>
                    <NavLink to="/" className="nav-link">Women's</NavLink>
                </div>
            </div>
        </nav>
    )
}