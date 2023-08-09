import { Box } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { TableHeaders } from "./ViewUser.config";
import DynamicTable from "../../common/Table/DynamicTable";
import { restructureArray } from "../../common/commonfunctions";
import { useNavigate } from "react-router-dom";

export default function ViewUser({ rowActionData, handleClick, tabValue }) {
  const navigate = useNavigate();

  let userData = useSelector((state) => state.UsersReducer.userData);
  let rolesData = useSelector((state) => state.StaticDataReducer.rolesData);

  React.useEffect(() => {
    if (userData.length === 0) {
      navigate("/main");
    }
  }, []);

  const refactorData = (userData) => {
    const arr = userData.map((user) => {
      const temp = { ...user };
      rolesData.forEach((role) => {
        if (role._id === temp.role) {
          temp.role = role.name;
        }
      });
      if (temp.status === "ACTIVE") {
        temp.status = "Active";
      }
      if (temp.status === "INACTIVE") {
        temp.status = "Inactive";
      }
      return temp;
    });
    return arr;
  };

  const filteredUsers = userData.filter((user) => {
    const temp = { ...user };
    return temp._id !== localStorage.getItem("userId") && temp.status.toLowerCase() === tabValue;
  });

  if (filteredUsers.length > 0) {
    return (
      <DynamicTable
        tableHeaders={TableHeaders}
        rows={restructureArray(refactorData(filteredUsers), TableHeaders, true, rowActionData)}
        showSorting={true}
        showFilter={true}
        showMoreButton={true}
        handleClick={handleClick}
      />
    );
  } else {
    return <Box sx={{ height: "170px", display: "flex", justifyContent: "center", alignItems: "center" }}>No Users found</Box>;
  }
}
