import ApiServices, { handleNetworkError, dispatchAction } from "../../middleware/ApiServices";
import { USERDATA } from "./Actions";

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

export const ADDUSER = (obj, formRef, handleDialog, showDialog) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.post(`/api/users`, { data: obj });
    if (apiResponse) {
      dispatch(GETUSERDATA());
      formRef.current.reset();
      handleDialog(!showDialog);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const EDITUSER = (id, obj, formRef, handleDialog, showDialog) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.patch(`/api/users/${id}`, { data: obj });
    if (apiResponse) {
      dispatch(GETUSERDATA());
      formRef.current.reset();
      handleDialog(!showDialog);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const EDITPROFILE = (id, obj, formRef) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.patch(`/api/users/${id}`, { data: obj });
    if (apiResponse) {
      dispatch(GETUSERDATA());
      formRef.current.reset();
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const DELETEUSER = (id) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.delete(`/api/users/${id}`);
    if (apiResponse) {
      dispatch(GETUSERDATA());
    }
  } catch (error) {
    handleNetworkError(error);
  }
};
