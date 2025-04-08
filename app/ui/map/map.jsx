"use client";
import styles from "./map.module.css";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
export default function MapPage() {
  const [map, setMap] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP,
  });
  useEffect(() => {
    setMap(true);
  }, []);
  const center = {
    lat: 9.557817,
    lng: 100.0263,
  };
  return (
    <div className={styles.container}>
      {isLoaded && map ? (
        <>
          <GoogleMap
            center={center}
            zoom={16}
            mapContainerClassName={styles.mapContainer}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
