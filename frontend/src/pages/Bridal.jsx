import React, { useState } from 'react';
import './Bridal.css';

// Using provided local assets
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';
import img7 from '../assets/image-7.webp';
import img8 from '../assets/image-8.webp';
import img9 from '../assets/image-9.webp';

const Bridal = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Adjusted array length to match the image grid (15 images in screenshot, using our 9 and reusing some for demo)
  const gallery = [
    { id: 1, src: img1, category: 'Bridal Blouse' },
    { id: 2, src: img2, category: 'Bridal Blouse' },
    { id: 3, src: img3, category: 'Lehenga' },
    { id: 4, src: img4, category: 'Gowns' },
    { id: 5, src: img5, category: 'Bridal Blouse' },
    { id: 6, src: img6, category: 'Lehenga' },
    { id: 7, src: img7, category: 'Gowns' },
    { id: 8, src: img8, category: 'Bridal Blouse' },
    { id: 9, src: img9, category: 'Lehenga' },
    { id: 10, src: img1, category: 'Bridal Blouse' },
    { id: 11, src: img2, category: 'Lehenga' },
    { id: 12, src: img3, category: 'Gowns' }
  ];

  const filteredGallery = activeFilter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === activeFilter);

  return (
    <div className="bridal-clone-page">
      
      {/* 1. Hero Section */}
      <div className="br-container">
        <section className="br-hero">
          <div className="br-hero-text">
            <p className="br-eyebrow">Bridal Specialist · Hyderabad</p>
            <h1 className="br-hero-h1">
              Customized Bridal Blouses &<br/>Outfits in Hyderabad
              <span>with Perfect Fit & Premium<br/>Aari Work</span>
            </h1>
            <p className="br-sub-flex">
              <span className="br-star" style={{ color: '#c8a361' }}>✦</span>
              <span>Custom bridal blouses, lehengas, and gowns designed with perfect fit, premium finishing, and personalized styling.</span>
            </p>
            <p className="br-sub-flex">
              <span className="br-star" style={{ color: '#c8a361' }}>✦</span>
              <span>Designed personally by Chief Designer Shruthi Ajith</span>
            </p>
            <p className="br-sub-flex">
              <span className="br-star" style={{ color: '#c8a361' }}>✦</span>
              <span>Bridal designs starting at <strong>₹6000</strong></span>
            </p>
            <div className="br-hero-btns">
              <a href="#" className="br-btn-pri">Book Bridal Consultation</a>
              <a href="#" className="br-btn-sec">Call Now</a>
            </div>
          </div>
          <div className="br-hero-img-wrap">
            {/* The right side full bleed image from the screenshot */}
            <img src={img1} alt="Bridal Blouse Hyderabad" className="br-hero-img" />
          </div>
        </section>
      </div>

      {/* 2. Trust Grid */}
      <section className="br-trust-section">
        <div className="br-trust-grid">
          <div className="br-trust-card">
            <p className="br-trust-label">Trust Bar</p>
            <h2 className="br-trust-title">Made for you</h2>
            <p className="br-trust-desc">Pattern and fit adjusted to body type and occasion</p>
          </div>
          <div className="br-trust-card">
            <p className="br-trust-label">Trust Bar</p>
            <h2 className="br-trust-title">Detail first</h2>
            <p className="br-trust-desc">Embroidery placement designed for saree and jewellery balance</p>
          </div>
          <div className="br-trust-card">
            <p className="br-trust-label">Trust Bar</p>
            <h2 className="br-trust-title">Timely finish</h2>
            <p className="br-trust-desc">Trials and final delivery planned around event timelines</p>
          </div>
        </div>
      </section>

      {/* 3. Collection Gallery */}
      <section className="br-section-padding">
        <div className="br-sec-header">
          <p className="br-sec-eyebrow">Bridal Outfits</p>
          <h2 className="br-sec-h2">Our Bridal Collection</h2>
          <p className="br-sec-sub">Explore customized bridal blouses, lehengas, and gowns designed for your wedding and special occasions.</p>
        </div>
        
        <div className="br-filters">
          {['All', 'Bridal Blouse', 'Lehenga', 'Gowns'].map(filter => (
            <button 
              key={filter}
              className={`br-filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="br-gallery-grid">
          {filteredGallery.map(item => (
            <div key={item.id} className="br-gallery-card">
              <div className="br-gallery-img-wrap">
                <img src={item.src} alt={item.category} className="br-gallery-img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Middle Banner CTA */}
      <section className="br-section-padding" style={{ paddingTop: '1rem' }}>
        <div className="br-banner-cta">
          <div>
            <h2 className="br-banner-title">Join our happy brides —<br/>book your consultation today</h2>
            <p className="br-banner-sub">Start your bridal consultation with Shruthi Ajith</p>
          </div>
          <div>
            <a href="#" className="br-btn-gold">WhatsApp Enquiry</a>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Split Layout) */}
      <section className="br-section-padding">
        <div className="br-services-wrap">
          <div className="br-services-left">
            <p className="br-sec-eyebrow">Services</p>
            <h2 className="br-sec-h2" style={{ marginBottom: '1.5rem', fontSize: '2.2rem' }}>What We Design for Brides</h2>
            <p className="br-sec-sub" style={{ margin: 0 }}>From concept to final fitting, we handle every detail of your bridal outfit.</p>
          </div>
          <div className="br-services-grid">
            {['Bridal blouse consultation', 'Maggam & Aari work', 'Custom neck & sleeve designs', 'Muhurtham & reception blouses', 'Padded finishing', 'Saree & blouse styling guidance'].map((svc, i) => (
              <div key={i} className="br-service-pill">
                <div className="br-service-dot"></div>
                {svc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Flow */}
      <section className="br-section-padding">
        <div className="br-sec-header">
          <p className="br-sec-eyebrow">Process</p>
          <h2 className="br-sec-h2">A simple boutique flow from consultation to final fitting</h2>
          <p className="br-sec-sub">Clear steps so you know exactly what to expect at every stage.</p>
        </div>
        
        <div className="br-process-container">
          <article className="br-process-card">
            <span className="br-process-num">01</span>
            <h3 className="br-process-title">Consultation</h3>
            <p className="br-process-desc">Share your wedding date, saree palette, and design preferences. Chief Designer Shruthi Ajith will guide you personally from the first call.</p>
          </article>
          <article className="br-process-card">
            <span className="br-process-num">02</span>
            <h3 className="br-process-title">Design Direction</h3>
            <p className="br-process-desc">We finalize neckline, embroidery style, sleeve design, and fabric together — ensuring every detail matches your vision and bridal look.</p>
          </article>
          <article className="br-process-card">
            <span className="br-process-num">03</span>
            <h3 className="br-process-title">Trial & Finish</h3>
            <p className="br-process-desc">Trials are scheduled around your event timeline. Final fitting and delivery planned so you receive your outfit well before your special day.</p>
          </article>
        </div>
      </section>

      {/* 7. Reviews Section */}
      <section className="br-section-padding">
        <div className="br-reviews-wrap">
          <div className="br-reviews-top">
            <div>
              <p className="br-sec-eyebrow">Social Proof</p>
              <h2 className="br-reviews-title">Google Reviews</h2>
              <p className="br-sec-sub" style={{ margin: 0 }}>Real experiences from brides who trusted Shrusara for their special day.</p>
            </div>
            <div className="br-reviews-rating">
              <span className="br-rating-score">4.9</span>
              <div>
                <div className="br-stars">★★★★★</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>Based on 229+ boutique experiences</p>
              </div>
            </div>
          </div>
          
          <div className="br-reviews-grid">
            <div className="br-review-item">
              <div className="br-review-head">
                <span className="br-review-name">Anusha R.</span>
                <span className="br-stars" style={{ fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="br-review-text">The blouse fitting was perfect and the maggam work looked premium in person. The consultation made the whole bridal styling process easier.</p>
            </div>
            <div className="br-review-item">
              <div className="br-review-head">
                <span className="br-review-name">Keerthana M.</span>
                <span className="br-stars" style={{ fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="br-review-text">Loved the finishing, delivery commitment, and how well they understood the reference I showed. The outfit felt custom in the best way.</p>
            </div>
            <div className="br-review-item">
              <div className="br-review-head">
                <span className="br-review-name">Pallavi S.</span>
                <span className="br-stars" style={{ fontSize: '1rem' }}>★★★★★</span>
              </div>
              <p className="br-review-text">The boutique helped with blouse and kids outfit coordination for our family event. Everything looked polished and fit beautifully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom Final CTA */}
      <section className="br-section-padding">
        <div className="br-final-cta">
          <p className="br-sec-eyebrow">Book Your Bridal Blouse Consultation Today</p>
          <h2 className="br-sec-h2">Ready to design your perfect outfit?</h2>
          <p className="br-sec-sub">Share your wedding date, saree details, and design preferences. Our Chief Designer will guide you personally.</p>
          <a href="#" className="br-btn-gold">Book Bridal Consultation</a>
        </div>
      </section>
      
    </div>
  );
};

export default Bridal;
