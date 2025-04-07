import React from 'react';
import { Lock, Menu, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onLoginClick: () => void;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onLoginClick, isAuthenticated, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const textColorClass = isHome ? 'text-white' : 'text-gray-900';
  const bgClass = isHome ? 'bg-black/30 backdrop-blur-sm' : 'bg-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgClass} transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`${textColorClass} text-2xl font-bold hover:opacity-80 transition-colors`}
          >
            PhilAnderson Tech
          </Link>
          
          <button 
            className={`md:hidden ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className={`hidden md:flex space-x-8 ${textColorClass}`}>
            <Link to="/" className="hover:opacity-80">Home</Link>
            <a href="/#services" className="hover:opacity-80">Services</a>
            <a href="/#expertise" className="hover:opacity-80">Expertise</a>
            <a href="/#contact" className="hover:opacity-80">Contact</a>
            {isAuthenticated ? (
              <>
                <Link to="/secure" className="hover:opacity-80">Secure Page</Link>
                <button 
                  onClick={onLogout}
                  className="hover:opacity-80 flex items-center"
                  aria-label="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <button 
                onClick={onLoginClick}
                className="hover:opacity-80 flex items-center"
                aria-label="Secure Access"
              >
                <Lock className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black/80 rounded-lg p-4">
            <div className="flex flex-col space-y-4 text-white">
              <Link to="/" className="hover:opacity-80">Home</Link>
              <a href="/#services" className="hover:opacity-80">Services</a>
              <a href="/#expertise" className="hover:opacity-80">Expertise</a>
              <a href="/#contact" className="hover:opacity-80">Contact</a>
              {isAuthenticated ? (
                <>
                  <Link to="/secure" className="hover:opacity-80">Secure Page</Link>
                  <button 
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="hover:opacity-80 flex items-center"
                    aria-label="Logout"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => {
                    onLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:opacity-80 flex items-center"
                  aria-label="Secure Access"
                >
                  <Lock className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};