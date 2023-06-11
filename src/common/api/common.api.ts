import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" //Когда работаем локально NODE_ENV === "development" всегда
      ? "http://localhost:7542/2.0/"
      : "https://neko-back.herokuapp.com/2.0/",
  withCredentials: true,
});
