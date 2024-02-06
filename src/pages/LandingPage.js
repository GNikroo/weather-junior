import React from "react";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";
import appStyles from "../App.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick1 = () => navigate("/today");
  const handleClick2 = () => navigate("/historical");
  const handleClick3 = () => navigate("/getdressed");

  return (
    <Container className={`${appStyles.Section} ${styles.Section} d-flex`}>
      <Row
        className={`${styles.Row} d-flex pb-5 text-center align-content-center`}
      >
        <div className="p-3">
          <button
            className={`${styles.Button1} border-0 p-3`}
            onClick={handleClick1}
          >
            Today's Forecast
          </button>
        </div>
        <div className="p-3">
          <button
            className={`${styles.Button2} border-0 p-3`}
            onClick={handleClick2}
          >
            This day in history
          </button>
        </div>
        <div className="d-none p-3">
          <button
            className={`${styles.Button3} border-0 p-3`}
            onClick={handleClick3}
          >
            Get dressed!
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default LandingPage;
