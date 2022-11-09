import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import Footer from "./components/Footer";
import ItineraryPage from "./pages/ItinerayPage";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./contexts/PrivateRoute";

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
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Explore" element={<InfoPage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="Account" element={<PrivateRoute />}>
            <Route path="Account" element={<AccountPage />} />
          </Route>
          <Route path="Account" element={<PrivateRoute />}>
            <Route path="Itineray" element={<ItineraryPage />} />{" "}
          </Route>
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
};

export default App;
