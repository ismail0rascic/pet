import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";

import { getError, clearError } from "./errorActions";
import { setCurrentUser } from "./userActions";

export const signUp = (userData, navigate) => {
  axios
    .post("auth/signup", userData)
    .then((res) => {
      navigate("/login");
    })
    .catch((err) => getError(err));
};

export const signIn = (userData) => {
  axios
    .post("auth/signin", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", "Bearer " + token);
      const decoded = jwt_decode(token);
      store.dispatch(setCurrentUser(decoded));
      clearError();
    })
    .catch((err) => {
      getError(err);
    });
};

export const signOut = () => {
  axios.get("auth/signout");
  localStorage.clear("jwtToken");
  store.dispatch(setCurrentUser({}));
};
