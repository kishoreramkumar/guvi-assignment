import axios from "axios";

const setAuthToken = (token: string) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export function BaseApi() {
  // const { token } = querystring.parse(window.location.search.substring(1));
  return axios.create({
    baseURL: "https://guvi-backend.herokuapp.com/",
  });
}

export default setAuthToken;
