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
        <RenderCreateProjectForm />
      </PopUp>
    </>
  );
}

const RenderCreateProjectForm = (props) => {
  const userData = useSelector((state) => state.GeneralReducer.userData);
  const statusData = useSelector((state) => state.StaticDataReducer.statusData);


  const modifiedFormConfig = handleOptionsData(FormConfig, "owner", userData);
  const modifiedFormConfig2 = handleOptionsData(modifiedFormConfig, "status", statusData);

  return (
    <>
      <form id="createProjectForm" ref={props.formRef} noValidate={true}>
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
