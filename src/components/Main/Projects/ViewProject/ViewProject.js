import { Box } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { TableHeaders } from "./ViewProject.config";
import DynamicTable from "../../../common/Table/DynamicTable";
import { convertDateToMMDDYYYY, restructureArray } from "../../../common/commonfunctions";
import { useNavigate } from "react-router-dom";
import { PROJECTDETAILSSTRUCTURE } from "../ProjectDetails/ProjectDetails.config";

export default function ViewProject({ rowActionData, handleClick }) {
  const navigate = useNavigate();

  const projectData = useSelector((state) => state.ProjectReducer.projectData);
  const statusData = useSelector((state) => state.StaticDataReducer.statusData);
  const userData = useSelector((state) => state.UsersReducer.userData);

  React.useEffect(() => {
    if (userData.length === 0) {
      navigate("/main");
    }
  }, []);

  const refactorData = () => {
    const arr = projectData.map((project) => {
      const temp = { ...project };
      statusData.forEach((status) => {
        if (status._id === temp.status) {
          temp.status = status.name;
        }
      });
      userData.forEach((user) => {
        if (user._id === temp.owner) {
          temp.owner = user.firstname + " " + user.lastname;
        }
      });
      PROJECTDETAILSSTRUCTURE.forEach((structure) => {
        if ("operation" in structure && structure.operation.includes("convertDate")) {
          temp[structure.accessor] = convertDateToMMDDYYYY(temp[structure.accessor]);
        }
      });
      return temp;
    });
    return arr;
  };

  if (projectData.length > 0) {
    return (
      <DynamicTable
        tableHeaders={TableHeaders}
        rows={restructureArray(refactorData(), TableHeaders, true, rowActionData)}
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
