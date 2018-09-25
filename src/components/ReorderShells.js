import React from 'react'
import PropTypes from 'prop-types'

const ReorderShells = ({ shells, reorderShells }) => (
  <div className="center">
    <form
			onSubmit={e => {
				e.preventDefault()
        reorderShells(shells)
			}}
		>
			<button type="submit">
				Play
			</button>
		</form>
  </div>
)

ReorderShells.propTypes = {
  shells: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      selected: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  reorderShells: PropTypes.func.isRequired
}

export default ReorderShells
