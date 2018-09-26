import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shell from './Shell'

export default class ShellList extends Component {

  static defaultProps = {
    speed: PropTypes.number.isRequired,
    shells: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
    isSuccess: PropTypes.func.isRequired
  }

  input = null
  curPos = 0

  
  constructor(props, state) {
    super(props)
    this.state = {}
  }

  /**
   * Start moving the ball position after mounting the App.
   */
  componentDidMount() {
    this._updateposition()
  }

  /**
   * Update moving the ball after each state update
   */
  componentWillUpdate() {
    this._updateposition()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="list">
        {this._getList()}
        {this._getBall()}
      </div>
    )
  }

  _getList() {
    const { shells } = this.props
    const len = shells.length
    return (
      <ul>
        {shells.map((shell, index) =>
          <Shell
            key={shell.id}
            length={len}
            onMouseOver={e => this._onMouseOver(index)}
            {...shell}
          />
        )}
      </ul>
    )
  }

  _getBall() {
    const { speed } = this.props
    return (
      <ul>
        <li className="ball">
          <input
            ref={ ref => this.input = ref }
            type="radio"
            name="ball"
            checked="1"
            style={{
              transitionDuration:`${speed/1000}s`
            }}
            onChange={()=>{}}
          />
        </li>
      </ul>
    )
  }

  _onMouseOver(index) {
    const { isSuccess } = this.props
    isSuccess(this.curPos === index)
  }

  _updateposition() {
    this._setPosition(0)
  }

  /**
   * Recursive method to move the ball horizontal position as many times as they
   * are small containers.
   * Update the CSS ball horizontal position.
   * @param {Number} pos The current index position going from 0 to n-1 container
   * @return {Void}
   */
  _setPosition(pos) {
    const { shells, speed } = this.props
    const len = shells.length
    const _pos = pos + 1
    const _goto = shells[pos].id + 1

    this.curPos = shells[pos].id
    if (this.input) {
      this.input.style.left = `calc(((100%/${len}) * ${_goto}) - (100%/${len})/2 - 7px)`
    }

    this.timeout = setTimeout(() => {
      this._setPosition(++pos)
    }, speed)

    if (pos === len-1) {
      clearTimeout(this.timeout)
      return
    }
  }
}
