import { connect } from 'react-redux'
import { selectShell } from '../actions'
import ShellList from '../components/ShellList'

const mapStateToProps = state => ({
  shells: state.shells
})

const mapDispatchToProps = dispatch => ({
  selectShell: id => dispatch(selectShell(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShellList)
