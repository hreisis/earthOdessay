import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/Signin", { replace: true });
    }
  }, []);


  return (


  <Outlet />);
};

export default PrivateRoute;

// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }
