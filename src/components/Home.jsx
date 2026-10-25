import React, { useState } from "react";

const WeddingCardApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [bookingStep, setBookingStep] = useState("categories");

  // Categories of wedding cards
  const categories = [
    {
      id: 1,
      name: "Hindu Wedding Cards",
      type: "Hindu",
      icon: "🕉️",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
      description: "Traditional Hindu wedding invitation cards with elegant designs",
      cardCount: 45,
    },
    {
      id: 2,
      name: "Muslim Wedding Cards",
      type: "Muslim",
      icon: "🕌",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      description: "Elegant Nikah invitation cards with Islamic calligraphy",
      cardCount: 38,
    },
    {
      id: 3,
      name: "Sikh Wedding Cards",
      type: "Sikh",
      icon: "🪯",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
      description: "Beautiful Anand Karaj invitation cards with Khanda designs",
      cardCount: 32,
    },
    {
      id: 4,
      name: "Christian Wedding Cards",
      type: "Christian",
      icon: "✝️",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      description: "Graceful Christian wedding invitations with floral patterns",
      cardCount: 28,
    },
    {
      id: 5,
      name: "Royal & Premium Cards",
      type: "Premium",
      icon: "👑",
      image: "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
      description: "Luxury wedding cards with gold foil, velvet & laser cut designs",
      cardCount: 52,
    },
    {
      id: 6,
      name: "Modern Minimal Cards",
      type: "Modern",
      icon: "✨",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      description: "Contemporary minimal wedding invitations for modern couples",
      cardCount: 40,
    },
    {
      id: 7,
      name: "Scroll & Box Cards",
      type: "Novelty",
      icon: "📜",
      image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop",
      description: "Unique scroll invitations and premium box packaging cards",
      cardCount: 25,
    },
    {
      id: 8,
      name: "Destination Wedding Cards",
      type: "Destination",
      icon: "🏝️",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      description: "Elegant cards for destination & beach weddings",
      cardCount: 30,
    },
  ];

  // Wedding cards under each category (with 3-4 images each)
  const cards = {
    "Hindu Wedding Cards": [
      {
        id: 1,
        name: "Royal Ganesha Card",
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
        description: "Elegant Hindu wedding card with embossed Ganesha motif and gold foil detailing.",
      },
      {
        id: 2,
        name: "Peacock Elegance",
        price: 65,
        moq: 100,
        rating: 4.9,
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
        ],
        features: ["Peacock Design", "Laser Cut", "Satin Ribbon", "Premium Box"],
        description: "Beautiful peacock-themed card with laser-cut borders and satin finish.",
      },
      {
        id: 3,
        name: "Traditional Red & Gold",
        price: 35,
        moq: 150,
        rating: 4.6,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
        ],
        features: ["Red & Gold Theme", "Traditional Motifs", "Sanskrit Shloka", "Matching Envelope"],
        description: "Classic red and gold Hindu wedding invitation with traditional Sanskrit shlokas.",
      },
    ],
    "Muslim Wedding Cards": [
      {
        id: 1,
        name: "Nikah Elegance",
        price: 55,
        moq: 100,
        rating: 4.7,
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
        ],
        features: ["Islamic Calligraphy", "Gold Foil", "Premium Paper", "Bismillah Motif"],
        description: "Elegant Nikah invitation with Islamic calligraphy and gold foil accents.",
      },
      {
        id: 2,
        name: "Crescent Moon Design",
        price: 42,
        moq: 100,
        rating: 4.5,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
        ],
        features: ["Crescent Moon", "Green & Gold", "Arabic Text", "Matching Envelope"],
        description: "Beautiful crescent moon themed Nikah card in green and gold.",
      },
    ],
    "Sikh Wedding Cards": [
      {
        id: 1,
        name: "Khanda Divine",
        price: 50,
        moq: 100,
        rating: 4.8,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
        ],
        features: ["Khanda Symbol", "Gurbani Text", "Gold Foil", "Premium Card"],
        description: "Sacred Anand Karaj invitation with Khanda symbol and Gurbani verses.",
      },
      {
        id: 2,
        name: "Golden Temple Theme",
        price: 68,
        moq: 100,
        rating: 4.9,
        images: [
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
        ],
        features: ["Golden Temple Image", "Embossed Design", "Premium Box", "Satin Ribbon"],
        description: "Luxurious Sikh wedding card featuring the Golden Temple with embossed finish.",
      },
    ],
    "Christian Wedding Cards": [
      {
        id: 1,
        name: "Floral Grace",
        price: 48,
        moq: 100,
        rating: 4.6,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
        ],
        features: ["Floral Watercolor", "Cross Motif", "Bible Verse", "Premium Paper"],
        description: "Graceful Christian wedding invitation with floral watercolor and cross motif.",
      },
      {
        id: 2,
        name: "Elegant White & Gold",
        price: 58,
        moq: 100,
        rating: 4.7,
        images: [
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
        ],
        features: ["White & Gold", "Foil Stamping", "Ribbon Detail", "Matching Envelope"],
        description: "Elegant white and gold Christian wedding card with foil stamping.",
      },
    ],
    "Royal & Premium Cards": [
      {
        id: 1,
        name: "Velvet Royal Box",
        price: 250,
        moq: 50,
        rating: 5.0,
        images: [
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
        ],
        features: ["Velvet Finish", "Gold Foil", "Premium Box", "Swarovski Elements"],
        description: "Ultra-luxury velvet wedding card in a premium box with gold foil and crystals.",
      },
      {
        id: 2,
        name: "Laser Cut Masterpiece",
        price: 180,
        moq: 50,
        rating: 4.9,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
        ],
        features: ["Intricate Laser Cut", "Metallic Paper", "Pop-up Design", "Premium Envelope"],
        description: "Intricate laser-cut wedding card with pop-up design and metallic finish.",
      },
    ],
    "Modern Minimal Cards": [
      {
        id: 1,
        name: "Minimal Monogram",
        price: 38,
        moq: 100,
        rating: 4.5,
        images: [
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
        ],
        features: ["Custom Monogram", "Minimal Design", "Matte Finish", "Modern Typography"],
        description: "Clean and modern wedding card with custom monogram and minimal design.",
      },
      {
        id: 2,
        name: "Geometric Chic",
        price: 42,
        moq: 100,
        rating: 4.6,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
        ],
        features: ["Geometric Patterns", "Rose Gold Foil", "Modern Layout", "Premium Paper"],
        description: "Chic geometric wedding invitation with rose gold foil accents.",
      },
    ],
    "Scroll & Box Cards": [
      {
        id: 1,
        name: "Royal Scroll Invitation",
        price: 120,
        moq: 50,
        rating: 4.8,
        images: [
          "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
        ],
        features: ["Scroll Format", "Silk Ribbon", "Gold Caps", "Premium Box"],
        description: "Traditional scroll wedding invitation with silk ribbon and gold caps in a premium box.",
      },
      {
        id: 2,
        name: "Luxury Gift Box Card",
        price: 150,
        moq: 50,
        rating: 4.7,
        images: [
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
        ],
        features: ["Gift Box Packaging", "Magnetic Closure", "Foam Insert", "Satin Lining"],
        description: "Luxurious gift box wedding card with magnetic closure and satin lining.",
      },
    ],
    "Destination Wedding Cards": [
      {
        id: 1,
        name: "Beach Wedding Passport",
        price: 95,
        moq: 50,
        rating: 4.8,
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
        ],
        features: ["Passport Style", "Beach Theme", "Boarding Pass Insert", "Premium Paper"],
        description: "Creative passport-style wedding invitation perfect for beach destination weddings.",
      },
      {
        id: 2,
        name: "Tropical Paradise Card",
        price: 75,
        moq: 100,
        rating: 4.6,
        images: [
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop",
        ],
        features: ["Tropical Design", "Palm Leaf Motif", "Gold Foil", "Matching Envelope"],
        description: "Tropical paradise themed wedding card with palm leaf motifs and gold foil.",
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
    const whatsappNumber = "7462881297"; // Replace with your WhatsApp number
    const message = `Hello, I would like to book wedding cards:%0A%0A📁 *Category:* ${selectedCategory?.name}%0A💌 *Card Design:* ${selectedCard?.name}%0A💰 *Price:* ₹${selectedCard?.price}/card%0A📦 *Min. Order:* ${selectedCard?.moq} cards%0A⭐ *Rating:* ${selectedCard?.rating}%0A✨ *Features:* ${selectedCard?.features?.join(", ")}%0A%0APlease share samples and confirm availability. Thank you!`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
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
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold">💌 Shubh Wedding Cards</h1>
              <p className="text-sm mt-1">Premium wedding invitations for every celebration</p>
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
              <p className="text-gray-600">Browse our exclusive wedding card collections</p>
              <div className="mt-3 inline-flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">🕉️ Hindu</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">🕌 Muslim</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">🪯 Sikh</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">✝️ Christian</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">👑 Premium</span>
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
                    <p className="text-gray-500 text-sm mb-3">Min. Order: {card.moq} cards</p>
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

                <div className="border-b pb-3 flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm">💰 Price per Card</p>
                    <p className="text-2xl font-bold text-rose-600">₹{selectedCard.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">📦 Minimum Order</p>
                    <p className="text-lg font-semibold text-gray-800">{selectedCard.moq} cards</p>
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
                    Clicking "Book on WhatsApp" will redirect you to WhatsApp. You can share your design preference, quantity, and customization needs directly with our team.
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

      {/* Footer */}
      <div className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Shubh Wedding Cards | Premium Wedding Invitation Cards</p>
          <p className="text-xs mt-2 text-gray-400">
            Book directly via WhatsApp for best rates & instant samples | 24/7 Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingCardApp;
