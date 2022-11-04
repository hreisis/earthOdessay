import React, { useState } from "react";
import Grid from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Map from "../features/Map/Map";
import BasicCard from "../features/City/CityCard";
import AddButton from "../components/Card/AddButton";
import CityList from "../features/City/CityList";
import AddCityForm from "../components/Card/AddCityForm";
import Popup from "../components/controls/Popup";
import Button from "@mui/material/Button";
import AddLocationAlt from "@mui/icons-material/AddLocationAlt";
import Stack from "@mui/material/Stack";
import useStyles from "../components/Card/gradientBtn";

const AccountPage = () => {
  const classes = useStyles();

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item pb={10}>
          <Typography variant="h2">My Itinerary</Typography>
        </Grid>
        <Grid item pt={15}>
          <Button
            className={classes.root}
            variant="contained"
            endIcon={<AddLocationAlt />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          >
            Add a new destination
          </Button>
        </Grid>
        <Grid item p={10} spacing={5}>
          <CityList />
        </Grid>
      </Grid>
      <Popup
        title="Next Destination"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddCityForm
          recordForEdit={recordForEdit}
          //addOrEdit={addOrEdit}
        />
      </Popup>
    </>
  );
};

export default AccountPage;
