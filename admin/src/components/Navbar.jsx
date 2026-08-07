// // import React from 'react';
// // import { GiChefToque } from 'react-icons/gi';

// // const Navbar = () => {
// //   return (
// //     <nav className="border-b border-amber-900/40 bg-[#2D1B0E] shadow-lg">
// //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
// //         <div className="flex items-center space-x-3">
// //           <GiChefToque className="text-4xl text-amber-500" />
// //           <span className="text-2xl font-bold tracking-wide text-amber-100">Foodie Admin</span>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { styles, navLinks } from '../assets/dummyData';
// import { GiChefToque } from "react-icons/gi";
// import { FiX, FiMenu } from 'react-icons/fi';

// const Navbar = () => {

//   const [menuOpen, setMenuOpen] = useState(false)

// //   return (
// //     <nav className={styles.navWrapper}>
// //       <div className={styles.navContainer}>
// //         {/* Left: mobile hamburger */}
// //         <div className="w-1/3 flex items-center lg:hidden">
// //           <button
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             className={styles.menuButton}
// //             aria-label="Toggle menu"
// //           >
// //             {menuOpen ? <FiX /> : <FiMenu />}
// //           </button>
// //         </div>

// //         {/* Center: logo (center on mobile, left-aligned on desktop) */}
// //         <div className="w-1/3 flex justify-center lg:justify-start">
// //           <div className={styles.logoSection}>
// //             <GiChefToque className={styles.logoIcon} />
// //             <span className={styles.logoText}>Admin Panel</span>
// //           </div>
// //         </div>

// //         {/* Right: desktop menu */}
// //         <div className="w-1/3 flex justify-end">
// //           <div className={styles.desktopMenu}>
// //             {navLinks.map((link) => (
// //               <a
// //                 key={link.name}
// //                 href={link.href}
// //                 className={`${styles.navLinkBase} ${styles.navLinkInactive} inline-flex items-center gap-2 ml-3`}
// //               >
// //                 {link.icon}
// //                 <span>{link.name}</span>
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile menu - shown when hamburger is toggled */}
// //       {menuOpen && (
// //         <div className={styles.mobileMenu}>
// //           {navLinks.map((link) => (
// //             <a
// //               key={link.name}
// //               href={link.href}
// //               className={`${styles.navLinkBase} ${styles.navLinkInactive} block text-center my-2`}
// //               onClick={() => setMenuOpen(false)}
// //             >
// //               <span className="flex items-center justify-center gap-2">{link.icon}<span>{link.name}</span></span>
// //             </a>
// //           ))}
// //         </div>
// //       )}
// //     </nav>
// //   )
// // }

// return (
//       <nav className={styles.navWrapper}>
//         <div className={styles.navContainer}>
//           <div className={styles.logoSection}>
//             <GiChefToque className={styles.logoIcon} />
//             <span className={styles.logoText}>Admin Panel</span>
//           </div>

//           <button onClick={() => setMenuOpen(!menuOpen)}
//             className={styles.menuButton}>
//             {menuOpen ? <FiX /> : <FiMenu />}
//           </button>

//           <div className={styles.desktopMenu}>
//             {navLinks.map(link => (
//               <NavLink key={link.name} to={link.href} className={({ isActive }) =>
//                 `${styles.navLinkBase} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}>
//                 {link.icon}
//                 <span>{link.name}</span>
//               </NavLink>
//             ))}
//           </div>
//         </div>

//         {menuOpen && (
//           <div className={styles.mobileMenu}>
//             {navLinks.map(link => (
//               <NavLink
//                 key={link.name}
//                 to={link.href}
//                 className={({ isActive }) =>
//                   `${styles.navLinkBase} ${isActive ? styles.navLinkActive : styles.navLinkInactive} block text-center`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.icon}
//                 <span>{link.name}</span>
//               </NavLink>
//             ))}
//           </div>
//         )}
//       </nav>
//     )
// }

// export default Navbar





import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { styles, navLinks } from '../assets/dummyData';
import { FiX, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navWrapper}>

      <div className={styles.navContainer}>

        {/* Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logoText}>
            Admin Panel
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.menuButton}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop menu */}
        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `${styles.navLinkBase} ${
                  isActive
                    ? styles.navLinkActive
                    : styles.navLinkInactive
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `${styles.navLinkBase} ${
                  isActive
                    ? styles.navLinkActive
                    : styles.navLinkInactive
                } block text-center`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;