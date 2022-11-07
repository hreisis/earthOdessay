import * as React from "react";
import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Header from "../components/Header/Header";
import Tab from "../components/Tab"


const ItineraryPage = () => {
    

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            textAlign: "left",
            paddingBottom: 2,
          }}
        >
          <Typography variant="h2">Itinerary Details</Typography>

          <Typography variant="overline" gutterBottom>
            Track your trvel details here
          </Typography>
        </Box>
        <Tab />
      </Grid>
    </>
  );
};

export default ItineraryPage;
