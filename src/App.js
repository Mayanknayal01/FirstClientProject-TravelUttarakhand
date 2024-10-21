import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./Components/Common/Footer/Footer.jsx";
import AdminLogin from "./pages/AdminLogin/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import Treks from "./pages/TreksPages/TrekCards/TrekCardsPages.jsx";
import Homestays from "./pages/HomestaysPages/HomestayCards/HomestaysCardsPages.jsx";
import TrekItinerary from "./pages/TreksPages/TrekItinerary/TreksItineraryPages.jsx";
import HomestaysItinerary from "./pages/HomestaysPages/HomestayItinerary/HomestaysItineraryPages.jsx";
import Contact from "./pages/Contact/ContactPage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/treks" element={<Treks />} />
        <Route path="/homestays" element={<Homestays />} />
        <Route path="/treks/itinerary/:id" element={<TrekItinerary />} />
        <Route path="/homestays/itinerary" element= {<HomestaysItinerary />} />
        <Route path="/contact" element= {<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
