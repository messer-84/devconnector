import {takeLatest, fork} from 'redux-saga/effects';

import {FETCHED_PROFILES} from "../actions/types";
import {workerSagaProfiles} from './profilesSaga';


function* watchGetAllProfiles() {
  yield takeLatest(FETCHED_PROFILES, workerSagaProfiles);
}


function* myRootSaga() {
  yield fork(watchGetAllProfiles);
}

export default myRootSaga;

