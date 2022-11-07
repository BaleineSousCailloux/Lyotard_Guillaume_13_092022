import React from 'react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { useStore } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../stores/userStore'

const Logout = () => {
  const store = useStore()
  const navigate = useNavigate()

  const logout = () => {
    logoutUser(store)
    navigate('/')
  }

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
      <button className="main-nav-item" onClick={logout}>
        <FaSignOutAlt className="fa fa-sign-out"></FaSignOutAlt>
        Sign Out
      </button>
    </div>
  )
}

export default Logout
