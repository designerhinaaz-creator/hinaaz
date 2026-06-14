import React from 'react';
import heroImage from '../assets/hero-image.webp';
import img1 from '../assets/1.webp';
import img2 from '../assets/13.webp';
import img3 from '../assets/12.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.webp';
import img8 from '../assets/8.webp';
import img9 from '../assets/20.webp';

/* ─── Data (same structure as Shrusara) ─── */
const SERVICES = [
  { title: 'Bridal Collection', desc: 'Custom necklines, perfect fitting & elegant finishing designed to complement your wedding saree.', img: img1, to: 'https://shop.hinaazdesigner.com/' },
  { title: 'Designer Collection', desc: 'Premium handcrafted embroidery with rich detailing, creating a luxurious 3D finish for your bridal blouse.', img: img2, to: 'https://shop.hinaazdesigner.com/' },
  { title: 'Saree Collection', desc: 'Exquisite sarees with premium draping styles, rich fabrics and elegant finishes crafted for every special occasion.', img: img3, to: 'https://shop.hinaazdesigner.com/' },
];

const WHY_CHOOSE = [
  { title: 'Perfect Customized Fitting for Every Body Type', icon: '✦' },
  { title: 'Expert in Maggam & Aari Work Detailing', icon: '✦' },
  { title: 'Premium Stitching with Elegant Finishing', icon: '✦' },
  { title: 'Personalized Design Consultation', icon: '✦' },
  { title: 'Assured On-Time Delivery', icon: '✦' },
];

const ABOUT_CARDS = [
  { title: 'Perfect Bridal Finishing', desc: 'Necklines, fall, and detailing crafted to look flawless in person and in photos.' },
  { title: 'Made-to-Measure Silhouettes', desc: 'Every outfit is tailored to your body type, comfort, and occasion.' },
  { title: 'Expert Maggam & Aari Work', desc: 'Intricate hand embroidery with rich, premium detailing.' },
  { title: 'Personalized Consultation', desc: 'Clear design guidance tailored to your style and needs.' },
  { title: 'On-Time Delivery Assurance', desc: 'We respect your timeline and deliver as promised.' },
];

const REVIEWS = [
  { name: 'Sravani Reddy', date: '2 weeks ago', text: 'Hinaaz is absolutely wonderful! They created the most perfect bridal blouse with exquisite maggam work. The fitting was spot on right from the first try. I highly recommend them!' },
  { name: 'Pavithra Lakshmi', date: '1 month ago', text: 'We ordered a designer lehenga for my sister\'s wedding. The stitching quality, embroidery, and design were superb. Everyone who visits Hinaaz Boutique will definitely be completely satisfied!' },
  { name: 'Keerthi Rao', date: '3 weeks ago', text: 'From consultation to final fitting, everything was handled very professionally. My saree blouse was designed exactly as I had dreamed. I will definitely come back for my next occasion!' },
];

