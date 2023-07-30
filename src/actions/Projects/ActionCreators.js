import ApiServices, { handleNetworkError, dispatchAction } from "../../middleware/ApiServices";
import { PROJECTSDATA } from "./Actions";

export const GETPROJECTS = () => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.get(`/api/projects`);
    if (apiResponse) {
      dispatch(PROJECTSDATA(apiResponse.results))
      // dispatchAction(dispatch, PROJECTSDATA, apiResponse.results);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const CREATEPROJECTS = (obj, formRef, handleDialog, showDialog) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.post(`/api/projects`, {data: obj});
    if (apiResponse) {
        formRef.current.reset();
        handleDialog(!showDialog)
        dispatch(GETPROJECTS());
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const EDITPROJECT = (obj, id, formRef, handleDialog, showDialog) => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.patch(`/api/projects/${id}`, {data: obj});
    if (apiResponse) {
        formRef.current.reset();
        handleDialog(!showDialog)
        dispatch(GETPROJECTS());
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

