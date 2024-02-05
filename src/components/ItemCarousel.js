import React from "react";
import { Col, Image, Carousel } from "react-bootstrap";
import styles from "../styles/ItemCarousel.module.css";

const ItemCarousel = ({ images, onItemSelected, isSmallScreen }) => {
  const handleSelect = (selectedIndex) => {
    onItemSelected(selectedIndex);
  };

  return (
    <Col className={styles.ItemCol}>
      {isSmallScreen ? (
        <Carousel
          interval={null}
          indicators={false}
          controls={false}
          defaultActiveIndex={0}
          touch={true}
          onSelect={handleSelect}
          variant="dark"
        >
          {images.map((imageUrl, index) => (
            <Carousel.Item
              key={index}
              className={`${styles.Carousel} position-relative`}
            >
              <Image src={imageUrl} alt="Overlay Image" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel
          interval={null}
          indicators={false}
          defaultActiveIndex={0}
          touch={true}
          onSelect={handleSelect}
          variant="dark"
          className={styles.DesktopCarousel}
        >
          {images.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <Image
                className="d-block m-auto"
                src={imageUrl}
                style={{ height: 250 }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Col>
  );
};

export default ItemCarousel;
