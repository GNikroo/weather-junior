import React from "react";
import { outfits } from "../data";
import { Image } from "react-bootstrap";
import styles from "../styles/Child.module.css";

const Outfits = (props) => {
  const ChildOutfits = ({ image, alt }) => (
    <div>
      <Image
        className={`${styles.Image} w-100`}
        src={image}
        height="300"
        alt={alt}
      />
    </div>
  );

  return (
    <div>
      {outfits.map((outfit) => (
        <ChildOutfits {...outfit} />
      ))}
    </div>
  );
};

export default Outfits;
