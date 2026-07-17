// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home/Home.jsx'
// import Navbar from './components/Navbar/Navbar.jsx'

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   )
// }

// export default Home;






// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Footer from './components/Footer/Footer'; // <-- Verify this exact path matches your folder capitalization

// function App() {
//   return (
//     <div className="min-h-screen bg-[#3E1F03] text-white font-sans antialiased selection:bg-yellow-500 flex flex-col justify-between">
//       <div>
//         <Navbar />
//         <Home />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;








import React from 'react';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      {/* Remove the extra <Navbar /> tag that was sitting here */}
      <Home />
    </div>
  );
}

export default App;





// import React, { useState } from 'react';
// import Home from './pages/Home/Home';
// import LoginModal from './components/LoginModal'; // 1. Import your login modal

// function App() {
//   // 2. Create state to control modal visibility
//   const [isLoginOpen, setIsLoginOpen] = useState(false);

//   return (
//     <div>
//       {/* 3. Pass the function to open the modal down to your Home page */}
//       <Home openLogin={() => setIsLoginOpen(true)} />

//       {/* 4. Render the modal at the root level */}
//       <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
//     </div>
//   );
// }

// export default App;

