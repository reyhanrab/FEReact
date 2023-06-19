import ApiServices, { handleNetworkError, dispatchAction } from "../../middleware/ApiServices";
import { PRIORITYDATA, STATUSDATA } from "./Actions";

export const GETPRIORITY = () => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.get(`/api/staticdata/priority`);
    if (apiResponse) {
      dispatchAction(dispatch, PRIORITYDATA, apiResponse.results);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};

export const GETSTATUSES = () => async (dispatch) => {
  try {
    const apiResponse = await ApiServices.get(`/api/staticdata/status`);
    if (apiResponse) {
      dispatchAction(dispatch, STATUSDATA, apiResponse.results);
    }
  } catch (error) {
    handleNetworkError(error);
  }
};
