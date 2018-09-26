import { connect } from 'react-redux'
import { reorderShells } from '../actions'
import ReorderButton from '../components/ReorderButton'

const mapStateToProps = state => ({
  shells: state.shells
})

const mapDispatchToProps = dispatch => ({
  reorderShells: shells => dispatch(reorderShells(shells))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReorderButton)
