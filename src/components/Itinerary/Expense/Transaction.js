import React, { useContext, useEffect, useState } from "react";
import { db, auth } from "../../../firebase/config";
import { ref, onValue, remove } from "firebase/database";
import { GlobalContext } from "./GlobalState";

//Money formatter function
// function moneyFormatter(num) {
//   let p = num.toFixed(1).split(".");
//   return (
//     "$ " +
//     p[0]
//       .split("")
//       .reverse()
//       .reduce(function (acc, num, i, orig) {
//         return num === "+" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
//       }, "") +
//     "." +
//     p[1]
//   );
// }

//read
export const Transaction = ({ transaction }) => {
  const [transactions, setTransactions] = useState([]);
  const city = new URLSearchParams(window.location.search).get("city");
  useEffect(() => {
    onValue(
      ref(db, `/userData/${auth.currentUser.uid}/${city}/budget`),
      (snapshot) => {
        setTransactions([]);
        const data = snapshot.val();

        if (data !== null) {
          Object.values(data).map((transaction) => {
            setTransactions((oldArray) => [...oldArray, transaction]);
          });
          console.log(data);
        }
        console.log(transactions);
      }
    );
  }, []);

  const deleteTransaction = (uid) => {
    console.log(transaction.id);
    remove(ref(db, `/userData/${auth.currentUser.uid}/${city}/budget/${uid}`));
  };

  const sign = transaction.amount > 0 ? "+" : "-";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign}
        {transaction.amount}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
