import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import List from "../components/List/List";
import Map from "../features/Map/Map";
import { getPlacesData } from "../api/index";
import Header from "../components/Header/Header";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import Button from "@material-ui/core/Button";
import NearMeIcon from "@mui/icons-material/NearMe";
import IconButton from "@mui/material/IconButton";
import useStyles from "../components/Header/styles";
import Tab from "../components/Tab";
import SimpleMap from "../features/Map/SimpleMap";

const InfoPage = () => {
  const classes = useStyles();
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("attractions");
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
        setRating("");
        setIsLoading(false);
      });
    }
  }, [bounds, type]); //pass a second argument to useEffect that is the array of values that the effect depends on

  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <>
      <Header setCoordinates={setCoordinates} />
      <Grid container>
        <SimpleMap />
      </Grid>
    </>
  );
};

export default InfoPage;
