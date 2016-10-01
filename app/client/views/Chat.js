import React from 'react'
import {connect} from 'react-redux'

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {message: ''}
  }

  sendMessage () {
    this.props.socket.emit('client:message', this.state.message)
  }

  onChange (e) {
    this.setState({message: e.target.value})
  }

  render () {
    return (
      <div>
        <input onChange={this.onChange.bind(this)} />
        <button onClick={this.sendMessage.bind(this)}>Send!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    socket: state.socket
  }
}

export default connect(mapStateToProps)(Chat)
