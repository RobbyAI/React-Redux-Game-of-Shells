import Constants from '../constants'

const shells = (state = [], action) => {
  switch (action.type) {

    // -- Add a new `shell` to the current `shells` list.
    case 'ADD_A_SHELL':
      return [ ...state, { id: action.id }]

    // -- Randomly reorder the `shells`.
    case 'REORDER_SHELLS':
      return [...state].sort(() => (Math.random()<.5)?-1:1)

    // -- Current `shells` or by default create an array of object that contains
    // -- the minimum containers defined in the constants.
    default:
      return state.length ?
        state :
        Array.from(new Array(Constants.NUM_CONTAINER), (v,i) => { return { id: i }})
  }
}

export default shells
