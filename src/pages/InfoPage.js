import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "../components/Header/Header";
import List from "../components/List/List";
import Map from "../features/Map/Map";
import { getPlacesData } from "../api";
import Menu from '../components/Menu/Menu';

const InfoPage = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {

      setIsLoading(true);
    if (bounds) {
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]); //pass a second argument to useEffect that is the array of values that the effect depends on

  return (
    <>
      <CssBaseline />
      <Menu setCoordinates={setCoordinates} />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{ width: "100%" }}
      >
        <Grid item xs={12} md={3}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            childClicked={childClicked}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      </>
  );
};

export default InfoPage;
