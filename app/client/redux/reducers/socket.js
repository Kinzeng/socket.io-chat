import {SET_SOCKET} from '../actions/types/socket'

// socket won't be changed so the reducer is quite simple
export default (state = {}, action) => {
  switch (action.type) {
    case SET_SOCKET: {
      return action.socket
    }

    default: {
      return state
    }
  }
}
