import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact" style={{ backgroundColor: '#fcfbf8', padding: '80px 0 60px', borderTop: '1px solid #e5e0d8' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '30px', marginBottom: '40px' }}>
          
          {/* Column 1 */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#3c2d24', marginBottom: '15px' }}>Hinaaz Fashion Boutique</h3>
            <p style={{ color: '#6a5a52', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>
              Bridal blouses, designer outfits, lehengas, gowns, and kids outfits tailored for premium fit, handcrafted detailing, and elegant occasion styling.
            </p>
          </div>
          
          {/* Column 2 */}
          <div style={{ paddingLeft: '20px' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><Link to="/" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>Home</Link></li>
              <li><Link to="/designer" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>Designer</Link></li>
              <li><Link to="/about" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>About</Link></li>
              <li><Link to="#" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li><Link to="/bridal" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>Bridal</Link></li>
              <li><Link to="/kids" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>Kids</Link></li>
              <li><Link to="/contact" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ color: '#6a5a52', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Hinaaz Fashion Boutique, 106, 6th Main Road, Mahalakshmipuram, Hyderabad - 500001
              </li>
              <li style={{ color: '#6a5a52', fontSize: '0.95rem' }}>9741827558</li>
              <li style={{ color: '#6a5a52', fontSize: '0.95rem' }}>help@hinaaz.com</li>
              <li><a href="#" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>WhatsApp Us</a></li>
              <li><a href="#" style={{ color: '#6a5a52', textDecoration: 'none', fontSize: '0.95rem' }}>View on Google Maps</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ borderTop: '1px solid #e5e0d8', paddingTop: '20px', textAlign: 'center', color: '#8c7e73', fontSize: '0.85rem' }}>
          <p>&copy; {new Date().getFullYear()} Hinaaz Fashion Boutique. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
