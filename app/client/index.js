import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import rootReducer from './redux/reducers'
import routes from './routes'
import {SET_SOCKET} from './redux/actions/types/socket'
import config from '../../config'

// TODO: refactor to import socket instead of passing it through redux?
export const socket = io(`http://${config.host}:${config.port}`)

class Root extends React.Component {
  componentWillMount () {
    this.store = createStore(rootReducer, {})
    this.store.dispatch({
      type: SET_SOCKET,
      socket
    })
  }

  render () {
    // pass down the redux stare through the Provider
    // allows connect to pass in needed parts of the store as props
    return (
      <Provider store={this.store}>
        {routes}
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('app'))
