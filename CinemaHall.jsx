import React, { useState, useEffect } from 'react';
import './CinemaHall.css';
function CinemaHall() {
  const [seats, setSeats] = useState([]);
  const [selectedSeatsByShowtime, setSelectedSeatsByShowtime] = useState({}); 
  const [showtimes] = useState(['16:20', '17:00', '17:40', '19:00']);
  const [selectedShowtime, setSelectedShowtime] = useState('16:20');
  const [seatsByShowtime, setSeatsByShowtime] = useState({});

 const generateSeats = () => {
    return Array(96).fill().map((_, index) => {
      const row = Math.floor(index / 12) + 1;
      const isSuperLux = row >= 7;
      const isBooked = Math.random() < 0.3;
      return {
        id: index + 1,
        row,
        booked: isBooked,
        selected: false,
        type: isSuperLux ? 'SUPER LUX' : 'GOOD',
        price: isSuperLux ? 270 : 160,
      };
    });
  };
