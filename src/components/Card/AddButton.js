import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddLocationAlt from "@mui/icons-material/AddLocationAlt";
import Stack from "@mui/material/Stack";
import useStyles from "./gradientBtn";

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={2} pt={2}>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      <Button className={classes.root} variant="contained" endIcon={<AddLocationAlt />}>
        Add a new destination
      </Button>
    </Stack>
  );
}
