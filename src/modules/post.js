import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import * as postsAPI from '../lib/api/posts';

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes(
  'post/READ_POST',
);

const UNLOAD_POST = 'post/UNLOAD_POST';

export const readPost = createAction(READ_POST, (id) => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

const post = handleActions(
  {
    [UNLOAD_POST]: () => initialState,

    [READ_POST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      error: null,
      post: data && data.list ? data.list[0] : null,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState,
);

export default post;
