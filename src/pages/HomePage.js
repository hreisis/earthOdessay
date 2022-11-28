import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WallPaper from "../components/WallPaper/WallPaper";
import Header from "../components/Header/Header";
import * as React from "react";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme();
theme.typography.h1 = {
  fontSize: "3rem",
  "@media (min-width:600px)": {
    fontSize: "6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};

theme.typography.overline = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container spacing={2} xs={8}>
        <Typography variant="h1">Earth Odessay</Typography>
        <Grid container spacing={2} xs={4}>
          <Link
            to="/"
            onClick={() => window.location.reload()}
            style={{ color: "#000000", textDecoration: "none" }}
          >
            <Typography variant="overline" gutterBottom>
              {">>"}Refresh the page to get a new earth image
            </Typography>
          </Link>
        </Grid>
        <WallPaper />

        <Typography gutterBottom variant="body2" align="right">
          Ⓒ Google Earth Image
        </Typography>
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
