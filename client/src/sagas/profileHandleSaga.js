import {call, put} from 'redux-saga/effects';
import axios from "axios/index";
import {requestProfileHandle} from '../actions/profileActions';
import {
  GET_PROFILE_HANDLE_FAILURE,
  GET_PROFILE_HANDLE_PENDING,
  GET_PROFILE_HANDLE_SUCCESS
} from "../actions/types";


function getProfileHandleData(handle) {
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => res.data)
}

export function* workerProfileHandleSaga() {
  console.log('workerProfileSaga run');

  try {
    yield put({
      type: GET_PROFILE_HANDLE_PENDING
    });
    const profile = yield call(getProfileHandleData);
    console.log('profile', profile);

    yield put({
      type: GET_PROFILE_HANDLE_SUCCESS,
      payload: profile
    });
  }
  catch (error) {
    yield put({
      type: GET_PROFILE_HANDLE_FAILURE,
      payload: {}
    })
  }

}



