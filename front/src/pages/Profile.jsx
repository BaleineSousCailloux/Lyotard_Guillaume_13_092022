import React from 'react'
import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import { useNavigate } from 'react-router'
import Accounts from '../components/Accounts'
import ActiveButton from '../components/ActionButton'
import BalanceLine from '../components/BalanceLine'
import { userProfile, updateUserData, logoutUser } from '../stores/userStore'

function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const store = useStore()
  const navigate = useNavigate()
  const token = store.getState().user.token
  useEffect(() => {
    const callUserProfile = async () => {
      await userProfile(token)
      if (store.getState().user?.status === 'resolved') {
        const user = store.getState().user?.data
        setFirstName(user?.firstName)
        setLastName(user?.lastName)
      } else {
        logoutUser(store)
        navigate('/sign-in')
      }
    }
    callUserProfile()
  }, [token, store, navigate])
  const startEdit = () => {
    setIsEditing(true)
  }
  const saveName = () => {
    updateUserData({ firstName, lastName }, token).then(() =>
      setIsEditing(false)
    )
  }
  return (
    <main className="main bg-dark">
      <div className="header">
        <h2 className="welcome">Welcome back</h2>
        {!isEditing && (
          <div>
            <span className="welcome">
              {firstName} {lastName}
            </span>
            <br />
            <ActiveButton title="Edit Name" action={startEdit} />
          </div>
        )}
        {isEditing && (
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="updateName"
              id="firstName"
              type="texte"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              className="updateName"
              id="lastName"
              type="texte"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <ActiveButton title="Save" action={saveName} />
          </div>
        )}
      </div>
      <Accounts />
    </main>
  )
}

export default Profile
