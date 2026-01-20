
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const navigate = useNavigate();
  const location = useLocation();

  const userName = "Siam Ahmed";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check localStorage on component mount and route changes
    handleStorageChange();
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [location.pathname]);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-900 font-bold font-serif text-2xl hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/plans" className="text-gray-900 font-bold font-serif text-2xl hover:text-blue-600 transition-colors">Plans</Link>
        {isLoggedIn && (
          <Link 
            to="/dashboard" 
            className={`text-gray-900 font-bold font-serif text-2xl hover:text-blue-600 transition-colors ${
              location.pathname === '/dashboard' ? 'text-blue-600' : ''
            }`}
          >
            Dashboard
          </Link>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
            <button onClick={handleLogin} className="hidden md:inline-block px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-lg font-bold hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button 
              className="hidden md:inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Signup
            </button>
          </>
        ) : (
          <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-white border border-gray-300 rounded-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium">{userName}</span>
          </div>
        )}

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
          className="md:hidden p-2 rounded-lg border border-gray-200"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div
            className="absolute top-[64px] left-0 w-full bg-white shadow-lg py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col px-6 space-y-3">
              <Link onClick={() => setIsOpen(false)} to="/" className="text-gray-900 font-bold text-xl">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/plans" className="text-gray-900 font-bold text-xl">Plans</Link>
              {isLoggedIn && (
                <Link 
                  onClick={() => setIsOpen(false)} 
                  to="/dashboard" 
                  className={`text-gray-900 font-bold text-xl ${
                    location.pathname === '/dashboard' ? 'text-blue-600' : ''
                  }`}
                >
                  Dashboard
                </Link>
              )}

              {!isLoggedIn ? (
                <div className="flex space-x-3 pt-2">
                  <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-bold">Login</button>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      handleLogin();
                    }} 
                    className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold"
                  >
                    Signup
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between pt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium">{userName}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setIsOpen(false);
                      handleLogout();
                    }}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
