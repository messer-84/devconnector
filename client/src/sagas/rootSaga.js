import {takeEvery, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';

import {workerSagaProfiles} from './profilesSaga';






function* myRootSaga() {
  //При takeEvery сейчас запустили саги параллельно.

  yield takeEvery(types.FETCHED_PROFILES, workerSagaProfiles);
}

export default myRootSaga;

