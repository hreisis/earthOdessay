import React, { useState } from "react";
import Grid from "@mui/material/Container";
import { Divider, Typography } from "@mui/material";
import CityList from "../features/City/CityList";
import AddCityForm from "../components/form/AddCityForm";
import Popup from "../components/Controls/Popup";
import Button from "@mui/material/Button";
import AddLocationAlt from "@mui/icons-material/AddLocationAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import useStyles from "../components/Button/gradientBtn";
import Menu from "../components/Header/Header";
import { signOutFunction } from "../firebase/config";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@material-ui/core/Link";

let theme = createTheme();
theme.typography.h2 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

const AccountPage = () => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const addOrEdit = (resetForm) => {
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Grid xs={12} md={8}>
        <Typography variant="h2">
          {localStorage.getItem("name")}'s Itinerary
          <hr />
        </Typography>
      </Grid>
      <Grid margin={10} spacing={5}>
        <Link href="/" underline="none">
          <Button
            className={classes.root}
            variant="contained"
            endIcon={<LogoutIcon />}
            onClick={signOutFunction}
            
          >
            Sign out
          </Button>
        </Link>{" "}
        <Button
          className={classes.root}
          variant="contained"
          endIcon={<AddLocationAlt />}
          onClick={() => {
            setOpenPopup(true);
            setRecordForEdit(null);
          }}
        >
          Add a destination
        </Button>
      </Grid>
      <Grid item="true" p={10} spacing={5}>
        <CityList />
      </Grid>

      <Popup
        title="Next Destination"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddCityForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </ThemeProvider>
  );
};

export default AccountPage;
