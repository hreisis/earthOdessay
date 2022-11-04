import * as React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import AddLocationAlt from "@mui/icons-material/AddLocationAlt";
import Stack from "@mui/material/Stack";
import useStyles from "./gradientBtn";
import Button from "@mui/material/Button";


export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={2} pt={2}>
      <Button className={classes.root} variant="contained" endIcon={<AddLocationAlt />}>
        Add a new destination
      </Button>
    </Stack>
  );
}
