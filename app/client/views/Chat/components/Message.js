import React from 'react'

export const MESSAGE_HEIGHT = 40

const messageProps = {
  style: {
    minHeight: `${MESSAGE_HEIGHT}px`,
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center'
  }
}

const textProps = {
  style: {
    width: '98%',
    marginLeft: '2%',
    wordWrap: 'break-word'
  }
}

export default class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const message = {
      ...messageProps,
      style: {
        ...messageProps.style,
      }
    }

    let inner
    switch (this.props.type) {
      case 'message': {
        message.style.backgroundColor = 'rgb(233, 233, 233)'
        message.style.color = 'rgb(0, 0, 0)'
        inner = <span {...textProps}><b>{this.props.name}</b>: {this.props.message}</span>
        break
      }

      case 'typing': {
        message.style.backgroundColor = 'rgb(255, 255, 255)'
        message.style.color = 'rgb(150, 150, 150)'
        inner = <span {...textProps}><em>{this.props.message}</em></span>
        break
      }

      default: {
        message.style.backgroundColor = 'rgb(255, 255, 255)'
        message.style.color = 'rgb(150, 150, 150)'
        inner = <span {...textProps}>{this.props.message}</span>
      }
    }

    return (
      <div {...message}>
        {inner}
      </div>
    )
  }
}
