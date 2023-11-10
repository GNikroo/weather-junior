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

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    localStorage.setItem("recentLocation", newLocation);
  };
  //
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
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
    <Container className={`${appStyles.Section} ${styles.Section} text-center`}>
      <Row className="pt-2">
        <Col
          className={`${styles.InputContainer} d-flex input-group text-center mb-1`}
        >
          <span
            className={`${styles.InputSearch} input-group-text`}
            id="basic-addon1"
          >
            🔎
          </span>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            className={`${styles.Input}`}
            aria-describedby="basic-addon1"
          />
        </Col>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          weatherData && (
            <Container className={appStyles.Section}>
              <Row className="align-items-center">
                <Col>
                  <Image
                    src={getWeatherIcon(weatherData.weather_code)}
                    alt="Weather Icon"
                    className={styles.Icon}
                  />
                </Col>
                <Col className={styles.Conditions}>
                  <p className="mb-0">{weatherData.weather_descriptions}</p>
                  <p className="mb-0">{weatherData.temperature}°C</p>
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
