import axios from "axios";

export const getJsonAxios = () => {
  const response = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};
