import React from 'react'
import List from '../containers/List'
import Reorder from '../containers/Reorder'
import Speed from '../containers/Speed'
import Add from '../containers/Add'

const App = () => (
  <div>
    <h2>Welcome to the Game of Shell</h2>
    <h5>Click on "Play" to start th game and then select the hat where is hidden the ball!</h5>
    <hr />
    <List />
    <hr />
    <footer>
      <Reorder />
      <Speed />
      <Add />
    </footer>
  </div>
)

export default App
