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
import Community from "../Community/Community.jsx";
import CommunityProfile from "../Community/Profile.jsx";
import Explore from "../Community/Explore.jsx";
import CreatePost from "../Community/CreatePost.jsx";
import Comments from "../Community/Comments.jsx";
import PublicProfile from "../Community/PublicProfile.jsx";
import Notifications from "../Community/Notifications.jsx";
import Followers from "../Community/Followers.jsx";
import Following from "../Community/Following.jsx";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Questions/:id" element={<Question />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/Users" element={<User />} />
        <Route path="/Users/:id" element={<Public />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/payment/:plan" element={<Payment />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/profile" element={<CommunityProfile />} />
        <Route path="/community/explore" element={<Explore />} />
        <Route path="/community/post" element={<CreatePost/>} />
        <Route path="/community/post/:id" element={<Comments />} />
        <Route path="/community/profile/:id" element={<PublicProfile />} />
        <Route path="/community/notifications" element={<Notifications />} />
        <Route path="/community/followers/:id" element={<Followers />} />
        <Route path="/community/following/:id" element={<Following />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
