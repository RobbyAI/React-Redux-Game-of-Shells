/**
 * Add a new shell to the list.
 * @param {Number} id Recive the id which is calculated as to be the next highest.
 */
export const addShell = id => ({
  type: 'ADD_A_SHELL',
  id
})

/**
 * Randomly reorder the shell list.
 * @param {Array<Object>} shells Receive the current shells array of objects.
 */
export const reorderShells = shells => ({
  type: 'REORDER_SHELLS',
  shells
})

/**
 * Increase the horizontal ball speed of the movement.
 * @param {Number} speed Receive the next speed in miliseconds
 */
export const increaseSpeed = speed => ({
  type: 'INCREASE_SPEED',
  speed
})

/**
 * Toggle the results box container displayin if the user was right on his choice.
 * @param {Boolean} success Defines either true or false the user was right.
 */
export const isSuccess = success => ({
  type: 'IS_SUCCESS',
  success
})
