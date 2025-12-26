import React, { useState } from "react";
import { FaHeart, FaSearch, FaBars, FaTimes, FaShoppingCart, FaUser, FaStar, FaTruck, FaLeaf, FaShieldAlt, FaRecycle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import tomoto from '../assets/tomoto.jpg'; // ✅ Your logo
import Broccoli from '../assets/Broccoli.jpeg';
import coriander from '../assets/Coriander.jpg';
import Beetroot from '../assets/Fresh Beetroot.avif';
import Cabbage from '../assets/Fresh Cabbage.webp';
import Cucumber from '../assets/Fresh Cucumber.jpg';
import Garlic from '../assets/Fresh Garlic.webp';
import Ginger from '../assets/Fresh Ginger.jpeg';
import Grapes from '../assets/Fresh Grapes.jpeg';
import Beans from '../assets/Fresh Green Beans.jpg';
import Chilies from '../assets/Fresh Green Chilies.webp';
import Peas from '../assets/Fresh Green Peas.jpeg';
import Lemons from '../assets/Fresh Lemons.webp';
import Mushrooms from '../assets/Fresh Mushrooms.jpg';
import Pomegranate from '../assets/Fresh Pomegranate.jpeg';
import Radish from '../assets/Fresh Radish.jpg';
import Peppers from '../assets/Green Bell Peppers.jpeg';
import Kiwi from '../assets/kiwi.jpeg';


const VegetableEcommerce = () => {
  const categories = [
    "All", "Fresh Vegetables", "Leafy Greens", "Organic Fruits", "Root Vegetables", 
    "Seasonal Specials", "Exotic Vegetables", "Herbs", "Local Produce", "Premium Quality"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);
  
  // Use navigate hook for redirection
  const navigate = useNavigate();

  // Sample product data with HD image URLs
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fresh Organic Tomatoes",
      category: "Fresh Vegetables",
      image: tomoto,
      price: 45,
      originalPrice: 60,
      unit: "kg",
      rating: 4.5,
      reviews: 120,
      description: "Fresh organic tomatoes grown locally with no pesticides",
      inStock: true, // Change to false to mark out of stock
      discount: 25,
      isFavorite: false,
    },
    {
      id: 2,
      title: "Premium Potatoes",
      category: "Root Vegetables",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      price: 30,
      originalPrice: 35,
      unit: "kg",
      rating: 4.2,
      reviews: 89,
      description: "Fresh potatoes perfect for all your cooking needs",
      inStock: true,
      discount: 14,
      isFavorite: false,
    },
    {
      id: 3,
      title: "Fresh Spinach Leaves",
      category: "Leafy Greens",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
      price: 25,
      originalPrice: 30,
      unit: "bunch",
      rating: 4.7,
      reviews: 156,
      description: "Nutrient-rich fresh spinach leaves, packed with iron",
      inStock: true,
      discount: 17,
      isFavorite: false,
    },
    {
      id: 4,
      title: "Organic Apples",
      category: "Organic Fruits",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop",
      price: 80,
      originalPrice: 100,
      unit: "kg",
      rating: 4.8,
      reviews: 200,
      description: "Sweet and crunchy organic apples",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 5,
      title: "Fresh Coriander",
      category: "Herbs",
      image: coriander,
      price: 10,
      originalPrice: 12,
      unit: "bunch",
      rating: 4.3,
      reviews: 67,
      description: "Aromatic fresh coriander for your dishes",
      inStock: true,
      discount: 17,
      isFavorite: false,
    },
    {
      id: 6,
      title: "Broccoli",
      category: "Exotic Vegetables",
      image: Broccoli,
      price: 60,
      originalPrice: 75,
      unit: "piece",
      rating: 4.4,
      reviews: 98,
      description: "Fresh green broccoli rich in nutrients",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 7,
      title: "Carrots",
      category: "Root Vegetables",
      image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=300&fit=crop",
      price: 35,
      originalPrice: 40,
      unit: "kg",
      rating: 4.6,
      reviews: 134,
      description: "Sweet and crunchy fresh carrots",
      inStock: true,
      discount: 13,
      isFavorite: false,
    },
    {
      id: 8,
      title: "Bananas",
      category: "Organic Fruits",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      price: 50,
      originalPrice: 60,
      unit: "dozen",
      rating: 4.5,
      reviews: 178,
      description: "Fresh ripe bananas, perfect for daily consumption",
      inStock: true,
      discount: 17,
      isFavorite: false,
    },
    // NEW VEGETABLES AND FRUITS ADDED
    {
      id: 9,
      title: "Fresh Cauliflower",
      category: "Fresh Vegetables",
      image: "https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=400&h=300&fit=crop",
      price: 40,
      originalPrice: 50,
      unit: "piece",
      rating: 4.3,
      reviews: 95,
      description: "Fresh white cauliflower, perfect for curries",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 10,
      title: "Green Bell Peppers",
      category: "Fresh Vegetables",
      image: Peppers,
      price: 65,
      originalPrice: 80,
      unit: "kg",
      rating: 4.4,
      reviews: 78,
      description: "Crisp green bell peppers for cooking",
      inStock: true,
      discount: 19,
      isFavorite: false,
    },
    {
      id: 11,
      title: "Fresh Onions",
      category: "Root Vegetables",
      image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=300&fit=crop",
      price: 28,
      originalPrice: 35,
      unit: "kg",
      rating: 4.2,
      reviews: 145,
      description: "Fresh red onions for daily cooking",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 12,
      title: "Fresh Garlic",
      category: "Herbs",
      image: Garlic,
      price: 120,
      originalPrice: 150,
      unit: "kg",
      rating: 4.6,
      reviews: 89,
      description: "Fresh garlic bulbs with strong flavor",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 13,
      title: "Fresh Green Beans",
      category: "Fresh Vegetables",
      image: Beans,
      price: 55,
      originalPrice: 65,
      unit: "kg",
      rating: 4.5,
      reviews: 67,
      description: "Tender green beans, rich in fiber",
      inStock: true,
      discount: 15,
      isFavorite: false,
    },
    {
      id: 14,
      title: "Fresh Cabbage",
      category: "Leafy Greens",
      image: Cabbage,
      price: 20,
      originalPrice: 25,
      unit: "piece",
      rating: 4.1,
      reviews: 112,
      description: "Fresh green cabbage for salads and cooking",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 15,
      title: "Fresh Green Peas",
      category: "Fresh Vegetables",
      image: Peas,
      price: 75,
      originalPrice: 90,
      unit: "kg",
      rating: 4.7,
      reviews: 98,
      description: "Sweet green peas, freshly shelled",
      inStock: true,
      discount: 17,
      isFavorite: false,
    },
    {
      id: 16,
      title: "Fresh Cucumber",
      category: "Fresh Vegetables",
      image: Cucumber,
      price: 15,
      originalPrice: 20,
      unit: "piece",
      rating: 4.3,
      reviews: 134,
      description: "Fresh crispy cucumber for salads",
      inStock: true,
      discount: 25,
      isFavorite: false,
    },
    {
      id: 17,
      title: "Fresh Radish",
      category: "Root Vegetables",
      image: Radish,
      price: 25,
      originalPrice: 30,
      unit: "bunch",
      rating: 4.0,
      reviews: 56,
      description: "Fresh red radish with peppery flavor",
      inStock: true,
      discount: 17,
      isFavorite: false,
    },
    {
      id: 18,
      title: "Fresh Beetroot",
      category: "Root Vegetables",
      image: Beetroot,
      price: 35,
      originalPrice: 45,
      unit: "kg",
      rating: 4.4,
      reviews: 78,
      description: "Fresh beetroot, rich in nutrients",
      inStock: true,
      discount: 22,
      isFavorite: false,
    },
    {
      id: 19,
      title: "Fresh Ginger",
      category: "Herbs",
      image: Ginger,
      price: 110,
      originalPrice: 130,
      unit: "kg",
      rating: 4.5,
      reviews: 92,
      description: "Fresh ginger root with strong aroma",
      inStock: true,
      discount: 15,
      isFavorite: false,
    },
    {
      id: 20,
      title: "Fresh Green Chilies",
      category: "Herbs",
      image: Chilies,
      price: 40,
      originalPrice: 50,
      unit: "100g",
      rating: 4.2,
      reviews: 45,
      description: "Spicy green chilies for cooking",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 21,
      title: "Fresh Lemons",
      category: "Organic Fruits",
      image: Lemons,
      price: 30,
      originalPrice: 40,
      unit: "dozen",
      rating: 4.6,
      reviews: 167,
      description: "Fresh juicy lemons, rich in vitamin C",
      inStock: true,
      discount: 25,
      isFavorite: false,
    },
    {
      id: 22,
      title: "Fresh Oranges",
      category: "Organic Fruits",
      image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop",
      price: 70,
      originalPrice: 85,
      unit: "kg",
      rating: 4.7,
      reviews: 189,
      description: "Sweet and juicy oranges",
      inStock: true,
      discount: 18,
      isFavorite: false,
    },
    {
      id: 23,
      title: "Fresh Grapes",
      category: "Organic Fruits",
      image: Grapes,
      price: 90,
      originalPrice: 110,
      unit: "kg",
      rating: 4.8,
      reviews: 156,
      description: "Sweet seedless green grapes",
      inStock: true,
      discount: 18,
      isFavorite: false,
    },
    {
      id: 24,
      title: "Fresh Pomegranate",
      category: "Organic Fruits",
      image: Pomegranate,
      price: 120,
      originalPrice: 150,
      unit: "kg",
      rating: 4.9,
      reviews: 134,
      description: "Fresh juicy pomegranate with red seeds",
      inStock: true,
      discount: 20,
      isFavorite: false,
    },
    {
      id: 25,
      title: "Fresh Mangoes",
      category: "Seasonal Specials",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
      price: 100,
      originalPrice: 130,
      unit: "kg",
      rating: 4.9,
      reviews: 245,
      description: "Sweet alphonso mangoes, seasonal special",
      inStock: true,
      discount: 23,
      isFavorite: false,
    },
    {
      id: 26,
      title: "Fresh Watermelon",
      category: "Seasonal Specials",
      image: Lemons,
      price: 25,
      originalPrice: 35,
      unit: "kg",
      rating: 4.7,
      reviews: 178,
      description: "Sweet and juicy watermelon",
      inStock: true,
      discount: 29,
      isFavorite: false,
    },
    {
      id: 27,
      title: "Fresh Pineapple",
      category: "Exotic Vegetables",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop",
      price: 45,
      originalPrice: 60,
      unit: "piece",
      rating: 4.6,
      reviews: 134,
      description: "Sweet and tangy fresh pineapple",
      inStock: true,
      discount: 25,
      isFavorite: false,
    },
    {
      id: 28,
      title: "Fresh Avocado",
      category: "Exotic Vegetables",
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop",
      price: 150,
      originalPrice: 180,
      unit: "piece",
      rating: 4.5,
      reviews: 89,
      description: "Creamy ripe avocado, perfect for salads",
      inStock: true,
      discount: 17,
      isFavorite: false,
    },
    {
      id: 29,
      title: "Fresh Mushrooms",
      category: "Exotic Vegetables",
      image: Mushrooms,
      price: 60,
      originalPrice: 100,
      unit: "200g",
      rating: 4.4,
      reviews: 67,
      description: "Fresh white button mushrooms",
      inStock: true,
      discount: 15,
      isFavorite: false,
    },
    {
      id: 30,
      title: "Fresh Zucchini",
      category: "Exotic Vegetables",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      price: 65,
      originalPrice: 80,
      unit: "kg",
      rating: 4.3,
      reviews: 45,
      description: "Fresh green zucchini for healthy cooking",
      inStock: false,
      discount: 19,
      isFavorite: false,
    },
    // OUT OF STOCK EXAMPLES (Change inStock to false manually)
    {
      id: 31,
      title: "Fresh Strawberries",
      category: "Seasonal Specials",
      image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&h=300&fit=crop",
      price: 120,
      originalPrice: 150,
      unit: "250g",
      rating: 4.8,
      reviews: 156,
      description: "Fresh sweet strawberries",
      inStock: false, // OUT OF STOCK - Change this to true when available
      discount: 20,
      isFavorite: false,
    },
    {
      id: 32,
      title: "Fresh Kiwi",
      category: "Exotic Vegetables",
      image: Kiwi,
      price: 95,
      originalPrice: 120,
      unit: "dozen",
      rating: 4.6,
      reviews: 89,
      description: "Fresh green kiwi fruits",
      inStock: false, // OUT OF STOCK - Change this to true when available
      discount: 21,
      isFavorite: false,
    }
  ]);

  // Function to manually toggle stock status
  const toggleStockStatus = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, inStock: !product.inStock }
        : product
    ));
  };

  const toggleFavorite = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    ));
  };

  const addToCart = (product) => {
    if (!product.inStock) {
      alert(`${product.title} is currently out of stock!`);
      return;
    }
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    
    // Navigate to order page after adding to cart
    navigate('/order');
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const features = [
    {
      icon: <FaTruck className="text-2xl" />,
      title: "Free Delivery",
      description: "On orders above ₹499"
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Farm Fresh",
      description: "Direct from local farms"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Quality Checked",
      description: "100% quality assurance"
    },
    {
      icon: <FaRecycle className="text-2xl" />,
      title: "Eco Friendly",
      description: "Sustainable packaging"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full bg-green-600 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
        {/* Left Section - Menu & Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-1">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-green-700 transition-colors lg:hidden text-white"
            aria-label="Toggle menu"
          >
            <FaBars className="text-lg sm:text-xl" />
          </button>
          
          <Link to="/" className="flex items-center space-x-2 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 font-bold text-sm">VG</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold truncate text-white">VeggieMart</h1>
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:block flex-1 max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search vegetables, fruits, leafy greens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-900 px-4 py-2 pl-10 pr-4 rounded-full border border-green-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Right Section - Cart & User */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Mobile Search Button */}
          <button 
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 rounded-lg hover:bg-green-700 transition-colors flex-shrink-0 text-white"
            aria-label="Search"
          >
            <FaSearch className="text-lg sm:text-xl" />
          </button>

          {/* Cart */}
          <Link to="/order" className="relative">
            <button className="p-2 rounded-lg hover:bg-green-700 transition-colors text-white relative">
              <FaShoppingCart className="text-lg sm:text-xl" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </Link>

          {/* User */}
          <button className="p-2 rounded-lg hover:bg-green-700 transition-colors text-white">
            <FaUser className="text-lg sm:text-xl" />
          </button>
        </div>
      </header>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="md:hidden px-3 py-2 bg-green-500 border-b border-green-400 sticky top-16 z-40">
          <div className="relative">
            <input
              type="text"
              placeholder="Search vegetables, fruits, leafy greens..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-900 px-4 py-3 pl-10 pr-4 rounded-lg border border-green-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 text-base"
              autoFocus
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button 
              onClick={() => setShowMobileSearch(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:block w-64 bg-white h-[calc(100vh-80px)] sticky top-20 overflow-y-auto flex-shrink-0 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-800">Categories</h2>
          </div>
          <div className="space-y-1 p-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white font-bold shadow-lg"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Stock Management Section */}
          <div className="p-4 border-t border-gray-200 mt-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Stock Management</h2>
            <p className="text-sm text-gray-600 mb-3">
              Click on products below to toggle stock status:
            </p>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {products.slice(0, 8).map(product => (
                <div
                  key={product.id}
                  onClick={() => toggleStockStatus(product.id)}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                    product.inStock ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <span className="text-sm font-medium truncate flex-1">{product.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.inStock 
                      ? 'bg-green-200 text-green-800' 
                      : 'bg-red-200 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-green-600">
            <h2 className="text-xl font-bold text-white">Categories</h2>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-green-700 text-white"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <div className="overflow-y-auto h-full pb-20">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-4 border-b border-gray-100 transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white font-bold"
                    : "text-gray-700 hover:bg-green-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Fresh Vegetables & Fruits
              </h1>
              <p className="text-xl sm:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                Farm to table freshness delivered to your doorstep within hours
              </p>
              <Link to="/order">
                <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors hover:scale-105 shadow-lg">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white py-8 border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Category Scroller - Mobile & Tablet */}
          <div className="lg:hidden w-full overflow-x-auto bg-white sticky top-[72px] sm:top-[80px] z-30 scrollbar-hide border-b border-gray-200">
            <div className="flex space-x-2 px-3 py-3">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    selectedCategory === cat
                      ? "bg-green-600 text-white font-bold shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="mb-6 sm:mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {selectedCategory === "All" ? "All Fresh Products" : selectedCategory}
                    {searchQuery && ` for "${searchQuery}"`}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base mt-1">
                    {filteredProducts.length} products available
                  </p>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 group relative"
                  >
                    {/* Out of Stock Overlay */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center rounded-xl">
                        <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          Out of Stock
                        </div>
                      </div>
                    )}
                    
                    <div className="relative overflow-hidden bg-green-50">
                      {/* HD Image */}
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop";
                        }}
                      />
                      
                      {/* Discount Badge */}
                      {product.discount > 0 && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                      
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200 hover:scale-110 shadow-md z-20"
                      >
                        <FaHeart className={product.isFavorite ? "text-red-500" : "text-gray-400"} />
                      </button>

                      {/* Stock Toggle Button for Admin */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStockStatus(product.id);
                        }}
                        className="absolute bottom-3 right-3 bg-blue-500 text-white p-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
                        title="Toggle Stock Status"
                      >
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 text-base line-clamp-2 group-hover:text-green-600 transition-colors mb-2 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                        <span className="text-xs text-gray-500 ml-auto">/{product.unit}</span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            <FaStar className="fill-current" />
                            <FaStar className="fill-current" />
                            <FaStar className="fill-current" />
                            <FaStar className="fill-current" />
                            <FaStar className={product.rating >= 4.5 ? "fill-current" : "text-gray-300"} />
                          </div>
                          <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(product)}
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                          product.inStock
                            ? "bg-green-600 hover:bg-green-700 text-white hover:scale-105 shadow-md"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16 sm:py-20 md:py-24">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-lg">
                    <FaSearch className="text-3xl sm:text-4xl text-gray-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                  <p className="text-gray-600 text-base max-w-md mx-auto">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Cart Button */}
      <Link to="/order">
        <div className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-colors hover:scale-110 z-40">
          <div className="relative">
            <FaShoppingCart className="text-xl" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {getCartItemsCount()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VegetableEcommerce;