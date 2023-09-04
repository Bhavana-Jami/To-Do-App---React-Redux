import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import taskReducer from "./todo_app/todoReducer";

const rootReducer =combineReducers({
    cake : cakeReducer,
    task : taskReducer
})

export default rootReducer