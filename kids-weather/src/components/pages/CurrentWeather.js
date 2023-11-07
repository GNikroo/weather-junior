import React, { useState, useEffect } from "react";
import axios from "axios";
import { outfits, weatherConditions } from "../../data";
import { Container } from "react-bootstrap";
import styles from "../../styles/CurrentWeather.module.css";

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
        const accessKey = "7492d546848ecbf59a6a171a50ab1854";
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
      if (temperature >= 5 && temperature <= 25) {
        selectedOutfit = outfits.rainy;
      } else if (temperature < 5) {
        selectedOutfit = outfits.snowy;
      }
    } else if (weather_code && weatherConditions.dry[weather_code]) {
      if (temperature > 17) {
        selectedOutfit = outfits.warm;
      } else if (temperature >= 7 && temperature <= 12) {
        selectedOutfit = outfits.windy;
      } else if (temperature > 12 && temperature < 17) {
        selectedOutfit = outfits.chilly;
      } else if (temperature < 7) selectedOutfit = outfits.snowy;
    } else if (weather_code && weatherConditions.snow[weather_code]) {
      selectedOutfit = outfits.snowy;
    }

    return selectedOutfit;
  };

  return (
    <Container className={`${styles.Section} text-center`}>
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
    </Container>
  );
};

export default CurrentWeather;
