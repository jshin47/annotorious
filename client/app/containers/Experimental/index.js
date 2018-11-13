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
import ListOfAnnotatables from '../AnnotationTaskDesk/ListOfAnnotatables';
import { Box, Flex } from 'rebass';

function Experimental({ dispatch }) {

  const doSomething = () => dispatch(ensureAuthentication({
    authenticatedAction: setCurrentUser({ token: null, user: null })
  }))

  return (
    <Flex style={{height: '500px'}}>
      <Box width={1/4}>
        <ListOfAnnotatables />
      </Box>
    </Flex>
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
