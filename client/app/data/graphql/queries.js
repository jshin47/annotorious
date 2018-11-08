import gql from 'graphql-tag'
export const GET_ANNOTATION_TASK_QUERY = gql`
  
  query GetAnnotationTaskQuery($id: String) {
    annotationTask(id: $id) {
      id
      name
      
    }
  }
`
