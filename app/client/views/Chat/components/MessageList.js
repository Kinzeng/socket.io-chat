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

    const container = {
      ...containerProps,
      ref: 'window'
    }

    return <div {...container}>{messages}</div>
  }
}
