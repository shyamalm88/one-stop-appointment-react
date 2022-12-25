import {
  LOAD_PROFILE_DATA_INITIATED,
  LOAD_PROFILE_DATA_SUCCESS,
  LOAD_PROFILE_DATA_ERROR,
} from "../type/type";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const profileDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PROFILE_DATA_INITIATED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_PROFILE_DATA_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: "",
      };

    case LOAD_PROFILE_DATA_ERROR:
      return {
        loading: false,
        data: {},
        error: payload,
      };

    default:
      return state;
  }
};

export default profileDataReducer;
