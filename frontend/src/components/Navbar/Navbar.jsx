
// import React, { useEffect, useState } from 'react';
// import LoginModal from '../LoginModal'; // Adjust this path if your LoginModal is in a different folder

// const Navbar = () => {
//   const [hoveredLink, setHoveredLink] = useState('Home');
//   const [showLogin, setShowLogin] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));

//   const [userEmail, setUserEmail] = useState(
//   localStorage.getItem('userEmail')
// );

// const ADMIN_EMAILS = [
//   'samia01@gmail.com',
//   'sadia01@gmail.com'
// ];

// const isAdmin = ADMIN_EMAILS.includes(userEmail);

//   const navItems = [
//     { name: 'Home', icon: '🏠' },
//     { name: 'Menu', icon: '📋' },
//     { name: 'About', icon: 'ℹ️' },
//     { name: 'Contact', icon: '📞' }
//   ];

//   // 🌟 Update this block inside your Navbar.jsx file:
// useEffect(() => {
//   const syncAuth = () => {
//     setIsLoggedIn(Boolean(localStorage.getItem('token')));
//     setUserEmail(localStorage.getItem('userEmail'));
//   };

//   syncAuth();

//   window.addEventListener('auth-changed', syncAuth);

//   return () => {
//     window.removeEventListener('auth-changed', syncAuth);
//   };
// }, []);


//   // 🌟 Make sure your logout handler looks like this:
// const handleLogout = () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('userEmail');
//   localStorage.removeItem('userRole'); // Clear out the admin tracker right here
//   setIsLoggedIn(false);
//   window.dispatchEvent(new Event('auth-changed'));
// };


//   return (
//     <>
//       <nav style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '20px 80px',
//         backgroundColor: '#607456',
//         width: '100%',
//         boxSizing: 'border-box',
//         borderBottom: '1px solid rgba(239, 168, 29, 0.08)'
//       }}>
//         {/* Brand Logo Group */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//           <span style={{ fontSize: '1.75rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>🍔</span>
//           <span style={{ 
//             fontSize: '1.4rem', 
//             fontWeight: '700', 
//             color: '#B0BA99', 
//             letterSpacing: '0.5px',
//             fontFamily: 'serif'
//           }}>
//             Foodie-Frenzy
//           </span>
//         </div>

//         {/* Navigation and Actions */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
          
//           {/* Modern Interactive Links with Small Icons */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
//             {navItems.map((item) => {
//               const isActiveOrHovered = hoveredLink === item.name;
//               return (
//                 <a
//                   key={item.name}
//                   href={`#${item.name.toLowerCase()}`}
//                   onMouseEnter={() => setHoveredLink(item.name)}
//                   onMouseLeave={() => setHoveredLink('Home')}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     color: isActiveOrHovered ? '#B0BA99' : '#ffffff',
//                     textDecoration: 'none',
//                     fontSize: '0.95rem',
//                     fontWeight: '500',
//                     position: 'relative',
//                     paddingBottom: '6px',
//                     opacity: isActiveOrHovered ? '1' : '0.75',
//                     transition: 'all 0.2s ease-in-out'
//                   }}
//                 >
//                   {/* Small Icon decoration */}
//                   <span style={{ 
//                     fontSize: '1rem',
//                     filter: isActiveOrHovered ? 'none' : 'grayscale(100%)',
//                     transition: 'filter 0.2s ease'
//                   }}>
//                     {item.icon}
//                   </span>
                  
//                   {/* Link Text */}
//                   <span>{item.name}</span>

//                   {/* Bottom Indicator Line */}
//                   <span style={{
//                     position: 'absolute',
//                     bottom: '0',
//                     left: '0',
//                     width: isActiveOrHovered ? '100%' : '0%',
//                     height: '2px',
//                     backgroundColor: '#B0BA99',
//                     transition: 'width 0.2s ease-in-out',
//                     borderRadius: '2px'
//                   }} />
//                 </a>
//               );
//             })}
//           </div>
          

          
//            {/* Shopping Cart and Call to Action */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>



//             {isAdmin && (
//   <button
//     onClick={() => {
//       window.location.hash = 'admin';
//     }}
//     style={{
//       backgroundColor: '#B0BA99',
//       color: '#1f2937',
//       border: 'none',
//       borderRadius: '20px',
//       padding: '8px 16px',
//       cursor: 'pointer',
//       fontWeight: '700'
//     }}
//   >
//     👨‍🍳 Admin
//   </button>
// )}
            
//             {/* Clean Shopping Cart without the yellow badge number */}
//             <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//               <span style={{ 
//                 fontSize: '1.4rem', 
//                 color: '#ffffff',
//                 transition: 'transform 0.2s ease'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//               onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//               >
//                 🛒
//               </span>
//             </div>
            
