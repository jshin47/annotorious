import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Flex, Text } from 'rebass';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import { makeSelectCurrentAuthInfo } from './selectors';
import { Enums } from '../LoginForm/constants';
import { showLoginModal, logout } from './actions';

export function CurrentUserInfo({ auth, showLoginModal, logout }) {

  if (auth && auth.user)
    return (
      <Flex>
        <Box w={2/3}>
          <Text>Logged in as {auth.user.id}</Text>
        </Box>
        <Box w={1/3}>
          <Button p={2} color="white" onClick={logout}>
            <FormattedMessage {...messages.logout} />
          </Button>
        </Box>
      </Flex>
    )

  return (
    <Button p={2} color="white" onClick={showLoginModal}>
      <FormattedMessage {...messages.login} />
    </Button>
  )
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectCurrentAuthInfo()
});

const mapDispatchToProps = (dispatch) => ({
  showLoginModal: (mode = Enums.MODAL_LOGIN_FORM_MODE_LOGIN) => dispatch(showLoginModal()),
  logout: () => dispatch(logout())
});

export const ConnectedCurrentUserInfo = connect(mapStateToProps, mapDispatchToProps)(CurrentUserInfo);

export default ConnectedCurrentUserInfo;
