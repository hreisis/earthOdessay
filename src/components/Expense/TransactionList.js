import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "./GlobalState";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Grid spacing={4} marginLeft={4}>
      <Typography variant="h5" gutterBottom>
        History
      </Typography>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </Grid>
  );
};
