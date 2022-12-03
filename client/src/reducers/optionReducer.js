import { GET_OPTIONS, REFRESH_OPTIONS } from "../actions/types";
const initialState = [];
// eslint-disable-next-line

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_OPTIONS:
      return action.payload;
    case REFRESH_OPTIONS:
      return action.payload;
    default:
      return state;
  }
}
