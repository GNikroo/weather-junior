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
  const { isSmallScreen } = ScreenSizeChecker();
  const headImages = buildableOutfits.head;
  const clothingImages = buildableOutfits.clothing;
  const accessoriesImages = buildableOutfits.accessories;
  const outfitImages = buildableOutfits.outfits;

  const [headOverlayIndex, setHeadOverlayIndex] = useState(null);
  const [clothingOverlayIndex, setClothingOverlayIndex] = useState(null);
  const [accessoriesOverlayIndex, setAccessoriesOverlayIndex] = useState(null);

  return (
    <Container className={styles.Section}>
      <Row>
        <Col className="text-center py-4">Weather Conditions</Col>
      </Row>
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
