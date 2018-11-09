import { take, call, put, select, fork, race } from 'redux-saga/effects';
import { SET_CURRENT_USER } from '../App/constants';
import { ENSURE_AUTHENTICATION, SET_LOGIN_MODAL_VISIBILITY } from './constants';
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
    if (!authInfo || !authInfo.token || !authInfo.user) {
      yield put(showLoginModal());

      // race between hiding modal or successful login
      const { authUserChangedAction, modalHiddenAction } = yield race({
        authUserChangedAction: take((action) => action.type === SET_CURRENT_USER && action.token),
        modalHiddenAction: take((action) => action.type === SET_LOGIN_MODAL_VISIBILITY),
      });

      if (authUserChangedAction) {
        yield put(hideLoginModal());
        if (action.postLoginAction) {
          yield put(action.postLoginAction);
        }
      }
    }
  }
}

// Individual exports for testing
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(currentUserChangeWorker);
  yield fork(ensureAuthenticationWorker);
}
