import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

function ImagePageList({ imagesConnectionQuery }) {
  if (imagesConnectionQuery.error) {
    return (<h1>Error</h1>)
  } else if (imagesConnectionQuery.loading) {
    return (<h1>Loading</h1>)
  }

  const { edges, aggregate } = imagesConnectionQuery.imagesConnection

  return (
    <div>
      <h1>Images</h1>
      <div>
        {edges && edges.map(image => (<div key={image.node.id}><span>Image with uri {image.node.uri}</span></div>))}
      </div>
    </div>
  )

}

const IMAGE_LIST_QUERY = gql`
  query ImagesConnectionQuery($after: String, $orderBy: ImageOrderByInput, $where: ImageWhereInput, $skip: Int) {
    imagesConnection(after: $after, orderBy: $orderBy, where: $where, first: 5, skip: $skip) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          uri
        }
      }
      aggregate {
        count
      }
    }
  }
`

export default compose(
  graphql(IMAGE_LIST_QUERY, {
    name: 'imagesConnectionQuery',
    fetchPolicy: 'network-only',
    options: props => ({
      variables: {
        // orderBy: props.orderBy,
        // where: {
        //   name_contains: props.query
        // }
      }
    })
  })
)(ImagePageList)
