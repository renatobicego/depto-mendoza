"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const CustomMap = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: -32.9497222,
    lng: -68.8499194,
  });


  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
      <Map
        style={{
          borderRadius: "20px",
          minHeight: "50vh",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
      >
        <AdvancedMarker position={{ lat: -32.9497530, lng: -68.8498194 }}>
          <Pin
            background={"#FF5A78"}
            glyphColor={"#ffffff"}
            glyph={new URL("https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=home")}
            scale={1.5}
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default CustomMap;
