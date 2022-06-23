import { Action, ToDo, Types } from "../actions";

export const todosReducer = (state: ToDo[] = [], action: Action) => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.peyload;
    case Types.deleteTodo:
      return state.filter((todo: ToDo) => todo.id !== action.payload);
    default:
      return state;
  }
};
