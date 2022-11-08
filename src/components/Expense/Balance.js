import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "$ " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "+" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <Grid spacing={4} mr={4}>
      <Grid item xs={6}>
        <Typography variant="h5" gutterBottom>
          Your Balance
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3" >
          {moneyFormatter(total)}
        </Typography>
      </Grid>
    </Grid>
  );
};
