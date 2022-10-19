import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Container";
import WallPaper from "../components/WallPaper/WallPaper";
import Menu from "../components/Menu/Menu";

const AboutPage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Menu />
        <Typography variant="h2" gutterBottom>
          The Go-To site
        </Typography>{" "}
        <Typography variant="h2" gutterBottom>
          for Your Travel on Earth
        </Typography>
      </Grid>{" "}
      <Container maxWidth="sm" align="left">
        <WallPaper />{" "}
      </Container>
    </>
  );
};

export default AboutPage;
