import { API } from "../api/api";
import {
  LOAD_PROFILE_DATA_INITIATED,
  LOAD_PROFILE_DATA_SUCCESS,
  LOAD_PROFILE_DATA_ERROR,
} from "../type/type";

export const fetchProfileData = (options) => {
  return function (dispatch, getState) {
    dispatch(profileDataLoadAction());
    API.get("recipes/random", { params: options })
      .then((res) => {
        dispatch(profileDataSuccessAction(res.data.recipes));
      })
      .catch((err) => {
        dispatch(profileDataErrorAction(err));
      });
  };
};

export const profileDataLoadAction = () => {
  return {
    type: LOAD_PROFILE_DATA_INITIATED,
  };
};

export const profileDataSuccessAction = (payload) => {
  return {
    type: LOAD_PROFILE_DATA_SUCCESS,
    payload: payload,
  };
};

export const profileDataErrorAction = (payload) => {
  return {
    type: LOAD_PROFILE_DATA_ERROR,
    payload: payload,
  };
};
