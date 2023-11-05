import React, { useState, useEffect } from "react";
import Outfits from "../Outfits";

const CurrentWeather = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute (60000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getFormattedTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div>
      <p>Current Time: {getFormattedTime(currentTime)}</p>
      <Outfits />
    </div>
  );
};

export default CurrentWeather;
