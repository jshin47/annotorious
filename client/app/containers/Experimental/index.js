/**
 *
 * Experimental
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ensureAuthentication, setCurrentUser } from '../App/actions';

function Experimental({ dispatch }) {

  const doSomething = () => dispatch(ensureAuthentication({
    postLoginAction: setCurrentUser({ token: null, user: null })
  }))

  return (
    <div>
      <button onClick={doSomething}>Do something</button>
    </div>
  );
}

Experimental.propTypes = {
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

export default compose(withConnect)(Experimental);
