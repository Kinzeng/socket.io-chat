import {socket} from '../../..'
import {SET_NAME} from '../types/chat'

export function setName (name) {
  socket.emit('client:login', name)
  return {type: SET_NAME, name}
}
