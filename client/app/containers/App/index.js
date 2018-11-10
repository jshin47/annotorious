/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Box, Button, Flex, Text } from 'rebass';
import { compose } from 'redux';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import HomePage from 'containers/HomePage/Loadable';
import AnnotationTaskDesk from 'containers/AnnotationTaskDesk/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import messages from './messages';
import GlobalStyle from 'global-styles';
import { connect } from 'react-redux';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import ModalLoginForm from 'containers/LoginForm/ModalLoginForm';
import CurrentUserInfo from './CurrentUserInfo';
import { DefaultTheme } from 'theme'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ModalProvider>
        <ModalLoginForm />
        <Flex mx={-2}>
          <Box width={3/4} px={2}>
            <Text p={2} color="grey">
              annotorious
            </Text>
          </Box>
          <Box width={1/4} px={2}>
            <CurrentUserInfo />
          </Box>
        </Flex>
        <Flex mx={-2} px={5}>
          <Box width={1} px={2}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/task" component={AnnotationTaskDesk} />
              <Route component={NotFoundPage} />
            </Switch>
          </Box>
        </Flex>
        <GlobalStyle />
      </ModalProvider>
    </ThemeProvider>
  );
}

const withSaga = injectSaga({ key: 'app', saga });

const mapStateToProps = (state) => ({

});

const withConnect = connect(mapStateToProps);

const ConnectedApp = compose(withSaga, withConnect)(App);

export default ConnectedApp;
