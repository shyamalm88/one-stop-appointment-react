import axios from "axios";

axios.defaults.params = {
  apiKey: "",
};

const API = axios.create({
  baseURL: "https://api.spoonacular.com/",
});

export { API };
