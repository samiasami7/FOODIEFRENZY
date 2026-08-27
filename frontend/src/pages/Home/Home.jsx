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


