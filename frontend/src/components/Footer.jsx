import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer animate-fade-in">
            <div className="footer-content">
                <div className="footer-links">
                    <NavLink to="/" className="footer-link">Home</NavLink>
                    <NavLink to="/about" className="footer-link">About</NavLink>
                    <NavLink to="/contact" className="footer-link">Contact</NavLink>
                    <NavLink to="/fleet" className="footer-link">Fleet</NavLink>
                    <NavLink to="/admin" className="footer-link">Admin</NavLink>
                </div>
                <div className="footer-copyright">
                    © 2026 Jenihas Getachew crafted with ❤️ and all rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
