import React from 'react'
import LogoNav from "./LogoNav"
import Login from "./Login"

const Header = () => {
    return (
        <div className="main-nav">
            <LogoNav />
            <Login />
        </div>
    )
}

export default Header