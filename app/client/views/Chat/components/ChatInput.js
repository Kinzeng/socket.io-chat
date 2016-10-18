import React from 'react'

const containerProps = {
  style: {
    height: '40px',
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap'
  }
}

const inputStyle = {
  height: '100%',
  width: '95%',
  outline: 'none',
  padding: '10px',
  border: '1px solid rgb(233, 233, 233)',
  borderLeft: 'none'
}

const buttonStyle = {
  height: '100%',
  width: '5%',
  minWidth: '50px',
  backgroundColor: 'transparent',
  color: 'rgb(0, 132, 255)',
  fontWeight: 'bold',
  border: 'none',
  borderTop: '1px solid rgb(233, 233, 233)',
  outline: 'none'
}

export default class ChatInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {message: ''}
  }

  onChange (e) {
    if (this.state.message.length < e.target.value.length) {
      this.props.emitEvent('client:typing')
    }

    this.setState({message: e.target.value})
  }

  sendMessage () {
    if (this.state.message.trim()) {
      this.props.sendMessage(this.state.message.trim())
      this.setState({message: ''})
    }
  }

  onKeyDown (e) {
    if (e.keyCode === 13) {
      this.sendMessage()
    }
  }

  render () {
    const inputProps = {
      onChange: this.onChange.bind(this),
      onKeyDown: this.onKeyDown.bind(this),
      value: this.state.message,
      placeholder: 'Type a message...',
      style: inputStyle
    }

    const buttonProps = {
      onClick: this.sendMessage.bind(this),
      style: buttonStyle
    }

    return (
      <div {...containerProps}>
        <input {...inputProps} />
        <button {...buttonProps}>Send!</button>
      </div>
    )
  }
}
