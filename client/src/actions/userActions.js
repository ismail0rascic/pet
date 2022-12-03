import axios from "axios";
import store from "../store";

import { SET_CURRENT_USER, GET_USER } from "./types";

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
export const getUser = (id) => {
  axios.get("api/users/" + id).then((res) => {
    store.dispatch({
      type: GET_USER,
      payload: res.data,
    });
  });
};
