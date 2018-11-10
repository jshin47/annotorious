import { ENSURE_AUTHENTICATION, SET_CURRENT_USER, SET_MODAL_ATTRIBUTES, SET_MODAL_VISIBILITY } from './constants';

export function setCurrentUser({ token, user }) {
  return {
    type: SET_CURRENT_USER,
    token,
    user,
  }
}

export function logout() {
  return setCurrentUser({
    token: null,
    user: null,
  })
}

export function showLoginModal() {
  return setModalVisibility({ modal: 'login', visible: true });
}

export function hideLoginModal() {
  return setModalVisibility({ modal: 'login', visible: false });
}

export function setLoginModalVisibility(visible) {
  if (visible)
    return showLoginModal();
  return hideLoginModal();
}

export function setModalVisibility({modal, visible}) {
  return {
    type: SET_MODAL_VISIBILITY,
    modal,
    visible,
  }
}

export function setModalAttributes({ modal, attributes }) {
  return {
    type: SET_MODAL_ATTRIBUTES,
    modal,
    attributes
  };
}

export function ensureAuthentication({ authenticatedAction }) {
  return {
    type: ENSURE_AUTHENTICATION,
    authenticatedAction,
  };
}
