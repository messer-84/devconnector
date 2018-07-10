import {
  FETCHED_PROFILES,
  GET_PROFILES_FAIL,
  GET_PROFILES_REQUEST,
  GET_PROFILES_SUCCESS
} from "./types";

export const fetchedProfiles = () => {
  return {
    type: FETCHED_PROFILES
  }
};

export const requestProfiles = () => {
  return {
    type: GET_PROFILES_REQUEST
  }
};

export const requestProfilesSuccess = (data) => {
  return {
    type: GET_PROFILES_SUCCESS,
    payload: data
  }
};

export const requestProfilesFail = (error) => {
  return {
    type: GET_PROFILES_FAIL,
    payload: error
  }
};
