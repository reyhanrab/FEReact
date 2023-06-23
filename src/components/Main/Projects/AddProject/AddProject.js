import * as React from "react";
import {
  FormConfig,
  dialogDataFooter,
  dialogDataHeader,
  dialogStructureFooter,
  dialogStructureHeader,
} from "./AddProject.config";
import PopUp from "../../../common/PopUp/PopUp";
import GenerateForm from "../../../common/GenerateForm/GenerateForm";
import { useDispatch, useSelector } from "react-redux";
import { handleOptionsData } from "../../../common/commonfunctions";
import { CREATEPROJECTS } from "../../../../actions/Projects/ActionCreators";
import { DataObject } from "@mui/icons-material";

function AddProject(props) {
  return (
    <>
      <PopUp
        showDialog={props.showDialog}
        handleDialog={props.handleDialog}
        dialogDataHeader={dialogDataHeader}
        dialogStructureHeader={dialogStructureHeader}
        dialogDataFooter={dialogDataFooter}
        dialogStructureFooter={dialogStructureFooter}
        formName="createProjectForm"
      >
        <RenderCreateProjectForm handleDialog={props.handleDialog} showDialog={props.showDialog} />
      </PopUp>
    </>
  );
}

const RenderCreateProjectForm = (props) => {
  const dispatch = useDispatch();
  const formRef = React.useRef();

  const userData = useSelector((state) => state.GeneralReducer.userData);
  const statusData = useSelector((state) => state.StaticDataReducer.statusData);

  const modifiedFormConfig = handleOptionsData(FormConfig, "owner", userData);
  const modifiedFormConfig2 = handleOptionsData(modifiedFormConfig, "status", statusData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    for (const key in obj) {
      let trimmedValue = obj[key].trim();
      if (trimmedValue.length === 0) {
        delete obj[key];
      }
    }
    dispatch(CREATEPROJECTS(obj, formRef, props.handleDialog, props.showDialog));
  };

  return (
    <>
      <form id="createProjectForm" ref={formRef} noValidate={true} onSubmit={handleSubmit}>
        {modifiedFormConfig2.map((element) => {
          return (
            <div key={element.id}>
              <GenerateForm data={element} />
            </div>
          );
        })}
      </form>
    </>
  );
};

export default AddProject;
