import axios from "axios";
import store from "../store";

import { GET_OPTIONS, REFRESH_OPTIONS } from "./types";
import { getError } from "./errorActions";

export const getOptions = () => {
  axios
    .get("api/options")
    .then((res) => {
      store.dispatch({
        type: GET_OPTIONS,
        payload: res.data,
      });
      localStorage.setItem("options", JSON.stringify(res.data));
    })
    .catch((err) => {
      getError(err);
    });
};

export const refreshOptions = (data) => {
  store.dispatch({
    type: REFRESH_OPTIONS,
    payload: data,
  });
};
