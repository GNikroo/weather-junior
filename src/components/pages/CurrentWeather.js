import React, { useEffect } from "react";
import { outfits, weatherConditions } from "../../data";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../../styles/CurrentWeather.module.css";
import appStyles from "../../App.module.css";
import image from "../../assets/clothing/Child.png";
import ScreenSizeChecker from "../ScreenSizeChecker";
import useWeatherStore from "../hooks/useWeatherStore";

const CurrentWeather = () => {
  const {
    weatherData,
    inputLocation,
    locationData,
    isLoading,
    fetchWeatherData,
    fetchLocationData,
  } = useWeatherStore();
  const { isSmallScreen } = ScreenSizeChecker();

  useEffect(() => {
    fetchWeatherData();
  }, [inputLocation, fetchWeatherData]);

  useEffect(() => {
    fetchLocationData();
  }, [inputLocation, fetchLocationData]);

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

  const getWeatherIcon = (code) => {
    for (const condition of Object.values(weatherConditions)) {
      if (condition[code] && condition[code].hasOwnProperty("icon")) {
        return condition[code].icon;
      }
    }
    return "default-icon";
  };

  return (
    <Container className={`${appStyles.Section} ${styles.Section} text-center`}>
      <Row className="py-1 m-auto">
        <Col>
          {weatherData ? (
            <Image
              src={
                getOutfit(weatherData.temperature, weatherData.weather_code)
                  .image
              }
              style={{ height: isSmallScreen ? 300 : 500 }}
              alt="Outfit"
            />
          ) : (
            <Image
              src={image}
              style={{ height: isSmallScreen ? 300 : 500 }}
              alt="Outfit"
            />
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
