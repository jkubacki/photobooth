import { combineReducers } from "redux";
import boothReducer from "./booth"

export default combineReducers({
  booth: boothReducer
});
