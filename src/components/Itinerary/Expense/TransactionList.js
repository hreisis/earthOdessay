import React, { useEffect, useState } from "react";
import { Transaction } from "./Transaction";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { db, auth } from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

export const TransactionList = () => {
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
    <>
      <Typography variant="h5" gutterBottom>
        History
      </Typography>
      <Divider />
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
