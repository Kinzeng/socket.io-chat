import {combineReducers} from 'redux'
import socket from './socket'

// combines all the reducers so that they are more organized
export default combineReducers({
  socket
})
