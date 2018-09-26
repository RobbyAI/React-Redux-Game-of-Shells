import { connect } from 'react-redux'
import { isSuccess } from '../actions'
import ShellList from '../components/ShellList'

const mapStateToProps = state => ({
  shells: state.shells,
  speed: state.speed
})

const mapDispatchToProps = dispatch => ({
  isSuccess: success => dispatch(isSuccess(success))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShellList)
