import React, { useCallback, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import useWeatherStore from "../hooks/useWeatherStore";
import ScreenSizeChecker from "../hooks/ScreenSizeChecker";
import styles from "../styles/Map.module.css";

const libraries = ["places"];

const Map = () => {
  const { handleMapClick } = useWeatherStore();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    libraries,
  });
  const { isSmallScreen } = ScreenSizeChecker();

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  const [markers, setMarkers] = useState([]);

  const mapContainerStyle = isSmallScreen
    ? { height: "10rem", width: "100%" }
    : { height: "25rem", width: "100%", maxWidth: "675px" };

  const handleMapClickEvent = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    handleMapClick(lat, lng);

    setMarkers([]);

    const newMarker = {
      lat,
      lng,
    };

    setCenter(newMarker);

    setMarkers([newMarker]);
  };

  const onLoad = useCallback(function callback(map) {
    const worldBounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(70, -120),
      new window.google.maps.LatLng(-20, 120)
    );
    map.fitBounds(worldBounds);
  }, []);

  const onUnmount = useCallback(function callback() {}, []);

  if (loadError) {
    return (
      <div
        className={`${styles.LoadingMaps} d-flex justify-itme-center align-item-center fw-bold`}
      >
        Error loading maps
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className={`${styles.LoadingMaps} d-flex justify-itme-center align-item-center fw-bold`}
      >
        Loading maps
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={1}
        gestureHandling="greedy"
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClickEvent}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
