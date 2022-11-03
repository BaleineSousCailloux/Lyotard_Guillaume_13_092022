import React from 'react'
import { useEffect, useState } from 'react'
import { useStore } from 'react-redux'
import ActiveButton from '../components/ActionButton'
import BalanceLine from '../components/BalanceLine'
import { userProfile, updateUserData } from '../stores/userStore'

function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const store = useStore()
  const token = store.getState().user.token
  useEffect(() => {
    const callUserProfile = async () => {
      await userProfile(token)
      const user = store.getState().user?.data
      setFirstName(user?.firstName)
      setLastName(user?.lastName)
    }
    callUserProfile()
  }, [token, store])
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
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <BalanceLine
        title="Argent Bank Checking (x8349)"
        balance={9999}
        description="Current Balance"
      />
    </main>
  )
}

export default Profile
