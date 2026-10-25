import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const WeddingCardApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [bookingStep, setBookingStep] = useState("categories");

  // ========== Categories (rating removed) ==========
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
  ];

  // ========== Card Data (added cardNo, removed rating) ==========
  const cards = {
    "Hindu Wedding Cards": [
      {
        id: 1,
        cardNo: "HD-001",
        name: "Royal Ganesha Card",
        price: 45,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        ],
        features: ["Gold Foil Printing", "Ganesha Motif", "Premium Paper", "Matching Envelope"],
        description: "Elegant Hindu wedding card with embossed Ganesha motif and gold foil detailing.",
      },
      {
        id: 2,
        cardNo: "HD-002",
        name: "Peacock Elegance",
        price: 65,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop",
        ],
        features: ["Peacock Design", "Laser Cut", "Satin Ribbon", "Premium Box"],
        description: "Beautiful peacock-themed card with laser-cut borders and satin finish.",
      },
      {
        id: 3,
        cardNo: "HD-003",
        name: "Traditional Red & Gold",
        price: 35,
        moq: 150,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
        ],
        features: ["Red & Gold Theme", "Traditional Motifs", "Sanskrit Shloka", "Matching Envelope"],
        description: "Classic red and gold Hindu wedding invitation with traditional Sanskrit shlokas.",
      },
    ],
    "Muslim Wedding Cards": [
      {
        id: 1,
        cardNo: "MW-001",
        name: "Nikah Elegance",
        price: 55,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop",
        ],
        features: ["Islamic Calligraphy", "Gold Foil", "Premium Paper", "Bismillah Motif"],
        description: "Elegant Nikah invitation with Islamic calligraphy and gold foil accents.",
      },
      {
        id: 2,
        cardNo: "MW-002",
        name: "Crescent Moon Design",
        price: 42,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
        ],
        features: ["Crescent Moon", "Green & Gold", "Arabic Text", "Matching Envelope"],
        description: "Beautiful crescent moon themed Nikah card in green and gold.",
      },
    ],
    "Sikh Wedding Cards": [
      {
        id: 1,
        cardNo: "SW-001",
        name: "Khanda Divine",
        price: 50,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
        ],
        features: ["Khanda Symbol", "Gurbani Text", "Gold Foil", "Premium Card"],
        description: "Sacred Anand Karaj invitation with Khanda symbol and Gurbani verses.",
      },
    ],
    "Christian Wedding Cards": [
      {
        id: 1,
        cardNo: "CW-001",
        name: "Floral Grace",
        price: 48,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
        ],
        features: ["Floral Watercolor", "Cross Motif", "Bible Verse", "Premium Paper"],
        description: "Graceful Christian wedding invitation with floral watercolor and cross motif.",
      },
    ],
    "Royal & Premium Cards": [
      {
        id: 1,
        cardNo: "PR-001",
        name: "Velvet Royal Box",
        price: 250,
        moq: 50,
        images: [
          "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
        ],
        features: ["Velvet Finish", "Gold Foil", "Premium Box", "Swarovski Elements"],
        description: "Ultra-luxury velvet wedding card in a premium box with gold foil and crystals.",
      },
    ],
    "Modern Minimal Cards": [
      {
        id: 1,
        cardNo: "MN-001",
        name: "Minimal Monogram",
        price: 38,
        moq: 100,
        images: [
          "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
        ],
        features: ["Custom Monogram", "Minimal Design", "Matte Finish", "Modern Typography"],
        description: "Clean and modern wedding card with custom monogram and minimal design.",
      },
    ],
  };

  // ========== SEO: Dynamically generate page title and description based on current step ==========
  const getSeoData = () => {
    if (bookingStep === "categories") {
      return {
        title: "Shubh Wedding Cards | Premium Indian Wedding Invitations",
        description: "Browse 200+ premium wedding card designs for Hindu, Muslim, Sikh & Christian weddings. Book directly on WhatsApp for best wholesale prices.",
        canonical: "https://yourdomain.com/",
      };
    }
    if (bookingStep === "cards" && selectedCategory) {
      return {
        title: `${selectedCategory.name} | Shubh Wedding Cards`,
        description: `Explore our exclusive collection of ${selectedCategory.name}. ${selectedCategory.description}. Starting from ₹35 per card.`,
        canonical: `https://yourdomain.com/category/${selectedCategory.id}`,
      };
    }
    if (bookingStep === "details" && selectedCard) {
      return {
        title: `${selectedCard.name} (${selectedCard.cardNo}) | Shubh Wedding Cards`,
        description: `${selectedCard.description} Price: ₹${selectedCard.price}/card, MOQ: ${selectedCard.moq} cards. Book on WhatsApp now.`,
        canonical: `https://yourdomain.com/card/${selectedCard.cardNo}`,
      };
    }
    return {
      title: "Shubh Wedding Cards",
      description: "Premium wedding invitation cards for every celebration.",
      canonical: "https://yourdomain.com/",
    };
  };

  const seo = getSeoData();

  // ========== WhatsApp Booking (message includes card number) ==========
  const handleBookCard = () => {
    const whatsappNumber = "7462881297";
    const message = `Hello, I would like to book wedding cards:%0A%0A🔢 *Card No:* ${selectedCard?.cardNo}%0A📁 *Category:* ${selectedCategory?.name}%0A💌 *Card Design:* ${selectedCard?.name}%0A💰 *Price:* ₹${selectedCard?.price}/card%0A📦 *Min. Order:* ${selectedCard?.moq} cards%0A✨ *Features:* ${selectedCard?.features?.join(", ")}%0A%0APlease share samples and confirm availability. Thank you!`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setSelectedCategory(null);
    setSelectedCard(null);
    setBookingStep("categories");
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
    <>
      {/* ========== SEO Injection ========== */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Shubh Wedding Cards",
            description: "Premium wedding invitation cards for Hindu, Muslim, Sikh and Christian weddings in India.",
            telephone: "+917462881297",
            priceRange: "₹35 - ₹250",
            areaServed: "India",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg sticky top-0 z-50">
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
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* STEP 1: Categories */}
          {bookingStep === "categories" && (
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Card Category</h2>
                <p className="text-gray-600">Browse our exclusive wedding card collections</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <article
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={`${category.name} collection`}
                        loading="lazy"
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
                      <h3 className="text-lg font-bold text-gray-800">
                        {category.icon} {category.name}
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2 mt-1">{category.description}</p>
                      <div className="mt-3 text-rose-600 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        View Cards →
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* STEP 2: Card List (with cardNo) */}
          {bookingStep === "cards" && selectedCategory && (
            <section>
              <button onClick={handleBack} className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                ← Back to Categories
              </button>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {selectedCategory.icon} {selectedCategory.name}
                </h2>
                <p className="text-gray-600">Click on any card to view details & order</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards[selectedCategory.name]?.map((card) => (
                  <article
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl group relative"
                  >
                    {/* Card number badge */}
                    <span className="absolute top-3 left-3 z-10 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {card.cardNo}
                    </span>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={card.images[0]}
                        alt={`${card.name} - wedding invitation card ${card.cardNo}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop";
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800">{card.name}</h3>
                      <p className="text-2xl font-bold text-rose-600 mt-1">₹{card.price}/card</p>
                      <p className="text-gray-500 text-sm">Min. Order: {card.moq} cards</p>
                      <div className="flex flex-wrap gap-2 mt-3">
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
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* STEP 3: Card Details + Gallery + Booking */}
          {bookingStep === "details" && selectedCategory && selectedCard && (
            <section className="max-w-4xl mx-auto">
              <button onClick={handleBack} className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                ← Back to Cards
              </button>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Gallery: 3-4 real card images */}
                <div className="p-4 bg-gray-50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedCard.images.map((img, idx) => (
                      <div key={idx} className="h-32 md:h-40 overflow-hidden rounded-lg">
                        <img
                          src={img}
                          alt={`${selectedCard.name} wedding card image ${idx + 1}`}
                          loading="lazy"
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
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCard.name}</h2>
                      <p className="text-sm mt-1">{selectedCategory.icon} {selectedCategory.name}</p>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded text-sm font-mono">
                      {selectedCard.cardNo}
                    </span>
                  </div>
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

                  <button
                    onClick={handleBookCard}
                    className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    📱 Book This Card on WhatsApp
                  </button>
                </div>
              </div>
            </section>
          )}
        </main>

        <footer className="bg-gray-800 text-white mt-12 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm">© 2024 Shubh Wedding Cards | Premium Wedding Invitation Cards</p>
            <p className="text-xs mt-2 text-gray-400">Book directly via WhatsApp for best rates & instant samples</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WeddingCardApp;
