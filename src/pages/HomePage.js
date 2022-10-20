import Grid from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WallPaper from "../components/WallPaper/WallPaper";
import Menu from "../components/Menu/Menu";
import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Grid container spacing={2}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          textAlign: "right",
          paddingBottom: 2,
        }}
      >
        <Typography variant="h1">Earth Odessay</Typography>
        <Link
          to="/"
          onClick={() => window.location.reload()}
          style={{ color: "#000000", textDecoration: "none" }}
        >
          <Typography variant="overline" gutterBottom>
            {">>"}Refresh the page to get a new earth image
          </Typography>
        </Link>
      </Box>
      <WallPaper />

        <Typography gutterBottom variant="body2" align="right">
          Ⓒ Google Earth Image
        </Typography>

    </Grid>
  );
};

export default HomePage;
