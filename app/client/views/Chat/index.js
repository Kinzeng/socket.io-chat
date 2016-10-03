import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ChatHeader from './components/ChatHeader'
import UserList from './components/UserList'
import MessageList from './components/MessageList'
import ChatInput from './components/ChatInput'
import Modal from '../../containers/Modal'
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

const mainProps = {
  style: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch'
  }
}

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {users: [], messages: []}
  }

  componentDidMount () {
    this.props.socket.on('server:login', this.addUser.bind(this))
    this.props.socket.on('server:update-users', this.updateUsers.bind(this))
    this.props.socket.on('server:message', this.addMessage.bind(this))
    this.props.socket.on('server:disconnect', this.userDisconnect.bind(this))
    this.props.socket.on('server:sender', (data) => console.log(data))
  }

  addUser (user) {
    if (this.props.name) {
      this.setState({users: this.state.users.concat(user)})
      this.addMessage({message: `${user} has joined the chat.`, type: 'login'})
    }
  }

  updateUsers (users) {
    this.setState({users})
  }

  addMessage (message) {
    if (this.props.name) {
      this.setState({messages: this.state.messages.concat(message)})
    }
  }

  userDisconnect (user) {
    if (this.props.name) {
      this.state.users.splice(this.state.users.indexOf(user), 1)
      this.setState({users: this.state.users})
      this.addMessage({message: `${user} has left the chat.`, type: 'logout'})
    }
  }

  render () {
    const headerProps = {

    }

    const usersProps = {
      users: this.state.users
    }

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
        <ChatHeader {...headerProps} />
        <div {...mainProps}>
          <UserList {...usersProps} />
          <div style={{width: '80%', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between'}}>
            <MessageList {...messagesProps} />
            <ChatInput {...inputProps} />
          </div>
        </div>
        <Modal {...modalProps}>
          <Login setName={this.props.setName} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
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
