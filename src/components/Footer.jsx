import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaArrowUp, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12 mt-16 border-t-4 border-green-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-2xl">GP</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">
                  GPMart
                </div>
                <p className="text-green-300 text-sm">Fresh Groceries Delivered</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm text-center md:text-left leading-relaxed mb-4">
              Your trusted online grocery store for fresh vegetables, fruits, and daily essentials. 
              We deliver farm-fresh products directly to your doorstep.
            </p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-300">
                <FaFacebook size={18} className="text-white" />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-300">
                <FaTwitter size={18} className="text-white" />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-300">
                <FaInstagram size={18} className="text-white" />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-300">
                <FaYoutube size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links - Shopping */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <FaShoppingCart className="text-yellow-300" />
              Quick Shop
            </h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link to="/" className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline">Home</Link>
              <Link to="/vegetables" className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline">Fresh Vegetables</Link>
              <Link to="/fruits" className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline">Organic Fruits</Link>
              <Link to="/daily-needs" className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline">Daily Needs</Link>
              <Link to="/offers" className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline">Special Offers</Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <FaPhone className="text-green-300" />
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div className="flex items-center gap-3 text-gray-200">
                <FaPhone className="text-green-300" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaEnvelope className="text-green-300" />
                <span>support@gpmart.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaMapMarkerAlt className="text-green-300" />
                <span className="text-sm">Patna, Bihar - 800001</span>
              </div>
              <div className="mt-2">
                <h4 className="text-white font-semibold mb-2">Delivery Hours</h4>
                <p className="text-gray-200 text-sm">7:00 AM - 10:00 PM</p>
                <p className="text-gray-200 text-sm">Everyday</p>
              </div>
            </div>
          </div>

          {/* Services & Policies */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">Free Delivery*</span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">Same Day Delivery</span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">Quality Guarantee</span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">Easy Returns</span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">Freshness Promise</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright & Made with Love */}
            <div className="text-gray-300 text-sm text-center md:text-left flex flex-col items-center md:items-start gap-2">
              <div>
                &copy; 2024 <span className="text-white font-bold">GPMart</span>. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-green-200">
                Made with <FaHeart className="text-red-400 animate-pulse" /> in India
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">Terms & Conditions</span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">Return Policy</span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">FAQ</span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">About Us</span>
            </div>

            {/* Payment Methods & Scroll to Top */}
            <div className="flex flex-col items-center gap-4">
              {/* Payment Methods */}
              <div className="flex gap-3">
                <div className="bg-white text-green-700 px-3 py-1 rounded text-xs font-bold">UPI</div>
                <div className="bg-white text-green-700 px-3 py-1 rounded text-xs font-bold">Cards</div>
                <div className="bg-white text-green-700 px-3 py-1 rounded text-xs font-bold">COD</div>
                <div className="bg-white text-green-700 px-3 py-1 rounded text-xs font-bold">Net Banking</div>
              </div>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-white font-semibold transition duration-300 hover:shadow-lg"
              >
                <FaArrowUp className="animate-bounce" />
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mt-6 bg-green-900 bg-opacity-50 rounded-lg p-4">
          <div className="text-center text-gray-200 text-sm">
            <p className="mb-1">*Free Delivery on orders above ₹200 | Delivery Charge: ₹25 for ₹100-150 | ₹10 for ₹150-200</p>
            <p>Minimum order: ₹100 | Same day delivery available</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;