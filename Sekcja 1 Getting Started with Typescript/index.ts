import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const data = response.data as TODO;

  const id = data.id;
  const title = data.title;
  const completed = data.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `  Todo with id: ${id}
      title: ${title}
      finished: ${completed}`
  );
};
