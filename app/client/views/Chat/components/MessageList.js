import React from 'react'
import Message, {MESSAGE_HEIGHT} from './Message'

const containerProps = {
  style: {
    flexGrow: 1,
    overflow: 'scroll'
  }
}

export default class MessageList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate () {
    if (this.refs.window.scrollHeight - this.refs.window.scrollTop <= this.refs.window.clientHeight + (3 * MESSAGE_HEIGHT)) {
      this.refs.window.scrollTop = this.refs.window.scrollHeight
    }
  }

  render () {
    const messages = this.props.messages.map((message, i) => {
      const messageProps = {
        type: message.type,
        name: message.name,
        message: message.message,
        key: i
      }

      return <Message {...messageProps} />
    })

    let typing
    switch (this.props.typing.length) {
      case 0: break

      case 1: {
        typing = `${this.props.typing[0]} is typing...`
        break
      }

      case 2: {
        typing = `${this.props.typing[0]} and ${this.props.typing[1]} are typing...`
        break
      }

      default: {
        typing = `${this.props.typing.join(', ')} are typing...`
        break
      }
    }
    const typingProps = {
      type: 'typing',
      message: typing
    }
    messages.push(<Message {...typingProps} />)

    const container = {
      ...containerProps,
      ref: 'window'
    }

    return <div {...container}>{messages}</div>
  }
}
