import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-9f71f-default-rtdb.firebaseio.com/",
});

export default instance;
