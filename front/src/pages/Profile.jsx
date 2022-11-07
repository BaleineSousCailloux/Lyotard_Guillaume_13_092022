import React from 'react'
import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import { useNavigate } from 'react-router'
import ActiveButton from '../components/ActionButton'
import BalanceLine from '../components/BalanceLine'
import { userProfile, updateUserData, logoutUser } from '../stores/userStore'

function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const store = useStore()
  const navigate = useNavigate()
  console.log(store.getState())
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
        <h1>
          Welcome back
          <br />
          {!isEditing && (
            <div>
              <span>
                {firstName} {lastName}
              </span>
              <br />
              <ActiveButton title="Edit Name" action={startEdit} />
            </div>
          )}
          {isEditing && (
            <div>
              <input
                type="texte"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="texte"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              <ActiveButton title="Save" action={saveName} />
            </div>
          )}
        </h1>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <BalanceLine
        title="Argent Bank Checking (x8349)"
        balance={0}
        description="Available Balance"
      />
      <BalanceLine
        title="Argent Bank Savings (x6712)"
        balance={0}
        description="Available Balance"
      />
      <BalanceLine
        title="Argent Bank Credit Card (x8349)"
        balance={0}
        description="Current Balance"
      />
    </main>
  )
}

export default Profile
