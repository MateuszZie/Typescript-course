import axios from "axios";
import { Dispatch } from "redux";
import { Types } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActions {
  type: Types.fetchTodos;
  peyload: ToDo[];
}

export interface DeleteTodo {
  type: Types.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);

    dispatch<FetchTodosActions>({
      type: Types.fetchTodos,
      peyload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodo => {
  return {
    type: Types.deleteTodo,
    payload: id,
  };
};
