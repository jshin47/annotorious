import React, { Component, useState } from 'react'
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

export function LoginPure({loginMutation}) {
  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const loginResult = await loginMutation({
        variables: {
          username,
          password
        },
      })
      const {token, user} = loginResult.data.login
      console.log(token, user)
    } catch {
      console.log('Login failed')
    }
  }

  return (
    <div>
      <label>
        Username
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
      </label>
      <label>
        Password
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <button onClick={login}>
        Login
      </button>
    </div>
  )
}

export default compose(withApollo, graphql(LOGIN_MUTATION, { name: 'loginMutation' }))(LoginPure)
