import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), postSaga()]);
}

export default rootReducer;
