import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact-page" style={{ backgroundColor: '#f4efea', minHeight: '80vh', padding: 'clamp(30px, 5vw, 60px) 5vw' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 4vw, 40px)' }}>

          {/* Left Column */}
          <div style={{ flex: '1', minWidth: 'min(100%, 300px)', backgroundColor: 'white', padding: 'clamp(24px, 5vw, 50px)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <p style={{ letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '20px', color: '#5c4e46' }}>CONTACT</p>
            <h1 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '20px', lineHeight: '1.2', wordWrap: 'break-word' }}>Start Your Bridal and Designer Outfit Collection</h1>
            <p style={{ color: '#6a5a52', marginBottom: '30px', fontSize: '1.1rem' }}>
              Share your occasion, outfit ideas, and design preferences to begin your custom boutique collection.
            </p>
            <p style={{ fontWeight: '600', color: '#3c2d24', marginBottom: '40px' }}>Personal collection by our Chief Designer Hinaaz</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ border: '1px solid #e5e0d8', padding: '20px', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#8c7e73', marginBottom: '8px' }}>ADDRESS</p>
                <p style={{ fontWeight: '500' }}>AZEEM'S RESIDENCY, 8-2-293/82, L/18-B, Road No. 12, MLA Colony, Banjara Hills, Hyderabad, Telangana 500034</p>
              </div>
              <div style={{ border: '1px solid #e5e0d8', padding: '20px', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#8c7e73', marginBottom: '8px' }}>PHONE</p>
                <p style={{ fontWeight: '500' }}>089776 40073</p>
              </div>
              <div style={{ border: '1px solid #e5e0d8', padding: '20px', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#8c7e73', marginBottom: '8px' }}>WHATSAPP</p>
                <p style={{ fontWeight: '500' }}>Book instantly on WhatsApp</p>
              </div>
              <div style={{ border: '1px solid #e5e0d8', padding: '20px', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#8c7e73', marginBottom: '8px' }}>EMAIL</p>
                <p style={{ fontWeight: '500' }}>info@hinaazdesigner.com</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1', minWidth: '300px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0831959057155!2d78.4221685741417!3d17.407794602218903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97db44a3292b%3A0x26fde08d9415a1e2!2sHINAAZ%20DESIGNER%20ETHNIC%20WEAR!5e0!3m2!1sen!2sin!4v1781383190909!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
