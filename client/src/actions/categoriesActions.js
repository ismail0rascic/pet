import axios from "axios";
import store from "../store";

import { GET_CATEGORIES, REFRESH_CATEGORIES } from "./types";
import { getError } from "./errorActions";

export const getCategories = () => {
  axios
    .get("api/category")
    .then((res) => {
      store.dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
      localStorage.setItem("categories", JSON.stringify(res.data));
    })
    .catch((err) => {
      getError(err);
    });
};

export const refreshCategories = (data) => {
  store.dispatch({
    type: REFRESH_CATEGORIES,
    payload: data,
  });
};
