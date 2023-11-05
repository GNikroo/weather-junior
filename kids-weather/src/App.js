import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentWeather from "./components/pages/CurrentWeather";
import About from "./components/About";
import HistoricalWeather from "./components/pages/HistoricalWeather";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <div className={styles.Content}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/today" element={<CurrentWeather />} />
            <Route path="/past" element={<HistoricalWeather />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
