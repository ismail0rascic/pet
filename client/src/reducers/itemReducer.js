import { GET_ITEMS, REFRESH_ITEMS } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload;
    case REFRESH_ITEMS:
      return action.payload;
    default:
      return state;
  }
}
