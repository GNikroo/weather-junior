import React, { useState } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { buildableOutfits } from "../../data";

const OverlayImage = ({ src, top, start }) => (
  <Image
    className="position-absolute top-50 start-50 translate-middle"
    src={src}
    height={300}
    style={{ top, left: start }}
    alt="Overlay Image"
  />
);

const ItemCarousel = ({ images, onItemSelected }) => {
  const handleSelect = (selectedIndex) => {
    onItemSelected(selectedIndex);
  };

  return (
    <Col>
      <Carousel interval={null} defaultActiveIndex={0} onSelect={handleSelect}>
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <Image className="d-block m-auto" src={imageUrl} height={150} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
};

const OutfitCarousel = ({
  images,
  headIndex,
  clothingIndex,
  accessoriesIndex,
}) => {
  const { head, clothing, accessories } = buildableOutfits;

  return (
    <Col>
      <div className="position-relative">
        <Image
          className="d-block m-auto"
          src={images[0]}
          height={300}
          alt="Outfit Image"
        />
        {headIndex !== null && (
          <OverlayImage src={head[headIndex]} top="-75%" start="-25%" />
        )}
        {clothingIndex !== null && (
          <OverlayImage src={clothing[clothingIndex]} top="0" start="-25%" />
        )}
        {accessoriesIndex !== null && (
          <OverlayImage
            src={accessories[accessoriesIndex]}
            top="75%"
            start="-25%"
          />
        )}
      </div>
    </Col>
  );
};

const ItemCarousels = () => {
  const headImages = buildableOutfits.head;
  const clothingImages = buildableOutfits.clothing;
  const accessoriesImages = buildableOutfits.accessories;
  const outfitImages = buildableOutfits.outfits;

  const [headOverlayIndex, setHeadOverlayIndex] = useState(null);
  const [clothingOverlayIndex, setClothingOverlayIndex] = useState(null);
  const [accessoriesOverlayIndex, setAccessoriesOverlayIndex] = useState(null);

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center">
        <Col sm={4} md={4} lg={4}>
          <ItemCarousel
            images={headImages}
            onItemSelected={setHeadOverlayIndex}
          />
          <ItemCarousel
            images={clothingImages}
            onItemSelected={setClothingOverlayIndex}
          />
          <ItemCarousel
            images={accessoriesImages}
            onItemSelected={setAccessoriesOverlayIndex}
          />
        </Col>
        <Col sm={4} md={4} lg={4}>
          <OutfitCarousel
            images={outfitImages}
            headIndex={headOverlayIndex}
            clothingIndex={clothingOverlayIndex}
            accessoriesIndex={accessoriesOverlayIndex}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCarousels;
