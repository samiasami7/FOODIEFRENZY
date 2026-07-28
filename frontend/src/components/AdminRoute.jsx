import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  // If there's no token or the role isn't admin, redirect them to home or login page
  if (!token || userRole !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
}
