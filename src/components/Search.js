import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Search.module.css";
import useWeather from "../hooks/useWeatherStore";

const Search = () => {
  const { handleLocationChange } = useWeather();
  const [inputLocation, setInputLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLocationChange(inputLocation);
    document.activeElement.blur();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div
          className={`${styles.InputContainer} d-flex m-auto input-group justify-content-center`}
        >
          <input
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            className={`${styles.Input} form-control`}
            aria-label="Location Input"
          />
          <button
            type="submit"
            className={`${styles.InputSearch} btn btn-outline-secondary`}
            aria-label="Search"
          >
            🔎
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Search;
