const success = (state = false, action) => {
  switch (action.type) {

    // -- Update the success value, either `true` or `false`
    case 'IS_SUCCESS':
      return action.success

    // -- Default set to `false`.
    default:
      return false
  }
}

export default success
