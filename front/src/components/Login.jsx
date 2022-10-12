import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Link className="main-nav-item" to="/sign-in">
      <FaUserCircle className="fa fa-user-circle"></FaUserCircle>
      Sign In
    </Link>
  )
}

export default Login
