import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    //reducer con
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
