import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  useEffect(() => {
    if (localStorage.getItem("admin")) {
      navigate("/adminpannel");
    }
  });
  const navigate = useNavigate();
  const [adminCredential, setAdminCredentials] = useState({
    uname: "",
    pass: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminCredentials({
      ...adminCredential,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      adminCredential.uname === "admin" &&
      adminCredential.pass === "adminpass"
    ) {
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("authTocken");
      localStorage.setItem("admin", true);
      navigate("/adminpannel");
    } else {
      alert("Wrong Credentials");
    }
  };
  return (
    <div className="login-form">
      <h1 className="text-center">Admin Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            required="required"
            name="uname"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required="required"
            name="pass"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
