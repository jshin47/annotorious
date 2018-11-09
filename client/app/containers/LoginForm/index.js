/**
 *
 * LoginForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { graphql, compose } from 'react-apollo';

import messages from './messages';
import { LOGIN_MUTATION } from 'data/graphql/mutations';
import { setCurrentUser } from '../App/actions';

function LoginForm({ dispatch, loginMutation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const attemptLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const loginResult = await loginMutation({
      variables: {
        username,
        password
      },
    })
    const {token, user} = loginResult.data.login;
    console.log(token, user)
    dispatch(setCurrentUser({ token, user }));
  }

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <form onSubmit={attemptLogin}>
        <label>
          <span>Username</span>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withGraphql = graphql(LOGIN_MUTATION, { name: 'loginMutation' });

export default compose(withGraphql, withConnect)(LoginForm);
