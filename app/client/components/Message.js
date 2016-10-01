import React from 'react'

const messageProps = {
  style: {
    width: '100%',
    backgroundColor: '#eee'
  }
}

export default class ComponentName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div {...messageProps}>
        <b>{this.props.message}</b>
      </div>
    )
  }
}
