import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloLink } from 'apollo-client-preset'


import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'


const AUTH_TOKEN = 'auth-token'

export function configureApollo(reduxStore) {
  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/',
    options: {
      reconnect: true
    }
  })
  const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

  const middlewareAuthLink = new ApolloLink((operation, forward) => {
    // const token = reduxStore.getState();
    const token = localStorage.getItem(AUTH_TOKEN)
    const authorizationHeader = token ? `Bearer ${token}` : null
    operation.setContext({
      headers: {
        authorization: authorizationHeader,
      },
    })
    return forward(operation)
  })

  const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLinkWithAuthToken,
  )

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

export default configureApollo;
