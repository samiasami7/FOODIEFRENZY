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








// import React from 'react';
// import Home from './pages/Home/Home';

// function App() {
//   return (
//     <div>
//       {/* Remove the extra <Navbar /> tag that was sitting here */}
//       <Home />
//     </div>
//   );
// }

// export default App;





import React, { useEffect, useState } from 'react';

import Home from './pages/Home/Home';
import AdminDashboard from './pages/AdminDashboard';

function App() {

  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {

    const handleHashChange = () => {
      setPage(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };

  }, []);

  return (
    <div>
      {page === '#admin' ? <AdminDashboard /> : <Home />}
    </div>
  );
}

export default App;

