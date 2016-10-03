import React from 'react'

const containerProps = {
  style: {
    height: '40px',
    width: '100%'
  }
}

const inputStyle = {
  height: '100%',
  width: '95%',
  outline: 'none',
  padding: '10px'
}

const buttonStyle = {
  height: '100%',
  width: '5%'
}

export default class ChatInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {message: ''}
  }

  onChange (e) {
    this.setState({message: e.target.value})
  }

  sendMessage () {
    this.props.sendMessage(this.state.message)
    this.setState({message: ''})
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
