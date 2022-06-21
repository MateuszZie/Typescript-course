import { combineReducers } from "redux";
import { ToDo } from "../actions";
import { todosReducer } from "./todos";

interface StoreState {
  todos: ToDo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
