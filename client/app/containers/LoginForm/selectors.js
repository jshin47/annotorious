import { createSelector } from 'reselect';

const selectApp = state => state.get('app');

export const makeSelectLoginModalVisibility = () => createSelector(selectApp, appState => appState.getIn(['modals', 'login', 'visible']));
export const makeSelectLoginModalMode = () => createSelector(selectApp, appState => appState.getIn(['modals', 'login', 'mode']));
