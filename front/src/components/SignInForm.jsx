import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActiveButton from './ActionButton'
import { useState } from 'react'
import { useStore } from 'react-redux'
import { loginUser } from '../stores/userStore'

function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const store = useStore()
  const navigate = useNavigate()

  const submitForm = async () => {
    await loginUser(store, email, password)
    navigate('/profile')
  }

  return (
    <div className="form">
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <ActiveButton title="Sign In" action={submitForm} />
    </div>
  )
}

export default SignInForm
