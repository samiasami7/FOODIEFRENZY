// import React, { useState } from 'react';

// const Navbar = () => {
//   const [hoveredLink, setHoveredLink] = useState('Home');

//   const navItems = [
//     { name: 'Home', icon: '🏠' },
//     { name: 'Menu', icon: '📋' },
//     { name: 'About', icon: 'ℹ️' },
//     { name: 'Contact', icon: '📞' }
//   ];

//   return (
//     <nav style={{
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '20px 80px',
//       backgroundColor: '#2B140B',
//       width: '100%',
//       boxSizing: 'border-box',
//       borderBottom: '1px solid rgba(239, 168, 29, 0.08)'
//     }}>
//       {/* Brand Logo Group */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//         <span style={{ fontSize: '1.75rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }}>🍔</span>
//         <span style={{ 
//           fontSize: '1.4rem', 
//           fontWeight: '700', 
//           color: '#EFA81D', 
//           letterSpacing: '0.5px',
//           fontFamily: 'serif'
//         }}>
//           Foodie-Frenzy
//         </span>
//       </div>

//       {/* Navigation and Actions */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '56px' }}>
        
//         {/* Modern Interactive Links with Small Icons */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
//           {navItems.map((item) => {
//             const isActiveOrHovered = hoveredLink === item.name;
//             return (
//               <a
//                 key={item.name}
//                 href={`#${item.name.toLowerCase()}`}
//                 onMouseEnter={() => setHoveredLink(item.name)}
//                 onMouseLeave={() => setHoveredLink('Home')}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '6px',
//                   color: isActiveOrHovered ? '#EFA81D' : '#ffffff',
//                   textDecoration: 'none',
//                   fontSize: '0.95rem',
//                   fontWeight: '500',
//                   position: 'relative',
//                   paddingBottom: '6px',
//                   opacity: isActiveOrHovered ? '1' : '0.75',
//                   transition: 'all 0.2s ease-in-out'
//                 }}
//               >
//                 {/* Small Icon decoration */}
//                 <span style={{ 
//                   fontSize: '1rem',
//                   filter: isActiveOrHovered ? 'none' : 'grayscale(100%)',
//                   transition: 'filter 0.2s ease'
//                 }}>
//                   {item.icon}
//                 </span>
                
//                 {/* Link Text */}
//                 <span>{item.name}</span>

//                 {/* Bottom Indicator Line */}
//                 <span style={{
//                   position: 'absolute',
//                   bottom: '0',
//                   left: '0',
//                   width: isActiveOrHovered ? '100%' : '0%',
//                   height: '2px',
//                   backgroundColor: '#EFA81D',
//                   transition: 'width 0.2s ease-in-out',
//                   borderRadius: '2px'
//                 }} />
//               </a>
//             );
//           })}
//         </div>
        
//          {/* Shopping Cart and Call to Action */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          
//           {/* Clean Shopping Cart without the yellow badge number */}
//           <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
//             <span style={{ 
//               fontSize: '1.4rem', 
//               color: '#ffffff',
//               transition: 'transform 0.2s ease'
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//             >
//               🛒
//             </span>
//           </div>
          
//           {/* Action Button */}
//           <button 
//             style={{
//               backgroundColor: '#FF9900',
//               color: '#000000',
//               fontWeight: '600',
//               fontSize: '0.9rem',
//               padding: '10px 28px',
//               borderRadius: '50px',
//               border: 'none',
//               cursor: 'pointer',
//               boxShadow: '0 4px 12px rgba(255, 153, 0, 0.2)',
//               transition: 'all 0.2s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#e08600';
//               e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 153, 0, 0.35)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = '#FF9900';
//               e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.2)';
//             }}
//           >
//             Login
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useEffect, useState } from 'react';
import LoginModal from '../LoginModal'; // Adjust this path if your LoginModal is in a different folder

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState('Home');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('token')));

  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'Menu', icon: '📋' },
    { name: 'About', icon: 'ℹ️' },
    { name: 'Contact', icon: '📞' }
  ];

  useEffect(() => {
    const syncAuth = () => setIsLoggedIn(Boolean(localStorage.getItem('token')));
    syncAuth();
    window.addEventListener('auth-changed', syncAuth);
    return () => window.removeEventListener('auth-changed', syncAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
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
              const isActiveOrHovered = hoveredLink === item.name;
              return (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink('Home')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: isActiveOrHovered ? '#B0BA99' : '#ffffff',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    position: 'relative',
                    paddingBottom: '6px',
                    opacity: isActiveOrHovered ? '1' : '0.75',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  {/* Small Icon decoration */}
                  <span style={{ 
                    fontSize: '1rem',
                    filter: isActiveOrHovered ? 'none' : 'grayscale(100%)',
                    transition: 'filter 0.2s ease'
                  }}>
                    {item.icon}
                  </span>
                  
                  {/* Link Text */}
                  <span>{item.name}</span>

                  {/* Bottom Indicator Line */}
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: isActiveOrHovered ? '100%' : '0%',
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
            
            {/* Clean Shopping Cart without the yellow badge number */}
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
            
{/* Action Button - UPDATED PART */}
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

      {/* Render the LoginModal component conditionally below your navbar layout */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;























































// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FiHome,
//   FiMenu,
//   FiPhone,
//   FiShoppingCart,
// } from "react-icons/fi";
// import { FaRegStar, FaKey } from "react-icons/fa";
// import { GiChefToque } from "react-icons/gi";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#2d1207] border-b border-amber-700 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-24">

//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <GiChefToque className="text-amber-400 text-4xl" />
//             <h1 className="text-amber-400 text-3xl font-semibold">
//               Foodie-Frenzy
//             </h1>
//           </div>

//           {/* Menu */}
//           <div className="hidden md:flex items-center gap-10 text-white">

//             <NavLink
//               to="/"
//               className="flex items-center gap-2 border border-amber-500 px-6 py-3 rounded-full text-amber-400"
//             >
//               <FiHome />
//               Home
//             </NavLink>

//             <NavLink
//               to="/menu"
//               className="flex items-center gap-2"
//             >
//               <FiMenu />
//               Menu
//             </NavLink>

//             <NavLink
//               to="/about"
//               className="flex items-center gap-2"
//             >
//               <FaRegStar />
//               About
//             </NavLink>

//             <NavLink
//               to="/contact"
//               className="flex items-center gap-2"
//             >
//               <FiPhone />
//               Contact
//             </NavLink>

//             <FiShoppingCart className="text-2xl cursor-pointer" />

//             <button className="bg-amber-400 text-black px-8 py-3 rounded-full font-bold flex items-center gap-2">
//               <FaKey />
//               Login
//             </button>

//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;