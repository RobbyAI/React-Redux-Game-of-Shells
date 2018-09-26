import { connect } from 'react-redux'
import { addShell } from '../actions'
import AddShellButton from '../components/AddShellButton'

const mapStateToProps = state => ({
  shells: state.shells
})

const mapDispatchToProps = dispatch => ({
  addShell: id => dispatch(addShell(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShellButton)