const PHONE = '08977640073';
const WA_TEXT = encodeURIComponent("Hi, I'm interested in customized bridal outfits. I would like to consult with Chief Designer Hinaaz.");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_TEXT}`;
const TEL_URL = `tel:${PHONE}`;
const GOOGLE_URL = 'https://www.google.com/search?q=Hinaaz+Fashion+Boutique+Hyderabad';

/* ─── Service Card (same as Shrusara's <F> component) ─── */
function ServiceCard({ service }) {
  return (
    <a href={service.to} className="sf-service-card" style={{ textDecoration: 'none' }}>
      <div className="sf-service-img-wrap">
        <img src={service.img} alt={service.title} loading="lazy" className="sf-service-img" />
      </div>
      <div className="sf-service-body">
        <h3 className="sf-service-title">{service.title}</h3>
        <p className="sf-service-desc">{service.desc}</p>
        <div className="sf-service-actions">
          <span className="sf-btn-outline" style={{ width: '100%', textAlign: 'center' }}>Shop Collection</span>
        </div>
      </div>
    </a>
  );
}

/* ─── Google SVG (exact Shrusara logo) ─── */
function GoogleLogo({ size = 40 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.5 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19.1 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.5 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.3 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.3C9.6 35.4 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.6l6.2 5.2C36.9 36.8 44 31 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

/* ─── WhatsApp SVG ─── */
function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Phone SVG ─── */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <style>{`
        /* ── CSS Variables ── */
        :root {
          --sf-primary:   #3E2C23;
          --sf-secondary: #EAE3DC;
          --sf-bg:        #F8F6F3;
          --sf-accent:    #C8A96A;
          --sf-text:      #2A1E17;
          --sf-muted:     #7A6A60;
          --sf-white:     #FFFFFF;
          --sf-radius:    24px;
          --sf-radius-sm: 14px;
        }
        body { background: var(--sf-bg); }

        /* ── HERO ── */
        .sf-hero {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
          min-height: 90vh;
          background: var(--sf-bg);
          position: relative;
          overflow: hidden;
          max-width: 100vw;
        }
        .sf-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 70% at 30% 50%, rgba(200,169,106,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .sf-hero-text {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 80px 48px 80px 5vw;
          z-index: 2;
          text-align: left;
          max-width: 100%;
        }
        .sf-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sf-accent);
          margin-bottom: 20px;
        }
        .sf-hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--sf-accent);
          flex-shrink: 0;
        }
        .sf-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 7vw, 3.2rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--sf-primary);
          margin-bottom: 20px;
          text-align: left;
          word-wrap: break-word;
          max-width: 100%;
        }
        .sf-hero-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 0.92rem;
          color: var(--sf-muted);
          line-height: 1.8;
          margin-bottom: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .sf-line { display: flex; align-items: flex-start; gap: 8px; }
        .sf-star { color: #C8A96A; flex-shrink: 0; font-size: 14px; }
        .sf-hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 28px;
        }
        .sf-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--sf-primary);
          color: var(--sf-white);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: box-shadow 0.25s, transform 0.2s;
          border: 2px solid var(--sf-primary);
          cursor: pointer;
        }
        .sf-btn-primary:hover {
          box-shadow: 0 0 0 4px rgba(62,44,35,0.15), 0 6px 24px rgba(62,44,35,0.25);
          transform: translateY(-1px);
        }
        .sf-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: var(--sf-primary);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          border: 2px solid var(--sf-primary);
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .sf-btn-secondary:hover { background: var(--sf-primary); color: var(--sf-white); }
        .sf-hero-img-wrap {
          flex: 1;
          position: relative;
          min-height: 90vh;
          overflow: hidden;
        }
        .sf-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.96);
          display: block;
        }
        .sf-hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--sf-bg) 0%, transparent 18%);
        }

        /* ── SECTION SHELL ── */
        .sf-shell { max-width: 1280px; margin: 0 auto; padding: 80px 5vw; }
        .sf-shell-alt { background: var(--sf-secondary); }
        .sf-shell-alt-inner { max-width: 1280px; margin: 0 auto; padding: 80px 5vw; }

        /* ── EYEBROW + HEADING ── */
        .sf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sf-accent);
          margin-bottom: 14px;
        }
        .sf-eyebrow::before {
          content: '';
          display: block;
          width: 22px;
          height: 1px;
          background: var(--sf-accent);
          flex-shrink: 0;
        }
        .sf-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          font-weight: 700;
          color: var(--sf-primary);
          line-height: 1.25;
          margin-bottom: 12px;
          text-align: left;
        }
        .sf-subheading {
          font-family: 'Poppins', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--sf-muted);
          line-height: 1.75;
          max-width: 580px;
          text-align: left;
        }

        /* ── SERVICES ── */
        .sf-services-headline { margin-bottom: 48px; }
        .sf-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .sf-service-card {
          background: var(--sf-white);
          border-radius: var(--sf-radius);
          overflow: hidden;
          box-shadow: 0 2px 18px rgba(62,44,35,0.07);
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s, transform 0.2s;
          cursor: pointer;
          text-decoration: none;
        }
        .sf-service-card:hover {
          box-shadow: 0 8px 36px rgba(62,44,35,0.13);
          transform: translateY(-3px);
        }
        .sf-service-img-wrap {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--sf-secondary);
        }
        .sf-service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.5s;
          display: block;
        }
        .sf-service-card:hover .sf-service-img { transform: scale(1.04); }
        .sf-service-body {
          padding: 22px 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .sf-service-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--sf-primary);
          margin-bottom: 8px;
          text-align: left;
        }
        .sf-service-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.82rem;
          line-height: 1.7;
          color: var(--sf-muted);
          flex: 1;
          margin-bottom: 18px;
          text-align: left;
        }
        .sf-service-actions { margin-top: auto; }
        .sf-btn-outline {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--sf-primary);
          border: 1.5px solid var(--sf-primary);
          border-radius: 50px;
          padding: 9px 20px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .sf-btn-outline:hover { background: var(--sf-primary); color: var(--sf-white); }

        /* ── CONSULT BANNER ── */
        .sf-consult-banner {
          background: var(--sf-primary);
          color: var(--sf-white);
          border-radius: var(--sf-radius);
          padding: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .sf-consult-banner > div:first-child { text-align: left; flex: 1; min-width: 280px; }
        .sf-consult-title {
          font-family: 'Playfair Display', serif !important;
          font-size: clamp(1.4rem, 2.2vw, 2rem) !important;
          font-weight: 700 !important;
          color: #FFFFFF !important;
          margin: 0 0 12px 0 !important;
          line-height: 1.3 !important;
          display: block !important;
        }
        .sf-consult-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7) !important;
          margin: 0;
        }
        .sf-consult-btns { display: flex; gap: 14px; flex-shrink: 0; flex-wrap: wrap; align-items: center; }
        .sf-btn-primary-light {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--sf-accent); color: var(--sf-white);
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
          padding: 14px 28px; border-radius: 50px; text-decoration: none;
          border: 2px solid var(--sf-accent);
          transition: box-shadow 0.2s, transform 0.2s; cursor: pointer;
        }
        .sf-btn-primary-light:hover { box-shadow: 0 0 0 4px rgba(200,169,106,0.3); transform: translateY(-1px); }
        .sf-btn-secondary-light {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: transparent; color: var(--sf-white);
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
          padding: 14px 28px; border-radius: 50px; text-decoration: none;
          border: 2px solid rgba(255,255,255,0.4);
          transition: background 0.2s, border-color 0.2s; cursor: pointer;
        }
        .sf-btn-secondary-light:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

        /* ── WHY CHOOSE ── */
        .sf-why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-top: 36px;
        }
        .sf-why-item {
          background: var(--sf-white);
          border-radius: var(--sf-radius-sm);
          padding: 22px 16px;
          text-align: center;
          border: 1px solid rgba(62,44,35,0.07);
          box-shadow: 0 2px 12px rgba(62,44,35,0.05);
          display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
        }
        .sf-why-icon { color: var(--sf-accent); font-size: 18px; margin-bottom: 10px; line-height: 1; }
        .sf-why-text {
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem; font-weight: 600; color: var(--sf-primary); line-height: 1.5; text-align: center;
        }

        /* ── IMAGE GALLERY ── */
        .sf-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 32px;
        }
        .sf-gallery-item {
          border-radius: var(--sf-radius-sm);
          overflow: hidden;
          aspect-ratio: 4/5;
          background: var(--sf-secondary);
        }
        .sf-gallery-item img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: top center;
          transition: transform 0.5s;
          display: block;
        }
        .sf-gallery-item:hover img { transform: scale(1.04); }

        /* ── CATEGORIES ── */
        .sf-cat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-top: 40px;
        }
        .sf-cat-card {
          position: relative;
          min-height: 480px;
          border-radius: var(--sf-radius);
          overflow: hidden;
          display: flex; flex-direction: column; justify-content: space-between;
          text-decoration: none;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .sf-cat-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.25); }
        .sf-cat-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; z-index: 1; transition: transform 0.6s ease; display: block;
        }
        .sf-cat-card:hover .sf-cat-img { transform: scale(1.08); }
        .sf-cat-header {
          position: relative; z-index: 2; padding: 24px 20px;
          background: rgba(26,26,26,0.85);
          text-align: center;
          border-bottom: 1px solid rgba(200,169,106,0.2);
        }
        .sf-cat-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem; font-weight: 600; color: #C8A96A; margin: 0;
        }
        .sf-cat-footer {
          position: relative; z-index: 2;
          background: rgba(26,26,26,0.9);
          padding: 16px 20px;
          color: #C8A96A; font-weight: 700; font-size: 13px;
          font-family: 'Poppins', sans-serif;
          text-align: center; text-transform: uppercase; letter-spacing: 1.5px;
        }

        /* ── ABOUT ── */
        .sf-about-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px; margin-top: 36px;
        }
        .sf-about-card {
          background: var(--sf-white);
          border-radius: var(--sf-radius-sm);
          padding: 24px 18px;
          border: 1px solid rgba(62,44,35,0.07);
          box-shadow: 0 2px 12px rgba(62,44,35,0.05);
          text-align: left;
        }
        .sf-about-card-accent {
          display: block; width: 28px; height: 2px;
          background: var(--sf-accent); margin-bottom: 14px; border-radius: 2px;
        }
        .sf-about-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem; font-weight: 700; color: var(--sf-primary);
          margin-bottom: 8px; text-align: left;
        }
        .sf-about-card-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem; line-height: 1.65; color: var(--sf-muted); text-align: left;
        }

        /* ── REVIEWS ── */
        .sf-reviews-eyebrow-wrap { text-align: center; margin-bottom: 14px; }
        .sf-reviews-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase; color: var(--sf-accent);
        }
        .sf-reviews-eyebrow::before, .sf-reviews-eyebrow::after {
          content: ''; display: block; width: 40px; height: 1px;
          background: var(--sf-accent); flex-shrink: 0;
        }
        .sf-reviews-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700; color: var(--sf-primary); text-align: center; margin-bottom: 12px;
        }
        .sf-reviews-sub {
          font-family: 'Poppins', sans-serif; font-size: 0.92rem; color: var(--sf-muted);
          text-align: center; line-height: 1.75; max-width: 520px; margin: 0 auto 40px;
        }
        .sf-rating-card {
          background: var(--sf-white); border-radius: var(--sf-radius); padding: 28px 32px;
          display: flex; align-items: center; gap: 16px; margin-bottom: 24px;
          border: 1px solid rgba(62,44,35,0.07); box-shadow: 0 2px 16px rgba(62,44,35,0.06);
          flex-wrap: wrap;
        }
        .sf-rating-divider { width: 1px; height: 56px; background: rgba(62,44,35,0.12); flex-shrink: 0; }
        .sf-score-block { display: flex; align-items: center; gap: 12px; }
        .sf-score-num { font-family: 'Playfair Display', serif; font-size: 2.8rem; font-weight: 700; color: var(--sf-primary); line-height: 1; }
        .sf-score-right { display: flex; flex-direction: column; gap: 4px; }
        .sf-score-stars { display: flex; gap: 3px; }
        .sf-score-star { color: var(--sf-accent); font-size: 20px; }
        .sf-score-label { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; color: var(--sf-primary); }
        .sf-verified-text { font-family: 'Poppins', sans-serif; font-size: 0.88rem; color: var(--sf-muted); line-height: 1.6; }
        .sf-verified-text strong { color: var(--sf-primary); font-weight: 600; }
        .sf-rating-view-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--sf-primary);
          border: 1.5px solid var(--sf-primary); border-radius: 50px;
          padding: 11px 26px; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600;
          text-decoration: none; transition: background 0.2s, color 0.2s;
          white-space: nowrap; margin-left: auto;
        }
        .sf-rating-view-btn:hover { background: var(--sf-primary); color: var(--sf-white); }
        .sf-reviews-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 20px; margin-top: 8px; }
        .sf-highlight-card {
          background: var(--sf-primary); border-radius: var(--sf-radius-sm);
          padding: 28px 24px; display: flex; flex-direction: column; gap: 12px;
        }
        .sf-highlight-stars { display: flex; gap: 3px; }
        .sf-highlight-star { color: var(--sf-accent); font-size: 18px; }
        .sf-highlight-label { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--sf-accent); }
        .sf-highlight-text { font-family: 'Poppins', sans-serif; font-size: 0.85rem; color: rgba(255,255,255,0.75); line-height: 1.65; }
        .sf-reviews-cards-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .sf-review-card {
          background: var(--sf-white); border-radius: var(--sf-radius-sm); padding: 20px;
          border: 1px solid rgba(62,44,35,0.07); box-shadow: 0 2px 12px rgba(62,44,35,0.05);
          display: flex; flex-direction: column; gap: 12px;
        }
        .sf-review-top { display: flex; align-items: center; gap: 10px; }
        .sf-review-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: var(--sf-accent); display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 700; color: var(--sf-white); flex-shrink: 0;
          font-family: 'Playfair Display', serif;
        }
        .sf-review-name { font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; color: var(--sf-primary); }
        .sf-review-date { font-family: 'Poppins', sans-serif; font-size: 11px; color: var(--sf-muted); margin-top: 2px; }
        .sf-review-stars { display: flex; gap: 2px; }
        .sf-review-star { color: var(--sf-accent); font-size: 13px; }
        .sf-review-text { font-family: 'Poppins', sans-serif; font-size: 0.8rem; line-height: 1.7; color: var(--sf-muted); }
        .sf-google-btn-wrap { display: flex; justify-content: center; margin-top: 32px; }
        .sf-google-btn-blue {
          display: inline-flex; align-items: center; gap: 8px;
          background: #4285F4; color: #fff; border: none; border-radius: 100px;
          padding: 12px 28px; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 500;
          text-decoration: none; transition: opacity 0.2s; white-space: nowrap; cursor: pointer;
        }
        .sf-google-btn-blue:hover { opacity: 0.88; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .sf-why-grid       { grid-template-columns: repeat(3, 1fr); }
          .sf-about-cards    { grid-template-columns: repeat(3, 1fr); }
          .sf-services-grid  { grid-template-columns: repeat(2, 1fr); }
          .sf-reviews-cards-col { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .sf-hero           { flex-direction: column; min-height: auto; }
          .sf-hero-text      { padding: 50px 5vw 32px; order: 2; align-items: flex-start; }
          .sf-hero-img-wrap  { order: 1; height: 55vw; min-height: 300px; min-width: 100%; }
          .sf-hero-img       { min-height: 300px; }
          .sf-hero-img-overlay { background: linear-gradient(to bottom, transparent 60%, var(--sf-bg) 100%); }
          .sf-hero-btns      { flex-direction: column; align-items: stretch; }
          .sf-btn-primary, .sf-btn-secondary { width: 100%; justify-content: center; }
          .sf-shell          { padding: 50px 5vw; }
          .sf-shell-alt-inner { padding: 50px 5vw; }
          .sf-services-grid  { grid-template-columns: 1fr; }
          .sf-why-grid       { grid-template-columns: repeat(2, 1fr); }
          .sf-cat-grid       { grid-template-columns: 1fr; }
          .sf-cat-card       { min-height: 460px; }
          .sf-about-cards    { grid-template-columns: 1fr 1fr; }
          .sf-gallery-grid   { grid-template-columns: repeat(2, 1fr); }
          .sf-consult-banner { padding: 36px 24px; flex-direction: column; align-items: flex-start; }
          .sf-consult-btns   { width: 100%; flex-direction: column; }
          .sf-btn-primary-light, .sf-btn-secondary-light { width: 100%; justify-content: center; }
          .sf-reviews-grid   { grid-template-columns: 1fr; }
          .sf-reviews-cards-col { grid-template-columns: 1fr; }
          .sf-rating-divider { display: none; }
          .sf-rating-view-btn { margin-left: 0; width: 100%; justify-content: center; }
          .sf-google-btn-blue { width: 100%; justify-content: center; }
        }
        @media (max-width: 480px) {
          .sf-why-grid    { grid-template-columns: 1fr; }
          .sf-about-cards { grid-template-columns: 1fr; }
          .sf-gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="sf-hero" id="home">
        <div className="sf-hero-text">
          <p className="sf-hero-eyebrow">Hinaaz Trusted Boutique · Hyderabad</p>
          <h1 className="sf-hero-h1">Bridal &amp; Designer Boutique in Hyderabad</h1>
          <p className="sf-hero-sub">
            <span className="sf-line">
              <span className="sf-star">✦</span>
              <span>Customized bridal blouses, designer outfits, and occasion wear with perfect fit, premium finishing, and personalized styling.</span>
            </span>
            <span className="sf-line">
              <span className="sf-star">✦</span>
              <span>Designed personally by Chief Designer Hinaaz</span>
            </span>
          </p>
          <div className="sf-hero-btns">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="sf-btn-primary" id="hero-wa-btn">
              <WAIcon /> Book Bridal Consultation
            </a>
            <a href={TEL_URL} className="sf-btn-secondary" id="hero-call-btn">
              <PhoneIcon /> Call Now
            </a>
          </div>
        </div>
        <div className="sf-hero-img-wrap">
          <img src={heroImage} alt="Hinaaz Fashion Boutique – Bridal & Designer Boutique Hyderabad" className="sf-hero-img" />
          <div className="sf-hero-img-overlay" />
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <div className="sf-shell" style={{ paddingBottom: '24px' }}>
        <div className="sf-services-headline">
          <p className="sf-eyebrow">Services</p>
          <h2 className="sf-heading">Customized Bridal &amp; Designer Boutique in Hyderabad</h2>
          <p className="sf-subheading">From bridal blouses to designer outfits, we create perfectly tailored designs with premium finishing and personalized styling — designed for perfect fit, elegant finish.</p>
        </div>
        <div className="sf-services-grid">
          {SERVICES.map(s => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>

      {/* ══ CTA BANNER 1 ══ */}
      <div className="sf-shell" style={{ paddingTop: '0px' }}>
        <div className="sf-consult-banner">
          <div>
            <h2 className="sf-consult-title">Join our happy clients — Explore and shop our premium collection</h2>
            <p className="sf-consult-sub">Start your bridal consultation</p>
          </div>
          <div className="sf-consult-btns">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="sf-btn-primary-light" id="cta-wa-btn-1">WhatsApp Enquiry</a>
            <a href={TEL_URL} className="sf-btn-secondary-light" id="cta-call-btn-1">Shop Now</a>
          </div>
        </div>
      </div>

      {/* ══ WHY CHOOSE ══ */}
      <div className="sf-shell-alt">
        <div className="sf-shell-alt-inner">
          <p className="sf-eyebrow">Why Brides Choose Hinaaz</p>
          <h2 className="sf-heading">WHY BRIDES CHOOSE HINAAZ FASHION BOUTIQUE</h2>
          <p className="sf-subheading">Customized bridal and designer outfits in Hyderabad with perfect fitting, premium craftsmanship and personalized styling for your special occasions.</p>
          <div className="sf-why-grid">
            {WHY_CHOOSE.map(w => (
              <div className="sf-why-item" key={w.title}>
                <div className="sf-why-icon">{w.icon}</div>
                <p className="sf-why-text">{w.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ GALLERY ══ */}
      <div className="sf-shell">
        <p className="sf-eyebrow">Gallery</p>
        <h2 className="sf-heading">Our Bridal &amp; Designer Collection</h2>
        <div className="sf-gallery-grid">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, i) => (
            <div className="sf-gallery-item" key={i}>
              <img src={img} alt={`Collection ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>


      {/* ══ ABOUT ══ */}
      <div className="sf-shell">
        <p className="sf-eyebrow">About Hinaaz</p>
        <h2 className="sf-heading">A Bridal &amp; Designer Boutique Focused on Perfect Fit &amp; Premium Craftsmanship</h2>
        <p className="sf-subheading">Hinaaz Fashion Boutique is a trusted bridal and designer boutique in Hyderabad, specializing in customized outfits with precise fitting, premium finishing, and personalized styling for every occasion.</p>
        <p className="sf-subheading" style={{ marginTop: '12px', fontWeight: '600', color: 'var(--sf-primary)' }}>
          All designs are personally handled by our Chief Designer, Hinaaz.
        </p>
        <div className="sf-about-cards">
          {ABOUT_CARDS.map(c => (
            <div className="sf-about-card" key={c.title}>
              <span className="sf-about-card-accent" />
              <h3 className="sf-about-card-title">{c.title}</h3>
              <p className="sf-about-card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ REVIEWS ══ */}
      <div className="sf-shell-alt">
        <div className="sf-shell-alt-inner">
          <div className="sf-reviews-eyebrow-wrap">
            <span className="sf-reviews-eyebrow">Social Proof</span>
          </div>
          <h2 className="sf-reviews-heading">Trusted by Clients Across Hyderabad</h2>
          <p className="sf-reviews-sub">Real experiences from clients who trusted Hinaaz Fashion Boutique for their designer outfits and special occasions.</p>

          {/* Rating bar */}
          <div className="sf-rating-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <GoogleLogo size={40} />
            </div>
            <div className="sf-rating-divider" />
            <div className="sf-score-block">
              <span className="sf-score-num">4.9</span>
              <div className="sf-score-right">
                <div className="sf-score-stars">
                  {[1, 2, 3, 4, 5].map(n => <span key={n} className="sf-score-star">★</span>)}
                </div>
                <span className="sf-score-label">Google Reviews</span>
              </div>
            </div>
            <div className="sf-rating-divider" />
            <p className="sf-verified-text">Based on <strong>250+</strong> verified reviews on Google</p>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="sf-rating-view-btn" id="view-google-btn">
              VIEW ON GOOGLE →
            </a>
          </div>

          {/* Reviews grid */}
          <div className="sf-reviews-grid">
            <div className="sf-highlight-card">
              <div className="sf-highlight-stars">
                {[1, 2, 3, 4, 5].map(n => <span key={n} className="sf-highlight-star">★</span>)}
              </div>
              <p className="sf-highlight-label">250+ Happy Clients in Hyderabad</p>
              <p className="sf-highlight-text">Loved by clients. Chosen for style.</p>
            </div>
            <div className="sf-reviews-cards-col">
              {REVIEWS.map((rv, i) => (
                <div className="sf-review-card" key={i} id={`review-${i + 1}`}>
                  <div className="sf-review-top">
                    <div className="sf-review-avatar">{rv.name.charAt(0)}</div>
                    <div>
                      <p className="sf-review-name">{rv.name}</p>
                      <p className="sf-review-date">{rv.date}</p>
                    </div>
                  </div>
                  <div className="sf-review-stars">
                    {[1, 2, 3, 4, 5].map(n => <span key={n} className="sf-review-star">★</span>)}
                  </div>
                  <p className="sf-review-text">{rv.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sf-google-btn-wrap">
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="sf-google-btn-blue" id="google-reviews-btn">
              <GoogleLogo size={18} /> View on Google ↗
            </a>
          </div>
        </div>
      </div>


    </>
  );
}
