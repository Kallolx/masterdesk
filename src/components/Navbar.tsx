
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-8 py-4 shadow-sm">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
      </div>

      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-900 font-bold font-serif text-2xl hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-900 font-bold font-serif text-2xl hover:text-blue-600 transition-colors">Plans</a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="hidden md:inline-block px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-lg font-bold hover:bg-gray-50 transition-colors">
          Login
        </button>
        <button className="hidden md:inline-block px-5 py-2 rounded-lg bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-colors">
          Signup
        </button>

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
              <a onClick={() => setIsOpen(false)} href="#" className="text-gray-900 font-bold text-xl">Home</a>
              <a onClick={() => setIsOpen(false)} href="#" className="text-gray-900 font-bold text-xl">Plans</a>

              <div className="flex space-x-3 pt-2">
                <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-bold">Login</button>
                <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold">Signup</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
