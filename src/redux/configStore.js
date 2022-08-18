import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducer/CarouselReducer";

const rootReducer = combineReducers({
    //reducer con
    CarouselReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
