import React, {useState} from 'react';
import HorseCard from './HorseCard';
import {horseData} from '../utils/horseData';
import BookingForm from './BookingForm';

const LandingPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleClose = () => {
    setShowBookingForm(false);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Horse Ride Booking System</h1>
      <h3>Choose your horse and book a ride today!</h3>
      <div className="horse-grid">
        {horseData.map((horse) => (
          <HorseCard key={horse.id} horse={horse} />
        ))}
      </div>
      <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>
      {showBookingForm && (
        <div className="popup">
          <div className="popup-content">
            <h2>Booking Details</h2>
            <BookingForm />
            <button className="close-btn" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;