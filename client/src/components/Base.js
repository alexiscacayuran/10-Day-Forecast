import { useEffect, useState } from "react";
import { vectorBasemapLayer } from "esri-leaflet-vector";
import { useMap } from "react-leaflet";
import L from "leaflet";

const Base = ({ accessToken }) => {
  const map = useMap();
  const weatherBasemapEnum = "8ece66cf764742f7ba0f3006481a7b75";
  const hilshadeEnum = "74463549688e4bb48092df8e5c789fd0";

  useEffect(() => {
    if (!accessToken) return;

    const weatherBasemap = vectorBasemapLayer(weatherBasemapEnum, {
      apiKey: accessToken,
      pane: "overlayPane",
      zIndex: 200,
    });
    weatherBasemap.addTo(map);

    // const hillshade = vectorBasemapLayer(hilshadeEnum, {
    //   token: accessToken,

    //   zIndex: 200,
    // });
    // hillshade.addTo(map);

    map.attributionControl.setPrefix(false);
    map.attributionControl.setPosition("bottomleft");

    return () => {
      map.removeLayer(weatherBasemap);
    };
  }, [map, accessToken]);

  return null;
};

export default Base;
