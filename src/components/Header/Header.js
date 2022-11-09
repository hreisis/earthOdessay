import React from "react";
import { Box } from "@material-ui/core";
import Grid from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { signInWithGoogle } from "../../firebase/config";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            textAlign: "right",
            paddingTop: "10px",
          }}
        >
          <NavLink
            className="nav-link"
            to="/"
            style={{ color: "#000000", fontWeight: "bold" }}
          >
            {">>"}Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about"
            style={{ color: "#000000", fontWeight: "bold" }}
          >
            {">>"}About
          </NavLink>

          <NavLink
            className="nav-link"
            to="/explore"
            style={{ color: "#000000", fontWeight: "bold" }}
          >
            {">>"}Explore
          </NavLink>

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {localStorage.getItem("name")[0]}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>

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
            <Avatar sx={{ width: 32, height: 32, ml: 2 }}>
              {localStorage.getItem("name")[0]}
            </Avatar>
            <NavLink
              className="nav-link"
              to="/Account"
              style={{ color: "#000000" }}
            >
              {localStorage.getItem("name")}
            </NavLink>
          </MenuItem>

          <MenuItem>
            <button class="login-with-google-btn" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </MenuItem>
        </Menu>
      </Grid>
    </React.Fragment>
  );
}
