import React from "react";
import styles from "../styles/NotFound.module.css";
import { Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex">
      <Row className={`${styles.NotFound}`}>
        <div className="align-self-center">
          <span className="d-flex justify-content-center">
            Looks like you're lost!
          </span>
          <span className="d-flex justify-content-center">
            Try going back to the&nbsp;<a href="/">beginning</a>.
          </span>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
