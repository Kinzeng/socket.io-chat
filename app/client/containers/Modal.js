import React from 'react'

const containerProps = {
  style: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const contentProps = {
  style: {
    backgroundColor: 'rgb(255, 255, 255)',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class Modal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  componentWillMount () {
    this.setState({open: this.props.open})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({open: nextProps.open})
  }

  render () {
    if (!this.state.open) {
      return <div />
    }

    const container = {
      ...containerProps
      // onClick: () => this.setState({open: false})
    }

    const content = {
      ...contentProps,
      style: {
        ...contentProps.style,
        ...this.props.contentStyle
      }
    }

    return (
      <div {...container}>
        <div {...content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
