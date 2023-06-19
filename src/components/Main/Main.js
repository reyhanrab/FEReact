import * as React from "react";
import { useDispatch } from "react-redux";
import { GETPRIORITY, GETSTATUSES } from "../../actions/StaticData/ActionCreators";
import { GETUSERDATA } from "../../actions/General/ActionCreators";

function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GETPRIORITY());
    dispatch(GETSTATUSES());
    dispatch(GETUSERDATA());
  }, [dispatch]);

  return <h1>Task Tracker</h1>;
}

export default Main;
