// import React, { useState } from 'react';

// export default function LoginModal({ isOpen, onClose }) {
//   const [currState, setCurrState] = useState('Login');
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   if (!isOpen) return null;

//   const resetForm = () => {
//     setFormData({ name: '', email: '', password: '' });
//     setError('');
//     setSuccess('');
//     setLoading(false);
//   };

//   const handleClose = () => {
//     resetForm();
//     setCurrState('Login');
//     onClose();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     setLoading(true);

//     const endpoint = currState === 'Login'
//       ? 'http://localhost:4000/api/user/login'
//       : 'http://localhost:4000/api/user/register';

//     const payload = currState === 'Login'
//       ? { email: formData.email, password: formData.password }
//       : { username: formData.name, email: formData.email, password: formData.password };

//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (!data.success) {
//         setError(data.message || 'Authentication failed');
//         setLoading(false);
//         return;
//       }

//       localStorage.setItem('token', data.token);
//       localStorage.setItem('userEmail', formData.email);
//       window.dispatchEvent(new Event('auth-changed'));
//       setSuccess(currState === 'Login' ? 'Signed in successfully' : 'Account created successfully');
//       setLoading(false);
//       handleClose();
//     } catch (err) {
//       setError('Unable to reach the server. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     /* Full screen dark backdrop overlay */
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       backgroundColor: 'rgba(0, 0, 0, 0.65)',
//       backdropFilter: 'blur(4px)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 9999,
//       padding: '20px',
//       boxSizing: 'border-box'
//     }}>
      
//       {/* Central Card */}
//       <div style={{
//         position: 'relative',
//         width: '100%',
//         maxWidth: '450px',
//         backgroundColor: '#2b1d14',
//         border: '1px solid #412d1f',
//         borderRadius: '12px',
//         padding: '40px 30px',
//         boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
//         textAlign: 'center',
//         boxSizing: 'border-box'
//       }}>
        
//         {/* Close Button */}
//         <button 
//           onClick={handleClose}
//           style={{
//             position: 'absolute',
//             top: '15px',
//             right: '20px',
//             background: 'none',
//             border: 'none',
//             color: '#a3754c',
//             fontSize: '24px',
//             cursor: 'pointer',
//             fontWeight: 'bold',
//             transition: 'color 0.2s'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.color = '#ff9d24'}
//           onMouseLeave={(e) => e.currentTarget.style.color = '#a3754c'}
//         >
//           &times;
//         </button>
        
//         {/* Brand Header */}
//         <h2 style={{
//           color: '#ff9d24',
//           fontSize: '28px',
//           fontWeight: 'bold',
//           marginBottom: '30px',
//           letterSpacing: '0.5px',
//           marginTop: 0
//         }}>
//           Foodie-Frenzy
//         </h2>
        
//         {/* Form Container */}
//         <form 
//           onSubmit={handleSubmit}
//           style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
//         >
          
//           {/* Dynamic Name Input (Only shows during Sign Up) */}
//           {currState === "Sign Up" && (
//             <div style={{ position: 'relative', width: '100%' }}>
//               <span style={{
//                 position: 'absolute',
//                 left: '15px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 color: '#ff9d24',
//                 fontSize: '14px'
//               }}>
//                 👤
//               </span>
//               <input 
//                 type="text" 
//                 placeholder="Your Name" 
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '14px 45px',
//                   backgroundColor: '#1e130c',
//                   border: '1px solid #3d291b',
//                   borderRadius: '6px',
//                   color: '#f5f5f5',
//                   fontSize: '15px',
//                   outline: 'none',
//                   boxSizing: 'border-box'
//                 }}
//               />
//             </div>
//           )}
          
//           {/* Email Input */}
//           <div style={{ position: 'relative', width: '100%' }}>
//             <span style={{
//               position: 'absolute',
//               left: '15px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               color: '#ff9d24',
//               fontSize: '16px'
//             }}>
//               ✉
//             </span>
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//               style={{
//                 width: '100%',
//                 padding: '14px 45px',
//                 backgroundColor: '#1e130c',
//                 border: '1px solid #3d291b',
//                 borderRadius: '6px',
//                 color: '#f5f5f5',
//                 fontSize: '15px',
//                 outline: 'none',
//                 boxSizing: 'border-box'
//               }}
//             />
//           </div>
          
