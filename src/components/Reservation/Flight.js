import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import RoomIcon from "@material-ui/icons/Room";
import Button from "@mui/material/Button";
import useStyles from "../../components/Button/gradientBtn";
import { ref, set, onValue, remove } from "firebase/database";
import { db, auth } from "../../firebase/config";
import { uid } from "uid";
import Card from "@mui/material/Card";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

export default function Flight({ flight }) {
  const classes = useStyles();
  const [flights, setFlights] = useState([]);
  const city = new URLSearchParams(window.location.search).get("city");

  const handleFlight = (e) => {
    e.preventDefault();
    const { flight, flightDes } = e.target.elements;
    saveFlight(flight.value, flightDes.value);
    // console.log(flight.value, flightDes.value);
    e.target.reset();
  };

  //write
  function saveFlight(flight, flightDes) {
    const id = uid();
    const flightDb = ref(
      db,
      `/userData/${auth.currentUser.uid}/${city}/flight/${id}`
    );
    set(flightDb, {
      flight: flight,
      description: flightDes,
      id: id,
    });
    console.log(id);
  }

  //read
  useEffect(() => {
    onValue(
      ref(db, `/userData/${auth.currentUser.uid}/${city}/flight`),
      (snapshot) => {
        setFlights([]);
        const data = snapshot.val();

        if (data !== null) {
          Object.values(data).map((flight) => {
            setFlights((oldArray) => [...oldArray, flight]);
          });
        }
      }
    );
  }, []);

  //delete
  const deleteFlight = (uid) => {
    remove(ref(db, `/userData/${auth.currentUser.uid}/${city}/flight/${uid}`));
  };

  return (
    <>
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
            </Typography>{" "}
            <br />
            <form
              initialValues={{
                flight: "",
                description: "",
              }}
              onSubmit={handleFlight}
            >
              <TextField
                variant="outlined"
                required
                multiline
                name="flight"
                size="small"
                placeholder="Flight Num"
              />
              <br />
              <Typography variant="body2" gutterBottom={true}></Typography>{" "}
              <TextField
                variant="outlined"
                rows={4}
                multiline
                name="flightDes"
                size="small"
                margin="normal"
                placeholder="Description"
              />
              <br />
              <Button
                type="submit"
                className={classes.root}
                variant="contained"
                onClick={saveFlight}
                // endIcon={<LogoutIcon />}
              >
                Add
              </Button>
            </form>
          </Box>
        </div>
        <div className={classes.contactWrapper}>
          <Box
            textAlign="center"
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <ul className="list">
              {flights.map((flight) => (
                <>
                  <li>
                    <Card
                      key={flight.id}
                      variant="outlined"
                      sx={{
                        width: "220px",
                        background: "rgba(236, 233, 217, 0.8)",
                      }}
                    >
                      <Typography variant="h6" gutterBottom={true}>
                        {flight.flight}
                      </Typography>
                      <Typography variant="body2" gutterBottom={true}>
                        {flight.description}
                      </Typography>
                    </Card>
                    <br />
                    <button
                      onClick={() => deleteFlight(flight.id)}
                      className="delete-btn"
                    >
                      x
                    </button>
                  </li>
                </>
              ))}
            </ul>
            <br />
          </Box>
        </div>
      </Grid>
    </>
  );
}
