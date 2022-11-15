import React, { useState } from "react";
import Grid from "@mui/material/Container";
import { Typography } from "@mui/material";
import CityList from "../features/City/CityList";
import AddCityForm from "../components/form/AddCityForm";
import Popup from "../components/Controls/Popup";
import Button from "@mui/material/Button";
import AddLocationAlt from "@mui/icons-material/AddLocationAlt";
import useStyles from "../components/Button/gradientBtn";
import Menu from "../components/Header/Header";
import { signOutFunction } from "../firebase/config";
import Box from "@mui/material/Box";

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
      <Menu />
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            paddingBottom: 2,
            //border:"1px solid grey"
          }}
        >
          <Typography variant="h2">
            {localStorage.getItem("name")}'s Itinerary
          </Typography>
          <a href="/">
            <Button
              className={classes.root}
              variant="contained"
              onClick={signOutFunction}
            >
              Sign out
            </Button>
          </a>
        </Box>
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
