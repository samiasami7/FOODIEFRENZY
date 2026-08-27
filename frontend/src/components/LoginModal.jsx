import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose }) {
  const API_BASE_URL = import.meta.env.VITE_API_URL || '';
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setErrorMessage('');
    setSuccessMessage('');
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    const endpoint = isLoginView
      ? `${API_BASE_URL}/api/user/login`
      : `${API_BASE_URL}/api/user/register`;

    const payload = isLoginView
      ? { email, password }
      : { username: name, email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      let data = {};
try {
  data = await response.json();
} catch {
  data = {};
}

// PUT THE NEW CODE HERE
if (!response.ok || !data.success) {
  throw new Error(data.message || "Authentication failed");
}

      if (isLoginView) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', data.role);
        window.dispatchEvent(new Event('auth-changed'));
        onClose();
      } else {
        setSuccessMessage('Account registered successfully! Please sign in.');
        setIsLoginView(true);
        setPassword('');
      }
    } catch (error) {
      console.error('Auth request failed:', error);
      setErrorMessage(error.message || 'Could not reach the server. Make sure the backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '400px', padding: '32px', backgroundColor: '#2B1B17', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)', border: '1px solid #3E2723', color: '#ffffff', fontFamily: 'sans-serif' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#9ca3af', fontSize: '24px', cursor: 'pointer' }}>&times;</button>

        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#FF9800', marginBottom: '24px', fontFamily: 'serif', textAlign: 'center' }}>
          {isLoginView ? 'Foodie-Frenzy Login' : 'Create Account'}
        </h2>

        {successMessage && (
          <div style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', textAlign: 'center', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLoginView && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#FFA726', textTransform: 'uppercase', marginBottom: '4px' }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{ width: '100%', padding: '12px', backgroundColor: '#1A100E', border: '1px solid #4E342E', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
                disabled={isLoading}
                required
              />
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#FFA726', textTransform: 'uppercase', marginBottom: '4px' }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{ width: '100%', padding: '12px', backgroundColor: '#1A100E', border: '1px solid #4E342E', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
              disabled={isLoading}
              required
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#FFA726', textTransform: 'uppercase', marginBottom: '4px' }}>Password</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{ width: '100%', padding: '12px', paddingRight: '40px', backgroundColor: '#1A100E', border: '1px solid #4E342E', borderRadius: '8px', color: '#fff', boxSizing: 'border-box' }}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          {/* <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#FFA726', textTransform: 'uppercase', marginBottom: '8px' }}>Select Role</label>
            <div style={{ display: 'flex', gap: '24px', backgroundColor: '#1A100E', padding: '12px', borderRadius: '8px', border: '1px solid #4E342E' }}>
              <label style={{ display: 'flex', alignItems: 'center', color: role === 'user' ? '#FF9800' : '#d1d5db', cursor: 'pointer', fontWeight: role === 'user' ? '600' : 'normal' }}>
                <input type="radio" name="role" value="user" checked={role === 'user'} onChange={() => setRole('user')} style={{ marginRight: '8px', accentColor: '#FF9800' }} disabled={isLoading} />
                User Role
              </label>
              <label style={{ display: 'flex', alignItems: 'center', color: role === 'admin' ? '#FF9800' : '#d1d5db', cursor: 'pointer', fontWeight: role === 'admin' ? '600' : 'normal' }}>
                <input type="radio" name="role" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} style={{ marginRight: '8px', accentColor: '#FF9800' }} disabled={isLoading} />
                Admin Role
              </label>
            </div>
          </div> */}

          {isLoginView && (
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', color: '#9ca3af', fontSize: '14px', cursor: 'pointer' }}>
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} style={{ marginRight: '8px', accentColor: '#FF9800' }} disabled={isLoading} />
                Remember me
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{ width: '100%', padding: '12px', backgroundColor: isLoading ? '#CC7A00' : '#FF9800', color: '#1A100E', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', fontSize: '16px' }}
          >
            {isLoading ? 'Processing...' : isLoginView ? 'Sign In →' : 'Sign Up →'}
          </button>

          <p style={{ marginTop: '24px', fontSize: '14px', color: '#9ca3af', textAlign: 'center' }}>
            {isLoginView ? (
              <>
                New to Foodie-Frenzy?{' '}
                <button type="button" onClick={toggleView} style={{ background: 'none', border: 'none', color: '#FF9800', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }}>
                  Create New Account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={toggleView} style={{ background: 'none', border: 'none', color: '#FF9800', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }}>
                  Back to Sign In
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}