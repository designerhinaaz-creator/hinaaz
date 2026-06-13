import React, { useState } from 'react';
import '../App.css';
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';

const galleryImages = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6];
const galleryImages2 = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4, img5, img6, img1, img2, img5];

const styleFilters = ['All', 'Designer Gowns', 'Indo-Western', 'Party Wear', 'Lehengas', 'Sarees'];

const services = [
  { title: 'Designer Gowns', desc: 'Floor-length and midi gowns with intricate hand embroidery and luxury fabrics.' },
  { title: 'Indo-Western Sets', desc: 'Fusion wear blending traditional Indian elements with contemporary silhouettes.' },
  { title: 'Designer Blouses', desc: 'Custom blouses with detailed embroidery, cutwork, and designer finishes.' },
  { title: 'Crop Top & Skirt Sets', desc: 'Modern matching sets crafted for a premium, stylish look at parties and events.' },
  { title: 'Ready to Ship Outfits', desc: 'Curated, pre-stitched outfits available for quick delivery in standard sizes.' },
  { title: 'Made-to-Measure Outfits', desc: 'Designs crafted exclusively to your exact measurements and preferences.' },
  { title: 'Sarees & Draping Styles', desc: 'Designer sarees with custom draping guidance for the perfect look.' },
  { title: 'Special Occasion Outfits', desc: 'Custom-made outfits tailored for Mehendi, Sangeet, Engagement, and more.' },
];

const why = [
  { icon: '✦', title: 'A Guarantee of perfect fitting & finish', desc: 'We measure twice, stitch once — ensuring a flawless fit every time.' },
  { icon: '✦', title: 'Style-first Design Philosophy', desc: 'Our designs are inspired by runway trends and adapted for everyday elegance.' },
  { icon: '✦', title: 'Timely Finish & Delivery', desc: 'We commit to and meet every delivery deadline, no exceptions.' },
  { icon: '✦', title: 'Expert & Senior Designer Oversight', desc: 'Every piece is reviewed and approved by our Senior Designer before delivery.' },
  { icon: '✦', title: 'Made for Your Style', desc: 'Each outfit is a unique reflection of your personal style and occasion.' },
];

