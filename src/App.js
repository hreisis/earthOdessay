import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import Footer from "./components/Footer";

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
        <Route path="Explore" element={<InfoPage />} />
        <Route path='About' element={<AboutPage />} />
        <Route path='Account' element={<AccountPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
