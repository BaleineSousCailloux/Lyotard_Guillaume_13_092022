import React from 'react'
import SignInForm from '../components/SignInForm'
import { FaUserCircle } from 'react-icons/fa'

function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  )
}

export default SignIn