// {/* Action Button - UPDATED PART */}
//             <button 
//               onClick={() => (isLoggedIn ? handleLogout() : setShowLogin(true))}
//               style={{
//                 backgroundColor: '#B0BA99',
//                 color: '#000000',
//                 fontWeight: '600',
//                 fontSize: '0.9rem',
//                 padding: '10px 28px',
//                 borderRadius: '50px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 12px rgba(255, 153, 0, 0.2)',
//                 transition: 'all 0.2s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#d1dcbb';
//                 e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 153, 0, 0.35)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#B0BA99';
//                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.2)';
//               }}
//             >
//               {isLoggedIn ? 'Logout' : 'Login'}
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* Render the LoginModal component conditionally below your navbar layout */}
//       <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
//     </>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from 'react';
import LoginModal from '../LoginModal'; // Adjust this path if your LoginModal is in a different folder

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState('');
  const [activeLink, setActiveLink] = useState('Home');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));

  const ADMIN_EMAILS = [
    'samia01@gmail.com',
    'sadia01@gmail.com'
  ];

  const isAdmin = ADMIN_EMAILS.includes(userEmail);

  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Menu', icon: '📋' },
    { name: 'About', icon: 'ℹ️' },
    { name: 'Contact', icon: '📞' }
  ];

  // Sync auth state changes across the application
  useEffect(() => {
    const syncAuth = () => {
      setIsLoggedIn(Boolean(localStorage.getItem('token')));
      setUserEmail(localStorage.getItem('userEmail'));
    };

    // Track hash changes to keep link indicators visually synchronized
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash) {
        const matchedItem = navItems.find(item => item.name.toLowerCase() === currentHash);
        if (matchedItem) {
          setActiveLink(matchedItem.name);
        } else if (currentHash === 'admin') {
          setActiveLink('Admin');
        }
      } else {
        setActiveLink('Home');
      }
    };

    syncAuth();
    handleHashChange();

    window.addEventListener('auth-changed', syncAuth);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('auth-changed', syncAuth);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole'); 
    setIsLoggedIn(false);
    setUserEmail(null); // Clear local email state immediately
    window.location.hash = ''; // Return home upon logout
    window.dispatchEvent(new Event('auth-changed'));
  };

  return (
    <>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 80px',
        backgroundColor: '#607456',
        width: '100%',
        boxSizing: 'border-box',
        borderBottom: '1px solid rgba(239, 168, 29, 0.08)'
      }}>
        {/* Brand Logo Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.75rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>🍔</span>
          <span style={{ 
            fontSize: '1.4rem', 
            fontWeight: '700', 
            color: '#B0BA99', 
            letterSpacing: '0.5px',
            fontFamily: 'serif'
          }}>
            Foodie-Frenzy
          </span>
        </div>

        {/* Navigation and Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
          
          {/* Modern Interactive Links with Small Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => {
              const isHovered = hoveredLink === item.name;
              const isActive = activeLink === item.name && !hoveredLink;
              const isHighlighted = isHovered || isActive;
              
              return (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink('')}
                  onClick={() => setActiveLink(item.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: isHighlighted ? '#B0BA99' : '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    position: 'relative',
                    paddingBottom: '6px',
                    opacity: isHighlighted ? '1' : '0.75',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <span style={{ 
                    fontSize: '1rem',
                    filter: isHighlighted ? 'none' : 'grayscale(100%)',
                    transition: 'filter 0.2s ease'
                  }}>
                    {item.icon}
                  </span>
                  
                  <span>{item.name}</span>

                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: isHighlighted ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: '#B0BA99',
                    transition: 'width 0.2s ease-in-out',
                    borderRadius: '2px'
                  }} />
                </a>
              );
            })}
          </div>
          
          {/* Shopping Cart and Call to Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>

            {/* Admin Button */}
            {isAdmin && (
              <button
                onClick={() => {
                  setActiveLink('Admin');
                  window.location.hash = 'admin';
                }}
                style={{
                  backgroundColor: activeLink === 'Admin' ? '#ffffff' : '#B0BA99',
                  color: '#1f2937',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontWeight: '700',
                  boxShadow: activeLink === 'Admin' ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                👨‍🍳 Admin
              </button>
            )}
            
            {/* Clean Shopping Cart */}
            <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <span style={{ 
                fontSize: '1.4rem', 
                color: '#ffffff',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                🛒
              </span>
            </div>
            
            {/* Action Button */}
            <button 
              onClick={() => (isLoggedIn ? handleLogout() : setShowLogin(true))}
              style={{
                backgroundColor: '#B0BA99',
                color: '#000000',
                fontWeight: '600',
                fontSize: '0.9rem',
                padding: '10px 28px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255, 153, 0, 0.2)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d1dcbb';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 153, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#B0BA99';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.2)';
              }}
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
