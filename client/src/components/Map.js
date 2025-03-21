import React, { useState, useEffect, useRef, useMemo } from "react";
import { MapContainer, LayerGroup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import MapControl from "./MapControl";
import Base from "./Base";
import Labels from "./Labels";
import ReverseGeocode from "./ReverseGeocode";
import DateNavigation from "./DateNavigation";
import Navbar from "./Navbar";
import ForecastContainer from "./ForecastContainer";
import LayerMenu from "./LayerMenu";
import Box from "@mui/joy/Box";
import WeatherLayer from "./WeatherLayer";
import Legend from "./Legend";

const Map = () => {
  // const accessToken =
  // "AAPTxy8BH1VEsoebNVZXo8HurKsdWeDKRAbsiNAHNNT6jaW8gooZhPPaWlG6GWhaK4Lztb1bd6UA2hH_P5yQ49eq7NXXMgu35LwVXhayi3UQ1CJRBIxXc0b8foiF9VIBngSb_SJcr-xKeyq288VsyaVQflwjmt_nIdjK0hwRwV0hA1hXJeDt3JoSWY5i4qY-H-qqjgtH6KactySPDG616x1RkyJDJmLuHaCaFtaNCSn4osZcTiTg8gilry4-fOQ7eYPPAT1_4iEh8Wxe";
  const [accessToken, setAccessToken] = useState(null);
  const [isLoadingToken, setIsLoadingToken] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get("/api/token");
        console.log("Fetched Token:", response.data.accessToken); // Debugging log
        setAccessToken(response.data.accessToken);
      } catch (error) {
        console.error("Error fetching token:", error);
      } finally {
        setIsLoadingToken(false);
      }
    };

    fetchToken();
  }, []);

  const bounds = useMemo(
    () =>
      L.latLngBounds([
        [4.64, 116.93],
        [20.94, 126.61],
      ]),
    []
  );
  const [location, setLocation] = useState({
    latLng: {},
    municity: "",
    province: "",
  });

  const startDate = useRef(null);
  const markerLayer = useRef(null);
  const overlayLayer = useRef(null);

  const [map, setMap] = useState(null); // External state for the map instance
  const [open, setOpen] = useState(false); // Slide up bottom container state
  const [date, setDate] = useState(null);
  const [dateReady, setDateReady] = useState(false);
  const [overlay, setOverlay] = useState("temperature_average");

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [temp, setTemp] = useState("temperature_average");
  const [activeTooltip, setActiveTooltip] = useState("Temperature");
  const [isDiscrete, setIsDiscrete] = useState(false);
  const [isAnimHidden, setIsAnimHidden] = useState(false);
  const [isLayerClipped, setIsLayerClipped] = useState(false);

  const [units, setUnits] = useState({
    temperature: "°C",
    rainfall: "mm/24h",
    windSpeed: "m/s",
    windDirection: "arrow",
  });

  console.log(units);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchDate = async () => {
      try {
        const response = await axios.get("/valid");
        startDate.current = response.data; // Store the fetched data
        setDate(startDate.current.latest_date);
        setDateReady(true); // Set readiness to true once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDate(); // Trigger the data fetch when the component mounts
  }, []); // Empty dependency array to run only on component mount

  const displayMap = useMemo(
    () => (
      <Box sx={{ maxHeight: "100vh" }}>
        <Navbar
          accessToken={accessToken}
          map={map}
          markerLayer={markerLayer}
          location={location}
          setLocation={setLocation}
          setOpenContainer={setOpen}
          openContainer={open}
        />

        <MapContainer
          center={[13, 122]}
          zoom={8}
          minZoom={5} //5
          maxZoom={20}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          zoomControl={false}
          ref={setMap} // Set map instance to external state
        >
          <LayerGroup ref={markerLayer} />
          <LayerGroup ref={overlayLayer} />
          {dateReady && (
            <WeatherLayer
              startDate={startDate}
              overlay={overlay}
              date={date}
              overlayLayer={overlayLayer}
              isDiscrete={isDiscrete}
              isAnimHidden={isAnimHidden}
              isLayerClipped={isLayerClipped}
              open={open}
            />
          )}
          <Base accessToken={accessToken} />

          <Labels accessToken={accessToken} />

          {map && (
            <ReverseGeocode
              accessToken={accessToken}
              markerLayer={markerLayer}
              location={location}
              setLocation={setLocation}
              setOpenContainer={setOpen}
              openContainer={open}
              date={date}
              overlay={overlay}
              units={units}
              setUnits={setUnits}
            />
          )}
          <MapControl />
        </MapContainer>

        <LayerMenu
          overlay={overlay}
          setOverlay={setOverlay}
          isDiscrete={isDiscrete}
          setIsDiscrete={setIsDiscrete}
          isAnimHidden={isAnimHidden}
          setIsAnimHidden={setIsAnimHidden}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          temp={temp}
          setTemp={setTemp}
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
          isLayerClipped={isLayerClipped}
          setIsLayerClipped={setIsLayerClipped}
        />

        <Legend overlay={overlay} isDiscrete={isDiscrete} />

        {dateReady &&
          !open && ( // Render DateNavigation only if `dateReady` is true
            <DateNavigation
              initialDate={new Date(startDate.current.latest_date)} // Pass the fetched `latest_date`
              range={10}
              setDate={setDate}
              date={date}
            />
          )}
        <ForecastContainer
          open={open}
          setOpen={setOpen}
          location={location}
          markerLayer={markerLayer}
          overlay={overlay}
          setOverlay={setOverlay}
          setIsMenuOpen={setIsMenuOpen}
          temp={temp}
          setTemp={setTemp}
          setActiveTooltip={setActiveTooltip}
        />
      </Box>
    ),

    [
      map,
      bounds,
      accessToken,
      isLoadingToken,
      open,
      location,
      dateReady,
      date,
      overlay,
      isDiscrete,
      isAnimHidden,
      isMenuOpen,
      temp,
      activeTooltip,
      isLayerClipped,
      units,
    ]
  );

  return <div>{displayMap}</div>;
};

export default Map;
