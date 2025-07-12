import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import PostUpload from "./PostUpload";
import Profile from "./Profile";
import ChatRoom from "./ChatRoom";
import Navigation from "./Navigation";
import SearchFilter from "./SearchFilter";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<SearchFilter />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<PostUpload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;