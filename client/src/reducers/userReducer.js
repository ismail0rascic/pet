import { GET_USER } from "../actions/types";
const initialState = {};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
