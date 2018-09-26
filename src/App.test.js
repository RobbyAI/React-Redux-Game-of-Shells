import React              from 'react';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux'
import { configure, shallow, mount } from 'enzyme'
import Adapter            from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store';
import thunk              from 'redux-thunk';

import App          from './components/App';
import ShellList    from './components/ShellList'
import reducer      from './reducers'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  shells: [{id:0},{id:1},{id:2}],
  success: false,
  speed: 250
}

const store = mockStore(initialState);

configure({ adapter: new Adapter() });

describe('Testing if application can mount', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })
})

describe('Testing "_setPosition" methods', () => {
  it('should click "_setPosition"', () => {
    const wrapper = shallow(<ShellList {...initialState} />)
    const instance = wrapper.instance()
    jest.spyOn(instance, '_setPosition')
    //wrapper.find('li.inline').simulate('onMouseOver')
    //expect(wrapper.props('curPos')).toBe(3)
  })
})
