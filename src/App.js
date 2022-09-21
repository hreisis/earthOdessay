import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./features/Map/Map";
import { getPlacesData } from "./api";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";

const App = () => {
  return (
    <div
      className="App"
    //   style={{
    //     backgroundImage: `url('https://via.placeholder.com/500)`,
    //     backgroundSize: "cover",
    //     height: "100vh",
    //   }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Info" element={<InfoPage />} />
      </Routes>
    </div>
  );
};

export default App;
