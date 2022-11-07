import React from 'react'
import SignInForm from '../components/SignInForm'
import { FaUserCircle } from 'react-icons/fa'

function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle className="fa fa-user-circle sign-in-icon" />
        <h2>Sign In</h2>
        <SignInForm />
      </section>
    </main>
  )
}

export default SignIn
