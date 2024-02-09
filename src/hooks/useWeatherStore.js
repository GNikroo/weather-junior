import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const useWeatherStore = create(
  persist(
    (set, get) => ({
      weatherData: null,
      inputLocation: localStorage.getItem("recentLocation") || "",
      locationData: null,
      isLoading: true,
      handleLocationChange: (newLocation) => {
        if (newLocation !== undefined) {
          set({ inputLocation: newLocation });
        }
      },
      handleMapClick: (lat, lng) => {
        const newLocation = `${lat},${lng}`;
        set({ inputLocation: newLocation });
      },
      fetchWeatherData: async () => {
        const state = get();
        try {
          const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
          const weatherResponse = await axios.get(
            `https://api.weatherstack.com/current?access_key=${accessKey}&query=${state.inputLocation}`
          );

          if (weatherResponse.data && weatherResponse.data.current) {
            set({ weatherData: weatherResponse.data.current });
          } else {
            console.error("Weather data not found");
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
        } finally {
          set({ isLoading: false });
        }
      },
      fetchLocationData: async () => {
        const state = get();
        try {
          const accessKey = process.env.REACT_APP_WEATHER_API_KEY;
          const weatherResponse = await axios.get(
            `https://api.weatherstack.com/current?access_key=${accessKey}&query=${state.inputLocation}`
          );

          if (weatherResponse.data && weatherResponse.data.location) {
            set({ locationData: weatherResponse.data.location });
          } else {
            console.error("Location data not found");
          }
        } catch (error) {
          console.error("Error fetching location data:", error);
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: "weather-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useWeatherStore;
