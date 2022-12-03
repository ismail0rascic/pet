import { GET_CATEGORIES, REFRESH_CATEGORIES } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;
    case REFRESH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
