import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign, FaUser, FaTicketAlt, FaBullhorn, FaDownload, FaNewspaper, FaArrowRight } from 'react-icons/fa';

const KeralaLottery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activeLottery, setActiveLottery] = useState('Suvarna Keralam');

  // Current date
  const currentDate = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Navigation items
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

  // Today's lottery result
  const todayResult = {
    name: "Suvarna Keralam",
    date: "02-01-2026",
    firstPrize: "RA 345678",
    secondPrize: "SB 456789",
    thirdPrize: "TC 567890",
    firstPrizeAmount: "₹75,00,000",
    secondPrizeAmount: "₹10,00,000",
    thirdPrizeAmount: "₹5,00,000",
    status: "Active"
  };

  // Recent results
  const recentResults = [
    {
      id: 1,
      name: "Karunya Plus",
      date: "01-01-2026",
      prize: "RB 456789",
      amount: "₹1 Crore",
      status: "Completed"
    },
    {
      id: 2,
      name: "Bhagvathara",
      date: "31-12-2025",
      prize: "RC 567890",
      amount: "₹50 Lakhs",
      status: "Completed"
    },
    {
      id: 3,
      name: "Sthree Sakthi",
      date: "30-12-2025",
      prize: "RD 678901",
      amount: "₹25 Lakhs",
      status: "Completed"
    },
    {
      id: 4,
      name: "Dhamalekshmi",
      date: "29-12-2025",
      prize: "RE 789012",
      amount: "₹20 Lakhs",
      status: "Completed"
    }
  ];

  // Bumper lotteries
  const bumperLotteries = [
    {
      id: 1,
      name: "Christmas-New Year Bumper",
      prize: "₹15 Crore",
      drawDate: "25-12-2025",
      status: "Active",
      color: "from-red-500 to-yellow-500"
    },
    {
      id: 2,
      name: "Onam Bumper 2025",
      prize: "₹12 Crore",
      drawDate: "15-08-2025",
      status: "Completed",
      color: "from-green-500 to-yellow-500"
    },
    {
      id: 3,
      name: "Vishu Bumper 2026",
      prize: "₹10 Crore",
      drawDate: "14-04-2026",
      status: "Upcoming",
      color: "from-blue-500 to-purple-500"
    }
  ];

  // Latest news
  const latestNews = [
    {
      id: 1,
      title: "Kerala Lottery introduces new digital ticket system",
      date: "28-12-2025",
      category: "Technology",
      excerpt: "New online booking system launched for all lotteries"
    },
    {
      id: 2,
      title: "Record jackpot prize announced for Christmas Bumper",
      date: "25-12-2025",
      category: "Announcement",
      excerpt: "₹15 Crore prize money for Christmas-New Year Bumper"
    },
    {
      id: 3,
      title: "Security enhanced for lottery draw procedures",
      date: "22-12-2025",
      category: "Security",
      excerpt: "Advanced security measures implemented for draws"
    },
    {
      id: 4,
      title: "Online ticket booking now available for all lotteries",
      date: "20-12-2025",
      category: "News",
      excerpt: "Book tickets online through official portal"
    }
  ];

  // Downloads
  const downloads = [
    { name: "Lottery Results PDF", format: "PDF", size: "2.5 MB" },
    { name: "Prize Claim Form", format: "DOC", size: "1.2 MB" },
    { name: "Rules & Regulations", format: "PDF", size: "3.1 MB" },
    { name: "Schedule 2026", format: "PDF", size: "1.8 MB" }
  ];

  // Quick links
  const quickLinks = [
    "Result Archive",
    "Ticket Booking",
    "Prize Claim",
    "Agent Login",
    "Rules",
    "Schedule",
    "Contact",
    "FAQ"
  ];

  // Footer links
  const footerLinks = {
    quickLinks: ["Home", "Results", "Bumper", "Tickets", "Downloads"],
    importantLinks: ["Terms & Conditions", "Privacy Policy", "Disclaimer", "Rules", "Contact Us"],
    socialMedia: [
      { icon: <FaFacebook />, name: "Facebook" },
      { icon: <FaTwitter />, name: "Twitter" },
      { icon: <FaInstagram />, name: "Instagram" },
      { icon: <FaYoutube />, name: "YouTube" },
      { icon: <FaWhatsapp />, name: "WhatsApp" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-1 md:mb-0">
              <FaBullhorn className="animate-pulse" />
              <span className="font-semibold text-sm md:text-base">Official Kerala State Lottery Website</span>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {currentDate}
              </span>
              <span className="hidden md:inline">|</span>
              <span>Results Updated Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 mr-3"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KL</span>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                    Kerala Lotteries
                  </h1>
                  <p className="text-xs text-gray-600 hidden md:block">Official State Lottery</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeLottery === item.name
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveLottery(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <FaSearch className="text-gray-600 text-lg" />
              </button>
              
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <FaUser className="text-sm" />
                <span className="text-sm font-medium">My Account</span>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showSearch && (
            <div className="pb-4 border-t border-gray-200">
              <div className="relative mt-4">
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

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="py-2 space-y-1 bg-white">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className={`block px-4 py-3 text-base font-medium rounded-md mx-2 ${
                      activeLottery === item.name
                        ? 'bg-green-600 text-white'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setActiveLottery(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Hero Section */}
        <section className="mb-8 md:mb-12">
          <div className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 md:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-2/3 mb-8 lg:mb-0">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Official Kerala Lottery Results 2025-2026
                  </h1>
                  <p className="text-white text-opacity-90 mb-6 text-base md:text-lg">
                    Check daily lottery results, prize details, and winning numbers for all Kerala State Lotteries
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white text-green-600 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
                      <FaTicketAlt /> Check Results
                    </button>
                    <button className="bg-yellow-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all flex items-center gap-2">
                      <FaRupeeSign /> Buy Tickets
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-white text-center mb-4">
                      <div className="text-sm mb-1">Today's Lottery</div>
                      <div className="text-2xl font-bold">{todayResult.name}</div>
                      <div className="text-sm mt-1">Draw Date: {todayResult.date}</div>
                    </div>
                    <div className="text-3xl font-bold text-yellow-300 text-center bg-black bg-opacity-30 py-3 px-4 rounded-lg">
                      {todayResult.firstPrizeAmount}
                    </div>
                    <div className="text-white text-center mt-3 text-sm">
                      First Prize: {todayResult.firstPrize}
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
              <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                <FaCalendarAlt />
                Today's Result - {todayResult.name} ({todayResult.date})
              </h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* First Prize */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">First Prize</div>
                  <div className="text-3xl font-bold text-green-700 mb-3 font-mono">{todayResult.firstPrize}</div>
                  <div className="text-2xl font-bold text-yellow-600">{todayResult.firstPrizeAmount}</div>
                  <div className="mt-3 text-xs text-gray-500">Jackpot Winner</div>
                </div>
                
                {/* Second Prize */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Second Prize</div>
                  <div className="text-3xl font-bold text-green-700 mb-3 font-mono">{todayResult.secondPrize}</div>
                  <div className="text-2xl font-bold text-yellow-600">{todayResult.secondPrizeAmount}</div>
                  <div className="mt-3 text-xs text-gray-500">5 Winners</div>
                </div>
                
                {/* Third Prize */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 text-center">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Third Prize</div>
                  <div className="text-3xl font-bold text-green-700 mb-3 font-mono">{todayResult.thirdPrize}</div>
                  <div className="text-2xl font-bold text-yellow-600">{todayResult.thirdPrizeAmount}</div>
                  <div className="mt-3 text-xs text-gray-500">10 Winners</div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all hover:scale-105 shadow-md">
                  View Full Results & Consolation Prizes
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Results & Bumper */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Results Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold">Recent Lottery Results</h2>
              </div>
              
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Lottery</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Date</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">1st Prize</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Amount</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-700">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentResults.map((result) => (
                        <tr key={result.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-medium text-green-700">{result.name}</div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{result.date}</td>
                          <td className="py-4 px-4">
                            <div className="font-mono font-bold">{result.prize}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-semibold text-yellow-600">{result.amount}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              result.status === 'Completed' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {result.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-green-600 font-medium hover:text-green-700 flex items-center justify-center gap-2 mx-auto">
                    View All Results <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Bumper Lotteries */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-4">
                <h2 className="text-xl font-bold">Bumper Lotteries 2025-2026</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {bumperLotteries.map((bumper) => (
                    <div key={bumper.id} className={`bg-gradient-to-r ${bumper.color} rounded-xl p-6 text-white shadow-md hover:shadow-xl transition-shadow`}>
                      <div className="text-center">
                        <div className="text-lg font-bold mb-3">{bumper.name}</div>
                        <div className="text-3xl font-bold mb-4">{bumper.prize}</div>
                        <div className="text-sm mb-5">Draw: {bumper.drawDate}</div>
                        <button className={`w-full py-2 rounded-lg font-semibold transition-all ${
                          bumper.status === 'Active'
                            ? 'bg-white text-yellow-600 hover:bg-gray-100'
                            : 'bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-70'
                        }`}>
                          {bumper.status === 'Active' ? 'Buy Tickets Now' : 
                           bumper.status === 'Completed' ? 'View Results' : 'Coming Soon'}
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
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <FaNewspaper />
                  Latest News
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {latestNews.map((newsItem) => (
                    <div key={newsItem.id} className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-gray-500">{newsItem.date}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {newsItem.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-800 hover:text-green-600 cursor-pointer mb-2">
                        {newsItem.title}
                      </h3>
                      <p className="text-sm text-gray-600">{newsItem.excerpt}</p>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 text-center text-green-600 font-medium hover:text-green-700 flex items-center justify-center gap-2">
                  Read All News <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Downloads Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center gap-3">
                  <FaDownload />
                  Downloads
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {downloads.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                      <div>
                        <div className="font-medium text-gray-700">{file.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {file.format} • {file.size}
                        </div>
                      </div>
                      <FaDownload className="text-gray-400 hover:text-purple-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ad Space - Airo by GoDaddy */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">Start up? Start with Airo</h3>
              <p className="mb-5 opacity-90 text-sm">
                Discover how Airo's intelligent tools simplify every step of building your online presence
              </p>
              <div className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg inline-block mb-4">
                GoDaddy.com
              </div>
              <br />
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Shop Now →
              </button>
            </div>

            {/* Play Jamir Online Ad */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">Play Jamir Online</h3>
              <p className="mb-5 opacity-90 text-sm">
                Sponsored by Jamir.io - Play and Win Exciting Prizes
              </p>
              <button className="w-full bg-white text-teal-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Play Now →
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">Quick Access Links</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm py-4 rounded-lg font-medium transition-all hover:scale-105 border border-white border-opacity-20"
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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kerala Lotteries</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Official website of Kerala State Lottery Department. Providing daily results, 
                prize information, and ticket booking services since 1967.
              </p>
              <div className="flex space-x-3">
                {footerLinks.socialMedia.map((social, index) => (
                  <button
                    key={index}
                    className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Important</h4>
              <ul className="space-y-2">
                {footerLinks.importantLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Kerala State Lottery Department<br />
                    Thiruvananthapuram, Kerala - 695001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91-471-2321132</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@keralalotteries.net</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Kerala State Lottery Department. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This is the official website of Kerala State Lottery Department. 
              All lottery results are verified and authenticated.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              www.keralalotteries.net
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button 
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </button>
        <button 
          className="bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all hover:scale-110"
          title="Call Helpline"
        >
          <FaPhone className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default KeralaLottery;
