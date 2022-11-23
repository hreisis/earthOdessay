import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import RoomIcon from "@material-ui/icons/Room";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import CarRentalIcon from "@mui/icons-material/CarRental";
import Button from "@mui/material/Button";
import useStyles from "../../components/Button/gradientBtn";
import { ref, set, onValue, remove } from "firebase/database";
import { db, auth } from "../../firebase/config";
import { uid } from "uid";
import Card from "@mui/material/Card";
import Controls from "../../components/Controls/Controls";
import CloseIcon from "@material-ui/icons/Close";
import Hotel from "../Reservation/Hotel";
import Flight from "../Reservation/Flight";
import Rental from "../Reservation/Rental"

export default function Reservation() {
  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
          <Hotel />
          <Flight />
          <Rental />
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
