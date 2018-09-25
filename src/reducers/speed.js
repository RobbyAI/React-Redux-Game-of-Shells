const count = (state = 250, action) => {
  switch (action.type) {
    case 'INCREASE_SPEED':
      return action.speed
    default:
      return 250
  }
}

export default count
