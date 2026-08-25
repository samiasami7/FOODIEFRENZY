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
  
  // Track the user auth values locally to handle conditional routing updates
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || '');

  const ADMIN_EMAILS = [
    'samia01@gmail.com',
    'sadia01@gmail.com'
  ];

  // Helper check to determine if the user satisfies admin criteria
  const isAdmin = token && ADMIN_EMAILS.includes(userEmail);

  useEffect(() => {
    // 1. Listen for URL hash changes (e.g. typing /#admin or clicking a button)
    const handleHashChange = () => {
      setPage(window.location.hash);
    };

    // 2. Listen for global login/logout events emitted from your Navbar/Login modals
    const handleAuthChange = () => {
      setToken(localStorage.getItem('token'));
      setUserEmail(localStorage.getItem('userEmail') || '');
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('auth-changed', handleAuthChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('auth-changed', handleAuthChange);
    };
  }, []);

  // Secure Route Evaluation
  if (page === '#admin') {
    if (isAdmin) {
      return <AdminDashboard />;
    } else {
      // Force non-admins out of the admin panel view instantly by altering the hash
      window.location.hash = '';
      return <Home />;
    }
  }

  // Fallback to default viewport view if hash is missing or unmatched
  return <Home />;
}

export default App;

