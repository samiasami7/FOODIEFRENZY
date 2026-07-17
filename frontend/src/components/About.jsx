import React, { useState } from 'react';
import deliveryImg from '../assets/images.jpg';
import chefImg from '../assets/images (1).jpg';
import DineImg from '../assets/images (2).jpg';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      img: deliveryImg,
      icon: '🚚',
      title: 'Instant Delivery',
      desc: '30-minute delivery guarantee in metro areas'
    },
    {
      img: chefImg,
      icon: '🍳',
      title: 'Master Chefs',
      desc: 'Michelin-star trained culinary experts'
    },
    {
      img: DineImg,
      icon: '🍃',
      title: 'Premium Quality',
      desc: 'Locally sourced organic ingredients'
    }
  ];


  const stats = [
    { value: '10M+', label: 'DELIVERIES', icon: '🛵', delay: '0s' },
    { value: '98%', label: 'SATISFACTION', icon: '🧡', delay: '0.4s' },
    { value: '500+', label: 'CHEFS', icon: '👨‍🍳', delay: '0.2s' },
    { value: '24/7', label: 'SUPPORT', icon: '🕒', delay: '0.6s' }
  ];

  return (
    <div id="about" style={{
      width: '100%',
      backgroundColor: '#B6AE9F',
      padding: '80px 80px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px'
    }}>
      
      {/* CSS Keyframe Animation Injected */}
      <style>{`
        @keyframes subtleFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>


            {/* ================= NEW HEADER MESSAGE BLOCK ================= */}
      <div style={{
        textAlign: 'center',
        margin: '20px auto 10px auto',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Main Title Heading */}
        <h1 style={{
          color: '#7B2525', /* Bright golden yellow text */
          fontSize: '3rem',
          fontWeight: '700',
          fontFamily: 'serif',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          The Art of Fine Dining
        </h1>
        
        {/* Subtitle Description */}
        <p style={{
          color: '#7B2525', /* Light muted secondary gray/brown text */
          fontSize: '1.1rem',
          lineHeight: '1.6',
          margin: 0,
          fontWeight: '400',
          maxWidth: '600px',
          alignSelf: 'center'
        }}>
          Where culinary mastery meets flawless execution, bringing an exceptional gastronomic experience straight to your private table.
        </p>
      </div>
  
      {/* ================= TOP SECTION: 3 GLOWING FEATURE CARDS ================= */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {features.map((item, index) => {
          const isHovered = hoveredCard === index;
          return (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: '#607456',
                borderRadius: '16px',
                overflow: 'hidden',
                boxSizing: 'border-box',
                border: isHovered ? '1px solid rgba(239, 168, 29, 0.6)' : '1px solid rgba(239, 168, 29, 0.05)',
                boxShadow: isHovered 
                  ? '0 0 25px rgba(239, 168, 29, 0.25), 0 10px 30px rgba(0,0,0,0.5)' 
                  : '0 10px 30px rgba(0,0,0,0.3)',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40px',
                  background: 'linear-gradient(to bottom, transparent, #2B1A10)'
                }} />
              </div>

              <div style={{ padding: '30px 24px', textAlign: 'left' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '16px' }}>
                  {item.icon}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: '600', margin: '0 0 10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#A89284', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= BOTTOM SECTION: BRIGHTENED STAT BADGES ================= */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            style={{
              backgroundColor: '#607456', 
              border: '1px solid rgba(239, 168, 29, 0.25)', 
              borderRadius: '12px',
              padding: '35px 20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 8px 25px rgba(239, 168, 29, 0.08), 0 4px 15px rgba(0,0,0,0.4)',
              animation: 'subtleFloat 4s ease-in-out infinite',
              animationDelay: stat.delay
            }}
          >
            <span style={{ fontSize: '1.4rem', marginBottom: '2px' }}>
              {stat.icon}
            </span>
            
            <span style={{
              color: '#B0BA99', 
              fontSize: '2.2rem',
              fontWeight: '800',
              letterSpacing: '0.5px',
              textShadow: '0 2px 10px rgba(255, 184, 48, 0.4)'
            }}>
              {stat.value}
            </span>
            
            <span style={{
              color: '#EAD1C1', 
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '1.5px',
              marginTop: '2px'
            }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
