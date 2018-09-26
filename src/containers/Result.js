import { connect } from 'react-redux'
import ResultContainer from '../components/ResultContainer'

const mapStateToProps = state => ({
  success: state.success
})

export default connect(
  mapStateToProps
)(ResultContainer)
