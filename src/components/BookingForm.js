import React, { useState } from 'react';
import { bookHorse } from '../actions/BookingActions';

const BookingForm = () => {
  const [horse, setHorse] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    bookHorse(horse, date, time, name, email, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select a horse:
        <select value={horse} onChange={(e) => setHorse(e.target.value)}>
          <option value="">Select a horse</option>
          <option value="horse1">Horse 1</option>
          <option value="horse2">Horse 2</option>
          <option value="horse3">Horse 3</option>
          <option value="horse4">Horse 4</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;