import {combineReducers, createStore} from "redux";
import votingReducer from "./votingReducer";

let reducers = combineReducers({
    voting: votingReducer,
});
const store = createStore(reducers);
export default store;