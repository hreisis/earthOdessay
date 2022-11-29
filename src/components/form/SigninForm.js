import React, { useCallback, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import WallPaper from "../../components/WallPaper/WallPaper";
import logo from "../../assets/logo.png";
import { signInWithPassword, signInWithGoogle } from "../../firebase/config";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";

const SignIn = () => {
  const handleSignIn = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signInWithPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  });

  const { currentUser } = useAuth();
  console.log(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/Account");
    }
  }, [navigate, currentUser]);

  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Box>
              <WallPaper />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box pt={8} pb={10} mr={5} ml={8}>
              <Box mb={3} textAlign="center">
                <Link href="/" variant="h4" color="inherit" underline="none">
                  <img src={logo} alt="" width="100" />
                </Link>
                <Typography variant="h5" component="h2">
                  Sign in
                </Typography>
              </Box>
              <Box>
                <form onSubmit={handleSignIn}>
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
                    <Button type="submit" fullWidth variant="contained">
                      Sign in
                    </Button>
                  </Box>
                  <Box my={2} textAlign="center">
                    <button
                      className="login-with-google-btn"
                      onClick={signInWithGoogle}
                    >
                      Sign in with Google
                    </button>
                  </Box>
                  <Box textAlign="center">
                    <Link href="/Signup" variant="body2">
                      Don't have an account?
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

export default SignIn;
