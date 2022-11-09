import React from 'react'
import BalanceLine from '../components/BalanceLine'

function Accounts() {
  return (
    <div>
      <h3 className="sr-only">Accounts</h3>
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
    </div>
  )
}

export default Accounts
