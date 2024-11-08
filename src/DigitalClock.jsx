import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      let hour = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const isAm = hour < 12 || hour === 0 ? "AM" : "PM";

      hour = hour % 12 || 12; // Convert 24-hour time to 12-hour time

      const formattedTime = `${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${isAm}`;

      setTime(formattedTime);
    };

    const timerID = setInterval(updateClock, 1000);
    updateClock(); // Initial call to set the time immediately

    return () => clearInterval(timerID); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <div id="clock">
        <div id="text">Current local time</div>
        <div id="time">{time}</div>
      </div>
    </div>
  );
};

export default DigitalClock;
