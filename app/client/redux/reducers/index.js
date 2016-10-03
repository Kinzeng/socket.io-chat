import {combineReducers} from 'redux'
import socket from './socket'
import chat from './chat'

// combines all the reducers so that they are more organized
export default combineReducers({
  socket,
  chat
})
