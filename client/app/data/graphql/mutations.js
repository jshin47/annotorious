import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
      }
    }
  }`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($emailAddress: String!, $password: String!) {
    signup(emailAddress: $emailAddress, password: $password) {
      token
      user {
        id
      }
    }
  }`;
