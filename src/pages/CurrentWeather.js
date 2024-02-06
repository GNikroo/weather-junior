import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from "../styles/CurrentWeather.module.css";
import appStyles from "../App.module.css";
import image from "../assets/clothing/Child.png";
import ScreenSizeChecker from "../hooks/ScreenSizeChecker";
import useWeatherStore from "../hooks/useWeatherStore";
import useOutfit from "../hooks/useOutfit";
import Map from "../components/Map";
import Search from "../components/Search";

const CurrentWeather = () => {
  const {
    weatherData,
    inputLocation,
    locationData,
    isLoading,
    fetchWeatherData,
    fetchLocationData,
  } = useWeatherStore();

  const { getOutfit, getWeatherIcon } = useOutfit();

  const { isSmallScreen } = ScreenSizeChecker();

  useEffect(() => {
    fetchWeatherData();
  }, [inputLocation, fetchWeatherData]);

  useEffect(() => {
    fetchLocationData();
  }, [inputLocation, fetchLocationData]);

  return (
    <Container className={`${appStyles.Section} ${styles.Section} text-center`}>
      <Row className={`${styles.RowContainer} m-auto`}>
        <Search />
        <Col className="py-1 py-lg-4">
          {weatherData ? (
            <Image
              src={
                getOutfit(weatherData.temperature, weatherData.weather_code)
                  .image
              }
              style={{ height: isSmallScreen ? 260 : 500 }}
              alt="Outfit"
            />
          ) : (
            <Image
              src={image}
              style={{ height: isSmallScreen ? 260 : 500 }}
              alt="Outfit"
            />
          )}
        </Col>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          weatherData &&
          locationData && (
            <Row className="d-flex m-0 justify-content-center">
              <Row className={`${styles.ConditionsContainer} pb-2 pb-lg-5`}>
                <Col className="text-end align-self-center">
                  <Image
                    src={getWeatherIcon(weatherData.weather_code)}
                    alt="Weather Icon"
                    height={50}
                  />
                </Col>
                <Col className={`${styles.Conditions} align-self-center`}>
                  <div className="justify-content-left">
                    {locationData.name ? (
                      <span className="fw-bold">
                        {locationData.name},{" "}
                        {locationData.country === "United States of America" ? (
                          <span>{locationData.region}</span>
                        ) : (
                          <span>{locationData.country}</span>
                        )}
                      </span>
                    ) : (
                      <p></p>
                    )}
                    <p className="mb-0">
                      {weatherData.temperature}
                      °C, {weatherData.weather_descriptions}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Map />
              </Row>
            </Row>
          )
        )}
      </Row>
    </Container>
  );
};

export default CurrentWeather;
