import React, { useEffect, useState } from 'react';
import { 
  FaShoppingCart, 
  FaUser, 
  FaMapMarkerAlt, 
  FaCreditCard, 
  FaLeaf, 
  FaTruck, 
  FaLock,
  FaPaypal,
  FaGoogle,
  FaApple,
  FaArrowLeft,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { loadRazorpayScript, RAZORPAY_KEY } from './razorpayConfig';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('delivery');

  const navigate = useNavigate();

  // States for districts based on selected state
  const [districts, setDistricts] = useState([]);

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    landmark: '',
    pincode: '',
    city: '',
    district: '',
    state: '',
    paymentMethod: 'cash'
  });

  // Sample cart items
  const sampleCartItems = [
    {
      id: 1,
      title: "Fresh Organic Tomatoes",
      price: 45,
      quantity: 2,
      unit: "kg",
      image: "🍅"
    },
    {
      id: 2,
      title: "Premium Potatoes",
      price: 30,
      quantity: 1,
      unit: "kg",
      image: "🥔"
    },
    {
      id: 3,
      title: "Fresh Spinach Leaves",
      price: 25,
      quantity: 3,
      unit: "bunch",
      image: "🥬"
    }
  ];

  // District data
  const districtData = {
    'bihar': ['Nalanda', 'Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur'],
    'uttar pradesh': ['Gorakhpur', 'Lucknow', 'Varanasi', 'Kanpur', 'Agra']
  };

  // Calculate totals with delivery charge rules
  const calculateTotals = () => {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    let deliveryCharge = 0;
    let minimumOrderMessage = '';
    
    if (subtotal > 0 && subtotal < 100) {
      minimumOrderMessage = 'Minimum order amount is ₹100. Please add more items.';
    } else if (subtotal >= 100 && subtotal < 150) {
      deliveryCharge = 25;
    } else if (subtotal >= 150 && subtotal < 200) {
      deliveryCharge = 10;
    } else if (subtotal >= 200) {
      deliveryCharge = 0;
    }
    
    const total = subtotal + deliveryCharge;
    
    return { 
      subtotal, 
      deliveryCharge, 
      total,
      minimumOrderMessage,
      isMinimumOrderMet: subtotal >= 100 || subtotal === 0
    };
  };

  const { 
    subtotal, 
    deliveryCharge, 
    total,
    minimumOrderMessage,
    isMinimumOrderMet 
  } = calculateTotals();

  // Load cart items on component mount
  useEffect(() => {
    setCartItems(sampleCartItems);
    loadRazorpayScript();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));

    if (name === 'state') {
      setDistricts(districtData[value] || []);
      setFormData(prev => ({ ...prev, district: '' }));
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setSubmissionMessage('❌ Please enter your full name');
      return false;
    }
    if (!formData.mobile.match(/^\d{10}$/)) {
      setSubmissionMessage('❌ Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setSubmissionMessage('❌ Please enter a valid email address');
      return false;
    }
    if (!formData.address.trim()) {
      setSubmissionMessage('❌ Please enter your delivery address');
      return false;
    }
    if (!formData.pincode.match(/^\d{6}$/)) {
      setSubmissionMessage('❌ Please enter a valid 6-digit pincode');
      return false;
    }
    if (!formData.state) {
      setSubmissionMessage('❌ Please select your state');
      return false;
    }
    if (!formData.district) {
      setSubmissionMessage('❌ Please select your district');
      return false;
    }
    if (!formData.city.trim()) {
      setSubmissionMessage('❌ Please enter your city');
      return false;
    }
    
    if (!isMinimumOrderMet) {
      setSubmissionMessage(`❌ ${minimumOrderMessage}`);
      return false;
    }
    
    return true;
  };

  // Payment handlers
  const handleRazorpayPayment = async () => {
    if (!validateForm()) return;
    setPaymentProcessing(true);
    // Payment logic here
    setPaymentProcessing(false);
  };

  const handleUPIPayment = () => {
    if (!validateForm()) return;
    setSubmissionMessage('Please pay ₹' + total + ' to UPI ID: gpmart@upi');
  };

  const completeOrder = async (paymentStatus) => {
    setIsSubmitting(true);
    
    try {
      const orderData = {
        ...formData,
        cartItems,
        orderTotal: total,
        deliveryCharge: deliveryCharge,
        orderDate: new Date().toISOString(),
        orderId: 'GPM' + Date.now(),
        status: 'confirmed',
        paymentStatus: paymentStatus,
        paymentMethod: formData.paymentMethod
      };

      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmissionMessage('✅ Order placed successfully! Your order will be delivered within 4 hours. Order ID: ' + orderData.orderId);
      
      setTimeout(() => {
        setSubmissionMessage('');
        setFormData({
          fullName: '',
          mobile: '',
          email: '',
          address: '',
          landmark: '',
          pincode: '',
          city: '',
          district: '',
          state: '',
          paymentMethod: 'cash'
        });
      }, 5000);

    } catch (error) {
      setSubmissionMessage('❌ Failed to place order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.paymentMethod === 'cash') {
      if (!validateForm()) return;
      setIsSubmitting(true);
      await completeOrder('pending');
    } else if (formData.paymentMethod === 'card') {
      handleRazorpayPayment();
    } else if (formData.paymentMethod === 'upi') {
      handleUPIPayment();
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Mobile Navigation
  const MobileNav = () => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex justify-around py-3">
        <button 
          onClick={() => setActiveSection('delivery')}
          className={`flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'delivery' ? 'text-green-600 bg-green-50' : 'text-gray-600'}`}
        >
          <FaMapMarkerAlt className="text-lg" />
          <span className="text-xs mt-1">Delivery</span>
        </button>
        <button 
          onClick={() => setActiveSection('order')}
          className={`flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'order' ? 'text-green-600 bg-green-50' : 'text-gray-600'}`}
        >
          <FaShoppingCart className="text-lg" />
          <span className="text-xs mt-1">Order</span>
        </button>
        <button 
          onClick={() => setActiveSection('payment')}
          className={`flex flex-col items-center px-4 py-2 rounded-lg ${activeSection === 'payment' ? 'text-green-600 bg-green-50' : 'text-gray-600'}`}
        >
          <FaCreditCard className="text-lg" />
          <span className="text-xs mt-1">Payment</span>
        </button>
      </div>
    </div>
  );

  // Mobile Header
  const MobileHeader = () => (
    <div className="lg:hidden bg-green-600 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="p-2"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <div className="text-center flex-1">
          <h1 className="text-xl font-bold">Checkout</h1>
          <p className="text-xs opacity-90">Complete your purchase</p>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-100 pb-20 lg:pb-0">
      <MobileHeader />
      
      {/* Main Content */}
      <div className="lg:max-w-6xl lg:mx-auto lg:p-6">
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center text-green-900">
            Checkout
          </h1>
          <p className="text-base lg:text-lg text-gray-600 text-center mb-8">
            Complete your purchase with fresh vegetables delivered to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-4 lg:px-0">
          {/* Order Summary - Always visible on desktop, conditionally on mobile */}
          <div className={`lg:col-span-1 ${activeSection !== 'order' && 'hidden lg:block'}`}>
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-md border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <FaShoppingCart className="text-green-600" />
                  Order Summary
                </h2>
                <button 
                  onClick={() => setActiveSection('delivery')}
                  className="lg:hidden text-green-600 font-semibold text-sm"
                >
                  Continue
                </button>
              </div>
              
              {/* Cart Items */}
              <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6 max-h-60 lg:max-h-none overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 lg:p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">{item.image}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base truncate">{item.title}</h3>
                      <p className="text-green-600 font-bold text-sm lg:text-base">₹{item.price}/{item.unit}</p>
                    </div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-sm"
                      >
                        -
                      </button>
                      <span className="w-6 lg:w-8 text-center font-semibold text-sm lg:text-base">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 text-sm"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-sm lg:text-base">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-200 pt-3 lg:pt-4 space-y-2 lg:space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm lg:text-base">Subtotal:</span>
                  <span className="font-semibold text-sm lg:text-base">₹{subtotal}</span>
                </div>
                
                {subtotal > 0 && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm lg:text-base">Delivery Charge:</span>
                      <span className={deliveryCharge === 0 ? "text-green-600 font-bold text-sm lg:text-base" : "font-semibold text-sm lg:text-base"}>
                        {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
                      </span>
                    </div>
                    
                    {!isMinimumOrderMet && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 lg:p-3 mt-1 lg:mt-2">
                        <p className="text-yellow-700 text-xs lg:text-sm font-medium">
                          ⚠️ {minimumOrderMessage}
                        </p>
                      </div>
                    )}
                    
                    {subtotal >= 100 && subtotal < 200 && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 lg:p-3">
                        <p className="text-blue-700 text-xs lg:text-sm">
                          💡 Add ₹{200 - subtotal} more for FREE delivery!
                        </p>
                      </div>
                    )}
                  </>
                )}
                
                <div className="flex justify-between text-base lg:text-lg font-bold border-t border-gray-300 pt-2 lg:pt-3">
                  <span>Total:</span>
                  <span className="text-green-600">₹{total}</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FaTruck className="text-green-600" />
                  <span className="font-semibold text-sm lg:text-base">Delivery Info</span>
                </div>
                
                {/* Delivery Charges Table */}
                <div className="mt-3 pt-3 border-t border-green-200">
                  <h4 className="text-xs lg:text-sm font-bold text-gray-700 mb-2">Delivery Charges:</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs lg:text-sm">
                      <span>Below ₹100</span>
                      <span className="text-red-600 font-medium">Minimum ₹100 required</span>
                    </div>
                    <div className="flex justify-between items-center text-xs lg:text-sm">
                      <span>₹100 - ₹149</span>
                      <span>₹25</span>
                    </div>
                    <div className="flex justify-between items-center text-xs lg:text-sm">
                      <span>₹150 - ₹199</span>
                      <span>₹10</span>
                    </div>
                    <div className="flex justify-between items-center text-xs lg:text-sm">
                      <span>₹200 & above</span>
                      <span className="text-green-600 font-bold">FREE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form - Main content area */}
          <div className={`lg:col-span-2 ${activeSection !== 'delivery' && activeSection !== 'payment' ? 'hidden lg:block' : ''}`}>
            <div id="checkout-form" className="bg-white p-4 lg:p-6 rounded-xl shadow-md border border-green-200">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                <FaUser className="text-green-600 text-xl lg:text-2xl" />
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800">
                    Delivery Information
                  </h2>
                  <p className="text-gray-600 text-sm lg:text-base">Enter your details for fresh vegetable delivery</p>
                </div>
              </div>

              {submissionMessage && (
                <div className={`text-center py-3 lg:py-4 px-4 rounded-lg mb-4 ${
                  submissionMessage.includes('✅') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : submissionMessage.includes('Please pay')
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  <p className="text-base lg:text-lg font-semibold">{submissionMessage}</p>
                  {submissionMessage.includes('Please pay') && (
                    <div className="mt-2 lg:mt-3">
                      <p className="text-xs lg:text-sm mb-2">Use any UPI app to complete payment</p>
                      <button 
                        onClick={() => completeOrder('paid')}
                        className="bg-green-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-xs lg:text-sm hover:bg-green-700"
                      >
                        I have paid
                      </button>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4 lg:space-y-6">
                {/* Personal Information */}
                {activeSection === 'delivery' && (
                  <>
                    <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
                      <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                        <FaUser className="text-green-600" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                        <div>
                          <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">Full Name *</label>
                          <input 
                            type="text" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleFormChange} 
                            required 
                            className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">Mobile Number *</label>
                          <input 
                            type="tel" 
                            name="mobile" 
                            value={formData.mobile} 
                            onChange={handleFormChange} 
                            required 
                            pattern="[0-9]{10}"
                            maxLength="10"
                            className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                            placeholder="10-digit mobile number"
                          />
                        </div>
                        <div className="lg:col-span-2">
                          <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">Email ID *</label>
                          <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleFormChange} 
                            required 
                            className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
                      <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-green-600" />
                        Delivery Address
                      </h3>
                      <div className="space-y-3 lg:space-y-4">
                        <div>
                          <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">Full Address *</label>
                          <textarea 
                            name="address" 
                            value={formData.address} 
                            onChange={handleFormChange} 
                            required 
                            className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                            rows="2" 
                            placeholder="Complete delivery address"
                          />
                        </div>
                        <div>
                          <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">Landmark (Optional)</label>
                          <input 
                            type="text" 
                            name="landmark" 
                            value={formData.landmark} 
                            onChange={handleFormChange} 
                            className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                            placeholder="Nearby landmark"
                          />
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                          <div className="col-span-2 lg:col-span-1">
                            <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">Pincode *</label>
                            <input 
                              type="text" 
                              name="pincode" 
                              value={formData.pincode} 
                              onChange={handleFormChange} 
                              required 
                              pattern="[0-9]{6}"
                              maxLength="6"
                              className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                              placeholder="6-digit pincode"
                            />
                          </div>
                          <div className="col-span-2 lg:col-span-1">
                            <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">City *</label>
                            <input 
                              type="text" 
                              name="city" 
                              value={formData.city} 
                              onChange={handleFormChange} 
                              required 
                              className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base" 
                              placeholder="Your city"
                            />
                          </div>
                          <div className="col-span-2 lg:col-span-1">
                            <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">State *</label>
                            <select 
                              name="state" 
                              value={formData.state} 
                              onChange={handleFormChange} 
                              required 
                              className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base bg-white"
                            >
                              <option value="">Select State</option>
                              <option value="bihar">Bihar</option>
                              <option value="uttar pradesh">Uttar Pradesh</option>
                            </select>
                          </div>
                          <div className="col-span-2 lg:col-span-1">
                            <label className="block mb-1 lg:mb-2 text-gray-700 font-medium text-sm lg:text-base">District *</label>
                            <select 
                              name="district" 
                              value={formData.district} 
                              onChange={handleFormChange} 
                              required 
                              disabled={!formData.state}
                              className="w-full px-3 lg:px-4 py-2 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm lg:text-base bg-white"
                            >
                              <option value="">Select District</option>
                              {districts.map((district) => (
                                <option key={district} value={district.toLowerCase()}>
                                  {district}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons for Mobile */}
                    <div className="lg:hidden flex justify-between mt-6">
                      <button 
                        type="button"
                        onClick={() => setActiveSection('order')}
                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300"
                      >
                        ← Back to Order
                      </button>
                      <button 
                        type="button"
                        onClick={() => setActiveSection('payment')}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
                      >
                        Continue to Payment →
                      </button>
                    </div>
                  </>
                )}

                {/* Payment Method */}
                {activeSection === 'payment' && (
                  <div className="bg-green-50 p-3 lg:p-4 rounded-lg">
                    <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3 lg:mb-4 flex items-center gap-2">
                      <FaCreditCard className="text-green-600" />
                      Payment Method
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-green-100">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="cash" 
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleFormChange}
                          className="text-green-600"
                        />
                        <div>
                          <span className="font-medium text-sm lg:text-base">Cash on Delivery</span>
                          <p className="text-gray-600 text-xs lg:text-sm">Pay when you receive your order</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-green-100">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="card" 
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleFormChange}
                          className="text-green-600"
                        />
                        <div>
                          <span className="font-medium text-sm lg:text-base">Credit/Debit Card</span>
                          <div className="flex gap-2 mt-1">
                            <FaLock className="text-green-600 text-sm" />
                            <span className="text-gray-600 text-xs lg:text-sm">Secure payment via Razorpay</span>
                          </div>
                        </div>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-green-100">
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          value="upi" 
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleFormChange}
                          className="text-green-600"
                        />
                        <div>
                          <span className="font-medium text-sm lg:text-base">UPI Payment</span>
                          <div className="flex items-center gap-2 mt-1">
                            <FaGoogle className="text-blue-500 text-sm" />
                            <FaPaypal className="text-blue-700 text-sm" />
                            <FaApple className="text-gray-800 text-sm" />
                            <span className="text-gray-600 text-xs lg:text-sm">GPay, PhonePe, Paytm, etc.</span>
                          </div>
                        </div>
                      </label>
                    </div>

                    {/* Navigation Buttons for Mobile */}
                    <div className="lg:hidden flex justify-between mt-6">
                      <button 
                        type="button"
                        onClick={() => setActiveSection('delivery')}
                        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300"
                      >
                        ← Back to Delivery
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button 
                    type="submit" 
                    disabled={
                      isSubmitting || 
                      paymentProcessing || 
                      cartItems.length === 0 || 
                      !isMinimumOrderMet
                    }
                    className={`bg-green-600 hover:bg-green-700 px-6 lg:px-8 py-3 rounded-lg font-bold text-base lg:text-lg text-white transition-colors w-full lg:w-auto ${
                      isSubmitting || paymentProcessing || cartItems.length === 0 || !isMinimumOrderMet 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Placing Order...
                      </span>
                    ) : paymentProcessing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Payment...
                      </span>
                    ) : formData.paymentMethod === 'cash' ? (
                      `Place Order - ₹${total}`
                    ) : formData.paymentMethod === 'card' ? (
                      `Pay Now - ₹${total}`
                    ) : (
                      `Pay via UPI - ₹${total}`
                    )}
                  </button>
                  
                  {cartItems.length === 0 ? (
                    <p className="text-red-500 mt-2 text-sm lg:text-base">Your cart is empty. Add some vegetables to place an order.</p>
                  ) : !isMinimumOrderMet ? (
                    <p className="text-yellow-600 mt-2 text-sm lg:text-base">{minimumOrderMessage}</p>
                  ) : (
                    <p className="text-green-600 mt-2 text-sm lg:text-base flex items-center justify-center gap-2">
                      <FaLock className="text-sm" />
                      Your payment is secure and encrypted
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
}

export default Checkout;