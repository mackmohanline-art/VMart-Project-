import React, { useState } from "react";

const UserLocation = () => {

  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const getLocation = () => {

    if (!mobile) {
      setError("Please enter your mobile number first");
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setError("");
        },
        () => {
          setError("Location permission denied");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }

  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10">

      <h2 className="text-xl font-bold mb-4">Find Your Location</h2>

      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="border p-3 rounded w-full mb-4"
      />

      <button
        onClick={getLocation}
        className="bg-green-600 text-white px-6 py-3 rounded-lg w-full"
      >
        Show My Location
      </button>

      {location && (
        <div className="mt-4 text-green-700 font-semibold">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}

      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}

    </div>
  );
};

export default UserLocation;
