import axios from "axios";
import { Dispatch } from "redux";
import { Types } from "./types";

const url = "https://jsonplaceholder.typicode.com/todos";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo>(url);

    dispatch({
      type: Types.fetchTodos,
      peyload: response.data,
    });
  };
};
