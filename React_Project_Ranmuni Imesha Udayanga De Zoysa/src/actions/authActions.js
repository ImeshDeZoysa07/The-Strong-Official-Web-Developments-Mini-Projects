import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './actionTypes';
import authService from '../services/authService';

// Action creator for successful login
export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

// Action creator for failed login
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

// Action creator for logging out
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Async action creator for logging in
export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await authService.login(credentials);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

// Async action creator for logging out
export const logout = () => {
  return async (dispatch) => {
    try {
      await authService.logout();
      dispatch(logoutSuccess());
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
};
