import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Navigation } from './components/Navigation';
import { LoginModal } from './components/LoginModal';
import { HomePage } from './pages/HomePage';
import { SecurePage } from './pages/SecurePage';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authCookie = Cookies.get('auth');
    if (authCookie) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Set cookie to expire in 30 days
    Cookies.set('auth', 'true', { expires: 30 });
    setIsLoginModalOpen(false);
    navigate('/secure');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    Cookies.remove('auth');
    navigate('/');
  };

  return (
    <>
      <Navigation 
        onLoginClick={() => setIsLoginModalOpen(true)} 
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/secure" 
          element={
            isAuthenticated ? (
              <SecurePage onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </>
  );
}

export default App;