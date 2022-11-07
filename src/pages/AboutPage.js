import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Container";
import Box from "@mui/material/Box";
import WallPaper from "../components/WallPaper/WallPaper";
import Header from "../components/Header/Header";
import Contact from "../features/user/Contact";

const AboutPage = () => {
  return (
    <>
    <Header />
      <Grid container spacing={2}>
        <Typography variant="h2" gutterBottom>
          The Go-To site
        </Typography>
        <Typography variant="h2" gutterBottom>
          for Your Travel on Earth
        </Typography>
      </Grid>
      {/* <Grid container spacing={2}>
        <Grid item xs={6}></Grid>
        <Grid justifyContent="flex-end" xs={6}>
          <Typography variant="h5" gutterBottom textAlign="right">
            Earth Odessay <br />
            is designed for every voyager.
          </Typography> */}
      {/* <Typography mt="20" variant="overline" gutterBottom textAlign="right">
            <ul>
              <li>Here you could:</li>
              <li>{">>"}Plan your trip</li>
              <li>{">>"}Explore the new places</li>
              <li>{">>"}Manage your itinery</li>
              <li>and more</li>
            </ul>
          </Typography>
        </Grid>
      </Grid> */}
      <Contact />
    </>
  );
};

export default AboutPage;
