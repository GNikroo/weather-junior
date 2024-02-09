import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Search.module.css";
import useWeather from "../hooks/useWeatherStore";

const Search = () => {
  const { handleLocationChange } = useWeather();
  const [inputLocation, setInputLocation] = useState("");

  const handleButtonClick = () => {
    handleLocationChange(inputLocation);
    document.activeElement.blur();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLocationChange(inputLocation);
      document.activeElement.blur();
    }
  };

  return (
    <Container>
      <div
        className={`${styles.InputContainer} d-flex m-auto input-group justify-content-center`}
      >
        <button
          className={`${styles.InputSearch} btn btn-outline-secondary`}
          onClick={handleButtonClick}
          aria-label="Search"
        >
          🔎
        </button>
        <input
          type="text"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`${styles.Input} form-control`}
          aria-label="Location Input"
        />
      </div>
    </Container>
  );
};

export default Search;
