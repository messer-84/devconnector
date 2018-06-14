import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from "axios/index";
import * as types from '../actions/types';



export const setProfilesRequest = () => {
  console.log('set profiles request');

  return {
    type: types.GET_PROFILES_REQUEST
  }
};

export const setProfilesFail = (error) => {
  console.log('request profiles fail', error);
  return {
    type: types.GET_PROFILES_FAIL,
    payload: error
  }
};

export const setProfilesSuccess = (data) => {
  console.log('set profiles success');

  return {
    type: types.GET_PROFILES_SUCCESS,
    payload: data
  }
};


export function* fetchAllProfiles() {
  console.log('from saga');

  try {
    yield put(setProfilesRequest());

    const profiles = yield call(() => {
      return axios
        .get('/api/profile/all')
        .then(res => res.data);
    });

    yield put(setProfilesSuccess(profiles));

  }
  catch (e) {
    yield put(setProfilesFail(e))
  }


}



// export const fetchDog = () => {
//   return {type: TYPES.FETCHED_DOG}
// };
//
// export const requestDogSuccess = (data) => {
//   // console.log(data);
//   return {
//     type: TYPES.REQUESTED_DOG_SUCCEEDED,
//     urlDog: data.message
//   }
// }
//
// export const requestDogError = () => {
//   return {
//     type: TYPES.REQUESTED_DOG_FAILED
//   }
// }
//
// export function* fetchDogAsync() {
//   try {
//     console.log("Зашли в fetchDogAsync")
//     const reqDog = yield put(requestDog());
//
//     console.log("Сделали запрос", reqDog)
//     const data = yield call(() => {
//         return fetch(urlDogs)
//           .then(res => res.json())
//       }
//     );
//
//     console.log("Получили ответ"
//   :
//     data
//   )
//     yield put(requestDogSuccess(data));
//
//   } catch (error) {
//     console.log("Получили ошибку")
//     yield put(requestDogError());
//   }
// }
