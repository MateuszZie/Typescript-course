import { DeleteTodo, FetchTodosActions } from "./todos";

export enum Types {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosActions | DeleteTodo;
