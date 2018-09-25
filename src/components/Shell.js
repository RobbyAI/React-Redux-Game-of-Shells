import React from 'react'
import PropTypes from 'prop-types'

const Shell = ({ onClick, id, length }) => (
  <li
    className="inline"
    style={{width: (100/length) + '%'}}
    onClick={ onClick }
  >
    <label>{id}</label>
    <div className="hidder"></div>
  </li>
)

Shell.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
}

export default Shell
