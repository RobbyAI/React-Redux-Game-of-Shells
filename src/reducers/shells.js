const shells = (state = [], action) => {
  switch (action.type) {
    case 'ADD_A_SHELL':
      return [
        ...state,
        {
          id: action.id,
          selected: false
        }
      ]

    case 'REORDER_SHELLS':
      return [...state].sort(() => (Math.random()<.5)?-1:1)

    case 'SELECT_SHELL':
      return state.map(shell => {
        return { ...shell, selected: (shell.id === action.id)?true:false }
      })

    default:
      return [
        {
          id: 0,
          selected: false
        },
        {
          id: 1,
          selected: true
        },
        {
          id: 2,
          selected: false
        }
      ]
  }
}

export default shells
