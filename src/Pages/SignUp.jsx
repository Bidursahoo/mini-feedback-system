import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
    const navigate = useNavigate()
  const [details, setDetails] = useState({
    uname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (details.password !== details.confirm_password) {
      alert("Please confirm the password");
    } else {
      axios
        .post("http://localhost:3004/register", details)
        .then((result) => {
            if(result.data.status === 0){
                navigate("/")
            }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <form
        method="post"
        className="card m-auto w-50 border-0 text-centre"
        onSubmit={handleSubmit}
      >
        <h2>Sign Up</h2>
        <p>It's free and only takes a minute.</p>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="uname"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirm_password"
            required="required"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        Already have an account? <Link to="/">Login here</Link>
      </div>
    </>
  );
}
