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

export default function Hotel({ hotel }) {
  const classes = useStyles();
  const [hotels, setHotels] = useState([]);
  const city = new URLSearchParams(window.location.search).get("city");

  const handleHotel = (e) => {
    e.preventDefault();
    const { hotel, hotelDes } = e.target.elements;
    saveHotel(hotel.value, hotelDes.value);
    // console.log(hotel.value, hotelDes.value);
    e.target.reset();
  };

  //write
  function saveHotel(hotel, hotelDes) {
    const id = uid();
    const hotelDb = ref(
      db,
      `/userData/${auth.currentUser.uid}/${city}/hotel/${id}`
    );
    set(hotelDb, {
      hotel: hotel,
      description: hotelDes,
      id: id,
    });
    console.log(id);
  }

  //read
  useEffect(() => {
    onValue(
      ref(db, `/userData/${auth.currentUser.uid}/${city}/hotel`),
      (snapshot) => {
        setHotels([]);
        const data = snapshot.val();

        if (data !== null) {
          Object.values(data).map((hotel) => {
            setHotels((oldArray) => [...oldArray, hotel]);
          });
        }
      }
    );
  }, []);

  //delete
  const deleteHotel = (uid) => {
    remove(ref(db, `/userData/${auth.currentUser.uid}/${city}/hotel/${uid}`));
  };

  return (
    <>
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
              onSubmit={handleHotel}
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
              <Typography variant="body2" gutterBottom={true}></Typography>{" "}
              <TextField
                variant="outlined"
                rows={4}
                multiline
                name="hotelDes"
                size="small"
                margin="normal"
                placeholder="Description"
              />
              <br />
              <Button
                type="submit"
                className={classes.root}
                variant="contained"
                onClick={saveHotel}
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
              {hotels.map((hotel) => (
                <>
                  <li>
                    <Card
                      key={hotel.id}
                      variant="outlined"
                      sx={{
                        width: "220px",
                        background: "rgba(236, 233, 217, 0.8)",
                      }}
                    >
                      <Typography variant="h6" gutterBottom={true}>
                        {hotel.hotel}
                      </Typography>
                      <Typography variant="body2" gutterBottom={true}>
                        {hotel.description}
                      </Typography>
                    </Card>
                    <br />
                    <button
                      onClick={() => deleteHotel(hotel.id)}
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
