import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const data = response.data;

  const id = data.ID;
  const title = data.Title;
  const finished = data.finished;

  console.log(
    `Todo with id: ${id}
  title: ${title}
  finished: ${finished}`
  );
});
