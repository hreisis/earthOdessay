import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalState";
import Typography from "@mui/material/Typography";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { db } from "../../firebase/config";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      text,
      amount,
      uuid,
    });
    console.log(text, amount);
    console.log(db)
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add new expense{" "}
      </Typography>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
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
    </>
  );
};
