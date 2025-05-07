import React, { useState, useEffect } from 'react';
import './CinemaHall.css';
function CinemaHall() {
  const [seats, setSeats] = useState([]);
  const [selectedSeatsByShowtime, setSelectedSeatsByShowtime] = useState({}); 
  const [showtimes] = useState(['16:20', '17:00', '17:40', '19:00']);
  const [selectedShowtime, setSelectedShowtime] = useState('16:20');
  const [seatsByShowtime, setSeatsByShowtime] = useState({});
