import React, { useState } from "react";
import mapStyle from "./mapStyle";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: -38.10220947664664, lng: 145.1841938010088 }}
      defaultOptions={{ styles: mapStyle }}
    >
      <Marker
        position={{
          lat: -38.10220947664664,
          lng: 145.1841938010088,
        }}
        icon={{
          url: "http://southcoast.fm/wp-content/uploads/2018/03/intro-tile.png",
          scaledSize: new window.google.maps.Size(45, 45),
        }}
      />
      <InfoWindow
        position={{
          lat: -38.10220947664664,
          lng: 145.1841938010088,
        }}
      >
        <h1 className="text-2xl">We are here!</h1>
      </InfoWindow>
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
