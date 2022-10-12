import React from 'react'
import logo from '../assets/argentBankLogo.png'
import { NavLink } from 'react-router-dom'

const LogoNav = () => {
  return (
    <NavLink className="main-nav-logo" to="/">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
  )
}

export default LogoNav
