import axios from "axios";
import store from "../store";

import { GET_ITEMS, REFRESH_ITEMS } from "./types";
import { getError } from "./errorActions";
import { baseUrl } from "../config";

export const getItems = () => {
  axios
    .get(baseUrl + "api/item")
    .then((res) => {
      store.dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
      localStorage.setItem("items", JSON.stringify(res.data));
    })
    .catch((err) => {
      getError(err);
    });
};
export const addItem = (userData, navigate) => {
  axios
    .post(baseUrl + "api/item", userData)
    .then((res) => {
      getItems();
      navigate("/catalog");
    })
    .catch((err) => {
      getError(err);
    });
};
export const updateItem = (userData, navigate) => {
  axios
    .put(baseUrl + "api/item/" + userData.id, userData)
    .then((res) => {
      getItems();
      navigate("/catalog");
    })
    .catch((err) => {
      getError(err);
    });
};

export const deleteItem = (id, navigate) => {
  axios
    .delete(baseUrl + "api/item/" + id)
    .then((res) => {
      navigate("/catalog");
      getItems();
    })
    .catch((err) => {
      getError(err);
    });
};

export const refreshItems = (data) => {
  store.dispatch({
    type: REFRESH_ITEMS,
    payload: data,
  });
};
