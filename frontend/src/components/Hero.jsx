import React from 'react';

export default function Hero() {
  return (
    /* 🌟 Added full-width outer container wrapping your entire section */
    <div style={{ 
      width: '100%', 
      backgroundColor: '#B6AE9F', /* Links background to your index.css green */
      boxSizing: 'border-box'
    }}>
      
      {/* Main core layout containing your exact spacing configurations */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '60px 40px', 
        color: '#ffffff', 
        gap: '40px',
        boxSizing: 'border-box'
      }}>
        
        {/* Left Typography and Action Grid Column */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Main Header Display */}
          <h1 style={{ 
            fontSize: '3.75rem', 
            fontWeight: '700', 
            lineHeight: '1.15', 
            margin: '0', 
            fontFamily: 'serif' 
          }}>
            We're Serious<br />
            <span style={{ color: '#7B2525' }}>For Food &<br />Delivery</span>
          </h1>
          
          {/* Paragraph Description */}
          <p style={{ 
            color: '#7B2525', 
            fontSize: '1rem', 
            maxWidth: '460px', 
            margin: '0', 
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </p>

          {/* Rounded Pill Search Container Layout */}
          <div style={{ 
            position: 'relative', 
            maxWidth: '460px', 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#607456', 
            borderRadius: '50px', 
            padding: '6px 6px 6px 16px',
            border: '1px solid rgba(239, 168, 29, 0.1)'
          }}>
            <span style={{ color: '#6b7280', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Discover your next favorite meal..." 
              style={{ 
                width: '100%', 
                backgroundColor: 'transparent', 
                border: 'none', 
                outline: 'none', 
                padding: '10px 110px 10px 10px', 
                color: '#ffffff', 
                fontSize: '0.9rem' 
              }}
            />
            <button style={{ 
              position: 'absolute', 
              right: '6px', 
              backgroundColor: '#B0BA99', 
              color: '#000000', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              border: 'none', 
              padding: '10px 24px', 
              borderRadius: '50px', 
              cursor: 'pointer' 
            }}>
              Search
            </button>
          </div>

          {/* Bottom Horizontal Button Row */}
          <div style={{ display: 'flex', gap: '16px', paddingTop: '8px' }}>
            <button style={{ 
              backgroundColor: '#607456', 
              border: '1px solid rgba(239, 168, 29, 0.2)', 
              color: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              fontSize: '0.9rem',
              fontWeight: '500' 
            }}>
              <span>📥</span> Download App
            </button>
            <button style={{ 
              backgroundColor: '#B0BA99', 
              border: 'none', 
              color: '#000000', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              cursor: 'pointer', 
              fontSize: '0.9rem',
              fontWeight: '600' 
            }}>
              <span>▶️</span> Watch Video
            </button>
          </div>
        </div>

        {/* Right Side Graphics Showcase with Precision Geometrical Orbiting Positioning */}
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative', width: '380px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Outer Ring Border */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '4px solid rgba(239, 168, 29, 0.25)', boxSizing: 'border-box' }}></div>
            
            {/* Main Central Core Display Sphere (🌟 Linked background color to your panel variable) */}
            <div style={{ position: 'relative', width: '82%', height: '82%', borderRadius: '50%', backgroundColor: 'var(--color-bg-panel)', border: '1px solid rgba(239, 168, 29, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', boxSizing: 'border-box', zIndex: '10', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <span style={{ fontSize: '3.5rem', marginBottom: '8px' }}>🥗</span>
              <h3 style={{ margin: '0', fontWeight: '600', fontSize: '1.2rem', color: '#7B2525', fontFamily: 'serif' }}>Signature Dishes</h3>
              <p style={{ margin: '6px 0 0 0', fontSize: '0.80rem', color: '#7B2525', maxWidth: '180px', textAlign: 'center', lineHeight: '1.4' }}>Hot and fresh items coming straight out of the kitchen</p>
            </div>

            {/* Reusable inline styling templates for floating icons (🌟 All linked background color to your panel variable) */}
            
            {/* 1. PIZZA */}
            <div style={{ position: 'absolute', top: '15%', left: '15%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'var(--color-bg-panel)', borderRadius: '50%', border: '1px solid rgba(239, 168, 29, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', zIndex: '20', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>🍕</div>
            
            {/* 2. SUSHI */}
            <div style={{ position: 'absolute', top: '15%', left: '85%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'var(--color-bg-panel)', borderRadius: '50%', border: '1px solid rgba(239, 168, 29, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', zIndex: '20', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>🍣</div>
            
            {/* 3. AVOCADO */}
            <div style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'var(--color-bg-panel)', borderRadius: '50%', border: '1px solid rgba(239, 168, 29, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', zIndex: '20', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>🥑</div>
            
            {/* 4. BURGER */}
            <div style={{ position: 'absolute', top: '85%', left: '85%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'var(--color-bg-panel)', borderRadius: '50%', border: '1px solid rgba(239, 168, 29, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', zIndex: '20', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>🍔</div>
            
            {/* 5. DONUT */}
            <div style={{ position: 'absolute', top: '85%', left: '15%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'var(--color-bg-panel)', borderRadius: '50%', border: '1px solid rgba(239, 168, 29, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', zIndex: '20', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>🍩</div>

            {/* 6. ICE CREAM */}
            <div style={{ position: 'absolute', top: '50%', left: '0%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', backgroundColor: 'var(--color-bg-panel)', borderRadius: '50%', border: '1px solid rgba(239, 168, 29, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', zIndex: '20', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>🍦</div>
          </div>
        </div>

      </div>
    </div>
  );
}
