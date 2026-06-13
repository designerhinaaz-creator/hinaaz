import React from 'react';
import './Kids.css';

// Using provided local assets to simulate the kids gallery
import img1 from '../assets/15.png';
import img2 from '../assets/16.png';
import img3 from '../assets/17.png';
import img4 from '../assets/18.png';
import img5 from '../assets/19.png';
import img6 from '../assets/20.png';

const Kids = () => {
  
  const gallery = [
    { id: 1, src: img1, alt: 'Mommy & Me Princess Set' },
    { id: 2, src: img2, alt: 'Bluebell Kids Party Dress' },
    { id: 3, src: img3, alt: 'Little Princess Lehenga' },
    { id: 4, src: img4, alt: 'Mother Daughter Heritage Set' },
    { id: 5, src: img5, alt: 'Little Royal Festive Lehenga' },
    { id: 6, src: img6, alt: 'Sparkle Bloom Party Gown' },
  ];

  return (
    <div className="kids-clone-page">
      
      {/* 1. Hero Section */}
      <section className="kd-hero-wrapper">
        <div className="kd-hero-content">
          <div className="kd-hero-text">
            <p className="kd-eyebrow">Kids Outfits · Hyderabad</p>
            <h1 className="kd-hero-h1">
              Kids Outfits in Hyderabad
              <span>Designed for Comfort & Celebration</span>
            </h1>
            <p className="kd-sub-flex">
              Customized kids outfits designed with comfort, premium fabrics, and perfect finishing for special occasions.
            </p>
            <div className="kd-hero-btns">
              <a href="#" className="kd-btn-pri">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Order on WhatsApp
              </a>
              <a href="#" className="kd-btn-sec">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div className="kd-hero-image-container">
          <img src={img3} alt="Kids Outfits Hyderabad" />
          <div className="kd-hero-fade"></div>
        </div>
      </section>

      {/* 2. What We Design (Empty white section based on screenshot) */}
      <section className="kd-white-section">
        <div className="kd-container" style={{ padding: 0 }}>
          <p className="kd-sec-eyebrow">What We Design</p>
          <h2 className="kd-sec-h2">What We Design for Kids</h2>
          <p className="kd-sec-sub">Every piece is crafted keeping your child's comfort and the occasion in mind.</p>
        </div>
      </section>

      {/* 3. Collection Gallery */}
      <section className="kd-gallery-section">
        <div className="kd-container" style={{ padding: 0 }}>
          <p className="kd-sec-eyebrow">Gallery</p>
          <h2 className="kd-sec-h2">Kids Outfit Collection</h2>
          <p className="kd-sec-sub">A mix of custom designed and ready boutique styles for kids.</p>
          
          <div className="kd-gallery-grid">
            {gallery.map(item => (
              <div key={item.id} className="kd-gallery-card">
                <div className="kd-gallery-img-wrap">
                  <img src={item.src} alt={item.alt} className="kd-gallery-img" />
                </div>
              </div>
            ))}
          </div>
          <p className="kd-gallery-note">Showing our latest kids outfits · Updated regularly with new work</p>
        </div>
      </section>

      {/* 4. Trust Line Banner */}
      <section className="kd-trust-shell">
        <div className="kd-trust-line">
          <span className="kd-trust-icon">✦</span>
          <p className="kd-trust-text">
            Every outfit is designed keeping comfort, movement and occasion styling in mind.
          </p>
          <span className="kd-trust-icon">✦</span>
        </div>
      </section>

      {/* 5. Consultation Form Section */}
      <section className="kd-form-section">
        <div className="kd-cta-wrap">
          <p className="kd-cta-eyebrow">Consultation</p>
          <h2 className="kd-cta-h">Order Customized Kids Outfits on WhatsApp</h2>
          <p className="kd-cta-sub">Share age, occasion, preferred colors and design ideas to get started.</p>
          
          <div className="kd-cta-form">
            <div className="kd-form-fields">
              <div className="kd-form-group">
                <label className="kd-form-label">Age</label>
                <input type="text" className="kd-form-input" placeholder="e.g. 5 Years" />
              </div>
              <div className="kd-form-group">
                <label className="kd-form-label">Occasion</label>
                <input type="text" className="kd-form-input" placeholder="e.g. Birthday, Wedding" />
              </div>
              <div className="kd-form-group">
                <label className="kd-form-label">Preferred colors / design</label>
                <input type="text" className="kd-form-input" placeholder="e.g. Pink dress, floral" />
              </div>
            </div>
            
            <div className="kd-cta-btns">
              <a href="#" className="kd-btn-gold">WhatsApp Order</a>
              <a href="#" className="kd-btn-outline-white">Call Now</a>
            </div>
            <p className="kd-form-hint">Your details will be pre-filled in WhatsApp — just hit send.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Kids;
