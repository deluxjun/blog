import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authApi from '../lib/api/auth';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT = 'user/LOGOUT';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('/user/CHECK');

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

// saga
const checkSaga = createRequestSaga(CHECK, authApi.check);
function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (error) {}
}

function* logoutSaga() {
  try {
    yield call(authApi.logout);
    localStorage.removeItem('user');
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

const user = handleActions(
  {
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: obj }) => ({
      ...state,
      user: obj && obj.list[0] ? obj.list[0] : null,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState,
);

export default user;
