import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function LoginForm() {
  useEffect(()=>{
    if(localStorage.getItem("authTocken")){
      navigate("/feedbacklist")
    }
  })
  const navigate = useNavigate();
  const [loginCredentials , setLoginCredentials] = useState({
    email:"",
    password:""
  })
  const handleChange=(event)=>{
    const {name , value} = event.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value
    })
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    if (loginCredentials.email.length === 0 || loginCredentials.password.length === 0) {
      alert("Please write clear information");
    } else {
      axios
        .post("http://localhost:3004/login", loginCredentials)
        .then((result) => {
          if(result.data.status ===0){
            alert("Try Sigining up First");
            navigate("/signup")
          }else if(result.data.status === 1){
            alert("Please write email or password correctly");
          }else if(result.data.status === 2){
            localStorage.setItem("authTocken",result.data.authTocken)
            localStorage.setItem("id",result.data.uid)
            localStorage.setItem("name",result.data.name)
            localStorage.setItem("email",loginCredentials.email)
            navigate("/feedbacklist");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="login-form">
      <form method="post" className="" onSubmit={handleSubmit}>
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </div>
      </form>
      <p className="text-center">
        <Link to="/signup">Create an Account</Link>
      </p>
    </div>
  );
}
