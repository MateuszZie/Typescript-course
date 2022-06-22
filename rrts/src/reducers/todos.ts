import { FetchTodosActions, ToDo, Types } from "../actions";

export const todosReducer = (state: ToDo[] = [], action: FetchTodosActions) => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.peyload;
    default:
      return state;
  }
};
