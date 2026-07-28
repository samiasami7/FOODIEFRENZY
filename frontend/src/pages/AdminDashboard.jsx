import React from 'react';

export default function AdminDashboard() {
  const handleLogout = () => {
    localStorage.clear();
    window.dispatchEvent(new Event('auth-changed'));
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#1A100E', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#FF9800', fontFamily: 'serif' }}>⚙️ Foodie-Frenzy Admin Dashboard</h1>
      <p>Welcome back, Admin! You are logged in with a verified management email.</p>
      
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #4E342E', borderRadius: '8px' }}>
        <h3>Management Quick Actions</h3>
        <ul>
          <li>Manage Menu Items</li>
          <li>Track Incoming Orders</li>
          <li>View Sales Metrics</li>
        </ul>
      </div>

      <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
}
