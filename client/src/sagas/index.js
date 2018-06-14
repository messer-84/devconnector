import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';

import {fetchAllProfiles} from './fetchAllProfiles';






function* myRootSaga() {
  //При takeEvery сейчас запустили саги параллельно.

  yield takeEvery(types.GET_PROFILES_SUCCESS, fetchAllProfiles);
}

export default myRootSaga;



// export function signupAction(username, password) {
//   return (dispatch, getState) => {
//     const { isFetching } = getState().services;
//
//     if (isFetching.signup) {
//       return Promise.resolve();
//     }
//
//     dispatch({
//       type: types.SIGNUP_REQUEST,
//     });
//
//     return callApi(
//       '/signup',
//       undefined,
//       { method: 'POST' },
//       {
//         username,
//         password,
//       },
//     )
//       .then((json) => {
//         if (!json.token) {
//           throw new Error('Token has not been provided!');
//         }
//         // save JWT to localStorage
//         localStorage.setItem('token', json.token);
//         dispatch({
//           type: types.SIGNUP_SUCCESS,
//           payload: json,
//         });
//       })
//       .catch(reason =>
//         dispatch({
//           type: types.SIGNUP_FAILURE,
//           payload: reason,
//         }));
//   };
// }
