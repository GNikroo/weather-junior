import React, { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ScreenSizeChecker from "../hooks/ScreenSizeChecker";
import useWeatherStore from "../hooks/useWeatherStore";
import ItemCarousels from "../components/ItemCarousels";

const GetDressed = () => {
  const {
    weatherData,
    locationData,
    isLoading,
    fetchWeatherData,
    fetchLocationData,
  } = useWeatherStore();
  const { isSmallScreen } = ScreenSizeChecker();

  useEffect(() => {
    fetchWeatherData();
    fetchLocationData();
  }, [fetchWeatherData, fetchLocationData]);

  return (
    <Container>
      {isLoading ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        weatherData &&
        locationData && (
          <Row className="d-flex px-4 align-items-center justify-content-center">
            <ItemCarousels
              isSmallScreen={isSmallScreen}
              weatherData={weatherData}
              locationData={locationData}
            />
          </Row>
        )
      )}
    </Container>
  );
};

export default GetDressed;
