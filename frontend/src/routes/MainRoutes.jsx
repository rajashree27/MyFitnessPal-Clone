import React from "react";
import { Route, Routes } from "react-router-dom";
import Food from "../pages/Food";
import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diary" element={<Food />} />
    </Routes>
  );
};

export default MainRoutes;
