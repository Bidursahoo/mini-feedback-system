import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div>
        <div className='row justify-content-center'>
        <h1 className='text-danger text-center'>Error</h1><br />
        <Link className='btn btn-primary w-25 ' to="/feedbacklist">Home</Link>
        </div>
    </div>
  )
}
