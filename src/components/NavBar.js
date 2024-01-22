import React from "react";
import { Container, Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import useWeather from "../components/hooks/useWeatherStore";

const NavBar = () => {
  const { handleLocationChange, inputLocation } = useWeather();

  return (
    <Container>
      <Navbar className={styles.Section}>
        <Col xs={4} sm={5} md={6}>
          <Link to="/" className={`${styles.Brand} text-decoration-none`}>
            Weather Jr.
          </Link>
        </Col>
        <Col
          className={`${styles.InputContainer} d-flex input-group text-center`}
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
        </Col>
        <Col xs={1}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={styles.Dropdown} id="basic-navbar-nav">
            <NavDropdown title="" id="basic-nav-dropdown">
              <Link to="/about" className={styles.Links}>
                About
              </Link>
              <br></br>
              <Link to="/today" className={styles.Links}>
                Current Weather
              </Link>
              <br></br>
              <Link to="/past" className={styles.Links}>
                Historical Weather
              </Link>
            </NavDropdown>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    </Container>
  );
};

export default NavBar;
