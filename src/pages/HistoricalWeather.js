import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Container, Image, Row, Modal, Button } from "react-bootstrap";
import styles from "../styles/HistoricalWeather.module.css";
import appStyles from "../App.module.css";
import image from "../assets/clothing/Child.png";
import ScreenSizeChecker from "../hooks/ScreenSizeChecker";
import useWeatherStore from "../hooks/useWeatherStore";
import useOutfit from "../hooks/useOutfit";
import Search from "../components/Search";

const ErrorModal = ({ errorMessage, onClose }) => {
  return (
    <Modal show={!!errorMessage} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>You've gone too far!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{errorMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const HistoricalWeather = () => {
  const { inputLocation, locationData, fetchLocationData } = useWeatherStore();
  const { isSmallScreen } = ScreenSizeChecker();
  const [historicalWeatherData, setHistoricalWeatherData] = useState(null);
  const [inputDate, setInputDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const { getOutfit, getWeatherIcon } = useOutfit();

  useEffect(() => {
    fetchLocationData();
  }, [inputLocation, fetchLocationData]);

  const handleInputDateChange = (e) => {
    const newDate = e.target.value;
    const minDate = "2009-01-01";
    if (newDate < minDate) {
      setInputDate(minDate);
      setErrorMessage("Please select a date on or after 2009-01-01");
    } else {
      setErrorMessage("");
      setInputDate(newDate);
    }
  };

  const closeModal = () => {
    setErrorMessage("");
  };

  useEffect(() => {
    const fetchHistoricalWeatherData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.weatherstack.com/historical?access_key=${accessKey}&query=${inputLocation}&historical_date=${inputDate}&hourly=1&avgtemp`
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

  return (
    <Container className={`${appStyles.Section} ${styles.Section} text-center`}>
      <Row>
        <Search />
      </Row>
      <Row className="py-2 align-items-center">
        <Col className="d-flex p-0">
          <p className="m-0 text-nowrap">Choose a date:</p>
        </Col>
        <Col>
          <input
            type="date"
            value={inputDate}
            min="2009-01-01"
            onChange={handleInputDateChange}
            className={`${styles.Input} ${styles.InputDate}`}
          />
          {errorMessage && (
            <ErrorModal errorMessage={errorMessage} onClose={closeModal} />
          )}
        </Col>
      </Row>
      <Row className="py-1 m-auto">
        <Col>
          {historicalWeatherData ? (
            <Image
              src={
                getOutfit(
                  historicalWeatherData.temperature,
                  historicalWeatherData.weather_code
                ).image
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
          historicalWeatherData && (
            <div className="d-block">
              <Row className="justify-content-center">
                <div className={styles.Location}>
                  <p className="fw-bold">
                    {inputDate} in {locationData.name},{" "}
                    {locationData.country === "United States of America" ? (
                      <span>{locationData.region}</span>
                    ) : (
                      <span>{locationData.country}</span>
                    )}
                  </p>
                </div>
              </Row>
              <Row className={`${styles.ConditionsContainer}`}>
                <Col className="d-flex justify-content-end">
                  <Image
                    src={getWeatherIcon(historicalWeatherData.weather_code)}
                    alt="Weather Icon"
                    height={65}
                  />
                </Col>
                <Col className={`${styles.Conditions} m-auto`}>
                  <p className="d-flex mb-0">
                    {historicalWeatherData.weather_descriptions}
                  </p>
                  <p className="d-flex mb-0">
                    {historicalWeatherData.temperature}
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

export default HistoricalWeather;
