import { SET_FILTER_CATEGORY, SET_FILTER_OPTION } from "./types";
import store from "../store";

export const setFilterC = (data) => {
  store.dispatch({
    type: SET_FILTER_CATEGORY,
    payload: data,
  });
};

export const setFilterO = (data) => {
  store.dispatch({
    type: SET_FILTER_OPTION,
    payload: data,
  });
};
