import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { buildableOutfits, weatherConditions } from "../../data";
import styles from "../../styles/GetDressed.module.css";
import ScreenSizeChecker from "../hooks/ScreenSizeChecker";
import useWeatherStore from "../hooks/useWeatherStore";

const useCarousels = () => {
  const {
    weatherData,
    inputLocation,
    locationData,
    isLoading,
    fetchWeatherData,
    fetchLocationData,
  } = useWeatherStore();
  const { isSmallScreen } = ScreenSizeChecker();

  const getWeatherIcon = (code) => {
    for (const condition of Object.values(weatherConditions)) {
      if (condition[code] && condition[code].hasOwnProperty("icon")) {
        return condition[code].icon;
      }
    }
    return "default-icon";
  };

  return {
    weatherData,
    inputLocation,
    locationData,
    isLoading,
    fetchWeatherData,
    fetchLocationData,
    isSmallScreen,
    getWeatherIcon,
  };
};
