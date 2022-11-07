import React from 'react'
import LogoNav from './LogoNav'
import Login from './Login'
import Logout from './Logout'
import { useStore } from 'react-redux'
import { useState } from 'react'

const Header = () => {
  const [isToken, setIsToken] = useState(false)
  const store = useStore()
  store.subscribe(() => {
    setIsToken(store.getState().user?.token?.length)
  })
  return (
    <div className="main-nav">
      <LogoNav />
      {isToken ? <Logout /> : <Login />}
    </div>
  )
}

export default Header
