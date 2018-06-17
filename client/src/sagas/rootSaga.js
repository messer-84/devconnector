import {takeEvery, takeLatest, fork} from 'redux-saga/effects';
import * as types from '../actions/types';

import {workerSagaProfiles} from './profilesSaga';


function* watchGetAllProfiles() {
  yield takeLatest(types.FETCHED_PROFILES, workerSagaProfiles);

}


function* myRootSaga() {
  yield fork(watchGetAllProfiles);
}

export default myRootSaga;

