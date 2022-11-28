import React from "react";
import Grid from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { signInWithGoogle } from "../../firebase/config";
import logo from "../../assets/logo.png";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70,
  },
  logo: {
    lineHeight: 1,
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    fontSize: "1rem",
    fontWeight: 'bold',
    marginRight: 'auto',
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
}));

export default function AccountMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      <Toolbar className={classes.toolbar}>
        <Link href="/" variant="h4" color="inherit" underline="none" className={classes.logo}>
          <img src={logo} alt="" width="70" />
        </Link>
        <Link
          href="/"
          color="textPrimary"
          variant="body2"
          className={classes.link}
        >
          {">>"}Home
        </Link>
        <Link
          className={classes.link}
          color="textPrimary"
          variant="body2"
          href="/about"
        >
          {">>"}About
        </Link>
        <Link
          className={classes.link}
          color="textPrimary"
          variant="body2"
          href="/explore"
        >
          {">>"}Explore
        </Link>
        <Link
          className={classes.link}
          color="textPrimary"
          variant="body2"
          href="/Account"
        >
          {">>"}Itinerary
        </Link>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton> */}
        <Tooltip title="Account settings" className={classes.link}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>Log</Avatar>
          </IconButton>
        </Tooltip>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar sx={{ width: 32, height: 32, ml: 2 }}>log</Avatar>
          <NavLink
            className="nav-link"
            to="/Signin"
            style={{ color: "#000000" }}
          >
            Sign In Here
          </NavLink>
        </MenuItem>

        <MenuItem>
          <button class="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </MenuItem>
      </Menu>

      {/* <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button href="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="About">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button key="Explore">
              <ListItemText primary="Explore" />
            </ListItem>
            <ListItem button key="Itinerary">
              <ListItemText primary="Itinerary" />
            </ListItem>          </List>
            <Box mt={1} ml={2} pt={3} border={1} borderBottom={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
             <NavLink
                className="nav-link"
                to="/Signin"
                style={{ color: "#000000" }}
              >
                Sign In & Sign Up
              </NavLink>

              <button class="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
              </button>
          </Box>
        </div>
      </Drawer> */}
    </Grid>
  );
}
