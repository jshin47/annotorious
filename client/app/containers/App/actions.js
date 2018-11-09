import { SET_CURRENT_USER } from './constants';

export function setCurrentUser({ token, user }) {
  return {
    type: SET_CURRENT_USER,
    token,
    user,
  }
}