const Designer = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="designer-page">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section style={{ display: 'flex', flexWrap: 'wrap', padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#fcfbf8', gap: 'clamp(30px, 5vw, 60px)', alignItems: 'center' }}>
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '16px' }}>
            DESIGNER OUTFITS IN HYDERABAD
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: '#3c2d24', lineHeight: 1.15, marginBottom: '20px' }}>
            Designer Outfits in<br />Hyderabad for Modern<br />Occasions
          </h1>
          <p style={{ color: '#6a5a52', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
            Custom designer outfits for your special occasions — gowns, indo-western sets, party wear and more. Premium fabrics, flawless stitching and intricate designs that make you stand out.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button style={{ padding: '13px 28px', borderRadius: '30px', backgroundColor: '#3c2d24', color: 'white', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
              💬 WhatsApp Order
            </button>
            <button style={{ padding: '13px 28px', borderRadius: '30px', backgroundColor: 'transparent', color: '#3c2d24', border: '2px solid #3c2d24', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
              📞 Call Now
            </button>
          </div>
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <img src={img1} alt="Designer Outfit" style={{ width: '100%', height: 'clamp(300px, 50vw, 500px)', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }} />
        </div>
      </section>

      {/* ─── 2. OCCASION WEAR CARDS ──────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 60px) 5vw', backgroundColor: '#f4efea' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '12px', textAlign: 'center' }}>
          OUTFITS DESIGNED TO MATCH YOUR OCCASION, STYLE, AND COMFORT
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
          {[
            { title: 'Made for you', desc: 'Every outfit is custom-made to your exact measurements and style preferences for the perfect fit.' },
            { title: 'Style first', desc: 'We combine current trends with timeless design to give you an outfit that turns heads.' },
            { title: 'Timely finish', desc: 'Your outfit will be ready on time, every time. We respect your event schedule.' },
          ].map((card) => (
            <div key={card.title} style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '30px', borderRadius: '14px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#3c2d24', marginBottom: '12px' }}>{card.title}</h3>
              <p style={{ color: '#6a5a52', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. EXPLORE STYLES GALLERY ───────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#fcfbf8' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '10px' }}>EXPLORE OUR STYLES</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: '#3c2d24', marginBottom: '10px' }}>Designer Gowns, Indo-Western Sets &amp; Party Wear</h2>
        <p style={{ color: '#6a5a52', fontSize: '0.95rem', marginBottom: '28px' }}>Browse our designer collection for festivals, weddings, and modern occasions.</p>
        {/* Filter chips */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {styleFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px', borderRadius: '30px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                backgroundColor: activeFilter === f ? '#3c2d24' : 'white',
                color: activeFilter === f ? 'white' : '#3c2d24',
                border: activeFilter === f ? 'none' : '1px solid #e5e0d8',
                transition: 'all 0.2s'
              }}
            >{f}</button>
          ))}
        </div>
        {/* 4-col image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
          {galleryImages.map((img, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: '#e5e0d8' }}>
              <img src={img} alt={`Designer look ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. DARK CTA BANNER ──────────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 60px) 5vw', backgroundColor: '#fcfbf8' }}>
        <div style={{ backgroundColor: '#3c2d24', borderRadius: '20px', padding: 'clamp(30px, 5vw, 50px) clamp(20px, 5vw, 60px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '16px' }}>START YOUR DESIGNER OUTFIT CONSULTATION</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', color: 'white', lineHeight: 1.3, marginBottom: '12px' }}>Book your designer outfit consultation with Chief Designer Shruthi Ajith</h2>
            <p style={{ color: '#a39c94', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Slots are limited. Book early to secure your design slot and delivery timeline.</p>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button style={{ padding: '14px 28px', borderRadius: '30px', backgroundColor: '#cba153', color: '#3c2d24', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
              💬 Book on WhatsApp
            </button>
            <button style={{ padding: '14px 28px', borderRadius: '30px', backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>
              📞 Call Now
            </button>
          </div>
        </div>
      </section>

      {/* ─── 5. SERVICES GRID ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#f4efea' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '10px' }}>WHAT WE OFFER</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: '#3c2d24', marginBottom: '10px' }}>Customized Designer Outfits &amp; Occasion Wear in Hyderabad</h2>
        <p style={{ color: '#6a5a52', fontSize: '0.95rem', marginBottom: '40px' }}>From gowns to indo-western fusion, every piece is crafted with precision and care.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {services.map((s) => (
            <div key={s.title} style={{ backgroundColor: 'white', padding: '28px', borderRadius: '14px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#3c2d24', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#6a5a52', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. GOOGLE RATINGS ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#fcfbf8' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, textAlign: 'center', marginBottom: '10px' }}>LOVED BY CLIENTS</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: '#3c2d24', textAlign: 'center', marginBottom: '40px' }}>Trusted by Clients Across Hyderabad</h2>
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: 'clamp(20px, 5vw, 40px)', maxWidth: '900px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f4efea', paddingBottom: '28px', marginBottom: '28px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 800, color: '#3c2d24', lineHeight: 1 }}>4.9</div>
              <div>
                <div style={{ color: '#FFD700', fontSize: '1.4rem', letterSpacing: '2px' }}>★★★★★</div>
                <div style={{ color: '#6a5a52', fontSize: '0.85rem', marginTop: '4px' }}>500+ Google Reviews</div>
              </div>
            </div>
            <button style={{ padding: '12px 24px', borderRadius: '30px', border: '1px solid #e5e0d8', backgroundColor: 'transparent', color: '#3c2d24', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>
              View on Google Maps ↗
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {['Priya S.', 'Meena R.', 'Divya K.'].map((name, i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid #f4efea', borderRadius: '12px', backgroundColor: '#fcfbf8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontWeight: 700, color: '#3c2d24', margin: '0 0 4px 0', fontSize: '0.95rem' }}>{name}</p>
                    <p style={{ color: '#a39c94', fontSize: '0.8rem', margin: 0 }}>1 month ago</p>
                  </div>
                  <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★★★★★</span>
                </div>
                <p style={{ color: '#6a5a52', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  "The outfit was absolutely stunning! Perfect fit and delivered before the event. Will definitely come back again!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. OUTFIT GALLERY (5-COL) ───────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#f4efea' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '10px' }}>PORTFOLIO</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: '#3c2d24', marginBottom: '10px' }}>Designer Outfit Gallery</h2>
        <p style={{ color: '#6a5a52', fontSize: '0.95rem', marginBottom: '32px' }}>Real outfits crafted for our clients — every piece unique and made-to-measure.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '14px' }}>
          {galleryImages2.map((img, i) => (
            <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4', backgroundColor: '#e5e0d8' }}>
              <img src={img} alt={`Outfit ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── 8. WHY HINAAZ ───────────────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#fcfbf8' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '10px', textAlign: 'center' }}>WHY CHOOSE US</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: '#3c2d24', textAlign: 'center', marginBottom: '10px' }}>A designer process focused on fit, style, and finish</h2>
        <p style={{ color: '#6a5a52', fontSize: '0.95rem', textAlign: 'center', marginBottom: '40px' }}>We take pride in every stitch and every detail.</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {why.map((w) => (
            <div key={w.title} style={{ flex: '1 1 200px', backgroundColor: 'white', padding: '28px', borderRadius: '14px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#cba153', fontSize: '1.4rem', marginBottom: '12px' }}>{w.icon}</div>
              <h3 style={{ fontSize: '1rem', color: '#3c2d24', fontWeight: 700, marginBottom: '10px' }}>{w.title}</h3>
              <p style={{ color: '#6a5a52', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 9. PROCESS STEPS ────────────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#f4efea' }}>
        <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '10px', textAlign: 'center' }}>HOW WE WORK</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', color: '#3c2d24', textAlign: 'center', marginBottom: '40px' }}>A simple boutique flow from consultation to final fitting</h2>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { num: '01', title: 'Consultation', desc: 'Share your occasion, preferred style, colors, and budget. Our designer will suggest the best options for you.' },
            { num: '02', title: 'Design Finalization', desc: 'We sketch the design, finalize fabrics, embroidery details, and get your approval before we begin stitching.' },
            { num: '03', title: 'Stitch & Deliver', desc: 'Our master tailors bring the design to life. A final fitting trial ensures the perfect fit before delivery.' },
          ].map((step) => (
            <div key={step.num} style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px', borderRadius: '16px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '20px', fontSize: '7rem', fontWeight: 900, color: '#f4efea', lineHeight: 1, fontFamily: 'var(--font-heading)', userSelect: 'none' }}>{step.num}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#3c2d24', marginBottom: '14px', position: 'relative' }}>{step.title}</h3>
              <p style={{ color: '#6a5a52', fontSize: '0.95rem', lineHeight: 1.7, margin: 0, position: 'relative' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 10. CONSULTATION FORM ───────────────────────────────── */}
      <section style={{ padding: 'clamp(40px, 5vw, 70px) 5vw', backgroundColor: '#fcfbf8' }}>
        <div style={{ backgroundColor: '#3c2d24', borderRadius: '20px', padding: 'clamp(30px, 5vw, 50px) clamp(20px, 5vw, 60px)' }}>
          <p style={{ color: '#cba153', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 700, textAlign: 'center', marginBottom: '10px' }}>CONSULTATION</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 5vw, 2rem)', color: 'white', textAlign: 'center', marginBottom: '8px' }}>Share your outfit details to get started</h2>
          <p style={{ color: '#a39c94', textAlign: 'center', marginBottom: '36px', fontSize: '0.95rem' }}>Share details of your preferred colors and design ideas to get started.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {[
              { label: 'OCCASION', placeholder: 'e.g. Birthday, Wedding' },
              { label: 'PREFERRED STYLE', placeholder: 'e.g. Indo-western, Gown' },
              { label: 'PREFERRED COLORS / DESIGN', placeholder: 'e.g. Pastel pink, floral' },
            ].map((field) => (
              <div key={field.label} style={{ flex: '1 1 200px' }}>
                <label style={{ display: 'block', color: '#e5e0d8', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 700, marginBottom: '8px' }}>{field.label}</label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  style={{ width: '100%', padding: '13px 16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ padding: '14px 30px', borderRadius: '30px', backgroundColor: '#cba153', color: '#3c2d24', border: 'none', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>WHATSAPP ORDER</button>
            <button style={{ padding: '14px 30px', borderRadius: '30px', backgroundColor: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.5)', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}>CALL NOW</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Designer;
