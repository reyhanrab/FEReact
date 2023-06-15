import axios from "axios";

const genericPaths = [
  "/login",
  // "/register",
  // "/users/register/resendotp",
  // "/users/register/confirm",
  // "/users/forgotpassword",
  // "/users/forgotpassword/confirm",
];

const ApiServices = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

ApiServices.interceptors.request.use(
  async (config) => {
    if (!genericPaths.includes(config.url)) {
      config.headers = {
        authtoken: document.cookie
          .split("; ")
          .find((row) => row.startsWith("authtoken="))
          .split("=")[1],
      };
    }
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
  }
);

ApiServices.interceptors.response.use(
  async (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response.status !== 403) {
    //   apiCmt.post("/users/login/refresh", { token: refreshToken });
    // }
    return Promise.reject(error);
  }
);

export const handleNetworkError = (error) => {
  return console.log(error);
};

export const dispatchApiMessage = (dispatch, Action, message) => {
  dispatch(Action(message));
  setTimeout(() => {
    dispatch(Action(""));
  }, 3000);
};

export default ApiServices;
