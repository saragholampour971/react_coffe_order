import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from './../reducers/reducers';


export const store = createStore(
    reducers, applyMiddleware(thunk)
);

// store.subscribe(() => console.log("this is state " +store.getState()));

