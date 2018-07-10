import {takeLatest, all} from 'redux-saga/effects';

import {FETCHED_PROFILES} from "../actions/types";
import {workerProfilesSaga} from './profilesSaga';

//watch-function
//watch action

function* myRootSaga() {
  yield all([
    takeLatest(FETCHED_PROFILES, workerProfilesSaga)
  ]);
}

export default myRootSaga;

