import React from "react";
import "./Login.css";
export default function LoginForm() {
  return (
    <div className="login-form">
      <form method="post" className="">
        <h2 class="text-center">Log in</h2>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            required="required"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            required="required"
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">
            Log in
          </button>
        </div>
      </form>
      <p class="text-center">
        <a>Create an Account</a>
      </p>
    </div>
  );
}
