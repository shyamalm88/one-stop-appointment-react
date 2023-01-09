import axios from "axios";

const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
});
const PIN_CODE_API = axios.create({
  baseURL: "https://api.postalpincode.in/pincode/",
});

export { API, PIN_CODE_API };
