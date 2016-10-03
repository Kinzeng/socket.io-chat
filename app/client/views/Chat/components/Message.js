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
    return (
      <div {...messageProps}>
        <span {...textProps}><b>{this.props.name}</b>: {this.props.message}</span>
      </div>
    )
  }
}
