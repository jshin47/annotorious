import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');

const selectApp = state => state.get('app');

export const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export const makeSelectCurrentAuthInfo = () =>
  createSelector(selectApp, appState => {
    const authState = appState.get('auth');
    console.log(authState);

    return (authState) ? authState.toJS() : null;
  });
