import {SET_NAME} from '../types/chat'

export function setName (name) {
  console.log('name', name)
  return {type: SET_NAME, name}
}
