import React from "react";
import styles from "../styles/NotFound.module.css";
import { Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex">
      <Row className={`${styles.NotFound} m-0`}>
        <div className="align-self-center text-left">
          <p>Looks like you're lost!</p>
          <p>
            Try going back to the&nbsp;<a href="/">beginning</a>.
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
