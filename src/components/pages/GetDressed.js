import React, { useState, useEffect } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { outfits, buildableOutfits, weatherConditions } from "../../data";
import styles from "../../styles/GetDressed.module.css";
import ScreenSizeChecker from "../ScreenSizeChecker";
import useWeatherStore from "../hooks/useWeatherStore";

const ItemCarousel = ({ images, onItemSelected, isSmallScreen }) => {
  const handleSelect = (selectedIndex) => {
    onItemSelected(selectedIndex);
  };

  return (
    <Col className={styles.ItemCol}>
      <Carousel
        interval={null}
        indicators={false}
        defaultActiveIndex={0}
        touch={true}
        onSelect={handleSelect}
        variant="dark"
      >
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block m-auto"
              src={imageUrl}
              style={{ height: isSmallScreen ? 150 : 200 }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
};

const OverlayImage = ({ src, top, start, isSmallScreen }) => {
  const overlayImageStyle = {
    top,
    left: start,
    height: isSmallScreen ? 300 : 500,
  };
  return (
    <Image
      className="position-absolute top-50 start-50 translate-middle"
      src={src}
      style={overlayImageStyle}
      alt="Overlay Image"
    />
  );
};

const OutfitImage = ({
  images,
  headIndex,
  clothingIndex,
  accessoriesIndex,
  isSmallScreen,
}) => {
  const { head, clothing, accessories } = buildableOutfits;

  return (
    <Col>
      <div className="position-relative">
        <Image
          className={`${styles.Outfit} m-auto`}
          src={images[0]}
          style={{ height: isSmallScreen ? 300 : 500 }}
          alt="Outfit Image"
        />
        {headIndex !== null && (
          <OverlayImage
            src={head[headIndex]}
            top="-75%"
            start="-25%"
            isSmallScreen={isSmallScreen}
          />
        )}
        {clothingIndex !== null && (
          <OverlayImage
            src={clothing[clothingIndex]}
            top="0"
            start="-25%"
            isSmallScreen={isSmallScreen}
          />
        )}
        {accessoriesIndex !== null && (
          <OverlayImage
            src={accessories[accessoriesIndex]}
            top="75%"
            start="-25%"
            isSmallScreen={isSmallScreen}
          />
        )}
      </div>
    </Col>
  );
};

const ItemCarousels = () => {
  const {
    weatherData,
    inputLocation,
    locationData,
    isLoading,
    fetchWeatherData,
    fetchLocationData,
  } = useWeatherStore();
  const { isSmallScreen } = ScreenSizeChecker();
  const headImages = buildableOutfits.head;
  const clothingImages = buildableOutfits.clothing;
  const accessoriesImages = buildableOutfits.accessories;
  const outfitImages = buildableOutfits.outfits;

  const [headOverlayIndex, setHeadOverlayIndex] = useState(null);
  const [clothingOverlayIndex, setClothingOverlayIndex] = useState(null);
  const [accessoriesOverlayIndex, setAccessoriesOverlayIndex] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [inputLocation, fetchWeatherData]);

  useEffect(() => {
    fetchLocationData();
  }, [inputLocation, fetchLocationData]);

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
    <Container className={styles.Section}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        weatherData && (
          <div className="d-block">
            <Row
              className={`${styles.Location} d-flex align-items-center text-center`}
            >
              {locationData.country === "United States of America" ? (
                <p>
                  {locationData.name}, {locationData.region}
                </p>
              ) : (
                <p>
                  {locationData.name}, {locationData.country}
                </p>
              )}
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Image
                  src={getWeatherIcon(weatherData.weather_code)}
                  alt="Weather Icon"
                  height={50}
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
      <Row className="d-flex px-4 align-items-center justify-content-center">
        <Col
          xs={5}
          sm={4}
          md={5}
          className="d-flex flex-column align-items-center p-0"
        >
          <ItemCarousel
            images={headImages}
            onItemSelected={setHeadOverlayIndex}
            isSmallScreen={isSmallScreen}
          />
          <ItemCarousel
            images={clothingImages}
            onItemSelected={setClothingOverlayIndex}
            isSmallScreen={isSmallScreen}
          />
          <ItemCarousel
            images={accessoriesImages}
            onItemSelected={setAccessoriesOverlayIndex}
            isSmallScreen={isSmallScreen}
          />
        </Col>
        <Col
          xs={7}
          sm={4}
          md={7}
          className="d-flex flex-column align-items-center p-0"
        >
          <OutfitImage
            images={outfitImages}
            headIndex={headOverlayIndex}
            clothingIndex={clothingOverlayIndex}
            accessoriesIndex={accessoriesOverlayIndex}
            isSmallScreen={isSmallScreen}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCarousels;
