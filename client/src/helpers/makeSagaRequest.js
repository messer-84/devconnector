import {put, call} from 'redux-saga/effects';

export default function makeSagaRequest(getData) {
  return function* (action) {
    console.log('make-saga action.type', action.type);
    console.log('make-saga action.payload', action.payload);

    yield put({
      type: `${action.type}_PENDING`,
    });
    try {
      const result = yield call(getData, action.payload);
      console.log('result in saga', result);

      yield put({
        type: `${action.type}_SUCCESS`,
        result,
      });
      return {result};
    } catch (error) {

      yield put({
        type: `${action.type}_FAILURE`,
        error,
      });
      return {error};
    }
  };
}