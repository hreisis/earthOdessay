import React, { useEffect, useState } from "react";
import { Transaction } from "./Transaction";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { db, auth } from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

export const TransactionList = () => {
  // const { transactions } = useContext(GlobalContext);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const city = new URLSearchParams(window.location.search).get("city");
    onValue(ref(db, `/userData/${auth.currentUser.uid}/${city}/budget`), (snapshot) => {
      setTransactions([]); 
      const data = snapshot.val();

      if (data !== null) {
        Object.values(data).map((transaction) => {
          setTransactions((oldArray) => [...oldArray, transaction]);      
        });console.log(data);
      }
      console.log(transactions);
    });
  }, []);


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
