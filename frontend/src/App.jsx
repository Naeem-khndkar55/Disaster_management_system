import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Donation from "../src/pages/Donation";
import Crisis from "../src/pages/Crisis";
import Volunteer from "../src/pages/Volenteer";
import Inventory from "../src/pages/Inventory";
import Profile from "../src/pages/Profile";
import Login from "../src/pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/crisis" element={<Crisis />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
