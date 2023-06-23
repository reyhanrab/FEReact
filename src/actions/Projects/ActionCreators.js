import ApiServices, { handleNetworkError, dispatchAction } from "../../middleware/ApiServices";
import { PROJECTSDATA } from "./Actions";

export const GETPROJECTS = () => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.get(`/api/projects`);
    if (apiResponse) {
      console.log('apiResponse',apiResponse)
      dispatchAction(dispatch, PROJECTSDATA, apiResponse.results);
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
    }
  } catch (error) {
    handleNetworkError(error);
  }
};
