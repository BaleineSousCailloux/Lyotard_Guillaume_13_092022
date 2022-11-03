import React from 'react'
import PropTypes from 'prop-types'
import ActiveButton from './ActionButton'

function BalanceLine({ title, balance, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${balance}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <ActiveButton title="View transactions" />
      </div>
    </section>
  )
}

BalanceLine.propTypes = {
  title: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default BalanceLine
