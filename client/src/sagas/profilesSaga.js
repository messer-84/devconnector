import {call, put} from 'redux-saga/effects';
import axios from "axios/index";
import {
  GET_PROFILES_FAILURE,
  GET_PROFILES_PENDING,
  GET_PROFILES_SUCCESS
} from "../actions/types";


function getProfilesData() {
  return axios
    .get('/api/profile/all')
    .then(res => res.data);
}

export function* workerProfilesSaga() {
  console.log('workerProfilesSaga run');

  try {
    yield put({
      type: GET_PROFILES_PENDING
    });
    const profiles = yield call(getProfilesData);
    yield put({
      type: GET_PROFILES_SUCCESS,
      payload: profiles
    });
  }
  catch (error) {
    yield put({
      type: GET_PROFILES_FAILURE,
      payload: error
    })
  }

}



