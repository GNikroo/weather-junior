import React, { useState } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { buildableOutfits } from "../../data";
import styles from "../../styles/GetDressed.module.css";
import ScreenSizeChecker from "../ScreenSizeChecker";

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
              style={{ height: isSmallScreen ? 150 : 250 }}
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
          className="d-block m-auto"
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
  const headImages = buildableOutfits.head
