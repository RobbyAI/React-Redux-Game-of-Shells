import Constants from '../constants'

const count = (state, action) => {
  switch (action.type) {

    // -- Increase the speed of the horizontal ball movement.
    case 'INCREASE_SPEED':
      return action.speed

    // -- Get the current ball speed, or get the default value from the Constants.
    default:
      return !state ? Constants.SPEED : state
  }
}

export default count
