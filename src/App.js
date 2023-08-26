import React from "react";
import AdminPannel from "./Pages/AdminPannel";
import FeedBackForm from "./Components/FeedBackForm";
import AdminLogin from "./Pages/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Pages/LoginForm";
import SignUp from "./Pages/SignUp";
import Success from "./Pages/Success";
import Error from "./Pages/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/feedback" element={<FeedBackForm/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/adminpannel" element={<AdminPannel/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
