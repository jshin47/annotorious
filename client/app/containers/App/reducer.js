/*
 *
 * AnnotationTaskDesk reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_CURRENT_USER, SET_LOGIN_MODAL_VISIBILITY } from './constants';

export const initialState = fromJS({
  modals: {
    loginModalVisible: false,
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { token, user } = action;
      return state.set('auth', fromJS({
        token,
        user,
      }));
    case SET_LOGIN_MODAL_VISIBILITY:
      const { show } = action;
      return state.setIn(['modals', 'loginModalVisible'], show);
    default:
      return state;
  }
}

export default appReducer;
