import { take, call, put, select, fork, race } from 'redux-saga/effects';
import { SET_CURRENT_USER } from '../App/constants';
import { ENSURE_AUTHENTICATION, SET_MODAL_VISIBILITY } from './constants';
import { makeSelectCurrentAuthInfo } from './selectors';
import { hideLoginModal, showLoginModal } from './actions';

function setAuthToken(token = '') {
  localStorage.setItem('auth-token', token)
}

function* currentUserChangeWorker() {
  while (true) {
    console.log('waiting for current user to change');
    const action = yield take(SET_CURRENT_USER);
    yield call(setAuthToken, action.token);
  }
}

function* ensureAuthenticationWorker() {
  while (true) {
    const action = yield take(ENSURE_AUTHENTICATION);
    const authInfo = yield select(makeSelectCurrentAuthInfo());

    let authenticated = authInfo && authInfo.token && authInfo.user;

    if (!authenticated) {
      yield put(showLoginModal());

      // race between hiding modal or successful login
      const { authUserChangedAction, modalHiddenAction } = yield race({
        authUserChangedAction: take(({ type, token }) => type === SET_CURRENT_USER && token),
        modalHiddenAction: take(({ type }) => type === SET_MODAL_VISIBILITY),
      });

      console.log('race over', authUserChangedAction, modalHiddenAction);

      if (authUserChangedAction) {
        authenticated = true;
      }
    }

    if (authenticated && action.authenticatedAction) {
      yield put(action.authenticatedAction);
    }
  }
}

// Individual exports for testing
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(currentUserChangeWorker);
  yield fork(ensureAuthenticationWorker);
}
