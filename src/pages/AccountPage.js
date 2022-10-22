import * as React from "react";
import Grid from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Map from "../features/Map/Map";
import BasicCard from "../features/City/CityCard";
import AddButton from "../components/Card/AddButton";
import CityList from "../features/City/CityList";

const AccountPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item pb={10}>
        <Typography variant="h2">My Itinerary</Typography>
      </Grid>
      <Grid item pt={10}>
        <AddButton />
      </Grid>
      <Grid item p={10} spacing={5}>
        <CityList /> 
      </Grid>
    </Grid>
  );
};

export default AccountPage;
