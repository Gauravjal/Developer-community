import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Auth from "../Auth/Auth.jsx";
import Questions from '../Questions/Questions';
import AskQuestion from '../Questions/AskQuestion.jsx';
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
