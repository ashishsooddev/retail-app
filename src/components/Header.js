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
            </div>
        </nav>
    )
}