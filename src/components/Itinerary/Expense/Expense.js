import React from "react";
import { Balance } from "./Balance";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import Container from "@mui/material/Container";
import "./Expense.css";
import Grid from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const Expense = () => {
  return (
    <>
      <Grid className="container">
        <Balance />
      </Grid>
      <Grid>
        <Grid className="container">
          <AddTransaction />
        </Grid>
        <Grid className="container">
          <TransactionList />
        </Grid>
      </Grid>
    </>
  );
};

export default Expense;
