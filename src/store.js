import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {TodoReducers} from "./reducers/todoReducers";

const reducer = combineReducers({
todos: TodoReducers
})

const intialState = {todos:[{id: "what the hell", todo: "this is really bad", complete: true}]};

const middleware = [thunk];

export const store = createStore(
    reducer,
    intialState,
    applyMiddleware(...middleware)
)