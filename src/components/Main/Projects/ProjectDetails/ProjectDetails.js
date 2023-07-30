import * as React from "react";
import {
  PROJECTDETAILSSTRUCTURE,
  dialogDataHeader,
  dialogStructureHeader,
} from "./ProjectDetails.config";
import PopUp from "../../../common/PopUp/PopUp";
import ViewDetails from "../../../common/ViewDetails/ViewDetails";
import { useSelector } from "react-redux";
import { convertDateToMMDDYYYY } from "../../../common/commonfunctions";

export default function ProjectDetails({ showDialog, handleDialog, tableRowData }) {

  const projectData = useSelector((state) => state.ProjectReducer.projectData);
  const statusData = useSelector((state) => state.StaticDataReducer.statusData);
  const userData = useSelector((state) => state.GeneralReducer.userData);

  const modifyTableRowData = () => {
    const originalData =projectData.find(project => project._id == tableRowData._id);
    userData.forEach(user => {
      if(user._id == originalData.owner) {
        originalData.owner = user.firstname + " " + user.lastname;
      }
    });
    statusData.forEach(status => {
      if(status._id == originalData.status) {
        originalData.status = status.name;
      }
    });
    PROJECTDETAILSSTRUCTURE.forEach(structure => {
      if("operation" in structure && structure.operation.includes("convertDate")) {
        originalData[structure.accessor] = convertDateToMMDDYYYY(originalData[structure.accessor]);
      }
    });
    console.log("original",originalData);
    return originalData;
  }

  return (
    <>
      <PopUp
        showDialog={showDialog}
        handleDialog={handleDialog}
        dialogDataHeader={dialogDataHeader}
        dialogStructureHeader={dialogStructureHeader}
      >
        <ViewDetails data={modifyTableRowData()} gridConfiguration={PROJECTDETAILSSTRUCTURE} />
      </PopUp>
    </>
  );
}
