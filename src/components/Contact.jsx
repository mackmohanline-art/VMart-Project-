import React, { useState } from "react";

const WeddingCardApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [bookingStep, setBookingStep] = useState("categories");

  // Categories of cards
  const categories = [
    {
      id: 1,
      name: "Shadi Card",
      type: "Wedding",
      icon: "💍",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
      description: "Beautiful wedding invitation cards for your special day",
      cardCount: 45,
    },
    {
      id: 2,
      name: "Opening Card",
      type: "Opening",
      icon: "🎉",
      image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
      description: "Grand opening ceremony invitation cards for shops & offices",
      cardCount: 20,
    },
    {
      id: 3,
      name: "Birthday Card",
      type: "Birthday",
      icon: "🎂",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      description: "Happy birthday greeting cards for all ages",
      cardCount: 30,
    },
    {
      id: 4,
      name: "Grih Pravesh",
      type: "Grih Pravesh",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      description: "Housewarming ceremony invitation cards",
      cardCount: 25,
    },
    {
      id: 5,
      name: "Shok Card",
      type: "Shok",
      icon: "🙏",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
      description: "Condolence and prayer meeting cards",
      cardCount: 15,
    },
    {
      id: 6,
      name: "Cash Memo",
      type: "Cash Memo",
      icon: "🧾",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      description: "Bill books and cash memo printing for shops",
      cardCount: 10,
    },
    {
      id: 7,
      name: "Letter Pad",
      type: "Letter Pad",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      description: "Professional letterhead printing for businesses",
      cardCount: 12,
    },
  ];

  // Cards under each category
  const cards = {
    "Shadi Card": [
      {
        id: 1,
        name: "Royal Ganesha Shadi Card",
        price: 45,
        moq: 100,
        rating: 4.8,
        images: [
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
        ],
        features: ["Gold Foil Printing", "Ganesha Motif", "Premium Paper", "Matching Envelope"],
        description: "Elegant shadi card with embossed Ganesha motif and gold foil detailing.",
      },
      {
        id: 2,
        name: "Peacock Elegance Shadi Card",
        price: 65,
        moq: 100,
        rating: 4.9,
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
        ],
        features: ["Peacock Design", "Laser Cut", "Satin Ribbon", "Premium Box"],
        description: "Beautiful peacock-themed shadi card with laser-cut borders and satin finish.",
      },
      {
        id: 3,
        name: "Traditional Red & Gold Shadi Card",
        price: 35,
        moq: 100,
        rating: 4.6,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
        ],
        features: ["Red & Gold Theme", "Traditional Motifs", "Sanskrit Shloka", "Matching Envelope"],
        description: "Classic red and gold shadi card with traditional Sanskrit shlokas.",
      },
    ],
    "Opening Card": [
      {
        id: 1,
        name: "Grand Opening Card",
        price: 30,
        moq: 100,
        rating: 4.5,
        images: [
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
        ],
        features: ["Festive Design", "Gold Foil", "Premium Paper", "Matching Envelope"],
        description: "Grand opening invitation card for shops, offices and showrooms.",
      },
      {
        id: 2,
        name: "Shop Opening Card",
        price: 25,
        moq: 100,
        rating: 4.4,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
        ],
        features: ["Simple Design", "Attractive Colors", "Economical", "Bulk Printing"],
        description: "Economical shop opening invitation card with attractive design.",
      },
    ],
    "Birthday Card": [
      {
        id: 1,
        name: "Happy Birthday Card",
        price: 20,
        moq: 100,
        rating: 4.5,
        images: [
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
        ],
        features: ["Colorful Design", "Birthday Theme", "Premium Paper", "Matching Envelope"],
        description: "Colorful birthday greeting card for all ages.",
      },
      {
        id: 2,
        name: "Kids Birthday Card",
        price: 18,
        moq: 100,
        rating: 4.3,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
        ],
        features: ["Cartoon Design", "Bright Colors", "Fun Theme", "Economical"],
        description: "Fun and colorful birthday card for kids.",
      },
    ],
    "Grih Pravesh": [
      {
        id: 1,
        name: "Grih Pravesh Invitation",
        price: 35,
        moq: 100,
        rating: 4.7,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
        ],
        features: ["Traditional Design", "Gold Foil", "Housewarming Theme", "Matching Envelope"],
        description: "Traditional grih pravesh invitation card with elegant design.",
      },
    ],
    "Shok Card": [
      {
        id: 1,
        name: "Shok Sandesh Card",
        price: 15,
        moq: 100,
        rating: 4.2,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
        ],
        features: ["Simple Design", "Respectful Theme", "Economical", "Bulk Printing"],
        description: "Simple and respectful shok card for condolence messages.",
      },
    ],
    "Cash Memo": [
      {
        id: 1,
        name: "Cash Memo Book",
        price: 50,
        moq: 100,
        rating: 4.6,
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
        ],
        features: ["Bill Book", "Custom Shop Name", "Premium Paper", "Carbon Copy"],
        description: "Custom cash memo bill book printing for shops and businesses.",
      },
    ],
    "Letter Pad": [
      {
        id: 1,
        name: "Business Letter Pad",
        price: 40,
        moq: 100,
        rating: 4.5,
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
        ],
        features: ["Custom Design", "Shop Name Printing", "Premium Paper", "Bulk Order"],
        description: "Professional letter pad printing with your shop name and details.",
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCard(null);
    setBookingStep("cards");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setBookingStep("details");
  };

  const handleBookCard = () => {
    const whatsappNumber = "7462881297";
    const message = `Hello Vandana Computer Press, I would like to book cards:%0A%0A📁 *Category:* ${selectedCategory?.name}%0A💌 *Card Design:* ${selectedCard?.name}%0A💰 *Price:* ₹${selectedCard?.price}/card%0A📦 *Min. Order:* 100 cards%0A⭐ *Rating:* ${selectedCard?.rating}%0A✨ *Features:* ${selectedCard?.features?.join(", ")}%0A%0A📍 *Shop:* Vandana Computer Press, Kamrudinganj, Bihar Sharif, Nalanda (Near Post Office Simgali)%0A%0APlease share samples and confirm availability. Thank you!`;
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setSelectedCategory(null);
    setSelectedCard(null);
    setBookingStep("categories");
  };

  const handleBack = () => {
    if (bookingStep === "cards") {
      setSelectedCategory(null);
      setBookingStep("categories");
    } else if (bookingStep === "details") {
      setSelectedCard(null);
      setBookingStep("cards");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
      {/* Header - SEO Friendly */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold">💌 Vandana Computer Press</h1>
              <p className="text-sm mt-1">All types of card printing - Shadi Card, Opening Card, Birthday Card, Grih Pravesh, Shok Card, Cash Memo & Letter Pad</p>
              <p className="text-xs mt-1 text-amber-100">📍 Kamrudinganj, Bihar Sharif, Nalanda - Near Post Office Simgali</p>
            </div>
            <div className="text-right">
              <p className="text-sm">📞 24/7 Support</p>
              <p className="text-sm font-semibold">WhatsApp: +91 7462881297</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* STEP 1: CATEGORIES */}
        {bookingStep === "categories" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Card Category</h2>
              <p className="text-gray-600">Browse our exclusive card collections - All cards minimum 100 quantity</p>
              <div className="mt-3 inline-flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">💍 Shadi Card</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">🎉 Opening Card</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">🎂 Birthday Card</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">🏠 Grih Pravesh</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">🙏 Shok Card</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">🧾 Cash Memo</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">📝 Letter Pad</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop";
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                      {category.cardCount} Designs
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {category.icon} {category.name}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-xs line-clamp-2">{category.description}</p>
                    <div className="mt-3 text-rose-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                      View Cards →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: CARDS LIST */}
        {bookingStep === "cards" && selectedCategory && (
          <div>
            <button
              onClick={handleBack}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              ← Back to Categories
            </button>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedCategory.icon} {selectedCategory.name}
              </h2>
              <p className="text-gray-600">Click on any card to view full details & images</p>
              <p className="text-sm text-rose-600 font-semibold mt-1">📦 Minimum Order: 100 cards (Compulsory)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards[selectedCategory.name]?.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={card.images[0]}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop";
                      }}
                    />
                    <div className="absolute -mt-8 ml-2 bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                      📸 {card.images.length} Photos
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{card.name}</h3>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-semibold">{card.rating}</span>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-rose-600 mb-1">₹{card.price}/card</p>
                    <p className="text-gray-500 text-sm mb-3 font-semibold">Min. Order: 100 cards</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {card.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-rose-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                      View Details →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: CARD DETAILS + IMAGE GALLERY + BOOK */}
        {bookingStep === "details" && selectedCategory && selectedCard && (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              ← Back to Cards
            </button>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Image Gallery */}
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedCard.images.map((img, idx) => (
                    <div key={idx} className="h-32 md:h-40 overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={`${selectedCard.name} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white p-6">
                <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
                <p className="text-sm mt-1">{selectedCategory.icon} {selectedCategory.name}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">📝 Description</p>
                  <p className="text-gray-800">{selectedCard.description}</p>
                </div>

                <div className="border-b pb-3 flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">💰 Price per Card</p>
                    <p className="text-2xl font-bold text-rose-600">₹{selectedCard.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">📦 Minimum Order</p>
                    <p className="text-lg font-semibold text-gray-800">100 cards (Compulsory)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">⭐ Rating</p>
                    <p className="text-lg font-semibold text-gray-800">
                      <span className="text-yellow-500">★</span> {selectedCard.rating}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 text-sm mb-2">✨ Card Features</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCard.features.map((feature, idx) => (
                      <span key={idx} className="text-sm bg-rose-100 text-rose-700 px-3 py-1 rounded-full">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-amber-800 flex items-start">
                    <span className="text-lg mr-2">ℹ️</span>
                    Clicking "Book on WhatsApp" will redirect you to WhatsApp. You can share your design preference, quantity (minimum 100 cards), and customization needs directly with our team at Vandana Computer Press.
                  </p>
                </div>

                <button
                  onClick={handleBookCard}
                  className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
                >
                  📱 Book This Card on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer - SEO Friendly */}
      <div className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold">© 2024 Vandana Computer Press | All Types of Card Printing</p>
          <p className="text-xs mt-2 text-gray-400">
            📍 Kamrudinganj, Bihar Sharif, Nalanda, Near Post Office Simgali
          </p>
          <p className="text-xs mt-1 text-gray-400">
            Shadi Card | Opening Card | Birthday Card | Grih Pravesh | Shok Card | Cash Memo | Letter Pad
          </p>
          <p className="text-xs mt-1 text-gray-400">
            Book directly via WhatsApp for best rates & instant samples | 24/7 Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardApp;
