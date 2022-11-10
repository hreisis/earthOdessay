import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Container";
import Header from "../components/Header/Header";
import SignupForm from "../components/form/SignupForm"

const SignupPage = () => {
  return (
    <>
    <Header />
      <Grid container spacing={2}>
        <Typography variant="h2" gutterBottom>
          Create your account
        </Typography>
        <Typography variant="h4" gutterBottom>
          To manage your personal itinerary
        </Typography>
      </Grid>
      <SignupForm />
    </>
  );
};

export default SignupPage;
