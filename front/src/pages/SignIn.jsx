import React from 'react'
import SignInForm from '../components/SignInForm'
import { FaUserCircle } from 'react-icons/fa'

function SignIn() {
  return (
    <body>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FaUserCircle class="fa fa-user-circle sign-in-icon" />
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
    </body>
  )
}

export default SignIn
