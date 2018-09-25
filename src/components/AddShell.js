import React from 'react'
import PropTypes from 'prop-types'

const AddShell = ({ shells, addShell }) => {
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
          Add a Shell
        </button>
      </form>
    </div>
  )
}

AddShell.propTypes = {
  shells: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      selected: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  addShell: PropTypes.func.isRequired
}

export default AddShell
