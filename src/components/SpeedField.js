import React from 'react'
import PropTypes from 'prop-types'

const SpeedField = ({ speed, increaseSpeed }) => {
  return (
    <div className="center">
      <input
        type="number"
        min="0"
        step="20"
        value={speed}
        onChange={e => {
          e.preventDefault()
          increaseSpeed(parseInt(e.target.value))
        }}
      />
      <span> milisecs</span>
    </div>
  )
}

SpeedField.propTypes = {
  speed: PropTypes.number.isRequired,
  increaseSpeed: PropTypes.func.isRequired
}

export default SpeedField
