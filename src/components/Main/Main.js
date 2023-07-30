import * as React from "react";
import { useDispatch } from "react-redux";
import { GETPRIORITY, GETSTATUSES } from "../../actions/StaticData/ActionCreators";
import { GETPROJECTS } from "../../actions/Projects/ActionCreators";
import { GETUSERDATA } from "../../actions/Users/ActionCreators";

function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GETPRIORITY());
    dispatch(GETSTATUSES());
    dispatch(GETUSERDATA());
    dispatch(GETPROJECTS());
  }, []);

  return <div></div>;
}

export default Main;
