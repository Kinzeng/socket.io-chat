import React from 'react'

export const MESSAGE_HEIGHT = 40

const messageProps = {
  style: {
    height: `${MESSAGE_HEIGHT}px`,
    width: '100%',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center'
  }
}

const textProps = {
  style: {
    marginLeft: '20px'
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
        backgroundColor: this.props.type === 'message' ? 'rgb(233, 233, 233)' : 'rgb(255, 255, 255)',
        color: this.props.type === 'message' ? 'rgb(0, 0, 0)' : 'rgb(150, 150, 150)'
      }
    }

    let inner
    switch (this.props.type) {
      case 'message': {
        inner = <span {...textProps}><b>{this.props.name}</b>: {this.props.message}</span>
        break
      }

      default: {
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
