import { connect } from 'react-redux'
import { increaseSpeed } from '../actions'
import SpeedField from '../components/SpeedField'

const mapStateToProps = state => ({
  speed: state.speed
})

const mapDispatchToProps = dispatch => ({
  increaseSpeed: speed => dispatch(increaseSpeed(speed))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeedField)
