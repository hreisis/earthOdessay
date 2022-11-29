import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { db, auth } from "../../../firebase/config";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  //write
  const writeToDatabase = () => {
    const city = new URLSearchParams(window.location.search).get("city");
    const id = uid();
    set(ref(db, `/userData/${auth.currentUser.uid}/${city}/budget/${id}`), {
      text,
      amount,
      id,
    });
    console.log(text, amount);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid item xs={6}>
      <Typography variant="h5" gutterBottom>
        Add new expense{" "}
      </Typography>
      <Box component="form" onSubmit={onSubmit}>
        <div className="form-control">
          <Typography variant="body1" gutterBottom={true} htmlFor="text">Item</Typography>
          <TextField
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <br />
        <div className="form-control">
          <Typography variant="body1" gutterBottom={true} htmlFor="text">
            Amount <br />
          </Typography>
          <TextField
            required
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={writeToDatabase}>
          Add transaction
        </button>
      </Box>
    </Grid>
  );
};
