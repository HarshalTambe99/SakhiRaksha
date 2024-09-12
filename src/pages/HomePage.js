// src/pages/HomePage.js
import React, { useState } from 'react';

const HomePage = () => {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [error, setError] = useState('');

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      // Request high-accuracy location data
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchLocationName(latitude, longitude);
          alert(`Location shared! Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => {
          console.error('Error obtaining location:', error);
          setError('Unable to retrieve location. Please check your browser settings.');
        },
        {
          enableHighAccuracy: true, // Request high accuracy
          timeout: 10000, // Set a timeout (10 seconds)
          maximumAge: 0, // Disable caching of location data
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  const fetchLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      if (response.ok) {
        const data = await response.json();
        setLocationName(data.display_name); // Set the location name
      } else {
        setError('Unable to fetch location name.');
      }
    } catch (err) {
      console.error('Error fetching location name:', err);
      setError('Error fetching location name. Please try again.');
    }
  };

  return (
    <div className="home-page">
      <h2>Welcome to the Women Safety Website</h2>
      <p>Your safety is our priority. Get access to emergency contacts, safety tips, and resources.</p>
      <button className="emergency-button" onClick={handleShareLocation}>
        Share Location
      </button>
      {location && (
        <div>
          <h4>Your Location:</h4>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          {locationName && <p>Location Name: {locationName}</p>}
          <p>
            <a
              href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default HomePage;
