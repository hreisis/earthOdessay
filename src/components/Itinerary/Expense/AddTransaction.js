import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { db, auth } from "../../../firebase/config";
import { Grid } from "@mui/material";

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
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <h6 htmlFor="text">Item</h6>
          <input
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <br />
        <div className="form-control">
          <h6 htmlFor="amount">
            Amount <br />
          </h6>
          <input
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
      </form>
    </Grid>
  );
};
