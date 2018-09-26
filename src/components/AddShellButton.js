import React from 'react'
import PropTypes from 'prop-types'

const AddShellButton = ({ shells, addShell }) => {
  return (
    <div className="center">
      <form
        onSubmit={e => {
          e.preventDefault()
          let id = Math.max.apply(Math, shells.map(o => o.id))
          id++
          addShell(id)
        }}
      >
        <button type="submit">
          + Shell
        </button>
      </form>
    </div>
  )
}

AddShellButton.propTypes = {
  shells: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  addShell: PropTypes.func.isRequired
}

export default AddShellButton
