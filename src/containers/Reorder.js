import { connect } from 'react-redux'
import { reorderShells } from '../actions'
import ReorderShells from '../components/ReorderShells'

const mapStateToProps = state => ({
  shells: state.shells
})

const mapDispatchToProps = dispatch => ({
  reorderShells: shells => dispatch(reorderShells(shells))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReorderShells)
