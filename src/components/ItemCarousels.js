import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { buildableOutfits } from "../data";
import styles from "../styles/ItemCarousels.module.css";
import ItemCarousel from "./ItemCarousel";
import OutfitImage from "./OutfitImage";

const ItemCarousels = ({ isSmallScreen, weatherData, locationData }) => {
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
