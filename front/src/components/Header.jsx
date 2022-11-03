import React from 'react'
import LogoNav from './LogoNav'
import Login from './Login'
import Logout from './Logout'

const Header = () => {
  return (
    <div className="main-nav">
      <LogoNav />
      <Login />
      <Logout />
    </div>
  )
}

export default Header
