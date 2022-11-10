import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Container";
import Header from "../components/Header/Header";
import SigninForm from "../components/form/SigninForm"

const SigninPage = () => {
  return (
    <>
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
    </>
  );
};

export default SigninPage;
