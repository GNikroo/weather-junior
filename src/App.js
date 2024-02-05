import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CurrentWeather from "./pages/CurrentWeather";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HistoricalWeather from "./pages/HistoricalWeather";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
// import GetDressed from "./pages/GetDressed";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <NavBar />
        <div className={styles.Content}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/today" element={<CurrentWeather />} />
            <Route path="/historical" element={<HistoricalWeather />} />
            {/* <Route path="/getdressed" element={<GetDressed />} /> */}
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
