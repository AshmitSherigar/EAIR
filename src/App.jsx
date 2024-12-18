import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Menu from "./components/Menu/Menu";
import Home from "./components/HomePage/Home";
import "./App.css"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />

        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
