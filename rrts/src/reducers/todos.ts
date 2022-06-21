import { FetchTodosActions, ToDo } from "../actions";
import { Types } from "../actions/types";

export const todosReducer = (state: ToDo[] = [], action: FetchTodosActions) => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.peyload;
    default:
      return state;
  }
};
