import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useContext, useEffect, useState  } from "react";
import { db, auth } from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

export const Balance = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const city = new URLSearchParams(window.location.search).get("city");
    onValue(ref(db, `/userData/${auth.currentUser.uid}/${city}/budget`), (snapshot) => {
      setTransactions([]); 
      const data = snapshot.val();

      if (data !== null) {
        Object.values(data).map((transaction) => {
          setTransactions((oldArray) => [...oldArray, transaction]);      
        });
      }
    });
  }, []);

  const amounts = transactions.map((transaction) => parseInt(transaction.amount));

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
          ${total}
        </Typography>
      </Grid>
    </Grid>
  );
};
