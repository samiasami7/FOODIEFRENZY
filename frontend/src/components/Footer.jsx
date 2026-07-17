import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#607456',
      color: '#ffffff',
      padding: '60px 80px 30px 80px',
      fontFamily: 'sans-serif',
      borderTop: '1px solid rgba(239, 168, 29, 0.05)',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      
      {/* 3-Column balanced display layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingBottom: '40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        
        {/* Column 1: Brand & Newsletter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2 style={{ color: '#B0BA99', fontSize: '2rem', fontWeight: '700', margin: '0', fontFamily: 'serif' }}>
            Foodie-Frenzy
          </h2>
          <p style={{ color: '#a3a3a3', fontSize: '0.9rem', margin: '0', lineHeight: '1.5', fontStyle: 'italic', maxWidth: '320px' }}>
            When culinary artistry meets doorstep convenience. Savor handcrafted perfection, delivered with care.
          </p>
          
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: '#B0BA99', fontSize: '0.9rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
              ✉️ Get Exclusive Offers
            </span>
            <div style={{
              position: 'relative',
              maxWidth: '320px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#607456',
              borderRadius: '50px',
              padding: '4px',
              border: '1px solid rgba(239, 168, 29, 0.15)'
            }}>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: '10px 110px 10px 14px',
                  color: '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
              <button style={{
                position: 'absolute',
                right: '4px',
                backgroundColor: '#B0BA99',
                color: '#000000',
                fontWeight: '600',
                fontSize: '0.8rem',
                border: 'none',
                padding: '10px 18px',
                borderRadius: '50px',
                cursor: 'pointer'
              }}>
                Join Now ›
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '20px' }}>
          <h3 style={{ 
            color: '#B0BA99', 
            fontSize: '1.15rem', 
            fontWeight: '600', 
            margin: '0',
            borderLeft: '3px solid #B0BA99',
            paddingLeft: '10px'
          }}>
            Navigation
          </h3>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
            {['Home', 'Menu', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '')}`} style={{ color: '#ffffff', textDecoration: 'none', opacity: '0.75', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#B0BA99', fontSize: '0.75rem' }}>›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Circles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ 
            color: '#B0BA99', 
            fontSize: '1.15rem', 
            fontWeight: '600', 
            margin: '0',
            borderLeft: '3px solid #B0BA99',
            paddingLeft: '10px'
          }}>
            Social Connect
          </h3>
          <div style={{ display: 'flex', gap: '14px' }}>
            {[
              { icon: '👤', bg: '#3b5998' }, 
              { icon: '📸', bg: '#ac2bac' }, 
              { icon: '𝕏', bg: '#000000' },  
              { icon: '📺', bg: '#ed302f' }  
            ].map((social, i) => (
              <div key={i} style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.bg}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Legal Copyright */}
      <div style={{
        textAlign: 'center',
        paddingTop: '24px',
        fontSize: '0.85rem',
        color: '#a3a3a3',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <p style={{ margin: '0', color: '#B0BA99', opacity: '0.8' }}>
          © 2026 Foodie-Frenzy. All rights reserved.
        </p>
        <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.5' }}>
          Designed by SS
        </p>
      </div>

    </footer>
  );
}
