import { createSelector } from 'reselect';

const selectApp = state => state.get('app');

export const makeSelectLoginModalVisibility = () => createSelector(selectApp, appState => {
  window.appState = appState;
  return appState.getIn(['modals', 'loginModalVisible'])
});
