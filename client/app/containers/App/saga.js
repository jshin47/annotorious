import { take, call, put, select, fork } from 'redux-saga/effects';
import { SET_CURRENT_USER } from '../App/constants';

function* currentUserChangeHandler(action) {
  yield call(console.log, 'current user change');
  yield call(localStorage.setItem, 'auth-token', action.token);
}

function* currentUserChangeWorker() {
  while (true) {
    console.log('waiting for current user to change');
    const action = yield take(SET_CURRENT_USER);
    yield call(currentUserChangeHandler, action);
  }
}

// Individual exports for testing
export default function* appSaga() {
  // See example in containers/HomePage/saga.js
  yield fork(currentUserChangeWorker);
}
