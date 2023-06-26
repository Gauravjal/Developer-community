import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import Auth from "../Auth/Auth.jsx";
import Questions from "../Questions/Questions";
import AskQuestion from "../Questions/AskQuestion.jsx";
import Question from "../Questions/Question.jsx";
import Tags from "../Tags/Tags.jsx";
import User from "../User/User.jsx";
import Profile from "../Profile/Profile.jsx";
import Public from "../User/Public.jsx";
import Chat from "../Chat/Chat.jsx";
import Payment from "../subsription/Payment.jsx";
import Subscribe from "../subsription/Subscribe.jsx";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Questions/:id" element={<Question />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/Users" element={<User />} />
        <Route path="/Users/:id" element={<Public />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
