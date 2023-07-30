import { Box } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETPROJECTS } from "../../../../actions/Projects/ActionCreators";
import { TableHeaders } from "./ViewProject.config";
import DynamicTable from "../../../common/Table/DynamicTable";
import { restructureArray } from "../../../common/commonfunctions";
import { useNavigate } from "react-router-dom";

export default function ViewProject({ rowActionData, handleClick }) {
  const navigate = useNavigate();

  const projectData = useSelector((state) => state.ProjectReducer.projectData);
  const statusData = useSelector((state) => state.StaticDataReducer.statusData);
  const userData = useSelector((state) => state.GeneralReducer.userData);

  React.useEffect(() => {
    if (userData.length == 0) {
      navigate("/main");
    }
  }, []);

  if (projectData.length > 0) {
    return (
      <DynamicTable
        tableHeaders={TableHeaders}
        rows={restructureArray(projectData, TableHeaders, true, rowActionData)}
        showSorting={true}
        showFilter={true}
        showMoreButton={true}
        handleClick={handleClick}
      />
    );
  } else {
    return <Box sx={{ height: "170px", display: "flex", justifyContent: "center", alignItems: "center" }}>No projects found</Box>;
  }
}
