import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Container";
import Header from "../components/Header/Header";
import SigninForm from "../components/form/SigninForm"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme.typography.h2 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};

const SigninPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Header />
      <Grid container spacing={2}>
        <Typography variant="h2" gutterBottom>
          Please sign in first
        </Typography>
        <Typography variant="h4" gutterBottom>
          To view your personal itinerary
        </Typography>
      </Grid>
      <SigninForm />
    </ThemeProvider>
  );
};

export default SigninPage;
