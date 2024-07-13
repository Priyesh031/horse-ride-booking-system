import React from 'react';
import { calendarInvite } from '../utils/CalendarInvite';

const ConfirmationPopUp = ({ horse, date, time, name, email, phone }) => {
  const handleConfirm = () => {
    try {
      console.log('handleConfirm function called!');
      console.log(horse, date, time, name, email, phone);
      calendarInvite(horse, date, time, name, email, phone);
    } catch (error) {
      console.error('Error sending calendar invite:', error);
    }
  };

  return (
    <div className="confirmation-pop-up">
      <h2>Booking Confirmation</h2>
      <p>
        You have successfully booked a horse ride with {horse} on {date} at {time}.
      </p>
      <button onClick={handleConfirm}>Confirm and Send Calendar Invite</button>
    </div>
  );
};

export default ConfirmationPopUp;