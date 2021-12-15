import axios from "axios";
const url = "https://new-bookstore-backend.herokuapp.com";

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-access-token": localStorage.getItem("token"),
  },
};

export const userSignup = async (obj) => {
  let response = await axios.post(
    `${url}/bookstore_user/registration`,
    obj,
    config
  );
  console.log("signup", response);
  return response;
};

export const userLogin = async (obj) => {
  let response = await axios.post(`${url}/bookstore_user/login`, obj, config);
  localStorage.setItem("token", response.data.result.accessToken);
  return response;
};

export const getBooks = async () => {
  let result = await axios.get(`${url}/bookstore_user/get/book`, config);
  return result;
};

export const addToCart = async (product_id) => {
  let result = await axios.post(
    `${url}/bookstore_user/add_cart_item/${product_id}`,
    {},
    config
  );
  return result;
};

export const cartQuantityItem =async(cartItem_id,obj) => {
  let result = await axios.put(`${url}/bookstore_user/cart_item_quantity/${cartItem_id}`,obj,config);
  return result;
}
export const getCartItems = async () => {
  let result = await axios.get(`${url}/bookstore_user/get_cart_items`, config);
  return result;
};

