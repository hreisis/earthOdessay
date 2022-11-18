import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { db } from "../../../firebase/config";
import { ref, onValue } from "firebase/database";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //read
  // const db = getDatabase();
  // const starCountRef = ref(db, 'posts/' + postId + '/starCount');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // });

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
