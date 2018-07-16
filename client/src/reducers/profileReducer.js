import {
  CLEAR_CURRENT_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_PENDING,
  GET_PROFILE_FAILURE,
  GET_PROFILE_HANDLE_SUCCESS,
  GET_PROFILE_HANDLE_PENDING,
  GET_PROFILE_HANDLE_FAILURE,
  GET_PROFILES_SUCCESS,
  GET_PROFILES_PENDING,
  GET_PROFILES_FAILURE
} from "../actions/types";

const initialState = {
  profile: null,
  loading: false
};

export default function (state = initialState, action) {
  console.log('>>>>>>>>>>>>>--------------------------');

  switch (action.type) {
    case GET_PROFILE_PENDING || GET_PROFILE_HANDLE_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE_SUCCESS:
      console.log('action-payload', action);

      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_PROFILE_HANDLE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_PROFILE_FAILURE || GET_PROFILE_HANDLE_FAILURE:
      return {
        ...state,
        payload: {},
        error: action.error,
        loading: false
      };

    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case GET_PROFILES_PENDING:
      return {
        ...state,
        loading: true
      };

    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    case GET_PROFILES_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}