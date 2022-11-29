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

export default function Rental({ rental }) {
  const classes = useStyles();
  const [rentals, setRentals] = useState([]);
  const city = new URLSearchParams(window.location.search).get("city");

  const handleRental = (e) => {
    e.preventDefault();
    const { rental, rentalDes } = e.target.elements;
    saveRental(rental.value, rentalDes.value);
    // console.log(rental.value, rentalDes.value);
    e.target.reset();
  };

  //write
  function saveRental(rental, rentalDes) {
    const id = uid();
    const rentalDb = ref(
      db,
      `/userData/${auth.currentUser.uid}/${city}/rental/${id}`
    );
    set(rentalDb, {
      rental: rental,
      description: rentalDes,
      id: id,
    });
    console.log(id);
  }

  //read
  useEffect(() => {
    onValue(
      ref(db, `/userData/${auth.currentUser.uid}/${city}/rental`),
      (snapshot) => {
        setRentals([]);
        const data = snapshot.val();

        if (data !== null) {
          Object.values(data).map((rental) => {
            setRentals((oldArray) => [...oldArray, rental]);
          });
        }
      }
    );
  }, []);

  //delete
  const deleteRental = (uid) => {
    remove(ref(db, `/userData/${auth.currentUser.uid}/${city}/rental/${uid}`));
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
              Rental
            </Typography>{" "}
            <br />
            <Box
             component="form"
              initialvalues={{
                rental: "",
                description: "",
              }}
              onSubmit={handleRental}
            >
              <TextField
                variant="outlined"
                required
                multiline
                name="rental"
                size="small"
                placeholder="Rental Company"
              />
              <br />
              <Typography variant="body2" gutterBottom={true}></Typography>{" "}
              <TextField
                variant="outlined"
                minRows={4}
                multiline
                name="rentalDes"
                size="small"
                margin="normal"
                placeholder="Details"
              />
              <br />
              <Button
                type="submit"
                className={classes.root}
                variant="contained"
                onClick={saveRental}
                // endIcon={<LogoutIcon />}
              >
                Add
              </Button>
            </Box>
          </Box>
        </div>
        <div className={classes.contactWrapper}>
          <Box
           component="form"
            textAlign="center"
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <div className="list">
              {rentals.map((rental) => (
                  <li key={rental.id}>
                    <Card
                      
                      variant="outlined"
                      sx={{
                        width: "220px",
                        background: "rgba(236, 233, 217, 0.8)",
                      }}
                    >
                      <Typography variant="h6" gutterBottom={true}>
                        {rental.rental}
                      </Typography>
                      <Typography variant="body2" gutterBottom={true}>
                        {rental.description}
                      </Typography>
                    </Card>
                    <br />
                    <button
                      onClick={() => deleteRental(rental.id)}
                      className="delete-btn"
                    >
                      x
                    </button>
                  </li>
              ))}
            </div>
            <br />
          </Box>
        </div>
      </Grid>
    </>
  );
}
