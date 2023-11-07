import React, { useState, useEffect } from "react";
import axios from "axios";
import { outfits, weatherConditions } from "../../data";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../../styles/CurrentWeather.module.css";
import appStyles from "../../App.module.css";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(
    localStorage.getItem("recentLocation") || "Stockholm"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    localStorage.setItem("recentLocation", newLocation);
  };

  const handleTemperatureToggle = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  const convertTemperature = (temperature) => {
    let convertedTemperature;
    if (isFahrenheit) {
      convertedTemperature = temperature;
    } else {
      convertedTemperature = ((temperature - 32) * 5) / 9;
    }
    return convertedTemperature.toFixed(0);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const accessKey = "SECRET";
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
          <button onClick={handleTemperatureToggle}>
            {isFahrenheit ? "Switch to Fahrenheit" : "Switch to Celsius"}
          </button>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          weatherData && (
            <Container className={appStyles.Section}>
              <Row>
                <Col>
                  <Image
                    src={getWeatherIcon(weatherData.weather_code)}
                    height={100}
                    alt="Weather Icon"
                  />
                </Col>
                <Col className={styles.Conditions}>
                  <p>{weatherData.weather_descriptions}</p>
                  <p>
                    {convertTemperature(weatherData.temperature)}
                    {isFahrenheit ? "°C" : "°F"}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image
                    src={
                      getOutfit(
                        weatherData.temperature,
                        weatherData.weather_code
                      ).image
                    }
                    height={350}
                    alt="Outfit"
                  />
                </Col>
              </Row>
            </Container>
          )
        )}
      </div>
    </Container>
  );
};

export default CurrentWeather;
