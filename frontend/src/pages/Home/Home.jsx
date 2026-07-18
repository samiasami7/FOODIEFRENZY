// // import Navbar from "../../components/Navbar/Navbar.jsx";

// // function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <div style={{ background: "white", height: "100vh" }}>
// //       Samia Sami
// //       </div>
// //     </>
// //   )
// // }

// // export default Home

// import React from "react";
// import Navbar from "../../components/Navbar/Navbar.jsx";

// import {
//   FaSearch,
//   FaDownload,
//   FaPlay,
// } from "react-icons/fa";

// const Home = () => {
//   return (
//     <>
//       <Navbar />

//       <section className="min-h-screen bg-gradient-to-r from-[#7a2e00] via-[#9e3c00] to-[#c24f00]">

//         <div className="max-w-7xl mx-auto px-6 py-20">

//           <div className="grid lg:grid-cols-2 gap-10 items-center">

//             {/* Left */}

//             <div>
//               <h1 className="text-7xl font-bold text-white leading-tight">
//                 We're Serious
//               </h1>

//               <h1 className="text-7xl font-bold text-amber-400 leading-tight">
//                 For Food &
//               </h1>

//               <h1 className="text-7xl font-bold text-amber-400 leading-tight">
//                 Delivery
//               </h1>

//               <p className="text-white text-2xl mt-10 max-w-xl">
//                 Best cooks and best delivery guys all at your
//                 service. Hot tasty food will reach you in
//                 60 minutes.
//               </p>

//               {/* Search */}

//               <div className="flex mt-12 max-w-xl bg-[#8a3d05] border border-amber-700 rounded-2xl overflow-hidden">

//                 <div className="flex items-center px-6 text-amber-400">
//                   <FaSearch />
//                 </div>

//                 <input
//                   type="text"
//                   placeholder="Discover your next favorite meal..."
//                   className="flex-1 bg-transparent outline-none text-white p-5"
//                 />

//                 <button className="bg-amber-400 px-10 text-black font-semibold">
//                   Search
//                 </button>

//               </div>

//               {/* Buttons */}

//               <div className="flex gap-6 mt-10">

//                 <button className="border border-amber-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3">
//                   <FaDownload />
//                   Download App
//                 </button>

//                 <button className="bg-amber-400 text-black px-10 py-4 rounded-2xl flex items-center gap-3 font-bold">
//                   <FaPlay />
//                   Watch Video
//                 </button>

//               </div>
//             </div>

//             {/* Right */}

//             <div className="flex justify-center">

//               <div className="relative">

//                 <img
//                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//                   alt=""
//                   className="w-[450px] h-[450px] rounded-full object-cover border-[10px] border-amber-700"
//                 />

//                 <div className="absolute -left-10 top-32 w-28 h-28 rounded-full overflow-hidden border-4 border-amber-700">
//                   <img
//                     src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="absolute -right-10 top-40 w-28 h-28 rounded-full overflow-hidden border-4 border-amber-700">
//                   <img
//                     src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-amber-700">
//                   <img
//                     src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// };

// export default Home;







// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Hero from '../../components/Hero';

// const Home = () => {
//   return (
//     <div className="bg-[#3A1B0E] min-h-screen w-full overflow-x-hidden">
//       {/* 1. Navbar displays exactly once at the top */}
//       <Navbar />

//       {/* 2. Hero displays right under it, separating text and graphics */}
//       <Hero />
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer'; 
import Contact from '../../components/Contact';
import About from '../../components/About';
import Menu from '../../Menu'; // <-- FIXED: Pointing directly to the root src folder

const Home = () => {
  return (
    <div className="bg-[#3A1B0E] min-h-screen w-full overflow-x-hidden">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Center Landing Page Graphics Area */}
      <Hero />
      
      <Menu />

      <About />

      <Contact />

      {/* Mount Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;





// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import Hero from '../../components/Hero';
// import Footer from '../../components/Footer'; 
// import Contact from '../../components/Contact';
// import About from '../../components/About';

// // 1. Accept openLogin as a prop here
// const Home = ({ openLogin }) => {
//   return (
//     <div className="bg-[#3A1B0E] min-h-screen w-full overflow-x-hidden">
//       {/* Top Header Navigation */}
//       {/* 2. Pass openLogin down to the Navbar */}
//       <Navbar openLogin={openLogin} />

//       {/* Center Landing Page Graphics Area */}
//       <Hero />
      
//       <About/>

//       <Contact />

//       {/* MOUNT THE FOOTER AT THE VERY BOTTOM */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;
