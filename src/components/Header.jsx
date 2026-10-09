import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/kelu.png'; // ✅ Your logo

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // ✅ Load user from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, []);

  // ✅ Close mobile menu when clicking outside (on overlay OR anywhere not in menu/button)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event) => {
      // If click is inside the menu drawer → ignore
      if (mobileMenuRef.current && mobileMenuRef.current.contains(event.target)) {
        return;
      }
      // If click is on the toggle button → ignore (button handles toggle itself)
      if (menuButtonRef.current && menuButtonRef.current.contains(event.target)) {
        return;
      }
      // Otherwise close
      setMobileMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // ✅ Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // ✅ Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    setMobileMenuOpen(false);
    navigate('/');
    scrollToTop();
    alert('You have been logged out successfully!');
  };

  // ✅ Handle navigation (close menu + scroll top)
  const handleNavigation = () => {
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const navLinks = ['Home', 'About', 'Contact'];

  return (
    <nav className="w-full bg-black py-3 sm:py-4 sticky top-0 z-[1000] shadow-md overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          {/* ✅ Logo */}
          <div className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[120px] sm:max-w-[140px] object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((text, i) => (
              <Link
                key={i}
                to={`/${text === 'Home' ? '' : text.toLowerCase().replace(/\s/g, '')}`}
                className="text-white hover:text-yellow-400 transition duration-200 font-medium"
                onClick={scrollToTop}
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Desktop - User info & logout */}
          <div className="hidden md:flex gap-4 items-center">
            {isLoggedIn && (
              <>
                <span className="flex items-center gap-2 text-yellow-400">
                  <FaUser className="text-lg" />
                  <span className="font-medium">{userData?.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded transition duration-200"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            aria-label="Toggle menu"
            className="md:hidden text-yellow-400 focus:outline-none p-2 shrink-0"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Overlay — must be BELOW drawer (z lower) and covers full screen */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-60 z-[1040]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ✅ Mobile Drawer — above overlay */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#1a1f2d] p-6 z-[1050] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button inside drawer */}
        <div className="flex justify-end mb-6">
          <button
            aria-label="Close menu"
            className="text-yellow-400 focus:outline-none p-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes size={22} />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {navLinks.map((text, i) => (
            <Link
              key={i}
              to={`/${text === 'Home' ? '' : text.toLowerCase().replace(/\s/g, '')}`}
              className="text-white hover:text-yellow-400 text-lg py-2 border-b border-gray-700/50"
              onClick={handleNavigation}
            >
              {text}
            </Link>
          ))}

          {/* Mobile - user info & logout */}
          {isLoggedIn && (
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3 text-yellow-400 py-2 border-t border-gray-700">
                <FaUser />
                <span className="font-medium">{userData?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
