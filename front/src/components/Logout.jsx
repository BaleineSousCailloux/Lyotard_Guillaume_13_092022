import React from 'react'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import { useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../stores/userStore'
import { useState } from 'react'

const Logout = () => {
  const [first, setFirst] = useState('')
  const store = useStore()
  store.subscribe(() => setFirst(store.getState()?.user?.data?.firstName))
  const logout = () => {
    logoutUser(store)
  }

  return (
    <div className="main-nav-group">
      <Link className="main-nav-item" to="/profile">
        <FaUserCircle className="fa fa-user-circle"></FaUserCircle>
        {first}
      </Link>
      <Link className="main-nav-item" onClick={logout} to="/">
        <FaSignOutAlt className="fa fa-sign-out"></FaSignOutAlt>
        Sign Out
      </Link>
    </div>
  )
}

export default Logout
