import { Action, ToDo, Types } from "../actions";

export const todosReducer = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.peyload;
    default:
      return state;
  }
};
