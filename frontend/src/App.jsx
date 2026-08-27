import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setPage(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      {page === "#admin" ? (
        <AdminDashboard />
      ) : page === "#cart" ? (
        <Cart />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;