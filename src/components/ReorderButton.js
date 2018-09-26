import React from 'react'
import PropTypes from 'prop-types'

const ReorderButton = ({ shells, reorderShells }) => (
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

ReorderButton.propTypes = {
  shells: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  reorderShells: PropTypes.func.isRequired
}

export default ReorderButton