//           {/* Password Input */}
//           <div style={{ position: 'relative', width: '100%' }}>
//             <span style={{
//               position: 'absolute',
//               left: '15px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               color: '#ff9d24',
//               fontSize: '16px'
//             }}>
//               🔒
//             </span>
//             <input 
//               type={showPassword ? 'text' : 'password'} 
//               placeholder="Password" 
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//               style={{
//                 width: '100%',
//                 padding: '14px 45px',
//                 backgroundColor: '#1e130c',
//                 border: '1px solid #3d291b',
//                 borderRadius: '6px',
//                 color: '#f5f5f5',
//                 fontSize: '15px',
//                 outline: 'none',
//                 boxSizing: 'border-box'
//               }}
//             />
//             <span 
//               onClick={() => setShowPassword(!showPassword)}
//               style={{
//                 position: 'absolute',
//                 right: '15px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 color: '#ff9d24',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 userSelect: 'none'
//               }}
//             >
//               {showPassword ? '🙈' : '👁'}
//             </span>
//           </div>
          
//           {/* Terms / Remember Me conditional option row */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px',
//             textAlign: 'left'
//           }}>
//             <input 
//               type="checkbox" 
//               id="remember" 
//               required={currState === "Sign Up"}
//               style={{
//                 width: '16px',
//                 height: '16px',
//                 cursor: 'pointer'
//               }}
//             />
//             <label htmlFor="remember" style={{
//               color: '#c7a485',
//               fontSize: '14px',
//               cursor: 'pointer',
//               userSelect: 'none'
//             }}>
//               {currState === "Login" ? "Remember me" : "I agree to the terms of use & privacy policy."}
//             </label>
//           </div>
          
//           {error && <div style={{ color: '#ff6b6b', fontSize: '14px' }}>{error}</div>}
//           {success && <div style={{ color: '#8fd19e', fontSize: '14px' }}>{success}</div>}

//           {/* Dynamic Action Button Text */}
//           <button 
//             type="submit" 
//             disabled={loading}
//             style={{
//               width: '100%',
//               padding: '14px',
//               backgroundColor: '#ff9d24',
//               border: 'none',
//               borderRadius: '6px',
//               color: '#120b05',
//               fontSize: '16px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               gap: '8px',
//               transition: 'background-color 0.2s',
//               marginTop: '10px'
//             }}
//             onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e08416'}
//             onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff9d24'}
//           >
//             {loading ? 'Please wait...' : (currState === "Login" ? "Sign In" : "Create Account")} <span>➔</span>
//           </button>
//         </form>
        
//         {/* Dynamic Panel Toggler Footer Text */}
//         <div style={{ marginTop: '25px', color: '#c7a485', fontSize: '14px' }}>
//           {currState === "Login" ? (
//             <span>
//               New to Foodie-Frenzy?{' '}
//               <span 
//                 onClick={() => setCurrState('Sign Up')}
//                 style={{ color: '#ff9d24', cursor: 'pointer', fontWeight: '600' }}
//                 onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
//                 onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
//               >
//                 Create New Account
//               </span>
//             </span>
//           ) : (
//             <span>
//               Already have an account?{' '}
//               <span 
//                 onClick={() => setCurrState('Login')}
//                 style={{ color: '#ff9d24', cursor: 'pointer', fontWeight: '600' }}
//                 onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
//                 onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
//               >
//                 Login Here
//               </span>
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }










import React, { useState } from 'react';

