import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WallPaper from "../../components/WallPaper/WallPaper";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  fullHeightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: 768,
    width: "100%",
  },
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Submit",
    ...props.content,
  };

  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box>
              <WallPaper />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} justifyContent="flex-end">
            <Box
              pb={8}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              textAlign="right"
              className={[classes.halfLg, classes.firstBox]}
            >
              <Container>
                <Box mb={4} p={2} pb={6}>
                  {" "}
                  <Typography
                    variant="h5"
                    gutterBottom
                    textAlign="right"
                    mb="20"
                    fontWeight="bold"
                  >
                    {" "}
                    Earth Odessay <br />
                    is designed for every voyager.
                    <br /> <br />
                  </Typography>
                  <Typography
                    mt="20"
                    variant="overline"
                    gutterBottom
                    textAlign="right"
                  >
                    Here you could:  
                    <NavLink
                      className="nav-link"
                      to="/account"
                      style={{ color: "#000000" }}
                    >
                      {">>"}Plan your trip
                    </NavLink>
                    <NavLink
                      className="nav-link"
                      to="/explore"
                      style={{ color: "#000000" }}
                    >
                      {">>"}Explore the new places
                    </NavLink>
                    and more... <br />
                  </Typography>
                  
                </Box><hr />
                <Box pt={8} pb={5}>
                  <Typography variant="h5" paragraph={true}>
                  Should you have any questions, <br />we're always here to help you.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    Please send us a message using the form below.
                  </Typography>
                </Box>

                <form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        autoComplete="fname"
                        name="firstName"
                        id="firstName"
                        label="First name"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="lastName"
                        id="lastName"
                        label="Last name"
                        autoComplete="lname"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        id="email"
                        label="Email address"
                        autoComplete="email"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        multiline
                        rows={8}
                        fullWidth
                        autoComplete="message"
                        name="message"
                        id="message"
                        label="Message"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox name="terms" value="1" color="primary" />
                        }
                        label={content["terms"]}
                      />
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="dark"
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </form>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
