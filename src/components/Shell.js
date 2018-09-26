import React from 'react'
import PropTypes from 'prop-types'

const Shell = ({ onMouseOver, length }) => (
  <li
    className="inline"
    style={{width: (100/length) + '%'}}
    onMouseOver={ onMouseOver }
  >
    <div className="hidder"></div>
  </li>
)

Shell.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default Shell
