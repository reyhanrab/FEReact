import ApiServices, { handleNetworkError, dispatchApiMessage, dispatchAction } from "../../middleware/ApiServices";
import { SUCCESSMSG, USERDATA } from "./Actions";

export const SIGNUP = (obj, formRef) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.post(`/signup`, obj);
    if (apiResponse) {
      formRef.current.reset();
      dispatchApiMessage(dispatch, SUCCESSMSG, apiResponse.message);
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

export const GETUSERDATA = () => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.get(`/api/users`);
    if (apiResponse) {
      dispatchAction(dispatch, USERDATA, apiResponse.results);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};
