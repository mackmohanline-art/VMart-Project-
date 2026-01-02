import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign, FaUser, FaTicketAlt, FaBullhorn, FaDownload, FaNewspaper } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const KeralaLottery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [currentDate] = useState(new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  // Sample lottery results data
  const [lotteryResults, setLotteryResults] = useState([
    {
      id: 1,
      name: "Suvarna Keralam",
      date: "02-01-2026",
      result: "RA 345678",
      prize: "₹75 Lakhs",
      status: "Active"
    },
    {
      id: 2,
      name: "Karunya Plus",
      date: "01-01-2026",
      result: "RB 456789",
      prize: "₹1 Crore",
      status: "Completed"
    },
    {
      id: 3,
      name: "Bhagvathara",
      date: "31-12-2025",
      result: "RC 567890",
      prize: "₹50 Lakhs",
      status: "Completed"
    },
    {
      id: 4,
      name: "Sthree Sakthi",
      date: "30-12-2025",
      result: "RD 678901",
      prize: "₹25 Lakhs",
      status: "Completed"
    }
  ]);

  const [bumperLotteries, setBumperLotteries] = useState([
    {
      id: 1,
      name: "Onam Bumper 2025",
      prize: "₹12 Crore",
      drawDate: "15-08-2025",
      status: "Upcoming"
    },
    {
      id: 2,
      name: "Christmas-New Year Bumper",
      prize: "₹15 Crore",
      drawDate: "25-12-2025",
      status: "Active"
    },
    {
      id: 3,
      name: "Vishu Bumper 2026",
      prize: "₹10 Crore",
      drawDate: "14-04-2026",
      status: "Announced"
    }
  ]);

  const [news, setNews] = useState([
    {
      id: 1,
      title: "Kerala Lottery introduces new digital ticket system",
      date: "28-12-2025",
      category: "News"
    },
    {
      id: 2,
      title: "Record jackpot prize announced for Christmas Bumper",
      date: "25-12-2025",
      category: "Announcement"
    },
    {
      id: 3,
      title: "Security enhanced for lottery draw procedures",
      date: "22-12-2025",
      category: "Security"
    },
    {
      id: 4,
      title: "Online ticket booking now available for all lotteries",
      date: "20-12-2025",
      category: "Technology"
    }
  ]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Samrudhi", path: "/samrudhi" },
    { name: "Bhagvathara", path: "/bhagvathara" },
    { name: "Sthree Sakthi", path: "/sthreesakthi" },
    { name: "Dhamalekshmi", path: "/dhamalekshmi" },
    { name: "Karunya Plus", path: "/karunya-plus" },
    { name: "Suvarna Keralam", path: "/suvarna-keralam" },
    { name: "Karunya", path: "/karunya" },
    { name: "Bumper Lottery", path: "/bumper" },
    { name: "Downloads", path: "/downloads" }
  ];

  // SEO Meta tags
  const seoConfig = {
    title: "Official Kerala Lottery Results | Kerala State Lotteries 2025-2026",
    description: "Get official Kerala Lottery results, draw dates, prize details, and online ticket information. Check Suvarna Keralam, Karunya Plus, Bumper lottery results daily.",
    keywords: "kerala lottery, lottery results, kerala state lottery, suvarna keralam, karunya plus, bumper lottery, lottery tickets",
    author: "Kerala State Lottery Department",
    canonical: "https://www.keralalotteries.net"
  };

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SEO Head Section */}
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content={seoConfig.author} />
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.canonical} />
        <meta property="og:image" content="https://www.keralalotteries.net/og-image.jpg" />
        <meta property="og:site_name" content="Kerala Lotteries" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content="https://www.keralalotteries.net/twitter-card.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            "name": "Kerala State Lottery Department",
            "url": "https://www.keralalotteries.net",
            "logo": "https://www.keralalotteries.net/logo.png",
            "description": seoConfig.description,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-471-2321132",
              "contactType": "customer service",
              "email": "info@keralalotteries.net",
              "areaServed": "IN",
              "availableLanguage": ["en", "ml"]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
        {/* Top Announcement Bar */}
        <div className="bg-red-600 text-white text-sm md:text-base py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <FaBullhorn className="animate-pulse" />
              <span className="font-semibold">Official Kerala State Lottery Website</span>
            </div>
            <div className="flex items-center gap-4 text-xs md:text-sm">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {currentDate}
              </span>
              <span className="hidden md:inline">|</span>
              <span>Results Updated Daily</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 mr-2"
                  aria-label="Toggle menu"
                >
                  <FaBars className="text-xl" />
                </button>
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">KL</span>
                  </div>
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                      Kerala Lotteries
                    </h1>
                    <p className="text-xs text-gray-600">Official State Lottery</p>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                {/* Search Button */}
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Search"
                >
                  <FaSearch className="text-gray-600" />
                </button>

                {/* User Account */}
                <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <FaUser />
                  <span>My Account</span>
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            {showSearch && (
              <div className="py-4 border-t border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search lottery results, draw dates, prize details..."
                    className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    autoFocus
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          {/* Hero Section */}
          <section className="mb-8 md:mb-12">
            <div className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 md:p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="lg:w-2/3 mb-8 lg:mb-0">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Official Kerala Lottery Results 2025-2026
                    </h2>
                    <p className="text-white text-opacity-90 mb-6 text-lg">
                      Check daily lottery results, prize details, and winning numbers for all Kerala State Lotteries
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <FaTicketAlt /> Check Results
                      </button>
                      <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center gap-2">
                        <FaRupeeSign /> Buy Tickets
                      </button>
                    </div>
                  </div>
                  <div className="lg:w-1/3 text-center lg:text-right">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 inline-block">
                      <div className="text-white mb-2">Today's Lottery</div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">Suvarna Keralam</div>
                      <div className="text-white mb-4">Draw Date: 02-01-2026</div>
                      <div className="text-3xl md:text-4xl font-bold text-yellow-300 bg-black bg-opacity-30 py-2 px-4 rounded-lg">
                        ₹75 LAKHS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Today's Result Section */}
          <section className="mb-10">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                  <FaCalendarAlt />
                  Today's Result - Suvarna Keralam (02-01-2026)
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-2">First Prize</div>
                    <div className="text-3xl font-bold text-green-700 mb-2">RA 345678</div>
                    <div className="text-2xl font-bold text-yellow-600">₹75,00,000</div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-2">Second Prize</div>
                    <div className="text-3xl font-bold text-green-700 mb-2">SB 456789</div>
                    <div className="text-2xl font-bold text-yellow-600">₹10,00,000</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-2">Third Prize</div>
                    <div className="text-3xl font-bold text-green-700 mb-2">TC 567890</div>
                    <div className="text-2xl font-bold text-yellow-600">₹5,00,000</div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    View Full Results
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Recent Results */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
                <div className="bg-green-600 text-white px-6 py-4">
                  <h2 className="text-xl font-bold">Recent Lottery Results</h2>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Lottery Name</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Date</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">1st Prize</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lotteryResults.map((lottery) => (
                          <tr key={lottery.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-4">
                              <div className="font-medium text-green-700">{lottery.name}</div>
                            </td>
                            <td className="py-4 px-4">{lottery.date}</td>
                            <td className="py-4 px-4">
                              <div className="font-bold">{lottery.result}</div>
                              <div className="text-sm text-yellow-600">{lottery.prize}</div>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                lottery.status === 'Active' 
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {lottery.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bumper Lotteries Section */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-yellow-500 text-white px-6 py-4">
                  <h2 className="text-xl font-bold">Bumper Lotteries 2025-2026</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {bumperLotteries.map((bumper) => (
                      <div key={bumper.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800 mb-2">{bumper.name}</div>
                          <div className="text-2xl font-bold text-green-700 mb-3">{bumper.prize}</div>
                          <div className="text-sm text-gray-600 mb-4">Draw Date: {bumper.drawDate}</div>
                          <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
                            {bumper.status === 'Active' ? 'Buy Tickets' : 'Coming Soon'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* News Section */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <FaNewspaper />
                    Latest News
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {news.map((item) => (
                      <div key={item.id} className="pb-4 border-b border-gray-100 last:border-0">
                        <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                        <h3 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer">
                          {item.title}
                        </h3>
                        <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {item.category}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 text-center text-green-600 font-medium hover:text-green-700">
                    View All News →
                  </button>
                </div>
              </div>

              {/* Downloads Section */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-purple-600 text-white px-6 py-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <FaDownload />
                    Downloads
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {['Lottery Results PDF', 'Prize Claim Form', 'Rules & Regulations', 'Schedule 2026'].map((item, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium text-gray-700">{item}</span>
                        <FaDownload className="text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ad Space */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-center text-white">
                <h3 className="text-xl font-bold mb-2">Start up? Start with Airo</h3>
                <p className="mb-4 opacity-90">Discover how Airo's intelligent tools simplify every step of building your online presence</p>
                <div className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg inline-block">
                  GoDaddy.com
                </div>
                <button className="mt-4 w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <section className="mt-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Result Archive', 'Ticket Booking', 'Prize Claim', 'Agent Login', 'Rules', 'Schedule', 'Contact', 'FAQ'].map((link, index) => (
                  <button
                    key={index}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm py-3 rounded-lg font-medium transition-all hover:scale-105"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-xl font-bold mb-4">Kerala Lotteries</h3>
                <p className="text-gray-400 mb-4">
                  Official website of Kerala State Lottery Department. Providing daily results, prize information, and ticket booking services.
                </p>
                <div className="flex space-x-4">
                  {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Home', 'Results', 'Bumper', 'Tickets', 'Downloads'].map((item, index) => (
                    <li key={index}>
                      <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="font-bold text-lg mb-4">Important</h4>
                <ul className="space-y-2">
                  {['Terms & Conditions', 'Privacy Policy', 'Disclaimer', 'Rules', 'Contact Us'].map((item, index) => (
                    <li key={index}>
                      <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="font-bold text-lg mb-4">Contact Info</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaMapMarkerAlt />
                    <span>Kerala State Lottery Department, Thiruvananthapuram</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaPhone />
                    <span>+91-471-2321132</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaEnvelope />
                    <span>info@keralalotteries.net</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Kerala State Lottery Department. All Rights Reserved.</p>
              <p className="mt-2 text-sm">This is the official website of Kerala State Lottery Department.</p>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          <button className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-colors hover:scale-110">
            <FaWhatsapp className="text-2xl" />
          </button>
          <button className="bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-colors hover:scale-110">
            <FaPhone className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default KeralaLottery;
