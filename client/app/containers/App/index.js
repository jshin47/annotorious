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

import HomePage from 'containers/HomePage/Loadable';
import AnnotationTaskDesk from 'containers/AnnotationTaskDesk/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { connect } from 'react-redux';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { compose } from 'redux';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import ModalLoginForm from 'containers/LoginForm/ModalLoginForm';

const theme = {};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <ModalLoginForm />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/task" component={AnnotationTaskDesk} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ModalProvider>
    </ThemeProvider>
  );
}

const withSaga = injectSaga({ key: 'app', saga });

export default compose(withSaga)(App);
