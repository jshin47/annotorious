/*
 *
 * AnnotationTaskDesk reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_CURRENT_USER, SET_MODAL_ATTRIBUTES, SET_MODAL_VISIBILITY } from './constants';
import { Enums } from 'containers/LoginForm/constants';

export const initialState = fromJS({
  modals: {
    login: {
      visible: false,
      mode: Enums.MODAL_LOGIN_FORM_MODE_LOGIN,
    }
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
    case SET_MODAL_VISIBILITY: {
      const { visible, modal } = action;
      return state.setIn(['modals', modal, 'visible'], visible);
    }
    case SET_MODAL_ATTRIBUTES: {
      const { modal, attributes } = action;
      return state.setIn(['modals', modal], state.getIn(['modals', modal]).merge(attributes));
    }
    default:
      return state;
  }
}

export default appReducer;
