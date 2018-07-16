import {call, put} from 'redux-saga/effects';
import axios from "axios/index";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_PENDING,
  GET_PROFILE_SUCCESS
} from "../actions/types";


function getProfileData() {
  return axios
    .get('/api/profile')
    .then(res => res.data);
}

export function* workerProfileSaga() {
  console.log('workerProfileSaga run');

  try {
    yield put({
      type: GET_PROFILE_PENDING
    });
    const profile = yield call(getProfileData);
    console.log('profile', profile);

    yield put({
      type: GET_PROFILE_SUCCESS,
      payload: profile
    });
  }
  catch (error) {
    yield put({
      type: GET_PROFILE_FAILURE,
      payload: {}
    })
  }

}



