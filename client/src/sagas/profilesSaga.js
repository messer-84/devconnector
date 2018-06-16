import {call, put} from 'redux-saga/effects';
import axios from "axios/index";
import {
  requestProfiles,
  requestProfilesSuccess,
  requestProfilesFail
} from '../actions/profileActions';


function getProfilesAsync() {
  return axios
    .get('/api/profile/all')
    .then(res => res.data);
}


export function* workerSagaProfiles() {
  console.log('from saga');

  try {
    yield put(requestProfiles());

    const profiles = yield call(getProfilesAsync);

    yield put(requestProfilesSuccess(profiles));

  }
  catch (e) {
    yield put(requestProfilesFail(e))
  }

}



