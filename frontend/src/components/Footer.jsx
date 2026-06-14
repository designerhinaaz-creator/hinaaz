import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact" style={{ backgroundColor: '#3c2d24', padding: '80px 0 40px', borderTop: '1px solid #4a3b31' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid">

          {/* Column 1: About Company */}
          <div className="footer-col-about">
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '20px', fontWeight: '700' }}>ABOUT COMPANY</h4>
            <div style={{ marginBottom: '20px' }}>
              <Link to="/">
                <img src={logo} alt="Hinaaz Logo" style={{ height: '72px', objectFit: 'contain' }} />
              </Link>
            </div>
            <p style={{ color: '#e5e0d8', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Every design reflects premium craftsmanship, luxurious fabrics, and an unwavering commitment to elevated style.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '20px', fontWeight: '700' }}>QUICK LINKS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <Link to="/" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Home</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <Link to="/about" style={{ color: '#e5e0d8', textDecoration: 'none' }}>About</Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://shop.hinaazdesigner.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Shop</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://wa.me/08977640073" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Customized Orders</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <Link to="/contact" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: My Account */}
          <div className="footer-col">
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '20px', fontWeight: '700' }}>MY ACCOUNT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://shop.hinaazdesigner.com/profile.php" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>My account</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://shop.hinaazdesigner.com/cart.php" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Cart</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://shop.hinaazdesigner.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>FAQ</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://shop.hinaazdesigner.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Return Policy</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e5e0d8', fontSize: '0.9rem' }}>
                <span style={{ fontSize: '0.6rem', color: '#cba153' }}>●</span>
                <a href="https://shop.hinaazdesigner.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e5e0d8', textDecoration: 'none' }}>Shipping Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col footer-col-contact">
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '20px', fontWeight: '700' }}>CONTACT INFO</h4>
            <p style={{ color: '#e5e0d8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '15px' }}>
              AZEEM'S RESIDENCY, 8-2-293/82, L/18-B, Road No. 12, MLA Colony, Banjara Hills, Hyderabad, Telangana 500034
            </p>
            <p style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              Mail: <a href="mailto:info@hinaazdesigner.com" style={{ color: '#e5e0d8', fontWeight: 'normal', textDecoration: 'none' }}>info@hinaazdesigner.com</a>
            </p>
            <p style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 'bold', margin: '0 0 20px 0' }}>
              Phone: <span style={{ color: '#e5e0d8', fontWeight: 'normal' }}>+91 8686472817</span>
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Facebook */}
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #4a3b31', color: '#e5e0d8', textDecoration: 'none' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" /></svg>
              </a>
              {/* Twitter */}
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #4a3b31', color: '#e5e0d8', textDecoration: 'none' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #4a3b31', color: '#e5e0d8', textDecoration: 'none' }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid #4a3b31', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', color: '#e5e0d8', fontSize: '0.85rem' }}>
          <p style={{ margin: 0 }}>Copyright © Hinaaz Fashion Boutique 2026. All Rights Reserved.</p>
          <p style={{ margin: 0 }}>Design by <span style={{ fontWeight: 'bold', color: '#ffffff' }}>WEBNAPP STUDIO</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
