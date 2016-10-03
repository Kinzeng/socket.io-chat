import React from 'react'

const appProps = {
  style: {
    height: '100%',
    minHeight: '100%',
    width: '100%',
    minWidth: '750px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between', // header and footer at the extremes
    alignItems: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0)', // placeholder
    fontFamily: 'sans-serif'
  }
}

export default class App extends React.Component {
  render () {
    return (
      <div {...appProps}>
        {this.props.children}
      </div>
    )
  }
}
