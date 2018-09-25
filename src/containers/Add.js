import { connect } from 'react-redux'
import { addShell } from '../actions'
import AddShell from '../components/AddShell'

const mapStateToProps = state => ({
  shells: state.shells
})

const mapDispatchToProps = dispatch => ({
  addShell: id => dispatch(addShell(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShell)
