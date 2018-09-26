import { combineReducers } from 'redux'
import shells from './shells'
import speed from './speed'
import success from './success'

/**
 * Defines the default states with their reducers handlers
 */
export default combineReducers({
  shells,
  speed,
  success
})
