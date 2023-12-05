import React, { useState, useEffect } from "react";
import axios from "axios";
import { outfits, weatherConditions } from "../../data";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../../styles/CurrentWeather.module.css";
import appStyles from "../../App.module.css";
import image from "../../assets/clothing/Child.png";

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputLocation, setInputLocation] = useState(
    () => localStorage.getItem("recentLocation") || "Stockholm, Sweden"
  );
  const [locationData, setLocationData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setInputLocation(newLocation);
    localStorage.setItem("recentLocation", newLocation);
  };

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.weatherstack.com/current?access_key=${accessKey}&query=${inputLocation}`
        );

        if (weatherResponse.data && weatherResponse.data.location) {
          setLocationData(weatherResponse.data.location);
        } else {
          console.error("Location data not found");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocationData();
  }, [inputLocation, setLocationData]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.weatherstack.com/current?access_key=${accessKey}&query=${inputLocation}`
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
  }, [inputLocation]);

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
      <Row>
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
            value={inputLocation}
            onChange={handleLocationChange}
            className={`${styles.Input}`}
            aria-describedby="basic-addon1"
          />
        </Col>
      </Row>
      <Row className="py-1 m-auto">
        <Col>
          {weatherData ? (
            <Image
              src={
                getOutfit(weatherData.temperature, weatherData.weather_code)
                  .image
              }
              height={300}
              alt="Outfit"
            />
          ) : (
            <Image src={image} height={300} alt="Outfit" />
          )}
        </Col>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          weatherData && (
            <div className="d-block">
              <Row className="justify-content-center">
                <div className={styles.Location}>
                  {locationData.country === "United States of America" ? (
                    <p>
                      {locationData.name}, {locationData.region}
                    </p>
                  ) : (
                    <p>
                      {locationData.name}, {locationData.country}
                    </p>
                  )}
                </div>
              </Row>
              <Row className={`${styles.ConditionsContainer}`}>
                <Col className="d-flex justify-content-end">
                  <Image
                    src={getWeatherIcon(weatherData.weather_code)}
                    alt="Weather Icon"
                    height={65}
                  />
                </Col>
                <Col className={`${styles.Conditions} m-auto`}>
                  <p className="d-flex mb-0">
                    {weatherData.weather_descriptions}
                  </p>
                  <p className="d-flex mb-0">
                    {weatherData.temperature}
                    °C
                  </p>
                </Col>
              </Row>
            </div>
          )
        )}
      </Row>
    </Container>
  );
};

export default CurrentWeather;
