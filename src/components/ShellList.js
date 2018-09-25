import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Shell from './Shell'

export default class ShellList extends PureComponent {

  static defaultProps = {
    speed: PropTypes.number.isRequired,
    shells: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        selected: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired,
    selectShell: PropTypes.func.isRequired
  }

  constructor(props, state) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.updateposition()
  }

  componentWillUpdate() {
    this.updateposition()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { shells, speed } = this.props
    const len = shells.length
    return (
      <div className="list">
        <ul>
          {shells.map((shell, index) =>
            <Shell
              key={shell.id}
              length={len}
              onClick={e => this._onClick(index)}
              {...shell}
            />
          )}
        </ul>
        <ul>
          <li className="ball">
            <input
              ref={ ref => this.input = ref }
              type="radio"
              name="ball"
              checked="1"
              style={{transitionDuration:`${speed/1000}s`}}
              onChange={()=>{}}
            />
          </li>
        </ul>
      </div>
    )
  }

  _onClick(index) {
    const { selectShell } = this.props
    if (this.curPos === index) {
      alert('Great!')
      selectShell(index)
    }
  }

  updateposition() {
    this._setPosition(0)
  }

  _setPosition(pos) {
    const { shells, speed } = this.props
    const len = shells.length
    const _pos = pos + 1
    const _goto = shells[pos].id + 1
    this.curPos = shells[pos].id
    this.input.style.left = `calc(((100%/${len}) * ${_goto}) - (100%/${len})/2 - 7px)`
    this.timeout = setTimeout(() => {
      this._setPosition(++pos)
    }, speed)
    if (pos === len-1) {
      clearTimeout(this.timeout)
      return
    }
  }
}
