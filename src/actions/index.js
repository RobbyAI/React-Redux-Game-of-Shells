export const addShell = id => ({
  type: 'ADD_A_SHELL',
  id
})

export const reorderShells = shells => ({
  type: 'REORDER_SHELLS',
  shells
})

export const selectShell = id => ({
  type: 'SELECT_SHELL',
  id
})

export const increaseSpeed = speed => ({
  type: 'INCREASE_SPEED',
  speed
})
