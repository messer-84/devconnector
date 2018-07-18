import {call, put} from 'redux-saga/effects';
import axios from "axios/index";
import {
  CREATE_PROFILE_PENDING,
  CREATE_PROFILE_SUCCESS,
  GET_ERRORS
} from "../actions/types";


function addProfileData(profileData, history) {
  return axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'));

}

export function* workerCreateProfileSaga(action) {
  const {profileData, history} = action.payload;
  try {
    yield put({
      type: CREATE_PROFILE_PENDING
    });
    yield call(addProfileData, profileData, history);
    yield history.push('/dashboard');
    yield put({
      type: CREATE_PROFILE_SUCCESS
    });
  }
  catch (error) {
    yield put({
      type: GET_ERRORS,
      payload: error.response.data
    })
  }

}



