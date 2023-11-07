import React, { useState, useEffect } from "react";
import axios from "axios";
import { outfits, weatherConditions } from "../../data";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(
    localStorage.getItem("recentLocation") || "Stockholm"
  );
  const [isLoading, setIsLoading] = useState(true);

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    localStorage.setItem("recentLocation", newLocation);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const accessKey = "2280b70e2aed37d964bcbced0c1a79e3";
        const weatherResponse = await axios.get(
          `http://api.weatherstack.com/current?access_key=${accessKey}&query=${location}`
        );

        if (weatherResponse.data && weatherResponse.data.current) {
          console.log("Weather Data:", weatherResponse.data);

          setWeatherData(weatherResponse.data.current);
        } else {
          console.error("Weather data not found");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, [location]);

  const getWeatherIcon = (code) => {
    for (const condition of Object.values(weatherConditions)) {
      if (condition[code] && condition[code].hasOwnProperty("icon")) {
        return condition[code].icon;
      }
    }
    return "default-icon";
  };

  const getOutfit = (temperature, weather_code) => {
    let selectedOutfit = outfits.default;

    if (weather_code && weatherConditions.wet[weather_code]) {
      if (temperature >= 15 && temperature <= 25) {
        selectedOutfit = outfits.default;
      } else if (temperature > 5 && temperature < 15) {
        selectedOutfit = outfits.rainy;
      }
    } else if (weather_code && weatherConditions.snow[weather_code]) {
      if (temperature < 5) {
        selectedOutfit = outfits.snowy;
      }
    }

    return selectedOutfit;
  };

  return (
    <>
      <div>
        <div>
          <input type="text" value={location} onChange={handleLocationChange} />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          weatherData && (
            <>
              <img
                src={getWeatherIcon(weatherData.weather_code)}
                height={100}
                alt="Weather Icon"
              />
              <div>{weatherData.weather_descriptions}</div>
              <div>{weatherData.temperature}°C</div>
              <div>
                <img
                  src={
                    getOutfit(weatherData.temperature, weatherData.weather_code)
                      .image
                  }
                  height={300}
                  alt="Outfit"
                />
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};

export default CurrentWeather;
