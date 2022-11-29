import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useStyles from "../../components/Button/gradientBtn";
import Hotel from "../Reservation/Hotel";
import Flight from "../Reservation/Flight";
import Rental from "../Reservation/Rental"

export default function Reservation() {
  const classes = useStyles();

  return (
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
          <Hotel />
          <Flight />
          <Rental />
          </Grid>
        </Box>
      </Container>
  );
}
