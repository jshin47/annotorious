/*
 *
 * AnnotationTaskDesk reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_CURRENT_USER } from './constants';

export const initialState = fromJS({});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { token, user } = action;
      return state.set('auth', {
        token,
        user,
      });
    default:
      return state;
  }
}

export default appReducer;
