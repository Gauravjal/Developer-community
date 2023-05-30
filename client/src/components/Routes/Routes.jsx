import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Auth from "../Auth/Auth.jsx";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
