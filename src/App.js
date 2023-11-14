import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentWeather from "./components/pages/CurrentWeather";
import About from "./components/About";
import Contact from "./components/Contact";
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
            <Route path="/" element={<CurrentWeather />} />
            <Route path="/historical" element={<HistoricalWeather />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
