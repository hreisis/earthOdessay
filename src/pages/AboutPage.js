import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Container";
import Header from "../components/Header/Header";
import Contact from "../features/user/Contact";
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

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Header />
      <Grid container="true" spacing={2}>
        <Typography variant="h2" gutterBottom>
          The Go-To site
        </Typography>
        <Typography variant="h2" gutterBottom>
          for Your Travel on Earth
        </Typography>
      </Grid>
      <Contact />
    </ThemeProvider>
  );
};

export default AboutPage;
