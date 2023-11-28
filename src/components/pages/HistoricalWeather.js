import React, { useState, useEffect } from "react";
import axios from "axios";
import { outfits, weatherConditions } from "../../data";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../../styles/HistoricalWeather.module.css";
import appStyles from "../../App.module.css";

const HistoricalWeather = () => {
  const [historicalWeatherData, setHistoricalWeatherData] = useState(null);
  const [inputLocation, setInputLocation] = useState(
    () => localStorage.getItem("recentLocation") || "Stockholm, Sweden"
  );
  const [locationData, setLocationData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [inputDate, setInputDate] = useState("");

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setInputLocation(newLocation);
    localStorage.setItem("recentLocation", newLocation);
  };

  const handleInputDateChange = (e) => {
    const newDate = e.target.value;
    setInputDate(newDate);
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
    const fetchHistoricalWeatherData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.weatherstack.com/historical?access_key=${accessKey}&query=${inputLocation}&historical_date=${inputDate}&hourly=1&interval=1`
        );

        if (weatherResponse.data && weatherResponse.data.historical) {
          setHistoricalWeatherData(
            weatherResponse.data.historical[inputDate].hourly[6]
          );
        } else {
          console.error("Weather data not found");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHistoricalWeatherData();
  }, [inputLocation, inputDate]);

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
            value={inputLocation}
            onChange={handleLocationChange}
            className={`${styles.Input}`}
            aria-describedby="basic-addon1"
          />
          <input
            type="date"
            value={inputDate}
            min="2009-01-01"
            onChange={handleInputDateChange}
            className={styles.Input}
          />
        </Col>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          historicalWeatherData && (
            <Container className={appStyles.Section}>
              <Row className="justify-content-center">
                <div className={styles.Location}>
                  {locationData.country === "United States of America" ? (
                    <p>
                      On {inputDate} in {locationData.name},{" "}
                      {locationData.region} it was{" "}
                      {historicalWeatherData.temperature} °C.
                    </p>
                  ) : (
                    <p>
                      On {inputDate} in {locationData.name},{" "}
                      {locationData.country} it was{" "}
                      {historicalWeatherData.temperature} °C.
                    </p>
                  )}
                </div>
              </Row>
              <Row className={`${styles.ConditionsContainer}`}>
                <Col>
                  <Image
                    src={getWeatherIcon(historicalWeatherData.weather_code)}
                    alt="Weather Icon"
                    height={65}
                  />
                </Col>
                <Col className={styles.Conditions}>
                  <p className="mb-0">
                    {historicalWeatherData.temperature}
                    °C
                  </p>
                </Col>
              </Row>
              <Row className="py-1">
                <Col>
                  <Image
                    src={
                      getOutfit(
                        historicalWeatherData.temperature,
                        historicalWeatherData.weather_code
                      ).image
                    }
                    height={300}
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

export default HistoricalWeather;
