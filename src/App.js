import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [countdownDate, setCountdownDate] = useState(
    new Date('2023-05-25T09:00:00').getTime()
  );
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(
      () => setCountdownDate(new Date('2023-05-25T09:00:00').getTime()),
      1000
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className="App">
      <h1 className="countdown-heading">25 Mayıs 2023</h1>
      <h1 className="countdown-heading">Kıraat İmtihanına Kalan</h1>
      <div className="countdown">
        <div className="countdown-item">
          <div className="countdown-time">{days}</div>
          <div className="countdown-label">Gün</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">{hours}</div>
          <div className="countdown-label">Saat</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">{minutes}</div>
          <div className="countdown-label">Dakika</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-time">{seconds}</div>
          <div className="countdown-label">Saniye</div>
        </div>
      </div>
    </div>
  );
}

export default App;
