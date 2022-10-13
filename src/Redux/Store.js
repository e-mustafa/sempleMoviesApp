import { createStore, applyMiddleware } from "redux";
import { MoviesReducer } from "./Reducer";
import thunk from "redux-thunk";



// 1- create store
export const store = createStore(MoviesReducer, applyMiddleware(thunk)) // (reducer , )

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()