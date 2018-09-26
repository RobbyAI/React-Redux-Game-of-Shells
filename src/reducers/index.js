import { combineReducers } from 'redux'
import shells from './shells'
import speed from './speed'
import success from './success'

/**
 * Defines the default states with their reducers handlers.
 * @exports {Array<Object>} shells Randomly organized list of shells containers.
 * @exports {Number} speed Speed in miliseconds of the moving ball.
 * @exports {Boolean} success Define if the user have selected the right container.
 */
export default combineReducers({
  shells,
  speed,
  success
})
