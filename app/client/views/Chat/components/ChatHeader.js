import React from 'react'

const containerProps = {
  style: {
    height: '60px',
    width: '100%',
    borderBottom: '1px solid rgb(233, 233, 233)',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class ComponentName extends React.Component {
  render () {
    const container = {
      ...containerProps,
      style: {
        ...containerProps.style,
        ...this.props.style
      }
    }

    return (
      <div {...container}>
        Socket.io Chat Room
      </div>
    )
  }
}