export default function LoginModal({ isOpen, onClose }) {
  // Navigation State: 'login' or 'register'
  const [isLoginView, setIsLoginView] = useState(true);

  // Shared Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const [name, setName] = useState(''); // New field specifically for Registration
  
  // UI Functionality States
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  // Switch form layouts and wipe existing errors clean
  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setErrorMessage('');
    setSuccessMessage('');
    setEmail('');
    setPassword('');
    setName('');
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    const endpoint = isLoginView
      ? `${apiBaseUrl}/api/user/login`
      : `${apiBaseUrl}/api/user/register`;

    const payload = isLoginView
      ? { email, password, role }
      : { username: name, email, password, role };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Authentication processing failed.');
      }

      if (isLoginView) {
        // --- LOGIN SUCCESS LOGIC ---
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userRole', role);
        
        // Notify the Navbar layout right away
        window.dispatchEvent(new Event('auth-changed'));
        onClose(); 
      } else {
        // --- REGISTER SUCCESS LOGIC ---
        setSuccessMessage('Account registered successfully! Please sign in.');
        setIsLoginView(true); // Automatically slide back over to login screen
        setPassword(''); // Reset password field for security
      }

    } catch (error) {
      console.error("MongoDB Operation Encountered Failure:", error.message);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        padding: '32px',
        backgroundColor: '#2B1B17',
        borderRadius: '12px',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
        border: '1px solid #3E2723',
        color: '#ffffff',
        fontFamily: 'sans-serif'
      }}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'none', border: 'none', color: '#9ca3af',
          fontSize: '24px', cursor: 'pointer'
        }}>&times;</button>

        {/* Dynamic Title Header */}
        <h2 style={{
          fontSize: '28px', fontWeight: 'bold', color: '#FF9800',
          marginBottom: '24px', fontFamily: 'serif', textAlign: 'center'
        }}>
          {isLoginView ? 'Foodie-Frenzy Login' : 'Create Account'}
        </h2>

        {/* Server Success Output */}
        {successMessage && (
          <div style={{
            color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)',
            padding: '12px', borderRadius: '8px', marginBottom: '16px',
            fontSize: '14px', textAlign: 'center', border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            {successMessage}
          </div>
        )}

        {/* Server Error Output */}
        {errorMessage && (
          <div style={{
            color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)',
            padding: '12px', borderRadius: '8px', marginBottom: '16px',
            fontSize: '14px', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          {/* Conditional Name Field (Only appears on Create Account view) */}
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

          {/* Email Input */}
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

          {/* Password Input with Visibility Eye Icon */}
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
                style={{
                  position: 'absolute', right: '12px', top: '50%',
                  transform: 'translateY(-50%)', background: 'none',
                  border: 'none', cursor: 'pointer', fontSize: '16px'
                }}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          {/* Role Selection Group Configuration */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: '#FFA726', textTransform: 'uppercase', marginBottom: '8px' }}>Select Role</label>
            <div style={{ display: 'flex', gap: '24px', backgroundColor: '#1A100E', padding: '12px', borderRadius: '8px', border: '1px solid #4E342E' }}>
              <label style={{ display: 'flex', alignItems: 'center', color: role === 'user' ? '#FF9800' : '#d1d5db', cursor: 'pointer', fontWeight: role === 'user' ? '600' : 'normal' }}>
                <input 
                  type="radio" 
                  name="role" 
                  value="user" 
                  checked={role === 'user'} 
                  onChange={() => setRole('user')}
                  style={{ marginRight: '8px', accentColor: '#FF9800' }} 
                  disabled={isLoading}
                />
                User Role
              </label>
              <label style={{ display: 'flex', alignItems: 'center', color: role === 'admin' ? '#FF9800' : '#d1d5db', cursor: 'pointer', fontWeight: role === 'admin' ? '600' : 'normal' }}>
                <input 
                  type="radio" 
                  name="role" 
                  value="admin" 
                  checked={role === 'admin'} 
                  onChange={() => setRole('admin')}
                  style={{ marginRight: '8px', accentColor: '#FF9800' }} 
                  disabled={isLoading}
                />
                Admin Role
              </label>
            </div>
          </div>

          {/* Remember Me Checkbox (Only relevant during user sign in) */}
          {isLoginView && (
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', color: '#9ca3af', fontSize: '14px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ marginRight: '8px', accentColor: '#FF9800' }} 
                  disabled={isLoading}
                />
                Remember me
              </label>
            </div>
          )}

          {/* Core Dynamic Submit Button Handling API Activity */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%', padding: '12px', 
              backgroundColor: isLoading ? '#CC7A00' : '#FF9800',
              color: '#1A100E', fontWeight: 'bold', borderRadius: '8px',
              border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', fontSize: '16px'
            }}
          >
            {isLoading ? 'Processing...' : isLoginView ? 'Sign In \u2192' : 'Sign Up \u2192'}
          </button>

          {/* Switch View Trigger Text Block */}
          <p style={{ marginTop: '24px', fontSize: '14px', color: '#9ca3af', textAlign: 'center' }}>
            {isLoginView ? (
              <>
                New to Foodie-Frenzy?{' '}
                <button
                  type="button"
                  onClick={toggleView}
                  style={{ background: 'none', border: 'none', color: '#FF9800', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }}
                >
                  Create New Account
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={toggleView}
                  style={{ background: 'none', border: 'none', color: '#FF9800', cursor: 'pointer', padding: 0, font: 'inherit', textDecoration: 'underline' }}
                >
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