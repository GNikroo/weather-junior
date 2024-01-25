import React from "react";
import { Col, Image, Carousel } from "react-bootstrap";
import styles from "../styles/ItemCarousel.module.css";

const ItemCarousel = ({ images, onItemSelected, isSmallScreen }) => {
  const handleSelect = (selectedIndex) => {
    onItemSelected(selectedIndex);
  };

  const overlayImageStyle = {
    top: "-75%",
    left: "-25%",
    height: 500,
    display: isSmallScreen ? "block" : "none",
    zIndex: isSmallScreen ? 1 : 0,
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
          className={`${styles.SmallScreenCarousel} position-absolute top-50 start-50 translate-middle`}
        >
          {images.map((imageUrl, index) => (
            <Carousel.Item key={index} className="position-relative">
              <Image
                style={overlayImageStyle}
                src={imageUrl}
                alt="Overlay Image"
              />
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
