import {takeLatest, all} from 'redux-saga/effects';

import {GET_PROFILES, GET_PROFILE, GET_PROFILE_HANDLE, CREATE_PROFILE} from "../actions/types";
import {workerProfilesSaga} from './profilesSaga';
import {workerProfileSaga} from './profileSaga';
import {workerProfileHandleSaga} from './profileHandleSaga';
import {workerCreateProfileSaga} from "./createProfileSaga";

function* myRootSaga() {
  yield all([
    takeLatest(GET_PROFILES, workerProfilesSaga),
    takeLatest(GET_PROFILE, workerProfileSaga),
    takeLatest(GET_PROFILE_HANDLE, workerProfileHandleSaga),
    takeLatest(CREATE_PROFILE, workerCreateProfileSaga)
  ]);
}

export default myRootSaga;

