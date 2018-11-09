/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SET_CURRENT_USER = 'anno/App/SET_CURRENT_USER';
export const ENSURE_AUTHENTICATION = 'anno/App/ENSURE_AUTHENTICATION';
export const SET_LOGIN_MODAL_VISIBILITY = 'anno/App/SET_LOGIN_MODAL_VISIBILITY';
