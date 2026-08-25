import React, { useEffect, useState } from 'react';
import LoginModal from '../LoginModal';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState('');
  const [activeLink, setActiveLink] = useState('Home');
  const [showLogin, setShowLogin] = useState(false);
  
  // Track auth state safely
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');

  const ADMIN_EMAILS = [
    'samia01@gmail.com',
    'sadia01@gmail.com'
  ];

  // Only consider them an admin if they are actively logged in AND their email matches
  const isAdmin = isLoggedIn && ADMIN_EMAILS.includes(userEmail);

  // Cleaned up the raw URL-encoded characters for proper emoji rendering
  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Menu', icon: '📋' },
    { name: 'About', icon: 'ℹ️' },
    { name: 'Contact', icon: '📞' }
  ];

  // Sync authentication states globally across components
  useEffect(() => {
    const syncAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(Boolean(token));
      setUserEmail(localStorage.getItem('userEmail') || '');
    };

    window.addEventListener('auth-changed', syncAuth);
    return () => {
      window.removeEventListener('auth-changed', syncAuth);
    };
  }, []);

  // Secure logout handler to completely flush admin status
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    window.dispatchEvent(new Event('auth-changed'));
    window.location.hash = ''; // Boot user out of any admin hashes immediately
  };

  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 80px', backgroundColor: '#607456', width: '100%', boxSizing: 'border-box', borderBottom: '1px solid rgba(239, 168, 29, 0.08)' }}>
        
        {/* Brand Logo Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.75rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>🍔</span>
          <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#B0BA99', letterSpacing: '0.5px', fontFamily: 'serif' }}>
            Foodie-Frenzy
          </span>
        </div>

        {/* Navigation and Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
          
          {/* Interactive Navigation Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => {
              const isActiveOrHovered = hoveredLink === item.name || activeLink === item.name;
              return (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink('')}
                  onClick={() => setActiveLink(item.name)}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isActiveOrHovered ? '#B0BA99' : '#ffffff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500', position: 'relative', paddingBottom: '6px', opacity: isActiveOrHovered ? '1' : '0.75', transition: 'all 0.2s ease-in-out' }}
                >
                  <span style={{ fontSize: '1rem', filter: isActiveOrHovered ? 'none' : 'grayscale(100%)', transition: 'filter 0.2s ease' }}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  <span style={{ position: 'absolute', bottom: '0', left: '0', width: isActiveOrHovered ? '100%' : '0%', height: '2px', backgroundColor: '#B0BA99', transition: 'width 0.2s ease-in-out', borderRadius: '2px' }} />
                </a>
              );
            })}
          </div>

          {/* Action Items Panel */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            
            {/* Render Admin button explicitly ONLY if logged in and email verified */}
            {isAdmin && (
              <button
                onClick={() => { window.location.hash = 'admin'; }}
                style={{ backgroundColor: '#EFA81D', color: '#ffffff', border: 'none', borderRadius: '20px', padding: '8px 16px', cursor: 'pointer', fontWeight: '700', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
              >
                👨‍🍳 Admin
              </button>
            )}

            {/* Cart button now dispatches the menu cart event */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-order-box'))}
              style={{
                position: 'relative',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                padding: 0,
              }}
              aria-label="Open cart"
            >
              <span
                style={{ fontSize: '1.4rem', color: '#ffffff', transition: 'transform 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                🛒
              </span>
            </button>

            {/* Dynamic Login/Logout Button */}
            <button
              onClick={() => (isLoggedIn ? handleLogout() : setShowLogin(true))}
              style={{ backgroundColor: '#B0BA99', color: '#000000', fontWeight: '600', fontSize: '0.9rem', padding: '10px 28px', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d1dcbb'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#B0BA99'; }}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>

          </div>
        </div>
      </nav>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
