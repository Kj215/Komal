import React, { useEffect } from 'react';
import './AnalogClock.css'; // Import the CSS file

const AnalogClock = () => {
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minutesDegrees = ((minutes / 60) * 360) + 90;
      const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

      document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
      document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;
      document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
    };

    const interval = setInterval(updateClock, 1000);
    updateClock(); // initial call

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand minute-hand"></div>
        <div className="hand second-hand"></div>

        {/* Hour Labels */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="hour-label"
            style={{
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            <div
              style={{
                transform: `rotate(-${i * 30}deg)`,
              }}
            >
              {i === 0 ? 12 : i}
            </div>
          </div>
        ))}

        {/* Five-minute markers */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className={`minute-marker ${i % 5 === 0 ? 'hour-marker' : ''}`}
            style={{
              transform: `rotate(${i * 6}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalogClock;
