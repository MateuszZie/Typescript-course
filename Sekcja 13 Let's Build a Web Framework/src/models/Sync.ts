import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

const rootUrl = "http://localhost:3000/users";

export class Sync<T extends HasId> {
  constructor(private rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    if (data.id) {
      return axios.put(`${rootUrl}/${data.id}`, data);
    } else {
      return axios.post(rootUrl, data);
    }
  }
}
