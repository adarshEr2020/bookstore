import axios from "axios";
const url = "https://new-bookstore-backend.herokuapp.com/";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

export const userSignup = async (obj) => {
  let response = await axios.post(
    `${url}/bookstore_user/registration`,
    obj,
    config
  );
  localStorage.setItem("token", response.data.id);
  return response;
};

export const userLogin = async (obj) => {
  let response = await axios.post(`${url}bookstore_user/login`, obj, config);
  localStorage.setItem("token", response.data.success);
  return response;
};

export const getBooks = async () => {
  let result = await axios.get(`${url}bookstore_user/get/book`, config);
  return result;
};
