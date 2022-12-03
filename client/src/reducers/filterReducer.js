import { SET_FILTER_CATEGORY, SET_FILTER_OPTION } from "../actions/types";
const initialState = {
  category: false,
  option: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    case SET_FILTER_OPTION:
      return {
        ...state,
        option: action.payload.option,
      };
    default:
      return state;
  }
}
