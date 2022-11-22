import React from "react";
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
import { ref, set } from "firebase/database";
import { db, auth } from "../../firebase/config";

export default function Reservation() {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(auth.currentUser.uid);

    const { hotel } = e.target.elements;
    saveReservation(hotel.value);
    console.log(db);

    e.target.reset();
  };

  function saveReservation(hotel) {
    const city = new URLSearchParams(window.location.search).get("city");
    console.log(city);
    const reservationDb = ref(
      db,
      `/userData/${auth.currentUser.uid}/${city}/reservation`
    );
    console.log(reservationDb);
    set(reservationDb, {
      hotel: hotel,
    });
  }

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    Hotel
                  </Typography>{" "}
                  <br />
                  <form
                    initialValues={{
                      hotel: "",
                      description: "",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      variant="outlined"
                      required
                      multiline
                      name="hotel"
                      size="small"
                      placeholder="Name"
                    />
                    <br />
                    <Typography
                      variant="body2"
                      gutterBottom={true}
                    ></Typography>{" "}
                    <TextField
                      variant="outlined"
                      rows={4}
                      multiline
                      name="description"
                      size="small"
                      margin="normal"
                      placeholder="Description"
                    />
                    <br />
                    <Button
                      type="submit"
                      className={classes.root}
                      variant="contained"
                      // endIcon={<LogoutIcon />}
                    >
                      Add
                    </Button>
                  </form>
                </Box>
              </div>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Typography variant="h6" gutterBottom={true}>
                    `${}`
                  </Typography>{" "}
                  <br />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <AirplaneTicketIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    Flight
                  </Typography>
                  <br />
                  <TextField
                    variant="outlined"
                    required
                    name="flight"
                    size="small"
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <CarRentalIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>
                    Rental
                  </Typography>
                  <br />
                  <TextField
                    variant="outlined"
                    required
                    name="rental"
                    size="small"
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
