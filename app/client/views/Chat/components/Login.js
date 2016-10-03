import React from 'react'

const containerProps = {
  style: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const inputProps = {
  style: {
    width: '80%',
    outline: 'none'
  }
}

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: ''}
  }

  onChange (e) {
    this.setState({name: e.target.value})
  }

  onKeyDown (e) {
    if (e.keyCode === 13) {
      this.props.setName(this.state.name)
    }
  }

  render () {
    const input = {
      ...inputProps,
      onChange: this.onChange.bind(this),
      onKeyDown: this.onKeyDown.bind(this),
      value: this.state.name,
      placeholder: 'Enter a username...',
      autoFocus: true
    }

    return (
      <div {...containerProps}>
        <h2>Log In</h2>
        <input {...input} />
      </div>
    )
  }
}
