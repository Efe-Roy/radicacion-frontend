import axios from "axios";
// const devEnv = process.env.NODE_ENV !== "production";

// const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

// const API = axios.create({
//   baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
// });

// const API = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });
const API = axios.create({ baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}` });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Token  ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });


export default API