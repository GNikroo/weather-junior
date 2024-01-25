import React from "react";
import { Carousel, Col, Image } from "react-bootstrap";
import styles from "../styles/ItemCarousels.module.css";

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

export default ItemCarousel;
