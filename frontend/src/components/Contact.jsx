import React from 'react';

export default function Contact() {
  return (
    <div id="contact" style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#607456', /* Warm dark brown base background */
      backgroundImage: 'linear-gradient(135deg, #607456 0%, #15321F 100%)', /* Gradient toward green matching your screenshot */
      padding: '60px 80px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px'
    }}>
      
      {/* Page Title Header */}
      <h1 style={{
        color: '#B0BA99',
        fontSize: '2.5rem',
        fontWeight: '600',
        fontFamily: 'serif',
        margin: 0,
        textAlign: 'center',
        letterSpacing: '0.5px'
      }}>
        Connect With Us
      </h1>

      {/* Main Grid Wrapper Layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr', /* Left side slightly narrower than form side */
        gap: '40px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        
        {/* ================= LEFT SIDE COLUMN: INFO CARDS ================= */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Card 1: Our Headquarter */}
          <div style={{
            backgroundColor: 'rgba(43, 29, 20, 0.6)',
            border: '1px solid rgba(239, 168, 29, 0.15)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <span style={{ fontSize: '1.5rem', color: '#B0BA99' }}>📍</span>
            <div>
              <h3 style={{ color: '#B0BA99', fontSize: '1.1rem', margin: '0 0 8px 0', fontWeight: '600' }}>Our Headquarter</h3>
              <p style={{ color: '#c7a485', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                Tilagor, Sylhet
              </p>
            </div>
          </div>

          {/* Card 2: Contact Numbers */}
          <div style={{
            backgroundColor: 'rgba(43, 29, 20, 0.6)',
            border: '1px solid rgba(239, 168, 29, 0.15)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <span style={{ fontSize: '1.5rem', color: '#B0BA99' }}>📞</span>
            <div>
              <h3 style={{ color: '#B0BA99', fontSize: '1.1rem', margin: '0 0 8px 0', fontWeight: '600' }}>Contact Numbers</h3>
              <p style={{ color: '#c7a485', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                +88017.....
              </p>
            </div>
          </div>

          {/* Card 3: Email Addresses */}
          <div style={{
            backgroundColor: 'rgba(43, 29, 20, 0.6)',
            border: '1px solid rgba(239, 168, 29, 0.15)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <span style={{ fontSize: '1.5rem', color: '#B0BA99' }}>✉️</span>
            <div>
              <h3 style={{ color: '#B0BA99', fontSize: '1.1rem', margin: '0 0 8px 0', fontWeight: '600' }}>Email Addresses</h3>
              <p style={{ color: '#c7a485', fontSize: '0.95rem', margin: 0, lineHeight: '1.5' }}>
                foodiefrenzy@gmail.com
              </p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE COLUMN: QUERY FORM ================= */}
        <form 
          onSubmit={(e) => e.preventDefault()}
          style={{
            backgroundColor: 'rgba(43, 29, 20, 0.4)',
            border: '1px solid rgba(239, 168, 29, 0.1)',
            borderRadius: '16px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
            boxSizing: 'border-box'
          }}
        >
          {/* Full Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#c7a485', fontSize: '0.9rem', fontWeight: '500' }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a3754c' }}>👤</span>
              <input type="text" placeholder="Enter your full name" style={inputStyle} />
            </div>
          </div>

          {/* Phone Number */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#c7a485', fontSize: '0.9rem', fontWeight: '500' }}>Phone Number</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a3754c' }}>📞</span>
              <input type="tel" placeholder="+88017....." style={inputStyle} />
            </div>
          </div>

          {/* Email Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#c7a485', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a3754c' }}>✉️</span>
              <input type="email" placeholder="youremail@example.com" style={inputStyle} />
            </div>
          </div>

          {/* Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#c7a485', fontSize: '0.9rem', fontWeight: '500' }}>Address</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a3754c' }}>🏠</span>
              <input type="text" placeholder="Enter your delivery address" style={inputStyle} />
            </div>
          </div>

          {/* Order Item */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#c7a485', fontSize: '0.9rem', fontWeight: '500' }}>Order Item</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a3754c' }}>🍔</span>
              <input type="text" placeholder="Search dish name (e.g., Cheese Burger)" style={inputStyle} />
            </div>
          </div>

          {/* Your Query Message Field */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: '#c7a485', fontSize: '0.9rem', fontWeight: '500' }}>Your Query</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '16px', color: '#a3754c' }}>📝</span>
              <textarea 
                placeholder="Type your message here..." 
                rows="4" 
                style={{
                  ...inputStyle,
                  padding: '14px 16px 14px 45px',
                  resize: 'none'
                }}
              />
            </div>
          </div>

          {/* Submit Action Button */}
          <button 
            type="submit"
            style={{
              backgroundColor: '#B0BA99',
              color: '#000000',
              fontWeight: '600',
              fontSize: '1rem',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'all 0.2s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B0BA99'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B0BA99'}
          >
            Submit Query ➔
          </button>

        </form>

      </div>
    </div>
  );
}

/* Base reuse wrapper styles for custom dark inputs */
const inputStyle = {
  width: '100%',
  padding: '14px 16px 14px 45px',
  backgroundColor: '#607456',
  border: '1px solid #3D291B',
  borderRadius: '8px',
  color: '#f5f5f5',
  fontSize: '0.95rem',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s'
};
