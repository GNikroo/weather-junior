import React, { useState, useEffect } from "react";
import axios from "axios";
import { outfits, weatherConditions } from "../../data";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import styles from "../../styles/CurrentWeather.module.css";
import appStyles from "../../App.module.css";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(
    localStorage.getItem("recentLocation") || "Stockholm"
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

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
      convertedTemperature = (temperature * 9) / 5 + 32;
    } else {
      convertedTemperature = temperature;
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
      if (temperature >= 20) {
        selectedOutfit = outfits.warm;
      } else if (temperature >= 7 && temperature <= 12) {
        selectedOutfit = outfits.windy;
      } else if (temperature > 12 && temperature < 20) {
        selectedOutfit = outfits.chilly;
      } else if (temperature < 7) selectedOutfit = outfits.snowy;
    } else if (weather_code && weatherConditions.snow[weather_code]) {
      selectedOutfit = outfits.snowy;
    }

    return selectedOutfit;
  };

  return (
    <Container className={`${appStyles.Section} text-center`}>
      <Row className="pt-2">
        <Col className="input-group has-validation">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className={styles.Input}
          />
        </Col>
        <Col>
          <Button variant="light" onClick={handleTemperatureToggle}>
            {isFahrenheit ? "Celsius" : "Fahrenheit"}
          </Button>
        </Col>

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
                    {isFahrenheit ? "°F" : "°C"}
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
      </Row>
    </Container>
  );
};

export default CurrentWeather;
