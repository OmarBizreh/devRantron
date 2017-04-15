import { remote } from 'electron';
import AUTH from '../consts/auth';
import STATE from '../consts/state';

const rantscript = remote.getGlobal('rantscript');

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: AUTH.LOGIN,
      state: STATE.LOADING,
    });
    rantscript
      .login(username, password)
      .then((res) => {
        dispatch({
          type: AUTH.LOGIN,
          state: STATE.SUCCESS,
          payload: res.auth_token,
        });
      })
      .catch((err) => {
        dispatch({ type: AUTH.LOGIN, state: STATE.FAILED, payload: err });
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: AUTH.LOGIN,
      state: STATE.SUCCESS,
    });
  };
}
