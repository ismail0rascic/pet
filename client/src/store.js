import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import errorReducer from "./reducers/errorReducer";
import itemReducer from "./reducers/itemReducer";
import categoryReducer from "./reducers/categoryReducer";
import optionReducer from "./reducers/optionReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({
  authR: authReducer,
  userR: userReducer,
  errorR: errorReducer,
  itemR: itemReducer,
  categoryR: categoryReducer,
  optionR: optionReducer,
  filterR: filterReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
