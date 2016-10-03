import React from 'react'

const containerProps = {
  style: {
    width: '20%',
    padding: '20px',
    borderRight: '1px solid rgb(233, 233, 233)'
  }
}

const headerProps = {
  style: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.25em'
  }
}

const userStyle = {
  margin: '10px 0'
}

export default class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const users = this.props.users.map((user, i) => {
      const userProps = {
        key: i,
        style: userStyle
      }

      return <div {...userProps}>{user}</div>
    })

    return (
      <div {...containerProps}>
        <div {...headerProps}>Online Users</div>
        {users}
      </div>
    )
  }
}
