import {call, put} from 'redux-saga/effects';
import axios from "axios/index";
import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_PENDING,
  GET_PROFILE_SUCCESS
} from "../actions/types";


function getProfileHandleData(handle) {
  return axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => res.data);
}

export function* workerProfileHandleSaga(action) {
  try {
    yield put({
      type: GET_PROFILE_PENDING
    });
    const profile = yield call(getProfileHandleData, action.payload);

    yield put({
      type: GET_PROFILE_SUCCESS,
      payload: profile
    });
  }
  catch (error) {
    yield put({
      type: GET_PROFILE_FAILURE,
      payload: null
    })
  }

}



