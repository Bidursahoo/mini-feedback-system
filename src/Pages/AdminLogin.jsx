import React from 'react'
import './Login.css'
export default function AdminLogin() {
  return (
    <div className="login-form">
        <h1 className='text-center'>Admin Login</h1>
      <form method="post" >
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
    </div>
  )
}
