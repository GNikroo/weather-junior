import { useState, useEffect } from "react";
import axios from "axios";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [inputLocation, setInputLocation] = useState(
    () => localStorage.getItem("recentLocation") || "Stockholm, Sweden"
  );
  const [locationData, setLocationData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setInputLocation(newLocation);
    localStorage.setItem("recentLocation", newLocation);
  };

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.weatherstack.com/current?access_key=${accessKey}&query=${inputLocation}`
        );

        if (weatherResponse.data && weatherResponse.data.location) {
          setLocationData(weatherResponse.data.location);
        } else {
          console.error("Location data not found");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocationData();
  }, [inputLocation, setLocationData]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
        const weatherResponse = await axios.get(
          `https://api.weatherstack.com/current?access_key=${accessKey}&query=${inputLocation}`
        );

        if (weatherResponse.data && weatherResponse.data.current) {
          setWeatherData(weatherResponse.data.current);
        } else {
          console.error("Weather data not found");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, [inputLocation]);

  return {
    handleLocationChange,
    weatherData,
    inputLocation,
    locationData,
    isLoading,
  };
};

export default useWeather;
