import ApiServices, { handleNetworkError, dispatchApiMessage } from "../../middleware/ApiServices";
import { SUCCESSMSG } from "./Actions";

export const SIGNUP = (obj, formRef, navigate) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.post(`/signup`, { data: obj });
    console.log(apiResponse);
    if (apiResponse.status == 200) {
      formRef.current.reset();
      navigate("/login");
      dispatchApiMessage(dispatch, SUCCESSMSG, apiResponse.message);
      alert(apiResponse.message);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const LOGIN = (obj, formRef, navigate) => async () => {
  try {
    const apiResponse = await ApiServices.patch(`/login`, obj);
    if (apiResponse) {
      formRef.current.reset();
      navigate("/main");
      localStorage.setItem("userId", apiResponse.results._id);
      localStorage.setItem("role", apiResponse.results.role);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const LOGOUT = (userId, navigate) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.patch(`/logout`, { userId: userId });
    if (apiResponse) {
      navigate("/login");
      dispatchApiMessage(dispatch, SUCCESSMSG, apiResponse.message);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};
