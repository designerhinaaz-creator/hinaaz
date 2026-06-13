import React from 'react';
import '../App.css';
import img1 from '../assets/1.png';
import img8 from '../assets/21.png';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section style={{ display: 'flex', flexWrap: 'wrap', padding: 'clamp(40px, 5vw, 80px) 5vw', backgroundColor: '#fcfbf8', alignItems: 'center', gap: '40px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ color: '#cba153', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '15px' }}>ABOUT HINAAZ FASHION BOUTIQUE</p>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontFamily: 'var(--font-heading)', color: '#3c2d24', marginBottom: '20px', lineHeight: '1.1' }}>A Bridal & Designer Boutique Built on Craftsmanship, Fit & Trust</h1>
          <p style={{ color: '#6a5a52', fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.6' }}>
            Our team consists of the best in line designer, skilled artisans and a production team who understands the bridal boutique market from the base, and works hard to give the finest fit and exquisite detailing.
          </p>
          <p style={{ color: '#3c2d24', fontWeight: '600', marginBottom: '40px', fontSize: '1.05rem' }}>✓ Custom tailored exactly to fit & flatter YOU</p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
             <button className="btn-primary" style={{ backgroundColor: '#3c2d24', color: 'white', padding: '12px 25px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Book Consultation on WhatsApp</button>
             <button className="btn-outline" style={{ padding: '12px 25px', borderRadius: '30px', border: '1px solid #3c2d24', color: '#3c2d24', backgroundColor: 'transparent', fontWeight: 'bold', cursor: 'pointer' }}>Call Now</button>
          </div>
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <img src={img1} alt="Bridal Design" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', objectPosition: 'top center', height: 'clamp(300px, 50vw, 600px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* 2. Chief Designer Section */}
      <section style={{ padding: 'clamp(40px, 5vw, 60px) 5vw', backgroundColor: '#fcfbf8' }}>
        <div style={{ backgroundColor: '#3c2d24', borderRadius: '24px', padding: 'clamp(30px, 5vw, 50px)', display: 'flex', flexWrap: 'wrap', color: 'white', gap: '50px', position: 'relative', zIndex: 2 }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
             <img src={img8} alt="Shravya Choudary" style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center top', height: '100%', minHeight: '300px' }} />
             <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(0,0,0,0.6)', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(5px)' }}>
                <span style={{ color: '#cba153', fontSize: '1.5rem' }}>✨</span>
                 <div>
                    <p style={{ fontSize: '0.8rem', margin: 0, fontWeight: 'bold', color: 'white' }}>10+ Years of</p>
                    <p style={{ fontSize: '0.8rem', margin: 0, color: 'white' }}>Craftsmanship</p>
                 </div>
             </div>
          </div>
          <div style={{ flex: '1.5 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <p style={{ color: '#cba153', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>THE CHIEF DESIGNER AND FOUNDER</p>
             <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontFamily: 'var(--font-heading)', marginBottom: '5px', color: '#ffffff' }}>Shravya Choudary</h2>
             <p style={{ color: '#cba153', marginBottom: '30px', fontSize: '1.1rem' }}>Founder & Chief Designer</p>
             
             <p style={{ color: '#e5e0d8', lineHeight: '1.6', marginBottom: '20px', fontSize: '1.05rem' }}>
               She is a highly dynamic design professional with a discerning eye for quality, and a passion for creating garments that fit perfectly and look stunning. Her extensive knowledge in the field of customized designer wear enables her to design and execute beautiful garments that leave a lasting impression.
             </p>
             
             <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid #cba153', marginBottom: '30px' }}>
                <p style={{ fontStyle: 'italic', color: '#ffffff', margin: 0, fontSize: '1.1rem' }}>"I have always believed that every piece of clothing should be a masterpiece that enhances the wearer's beauty and confidence. - Shravya Choudary"</p>
             </div>
             
             <div style={{ display: 'flex', gap: '15px', marginTop: 'auto', flexWrap: 'wrap' }}>
                <button className="btn-gold" style={{ padding: '12px 25px', borderRadius: '30px', backgroundColor: '#cba153', color: '#3c2d24', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Connect on WhatsApp</button>
                <button className="btn-outline" style={{ color: 'white', borderColor: 'white', padding: '12px 25px', borderRadius: '30px', border: '1px solid white', backgroundColor: 'transparent', fontWeight: 'bold', cursor: 'pointer' }}>📞 089776 40073</button>
             </div>
          </div>
        </div>
        {/* Stats Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', backgroundColor: '#1a140f', borderRadius: '0 0 24px 24px', padding: '30px clamp(20px, 5vw, 50px)', marginTop: '-20px', paddingTop: '40px', color: 'white', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
           <div style={{ flex: '1 1 120px' }}><h3 style={{ fontSize: '2rem', color: '#cba153', marginBottom: '5px' }}>250+</h3><p style={{ fontSize: '0.9rem', margin: 0, color: '#a39c94' }}>Brides Styled</p></div>
           <div style={{ flex: '1 1 120px' }}><h3 style={{ fontSize: '2rem', color: '#cba153', marginBottom: '5px' }}>10+</h3><p style={{ fontSize: '0.9rem', margin: 0, color: '#a39c94' }}>Years of Experience</p></div>
           <div style={{ flex: '1 1 120px' }}><h3 style={{ fontSize: '2rem', color: '#cba153', marginBottom: '5px' }}>5.0</h3><p style={{ fontSize: '0.9rem', margin: 0, color: '#a39c94' }}>Google Rating</p></div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section style={{ padding: 'clamp(40px, 5vw, 80px) 5vw', backgroundColor: '#e5e0d8' }}>
        <p style={{ color: '#cba153', fontSize: '0.8rem', letterSpacing: '2px', textAlign: 'center', marginBottom: '10px' }}>WHY CHOOSE US</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: 'var(--font-heading)', color: '#3c2d24', textAlign: 'center', marginBottom: '15px' }}>Why Brides Choose Hinaaz</h2>
        <p style={{ color: '#6a5a52', textAlign: 'center', marginBottom: '50px', fontSize: '1.1rem' }}>A boutique experience designed around personalized attention, perfect fit, and craftsmanship.</p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            "A Guarantee of perfect fitting & finish", 
            "Expert tailoring based on your shape", 
            "Premium quality & fabrics used", 
            "Handcrafted embroidery & design", 
            "On-time delivery & prompt support"
          ].map((text, i) => (
             <div key={i} style={{ backgroundColor: 'white', padding: '30px 20px', borderRadius: '16px', flex: '1 1 180px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <div style={{ color: '#cba153', fontSize: '1.8rem', marginBottom: '15px' }}>✓</div>
                <p style={{ fontSize: '0.95rem', color: '#3c2d24', fontWeight: '600', margin: 0 }}>{text}</p>
             </div>
          ))}
        </div>
      </section>

      {/* 4. How We Work */}
      <section style={{ padding: 'clamp(40px, 5vw, 80px) 5vw', backgroundColor: '#fcfbf8' }}>
        <p style={{ color: '#cba153', fontSize: '0.8rem', letterSpacing: '2px', textAlign: 'center', marginBottom: '10px' }}>HOW WE WORK</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: 'var(--font-heading)', color: '#3c2d24', textAlign: 'center', marginBottom: '50px' }}>Our Approach to Every Design</h2>
        
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
           <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '8rem', color: '#f9f6f2', position: 'absolute', top: '10px', right: '10px', fontFamily: 'var(--font-heading)', lineHeight: '0.8', zIndex: 0 }}>01</div>
              <h3 style={{ fontSize: '1.5rem', color: '#3c2d24', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Consultation</h3>
              <p style={{ color: '#6a5a52', fontSize: '1.05rem', lineHeight: '1.6', position: 'relative', zIndex: 1, margin: 0 }}>We begin with a detailed consultation. Share your ideas, occasion details, and design inspirations.</p>
           </div>
           <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '8rem', color: '#f9f6f2', position: 'absolute', top: '10px', right: '10px', fontFamily: 'var(--font-heading)', lineHeight: '0.8', zIndex: 0 }}>02</div>
              <h3 style={{ fontSize: '1.5rem', color: '#3c2d24', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Design Finalization</h3>
              <p style={{ color: '#6a5a52', fontSize: '1.05rem', lineHeight: '1.6', position: 'relative', zIndex: 1, margin: 0 }}>We craft a sketch, select fabrics, and finalize the look.</p>
           </div>
           <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontSize: '8rem', color: '#f9f6f2', position: 'absolute', top: '10px', right: '10px', fontFamily: 'var(--font-heading)', lineHeight: '0.8', zIndex: 0 }}>03</div>
              <h3 style={{ fontSize: '1.5rem', color: '#3c2d24', marginBottom: '20px', position: 'relative', zIndex: 1 }}>Tailor, Fit & Deliver</h3>
              <p style={{ color: '#6a5a52', fontSize: '1.05rem', lineHeight: '1.6', position: 'relative', zIndex: 1, margin: 0 }}>Our artisans bring the design to life. We ensure a perfect fit with trials and deliver the final outfit.</p>
           </div>
        </div>
      </section>

      {/* 5. Google Reviews */}
      <section style={{ padding: 'clamp(40px, 5vw, 80px) 5vw', backgroundColor: '#e5e0d8' }}>
        <p style={{ color: '#cba153', fontSize: '0.8rem', letterSpacing: '2px', textAlign: 'center', marginBottom: '10px' }}>LOVED BY BRIDES</p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontFamily: 'var(--font-heading)', color: '#3c2d24', textAlign: 'center', marginBottom: '50px' }}>Trusted by Brides Across Hyderabad</h2>
        
        <div style={{ backgroundColor: 'white', padding: 'clamp(20px, 5vw, 50px)', borderRadius: '24px', maxWidth: '1000px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f4efea', paddingBottom: '30px', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                 <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 'bold', color: '#3c2d24', lineHeight: '1' }}>5.0</div>
                 <div>
                    <div style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '5px' }}>★★★★★</div>
                    <div style={{ fontSize: '0.9rem', color: '#6a5a52' }}>Based on 500+ Reviews</div>
                 </div>
              </div>
              <button style={{ padding: '12px 25px', borderRadius: '30px', border: '1px solid #e5e0d8', backgroundColor: 'transparent', color: '#3c2d24', fontWeight: 'bold', cursor: 'pointer' }}>Write a Review</button>
           </div>
           
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
               {[
                 { name: 'Anjali Sharma', date: '2 weeks ago', text: 'I had my bridal lehenga customized here, and it turned out absolutely gorgeous! The fitting was flawless, and the intricate embroidery exceeded all my expectations. Highly recommend for any bride-to-be!' },
                 { name: 'Priyanka Sen', date: '1 month ago', text: 'The team is incredibly talented and professional. They understood my vision perfectly and delivered a stunning, customized bridal gown right on time. Thank you for making my special day so perfect!' },
                 { name: 'Divya Reddy', date: '3 weeks ago', text: 'Extremely happy with my wedding outfits. The attention to detail, fabric quality, and personalized design consultations were top-notch. Truly a premium experience in Hyderabad!' }
               ].map((r, index) => (
                  <div key={index} style={{ padding: '30px', border: '1px solid #f4efea', borderRadius: '16px', backgroundColor: '#fcfbf8' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div>
                           <p style={{ fontWeight: 'bold', fontSize: '1rem', color: '#3c2d24', margin: '0 0 5px 0' }}>{r.name}</p>
                           <p style={{ fontSize: '0.8rem', color: '#8c7e73', margin: 0 }}>{r.date}</p>
                        </div>
                        <div style={{ color: '#FFD700', fontSize: '0.9rem' }}>★★★★★</div>
                     </div>
                     <p style={{ fontSize: '0.95rem', color: '#6a5a52', lineHeight: '1.6', margin: 0 }}>
                        "{r.text}"
                     </p>
                  </div>
               ))}
            </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section style={{ backgroundColor: '#3c2d24', color: 'white', padding: 'clamp(40px, 5vw, 60px) 5vw', textAlign: 'center', margin: 'clamp(20px, 5vw, 60px) 5vw', borderRadius: '24px' }}>
         <p style={{ color: '#cba153', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '15px' }}>START YOUR DESIGN JOURNEY</p>
         <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', marginBottom: '30px', fontFamily: 'var(--font-heading)', maxWidth: '800px', margin: '0 auto 30px', color: 'white' }}>Share your requirements with us. Book a personal consultation with our chief designer today.</h2>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button className="btn-gold" style={{ padding: '15px 35px', borderRadius: '30px', fontSize: '1.05rem', backgroundColor: '#cba153', color: '#3c2d24', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Book Consultation on WhatsApp</button>
            <button className="btn-outline" style={{ borderColor: 'white', color: 'white', padding: '15px 35px', borderRadius: '30px', fontSize: '1.05rem', border: '1px solid white', backgroundColor: 'transparent', fontWeight: 'bold', cursor: 'pointer' }}>Call Now</button>
         </div>
      </section>

    </div>
  );
};

export default About;
