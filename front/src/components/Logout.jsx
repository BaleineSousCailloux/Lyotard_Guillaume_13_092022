import React from 'react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <div className="main-nav-group">
      <Link className="main-nav-item" to="/profile">
        <FaUserCircle className="fa fa-user-circle"></FaUserCircle>
        Tony
      </Link>
      <Link className="main-nav-item" to="/">
        <FaSignOutAlt className="fa fa-sign-out"></FaSignOutAlt>
        Sign Out
      </Link>
    </div>
  )
}

export default Logout
