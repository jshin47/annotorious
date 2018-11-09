import { ENSURE_AUTHENTICATION, SET_CURRENT_USER, SET_LOGIN_MODAL_VISIBILITY } from './constants';

export function setCurrentUser({ token, user }) {
  return {
    type: SET_CURRENT_USER,
    token,
    user,
  }
}

export function showLoginModal() {
  return {
    type: SET_LOGIN_MODAL_VISIBILITY,
    show: true,
  }
}

export function hideLoginModal() {
  return {
    type: SET_LOGIN_MODAL_VISIBILITY,
    show: false,
  }
}

export function setLoginModalVisibility(visible) {
  if (visible)
    return showLoginModal();
  return hideLoginModal();
}

export function ensureAuthentication({ postLoginAction }) {
  return {
    type: ENSURE_AUTHENTICATION,
    postLoginAction,
  };
}
