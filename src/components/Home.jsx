import React, { useState } from "react";

const LuxuryBookingApp = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingStep, setBookingStep] = useState("places"); // places, hotels, rooms, booking

  // 20 Special Places (Hindu Pilgrimage & Muslim Holy Sites)
  const places = [
    { id: 1, name: "Kedarnath", state: "Uttarakhand", type: "Hindu", image: "🏔️", description: "Sacred Shiva temple in Himalayas" },
    { id: 2, name: "Badrinath", state: "Uttarakhand", type: "Hindu", image: "⛰️", description: "Holy Vishnu temple" },
    { id: 3, name: "Vaishno Devi", state: "Jammu & Kashmir", type: "Hindu", image: "🙏", description: "Famous Mata Vaishno Devi shrine" },
    { id: 4, name: "Omkareshwar", state: "Madhya Pradesh", type: "Hindu", image: "🕉️", description: "Sacred Jyotirlinga temple" },
    { id: 5, name: "Khatushyam", state: "Rajasthan", type: "Hindu", image: "✨", description: "Famous Barbarika temple" },
    { id: 6, name: "Amarnath", state: "Jammu & Kashmir", type: "Hindu", image: "❄️", description: "Holy ice Shiva lingam" },
    { id: 7, name: "Rameswaram", state: "Tamil Nadu", type: "Hindu", image: "🌊", description: "Sacred Ramanathaswamy temple" },
    { id: 8, name: "Dwarka", state: "Gujarat", type: "Hindu", image: "🏯", description: "Lord Krishna's kingdom" },
    { id: 9, name: "Varanasi", state: "Uttar Pradesh", type: "Hindu", image: "🕯️", description: "Ancient holy city on Ganges" },
    { id: 10, name: "Tirupati", state: "Andhra Pradesh", type: "Hindu", image: "⛩️", description: "Famous Venkateswara temple" },
    { id: 11, name: "Ajmer Sharif", state: "Rajasthan", type: "Muslim", image: "🕌", description: "Sufi saint Khwaja Moinuddin Chishti dargah" },
    { id: 12, name: "Nizamuddin Dargah", state: "Delhi", type: "Muslim", image: "🕌", description: "Famous Sufi shrine in Delhi" },
    { id: 13, name: "Haji Ali Dargah", state: "Maharashtra", type: "Muslim", image: "🌊", description: "Oceanic mosque in Mumbai" },
    { id: 14, name: "Jama Masjid", state: "Delhi", type: "Muslim", image: "🕌", description: "India's largest mosque" },
    { id: 15, name: "Taj Mahal", state: "Uttar Pradesh", type: "Muslim", image: "🏛️", description: "Symbol of love and Islamic architecture" },
    { id: 16, name: "Fatehpur Sikri", state: "Uttar Pradesh", type: "Muslim", image: "🏰", description: "Historical Mughal city" },
    { id: 17, name: "Charminar", state: "Telangana", type: "Muslim", image: "🎯", description: "Iconic monument in Hyderabad" },
    { id: 18, name: "Salim Chishti Dargah", state: "Uttar Pradesh", type: "Muslim", image: "🕌", description: "Famous Sufi shrine in Fatehpur Sikri" },
    { id: 19, name: "Dargah Hazratbal", state: "Jammu & Kashmir", type: "Muslim", image: "🕌", description: "Sacred Muslim shrine in Srinagar" },
    { id: 20, name: "Cheraman Juma Masjid", state: "Kerala", type: "Muslim", image: "🕌", description: "India's first mosque" }
  ];

  // Hotels data for each place
  const hotels = {
    "Kedarnath": [
      { id: 1, name: "Kedar Valley Resort", rating: 4.5, price: 3500, image: "🏨", amenities: ["Free WiFi", "Heater", "Restaurant"] },
      { id: 2, name: "Himalayan Retreat", rating: 4.2, price: 2800, image: "🏔️", amenities: ["Mountain View", "Room Service", "Parking"] },
      { id: 3, name: "Shiva Grand Hotel", rating: 4.0, price: 2200, image: "🏨", amenities: ["Geyser", "Restaurant", "Power Backup"] }
    ],
    "Badrinath": [
      { id: 1, name: "Badri Vishal Resort", rating: 4.6, price: 3800, image: "🏨", amenities: ["Free WiFi", "Heater", "Restaurant"] },
      { id: 2, name: "Alaknanda Palace", rating: 4.3, price: 3200, image: "🏔️", amenities: ["River View", "Room Service", "Parking"] }
    ],
    "Vaishno Devi": [
      { id: 1, name: "Mata Vaishno Heights", rating: 4.7, price: 4200, image: "🏨", amenities: ["Free WiFi", "Restaurant", "AC", "Parking"] },
      { id: 2, name: "Triokya Resort", rating: 4.4, price: 3500, image: "🏨", amenities: ["Room Service", "Geyser", "Restaurant"] }
    ],
    "Omkareshwar": [
      { id: 1, name: "Om Resort & Spa", rating: 4.5, price: 3000, image: "🏨", amenities: ["Free WiFi", "Pool", "Restaurant"] },
      { id: 2, name: "Narmada View Hotel", rating: 4.1, price: 2500, image: "🌊", amenities: ["River View", "Room Service", "Parking"] }
    ],
    "Khatushyam": [
      { id: 1, name: "Shyam Palace", rating: 4.3, price: 2800, image: "🏨", amenities: ["Free WiFi", "Restaurant", "Parking"] },
      { id: 2, name: "Barbarika Resort", rating: 4.0, price: 2200, image: "🏨", amenities: ["Room Service", "Geyser", "Restaurant"] }
    ],
    "Amarnath": [
      { id: 1, name: "Amarnath Base Camp", rating: 4.2, price: 4000, image: "⛺", amenities: ["Heater", "Medical Facility", "Restaurant"] }
    ],
    "Rameswaram": [
      { id: 1, name: "Rameswaram Beach Resort", rating: 4.5, price: 3500, image: "🌊", amenities: ["Sea View", "Free WiFi", "Restaurant"] },
      { id: 2, name: "Ramanathapuram Palace", rating: 4.1, price: 2800, image: "🏨", amenities: ["Room Service", "Parking", "AC"] }
    ],
    "Dwarka": [
      { id: 1, name: "Dwarka Beach Resort", rating: 4.4, price: 3200, image: "🌊", amenities: ["Free WiFi", "Restaurant", "Parking"] }
    ],
    "Varanasi": [
      { id: 1, name: "Ganges View Hotel", rating: 4.6, price: 4500, image: "🌊", amenities: ["Ganga View", "Free WiFi", "Restaurant"] },
      { id: 2, name: "Kashi Heritage", rating: 4.3, price: 3800, image: "🏨", amenities: ["Heritage Room", "Room Service", "AC"] }
    ],
    "Tirupati": [
      { id: 1, name: "Tirumala Residency", rating: 4.7, price: 4800, image: "🏨", amenities: ["Free WiFi", "Restaurant", "AC", "Parking"] }
    ],
    "Ajmer Sharif": [
      { id: 1, name: "Khwaja Palace", rating: 4.5, price: 3500, image: "🕌", amenities: ["Free WiFi", "Restaurant", "Parking"] },
      { id: 2, name: "Sufi Retreat", rating: 4.2, price: 2800, image: "🏨", amenities: ["Room Service", "Geyser", "Restaurant"] }
    ],
    "Nizamuddin Dargah": [
      { id: 1, name: "Hazrat Nizamuddin Inn", rating: 4.3, price: 3200, image: "🏨", amenities: ["Free WiFi", "Restaurant", "Parking"] }
    ],
    "Haji Ali Dargah": [
      { id: 1, name: "Haji Ali Residency", rating: 4.4, price: 3800, image: "🌊", amenities: ["Sea View", "Free WiFi", "Restaurant"] },
      { id: 2, name: "Mahalaxmi Suites", rating: 4.1, price: 3200, image: "🏨", amenities: ["AC", "Room Service", "Parking"] }
    ],
    "Jama Masjid": [
      { id: 1, name: "Delhi Heritage Hotel", rating: 4.2, price: 2900, image: "🏨", amenities: ["Free WiFi", "Restaurant", "AC"] }
    ],
    "Taj Mahal": [
      { id: 1, name: "Taj View Resort", rating: 4.8, price: 5500, image: "🏛️", amenities: ["Taj View", "Free WiFi", "Pool", "Restaurant"] },
      { id: 2, name: "Mughal Heritage", rating: 4.5, price: 4800, image: "🏨", amenities: ["Heritage Room", "AC", "Restaurant"] }
    ],
    "Fatehpur Sikri": [
      { id: 1, name: "Mughal Retreat", rating: 4.3, price: 3400, image: "🏰", amenities: ["Free WiFi", "Restaurant", "Parking"] }
    ],
    "Charminar": [
      { id: 1, name: "Charminar Palace", rating: 4.4, price: 3600, image: "🏨", amenities: ["Free WiFi", "Restaurant", "AC"] }
    ],
    "Salim Chishti Dargah": [
      { id: 1, name: "Fatehpur Heritage", rating: 4.2, price: 3300, image: "🏨", amenities: ["Free WiFi", "Restaurant", "Parking"] }
    ],
    "Dargah Hazratbal": [
      { id: 1, name: "Hazratbal View", rating: 4.5, price: 4200, image: "🏔️", amenities: ["Lake View", "Heater", "Restaurant"] }
    ],
    "Cheraman Juma Masjid": [
      { id: 1, name: "Kerala Heritage Inn", rating: 4.3, price: 2800, image: "🏨", amenities: ["Free WiFi", "Restaurant", "Parking"] }
    ]
  };

  // Rooms data for each hotel
  const rooms = {
    "Kedar Valley Resort": [
      { id: 1, name: "Deluxe Room", price: 3500, capacity: 2, amenities: ["King Bed", "AC", "TV", "Attached Bathroom"], image: "🛏️" },
      { id: 2, name: "Suite Room", price: 5500, capacity: 4, amenities: ["King Bed", "Living Area", "AC", "Mountain View"], image: "🛋️" }
    ],
    "Himalayan Retreat": [
      { id: 1, name: "Standard Room", price: 2800, capacity: 2, amenities: ["Double Bed", "Heater", "Attached Bathroom"], image: "🛏️" },
      { id: 2, name: "Premium Room", price: 4200, capacity: 3, amenities: ["King Bed", "Mountain View", "AC", "TV"], image: "🏔️" }
    ],
    "Shiva Grand Hotel": [
      { id: 1, name: "Economy Room", price: 2200, capacity: 2, amenities: ["Double Bed", "Geyser", "TV"], image: "🛏️" }
    ],
    "Badri Vishal Resort": [
      { id: 1, name: "Deluxe Room", price: 3800, capacity: 2, amenities: ["King Bed", "Heater", "TV", "Attached Bathroom"], image: "🛏️" },
      { id: 2, name: "Executive Suite", price: 6000, capacity: 4, amenities: ["2 Bedrooms", "Living Room", "Mountain View"], image: "🛋️" }
    ],
    "Alaknanda Palace": [
      { id: 1, name: "River View Room", price: 3200, capacity: 2, amenities: ["River View", "King Bed", "AC", "TV"], image: "🌊" }
    ],
    "Mata Vaishno Heights": [
      { id: 1, name: "Deluxe Room", price: 4200, capacity: 2, amenities: ["King Bed", "AC", "TV", "Mini Bar"], image: "🛏️" },
      { id: 2, name: "Premium Suite", price: 6500, capacity: 4, amenities: ["Suite", "Living Area", "AC", "City View"], image: "🛋️" }
    ],
    "Triokya Resort": [
      { id: 1, name: "Standard Room", price: 3500, capacity: 2, amenities: ["Double Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Om Resort & Spa": [
      { id: 1, name: "Deluxe Room", price: 3000, capacity: 2, amenities: ["King Bed", "AC", "TV", "Pool View"], image: "🛏️" },
      { id: 2, name: "Spa Suite", price: 5000, capacity: 2, amenities: ["Jacuzzi", "King Bed", "Spa Access"], image: "💆" }
    ],
    "Narmada View Hotel": [
      { id: 1, name: "River View Room", price: 2500, capacity: 2, amenities: ["River View", "Double Bed", "TV"], image: "🌊" }
    ],
    "Shyam Palace": [
      { id: 1, name: "Standard Room", price: 2800, capacity: 2, amenities: ["Double Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Barbarika Resort": [
      { id: 1, name: "Economy Room", price: 2200, capacity: 2, amenities: ["Double Bed", "Geyser", "TV"], image: "🛏️" }
    ],
    "Amarnath Base Camp": [
      { id: 1, name: "Tent Stay", price: 4000, capacity: 2, amenities: ["Heater", "Sleeping Bags", "Medical Kit"], image: "⛺" }
    ],
    "Rameswaram Beach Resort": [
      { id: 1, name: "Sea View Room", price: 3500, capacity: 2, amenities: ["Sea View", "King Bed", "AC", "TV"], image: "🌊" },
      { id: 2, name: "Beach Suite", price: 5500, capacity: 4, amenities: ["Suite", "Beach Access", "AC", "Mini Bar"], image: "🏖️" }
    ],
    "Ramanathapuram Palace": [
      { id: 1, name: "Deluxe Room", price: 2800, capacity: 2, amenities: ["King Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Dwarka Beach Resort": [
      { id: 1, name: "Deluxe Room", price: 3200, capacity: 2, amenities: ["Sea View", "AC", "TV", "Restaurant"], image: "🌊" }
    ],
    "Ganges View Hotel": [
      { id: 1, name: "Ganga View Room", price: 4500, capacity: 2, amenities: ["Ganga View", "King Bed", "AC", "TV"], image: "🌊" },
      { id: 2, name: "Heritage Suite", price: 7000, capacity: 4, amenities: ["Heritage Decor", "Living Area", "Ganga View"], image: "🏛️" }
    ],
    "Kashi Heritage": [
      { id: 1, name: "Heritage Room", price: 3800, capacity: 2, amenities: ["Heritage Style", "AC", "TV", "Attached Bathroom"], image: "🏨" }
    ],
    "Tirumala Residency": [
      { id: 1, name: "Premium Room", price: 4800, capacity: 2, amenities: ["King Bed", "AC", "TV", "Mini Bar"], image: "🛏️" },
      { id: 2, name: "Executive Suite", price: 7500, capacity: 4, amenities: ["Suite", "Living Area", "AC", "City View"], image: "🛋️" }
    ],
    "Khwaja Palace": [
      { id: 1, name: "Deluxe Room", price: 3500, capacity: 2, amenities: ["King Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Sufi Retreat": [
      { id: 1, name: "Standard Room", price: 2800, capacity: 2, amenities: ["Double Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Hazrat Nizamuddin Inn": [
      { id: 1, name: "Deluxe Room", price: 3200, capacity: 2, amenities: ["King Bed", "AC", "TV", "WiFi"], image: "🛏️" }
    ],
    "Haji Ali Residency": [
      { id: 1, name: "Sea View Room", price: 3800, capacity: 2, amenities: ["Sea View", "King Bed", "AC", "TV"], image: "🌊" }
    ],
    "Mahalaxmi Suites": [
      { id: 1, name: "Executive Suite", price: 3200, capacity: 2, amenities: ["Suite", "AC", "TV", "WiFi"], image: "🛋️" }
    ],
    "Delhi Heritage Hotel": [
      { id: 1, name: "Heritage Room", price: 2900, capacity: 2, amenities: ["Heritage Style", "AC", "TV"], image: "🏨" }
    ],
    "Taj View Resort": [
      { id: 1, name: "Taj View Room", price: 5500, capacity: 2, amenities: ["Taj View", "King Bed", "AC", "Pool Access"], image: "🏛️" },
      { id: 2, name: "Luxury Suite", price: 8500, capacity: 4, amenities: ["Suite", "Private Balcony", "Taj View", "Jacuzzi"], image: "✨" }
    ],
    "Mughal Heritage": [
      { id: 1, name: "Heritage Room", price: 4800, capacity: 2, amenities: ["Mughal Architecture", "King Bed", "AC", "TV"], image: "🏰" }
    ],
    "Mughal Retreat": [
      { id: 1, name: "Deluxe Room", price: 3400, capacity: 2, amenities: ["King Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Charminar Palace": [
      { id: 1, name: "Heritage Suite", price: 3600, capacity: 2, amenities: ["Heritage Style", "AC", "TV", "WiFi"], image: "🏨" }
    ],
    "Fatehpur Heritage": [
      { id: 1, name: "Deluxe Room", price: 3300, capacity: 2, amenities: ["King Bed", "AC", "TV"], image: "🛏️" }
    ],
    "Hazratbal View": [
      { id: 1, name: "Lake View Room", price: 4200, capacity: 2, amenities: ["Dal Lake View", "Heater", "TV", "Restaurant"], image: "🏔️" }
    ],
    "Kerala Heritage Inn": [
      { id: 1, name: "Heritage Room", price: 2800, capacity: 2, amenities: ["Traditional Decor", "AC", "TV"], image: "🏨" }
    ]
  };

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setSelectedHotel(null);
    setSelectedRoom(null);
    setBookingStep("hotels");
  };

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
    setSelectedRoom(null);
    setBookingStep("rooms");
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setBookingStep("booking");
  };

  const handleBookRoom = () => {
    // WhatsApp number
    const whatsappNumber = "7462881297";
    
    // Create booking message
    const message = `Hello, I would like to book a room:%0A%0A📍 *Place:* ${selectedPlace?.name}%0A🏨 *Hotel:* ${selectedHotel?.name}%0A🛏️ *Room:* ${selectedRoom?.name}%0A💰 *Price:* ₹${selectedRoom?.price}/night%0A👥 *Capacity:* ${selectedRoom?.capacity} persons%0A⭐ *Hotel Rating:* ${selectedHotel?.rating}%0A%0APlease confirm availability and provide payment details. Thank you!`;
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset booking flow
    setSelectedPlace(null);
    setSelectedHotel(null);
    setSelectedRoom(null);
    setBookingStep("places");
  };

  const handleBack = () => {
    if (bookingStep === "hotels") {
      setSelectedPlace(null);
      setBookingStep("places");
    } else if (bookingStep === "rooms") {
      setSelectedHotel(null);
      setBookingStep("hotels");
    } else if (bookingStep === "booking") {
      setSelectedRoom(null);
      setBookingStep("rooms");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">✨ Luxury Pilgrim Stays</h1>
              <p className="text-sm mt-1">Book premium accommodations at sacred destinations</p>
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
        {bookingStep === "places" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Sacred Destination</h2>
              <p className="text-gray-600">Select from our curated list of holy places across India</p>
              <div className="mt-2 inline-flex gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">🕉️ Hindu Pilgrimage</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">🕌 Muslim Holy Sites</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {places.map((place) => (
                <div
                  key={place.id}
                  onClick={() => handlePlaceClick(place)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-6xl">
                    {place.image}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        place.type === "Hindu" ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-700"
                      }`}>
                        {place.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{place.state}</p>
                    <p className="text-gray-500 text-xs">{place.description}</p>
                    <div className="mt-3 text-blue-600 text-sm font-semibold">
                      View Hotels →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {bookingStep === "hotels" && selectedPlace && (
          <div>
            <button
              onClick={handleBack}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Places
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Hotels in {selectedPlace.name}</h2>
              <p className="text-gray-600">Choose from our premium accommodations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels[selectedPlace.name]?.map((hotel) => (
                <div
                  key={hotel.id}
                  onClick={() => handleHotelClick(hotel)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-6xl">
                    {hotel.image}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 font-semibold">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mb-3">₹{hotel.price}/night</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {hotel.amenities.slice(0, 3).map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-blue-600 text-sm font-semibold">
                      View Rooms →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {bookingStep === "rooms" && selectedPlace && selectedHotel && (
          <div>
            <button
              onClick={handleBack}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Hotels
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Rooms at {selectedHotel.name}</h2>
              <p className="text-gray-600">Select your perfect room</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms[selectedHotel.name]?.map((room) => (
                <div
                  key={room.id}
                  onClick={() => handleRoomClick(room)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="h-40 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-6xl">
                    {room.image}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">₹{room.price}/night</p>
                    <p className="text-gray-600 text-sm mb-3">👥 Capacity: {room.capacity} persons</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 text-blue-600 text-sm font-semibold">
                      Book Now →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {bookingStep === "booking" && selectedPlace && selectedHotel && selectedRoom && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← Back to Rooms
            </button>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold">Confirm Your Booking</h2>
                <p className="text-sm">Please review your booking details</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">📍 Destination</p>
                  <p className="text-lg font-semibold text-gray-800">{selectedPlace.name}</p>
                </div>
                
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">🏨 Hotel</p>
                  <p className="text-lg font-semibold text-gray-800">{selectedHotel.name}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-gray-600">{selectedHotel.rating} Rating</span>
                  </div>
                </div>
                
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">🛏️ Room Type</p>
                  <p className="text-lg font-semibold text-gray-800">{selectedRoom.name}</p>
                  <p className="text-gray-600">Capacity: {selectedRoom.capacity} persons</p>
                </div>
                
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">💰 Price</p>
                  <p className="text-2xl font-bold text-blue-600">₹{selectedRoom.price}/night</p>
                  <p className="text-xs text-gray-500">*Taxes and fees may apply</p>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm mb-2">✨ Room Amenities</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map((amenity, idx) => (
                      <span key={idx} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-800 flex items-start">
                    <span className="text-lg mr-2">ℹ️</span>
                    Clicking "Confirm & Book" will redirect you to WhatsApp for booking confirmation.
                  </p>
                </div>
                
                <button
                  onClick={handleBookRoom}
                  className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
                >
                  📱 Confirm & Book on WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Luxury Pilgrim Stays | Premium Accommodations at Sacred Destinations</p>
          <p className="text-xs mt-2 text-gray-400">Book directly via WhatsApp for best rates and instant confirmation</p>
        </div>
      </div>
    </div>
  );
};

export default LuxuryBookingApp;
