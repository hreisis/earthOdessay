import React from "react";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
import { GlobalProvider } from "./GlobalState";
import "./Expense.css";
import Grid from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Expense = () => {
  return (
    <GlobalProvider>
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            textAlign: "left",
            paddingBottom: 2,
            //border:"1px solid grey"
          }}
        >
          <Balance />
          <Divider orientation="vertical" flexItem>
            .
          </Divider>
          <div className="container">
            <TransactionList />
          </div>
          <Divider orientation="vertical" flexItem>
            .
          </Divider>
          <div className="container">
            <AddTransaction />
          </div>
        </Box>
      </Grid>
    </GlobalProvider>
  );
};

export default Expense;
