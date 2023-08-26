import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <>
        <form  method="post" className='card m-auto w-50 border-0 text-centre'>
		<h2>Sign Up</h2>
		<p>It's free and only takes a minute.</p>
        <div className="form-group">
			<label>Name</label>
        	<input type="text" className="form-control" name="username" required="required"/>
        </div>
        <div className="form-group">
			<label>Email Address</label>
        	<input type="email" className="form-control" name="email" required="required"/>
        </div>
		<div className="form-group">
			<label>Password</label>
            <input type="password" className="form-control" name="password" required="required"/>
        </div>
		<div className="form-group">
			<label>Confirm Password</label>
            <input type="password" className="form-control" name="confirm_password" required="required"/>
        </div>
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		</form>
	    <div className="text-center">Already have an account? <Link to="/">Login here</Link></div>
    </>
  )
}
