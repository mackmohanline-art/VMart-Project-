import React, { useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaBriefcase,
  FaShieldAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#001B3D] to-[#003B7A] text-white py-12 mt-16 border-t-4 border-[#0057B8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-[#0057B8] font-extrabold text-xl">BF</span>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white tracking-wide">
                  Bajaj Finance
                </div>
                <p className="text-blue-200 text-xs">Loans Made Simple</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm text-center md:text-left leading-relaxed mb-4">
              Bajaj Finance Ltd. is one of India's leading NBFCs, offering a wide
              range of loans and financial products — including Personal, Home,
              Business, Gold, and Consumer Durable Loans.
            </p>
            <div className="flex space-x-3 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-[#0057B8] p-2 rounded-full hover:bg-[#0077D4] transition duration-300"
              >
                <FaFacebookF size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-[#0057B8] p-2 rounded-full hover:bg-[#0077D4] transition duration-300"
              >
                <FaTwitter size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-[#0057B8] p-2 rounded-full hover:bg-[#0077D4] transition duration-300"
              >
                <FaInstagram size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="bg-[#0057B8] p-2 rounded-full hover:bg-[#0077D4] transition duration-300"
              >
                <FaYoutube size={16} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-[#0057B8] p-2 rounded-full hover:bg-[#0077D4] transition duration-300"
              >
                <FaLinkedinIn size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links - Loan Products */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <FaBriefcase className="text-yellow-300" />
              Our Loans
            </h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link
                to="/personal-loan"
                className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline"
              >
                Personal Loan
              </Link>
              <Link
                to="/home-loan"
                className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline"
              >
                Home Loan
              </Link>
              <Link
                to="/business-loan"
                className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline"
              >
                Business Loan
              </Link>
              <Link
                to="/gold-loan"
                className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline"
              >
                Gold Loan
              </Link>
              <Link
                to="/car-loan"
                className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline"
              >
                Car Loan
              </Link>
              <Link
                to="/consumer-durable-loan"
                className="text-gray-200 hover:text-yellow-300 transition duration-300 hover:underline"
              >
                Consumer Durable Loan
              </Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <FaPhone className="text-blue-300" />
              Contact Us
            </h3>
            <div className="flex flex-col space-y-4 text-center md:text-left">
              <div className="flex items-center gap-3 text-gray-200">
                <FaPhone className="text-blue-300" />
                <span>1800 103 3538 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaEnvelope className="text-blue-300" />
                <span>customercare@bajajfinserv.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <FaMapMarkerAlt className="text-blue-300" />
                <span className="text-sm">
                  Bajaj Auto Ltd. Complex, Mumbai-Pune Road,
                  <br />
                  Akurdi, Pune - 411035
                </span>
              </div>
              <div className="mt-2">
                <h4 className="text-white font-semibold mb-2">Working Hours</h4>
                <p className="text-gray-200 text-sm">Mon - Sat: 9:30 AM - 6:30 PM</p>
                <p className="text-gray-200 text-sm">
                  Online Support: 24×7
                </p>
              </div>
            </div>
          </div>

          {/* Services & Policies */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <FaShieldAlt className="text-blue-300" />
              Our Services
            </h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">
                Quick Loan Approval
              </span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">
                Flexible EMI Options
              </span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">
                Digital Application
              </span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">
                No Cost EMI
              </span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">
                Secure & Transparent
              </span>
              <span className="text-gray-200 hover:text-white cursor-pointer transition duration-300 hover:underline">
                Doorstep Service
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0057B8] my-8"></div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-[#0057B8]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright & Made with Love */}
            <div className="text-gray-300 text-sm text-center md:text-left flex flex-col items-center md:items-start gap-2">
              <div>
                &copy; {currentYear}{' '}
                <span className="text-white font-bold">Bajaj Finance Ltd.</span>{' '}
                All rights reserved.
              </div>
              <div className="text-xs text-blue-200">
                CIN: L65910PN1987PLC044899
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                Made with <FaHeart className="text-red-400 animate-pulse" /> in India
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">
                Terms &amp; Conditions
              </span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">
                Fair Practice Code
              </span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">
                Grievance Redressal
              </span>
              <span className="hover:text-white cursor-pointer transition duration-300 hover:underline">
                About Us
              </span>
            </div>

            {/* Payment Methods & Scroll to Top */}
            <div className="flex flex-col items-center gap-4">
              {/* Payment Methods */}
              <div className="flex flex-wrap justify-center gap-2">
                <div className="bg-white text-[#003B7A] px-3 py-1 rounded text-xs font-bold">
                  UPI
                </div>
                <div className="bg-white text-[#003B7A] px-3 py-1 rounded text-xs font-bold">
                  Net Banking
                </div>
                <div className="bg-white text-[#003B7A] px-3 py-1 rounded text-xs font-bold">
                  Debit Card
                </div>
                <div className="bg-white text-[#003B7A] px-3 py-1 rounded text-xs font-bold">
                  NACH
                </div>
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

        {/* Disclaimer */}
        <div className="mt-6 bg-[#001229] bg-opacity-70 rounded-lg p-4">
          <div className="text-center text-gray-300 text-xs sm:text-sm leading-relaxed">
            <p className="mb-1 font-semibold text-blue-200">
              Disclaimer
            </p>
            <p>
              Loan approval is subject to credit assessment, documentation, and
              Bajaj Finance Ltd.'s internal policies. Interest rates, processing
              fees, and EMIs vary based on the loan type, tenure, and applicant
              profile. Please read all scheme-related documents carefully before
              applying.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
