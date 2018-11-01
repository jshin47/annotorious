import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
      }
    }
  }
`

export class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  setUsername = (e) => {
    const username = e.target.value
    this.setState(() => ({ username }))
  }

  setPassword = (e) => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }

  login = async () => {
    const { username, password } = this.state

    try {
      const loginResult = await this.props.loginMutation({
        variables: {
          username,
          password
        },
      })
      const { token, user } = loginResult.data.login
      console.log(token, user)
    } catch {
      console.log('Login failed')
    }


  }

  render() {
    return (
      <div>
        <label>
          Username
          <input type="text" onChange={this.setUsername} />
        </label>
        <label>
          Password
          <input type="password" onChange={this.setPassword} />
        </label>
        <button onClick={this.login}>
          Login
        </button>
      </div>
    )
  }
}

export default compose(withApollo, graphql(LOGIN_MUTATION, { name: 'loginMutation' }))(Login)
