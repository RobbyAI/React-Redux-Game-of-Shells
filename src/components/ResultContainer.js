import React from 'react'
import PropTypes from 'prop-types'

const ResultContainer = ({ success }) => {
  return (
    <div className={`center result ${success?'show':'hide'}`}>
      <h3>Great !</h3>
    </div>
  )
}

ResultContainer.propTypes = {
  success: PropTypes.bool
}

export default ResultContainer
