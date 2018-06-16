import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_PROFILES_SUCCESS, GET_PROFILES_REQUEST
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function (state = initialState, action) {
  console.log('in action', action.payload);

  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_PROFILES_REQUEST:
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

    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    // case GET_PROFILES:

    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}