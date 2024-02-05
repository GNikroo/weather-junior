import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Search.module.css";
import useWeather from "../hooks/useWeatherStore";

const Search = () => {
  const { handleLocationChange, inputLocation } = useWeather();

  return (
    <Container>
      <div
        className={`${styles.InputContainer} d-flex input-group justify-content-center`}
      >
        <span
          className={`${styles.InputSearch} input-group-text`}
          id="basic-addon1"
        >
          🔎
        </span>
        <input
          type="text"
          value={inputLocation}
          onChange={handleLocationChange}
          className={`${styles.Input}`}
          aria-describedby="basic-addon1"
        />
      </div>
    </Container>
  );
};

export default Search;
