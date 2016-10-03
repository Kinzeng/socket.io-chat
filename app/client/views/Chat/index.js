import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Modal from '../../containers/Modal'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'
import Login from './components/Login'
import {setName} from '../../redux/actions/creators/chat'

const containerProps = {
  style: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between'
  }
}

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {messages: []}
  }

  componentDidMount () {
    this.props.socket.on('server:message', this.addMessage.bind(this))
    this.props.socket.on('server:sender', (data) => console.log(data))
  }

  addMessage (message) {
    if (this.props.name) {
      this.setState({messages: this.state.messages.concat(message)})
    }
  }

  render () {
    const messagesProps = {
      messages: this.state.messages
    }

    const inputProps = {
      sendMessage: (message) => {
        this.props.socket.emit('client:message', {name: this.props.name, message})
      }
    }

    const modalProps = {
      open: !this.props.name,
      contentStyle: {
        height: '40%',
        width: '40%'
      }
    }

    return (
      <div {...containerProps}>
        <MessageList {...messagesProps} />
        <ChatInput {...inputProps} />
        <Modal {...modalProps}>
          <Login setName={this.props.setName} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.chat)
  return {
    socket: state.socket,
    name: state.chat.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: bindActionCreators(setName, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
