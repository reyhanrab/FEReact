import { Box } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETPROJECTS } from "../../../../actions/Projects/ActionCreators";
import { TableHeaders } from "./ViewProject.config";
import DynamicTable from "../../../common/Table/DynamicTable";
import { restructureArray } from "../../../common/commonfunctions";

export default function ViewProject() {
  const dispatch = useDispatch();

  const projectData = useSelector((state) => state.ProjectReducer.projectData);

  React.useEffect(() => {
    dispatch(GETPROJECTS());
  }, []);

  if (projectData) {
    return <DynamicTable tableHeaders={TableHeaders}
      rows={restructureArray(projectData, TableHeaders, true)}
      showSorting={true}
      showFilter={true}
      showMoreButton={true} />;
  } else {
    return <Box sx={{ height: "170px", display: "flex", justifyContent: "center", alignItems: "center" }}>No projects found</Box>;
  }
}
