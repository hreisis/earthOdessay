import React, { useCallback } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import WallPaper from "../../components/WallPaper/WallPaper";
import logo from "../../assets/logo.png";
import { signUpWithPassword } from "../../firebase/config";
import { db } from "../../firebase/config";
import { ref, set } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    try {
      await signUpWithPassword(name.value, email.value, password.value);
      console.log(name.value, email.value);
      saveUser(name.value, email.value);
      navigate("/Account");
    } catch (error) {
      alert(error);
    }
  });

  const navigate = useNavigate();

  function saveUser(uid, name, email) {
    set(ref(db, "user/" + uid), {
      name: name,
      email: email,
    });
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
                  <img src={logo} alt="" width="100" />
                </Link>
                <Typography variant="h5" component="h2">
                  Create a new account
                </Typography>
              </Box>
              <Box>
                <form onSubmit={handleSignUp}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="name"
                        id="name"
                        label="name"
                        autoComplete="name"
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
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox name="terms" value="1" color="primary" />
                        }
                        label="I agree to the terms of use and privacy policy."
                      />
                    </Grid>
                  </Grid>
                  <Box my={2}>
                    <Button type="submit" fullWidth variant="contained">
                      Sign up
                    </Button>
                  </Box>
                  <Box textAlign="center">
                    <Link href="/Signin" variant="body2">
                      Already have an account? Sign in
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
};

export default SignUp;
