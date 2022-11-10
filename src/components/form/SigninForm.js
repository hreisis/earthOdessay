import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import WallPaper from "../../components/WallPaper/WallPaper";
import logo from "../../assets/logo.png";
import { signInWithGoogle } from "../../firebase/config";

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Form(props) {
  const classes = useStyles();

  const content = {
    brand: { image: logo, width: 100 },
    "02_header": "Sign in",
    "02_primary-action": "Sign in",
    "02_secondary-action": "Don't have an account?",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box>
              <WallPaper />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} justifyContent="center" spacing={10}>
            <Box pt={8} pb={10} mr={5} ml={10}>
              <Box mb={3} textAlign="center">
                <Link href="/" variant="h4" color="inherit" underline="none">
                  {brand}
                </Link>
                <Typography variant="h5" component="h2">
                  {content["02_header"]}
                </Typography>
              </Box>
              <Box>
                <form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        id="email"
                        label="Email address"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                  </Grid>
                  <Box my={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                    >
                      {content["02_primary-action"]}
                    </Button>
                  </Box>
                  <Box my={2} textAlign="center">
                    <Button
                      class="login-with-google-btn"
                      onClick={signInWithGoogle}
                    >
                      {content["02_primary-action"]} with Google here
                    </Button>
                  </Box>
                  <Box textAlign="center">
                    <Link href="/Signup" variant="body2">
                      {content["02_secondary-action"]}
                    </Link>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
